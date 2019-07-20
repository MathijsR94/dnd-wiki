import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';
import * as jwt from 'jsonwebtoken';
import * as cookieParser from 'cookie-parser';
import { createConnection } from 'typeorm';
import { loadSchema } from 'graphql-toolkit';
import { GraphQLDateTime } from 'graphql-iso-date';
import 'reflect-metadata';
import { formatError } from 'apollo-errors';
import { sentry } from 'graphql-middleware-sentry';
import { FatalErrorMessage } from './errors/Fatal';
const options = {
    formatError,
    port: 4000,
};
const sentryMiddleware = sentry({
    config: {
        dsn: 'https://f96e6f301c904b05a9f4a79911a3bd33@sentry.io/1504590',
        environment: 'development',
    },
    withScope: (scope, error, context) => {
        scope.setExtra('body', context.request.body);
        scope.setExtra('origin', context.request.headers.origin);
        scope.setExtra('user-agent', context.request.headers['user-agent']);
    },
    forwardErrors: true,
    reportError: (res) => {
        return Error instanceof FatalErrorMessage;
    },
});
loadSchema('src/graphql/types/**/*.graphql').then(data => {
    const typeDefs = data;
    const server = new GraphQLServer({
        typeDefs: Object.assign({}, typeDefs, { DateTime: GraphQLDateTime }),
        resolvers,
        middlewares: [sentryMiddleware],
        context: request => (Object.assign({}, request)),
    });
    server.express.use(cookieParser());
    server.express.use((req, res, next) => {
        const { token } = req.cookies;
        if (token && process.env.APP_SECRET) {
            const { userId } = jwt.verify(token, process.env.APP_SECRET);
            req.userId = userId;
        }
        next();
    });
    createConnection()
        .then(() => {
        server.start(options, () => console.log(`Server is running on http://localhost:${options.port}`));
    })
        .catch(err => {
        console.log(err);
    });
});
//# sourceMappingURL=app.js.map