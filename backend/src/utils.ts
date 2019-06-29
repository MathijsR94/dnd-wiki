import * as jwt from 'jsonwebtoken';
import { Prisma } from './generated/prisma-client';
import { Request as ExpressRequest } from 'express-serve-static-core';

export type Request = ExpressRequest & { userId?: string | null };

export interface Context {
    db: Prisma;
    request: Request;
    response: any;
}

export class AuthError extends Error {
    constructor() {
        super('Please login to request this information');
    }
}

export async function getUser(ctx: Context) {
    const { token } = ctx.request.cookies;
    console.log({ token });
    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
            userId: string;
        };

        return await ctx.db.user({ id: userId });
    }

    throw new AuthError();
}

export async function getUserId(ctx: Context) {
    const { token } = ctx.request.cookies;
    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
            userId: string;
        };
        return userId;
    }

    throw new AuthError();
}
