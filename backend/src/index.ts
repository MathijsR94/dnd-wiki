import { GraphQLServer } from 'graphql-yoga';
import { prisma as db } from './generated/prisma-client';
import resolvers from './resolvers';
import { Request } from './utils';
import * as jwt from 'jsonwebtoken';
import * as cookieParser from 'cookie-parser';
import { permissions } from './middleware/shield';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    middlewares: [permissions],
    context: request => ({
        ...request,
        db,
    }),
});

server.express.use(cookieParser());

server.express.use((req: Request, res, next) => {
    const { token } = req.cookies;
    console.log({ req });
    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
            userId: string;
        };
        req.userId = userId;
    }

    next();
});

server.start(
    {
        cors: {
            credentials: true,
            origin: ['http://localhost:3000'], // your frontend url.
        },
    },
    () => console.log(`Server is running on http://localhost:4000`),
);
