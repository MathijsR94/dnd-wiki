import { GraphQLServer, Options } from 'graphql-yoga';
import resolvers from './graphql/resolvers';
import { Request } from './utilities/utils';
import * as jwt from 'jsonwebtoken';
import * as cookieParser from 'cookie-parser';
import { createConnection } from 'typeorm';
import { NextFunction } from 'express-serve-static-core';
import { loadSchema } from 'graphql-toolkit';
import { GraphQLDateTime } from 'graphql-iso-date';
import 'reflect-metadata';
import { formatError } from 'apollo-errors';

const options: Options = {
    formatError,
    port: 4000,
};

loadSchema('src/graphql/types/**/*.graphql').then(data => {
    const typeDefs = data;

    const server = new GraphQLServer({
        // @ts-ignore
        typeDefs: { ...typeDefs, DateTime: GraphQLDateTime },
        // @ts-ignore
        resolvers,
        context: request => ({
            ...request,
        }),
    });

    server.express.use(cookieParser());

    server.express.use((req: Request, res: Response, next: NextFunction) => {
        const { token } = req.cookies;

        if (token && process.env.APP_SECRET) {
            const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
                userId: string;
            };
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
