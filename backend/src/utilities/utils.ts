import * as jwt from 'jsonwebtoken';
import { Request as ExpressRequest } from 'express-serve-static-core';

export type Request = ExpressRequest & { userId?: string | null };

export interface Context {
    request: Request;
    response: any;
}

export class AuthError extends Error {
    constructor() {
        super('Please login to request this information');
    }
}

export function getUserId(ctx: Context) {
    const { token } = ctx.request.cookies;

    if (token && process.env.APP_SECRET) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
            userId: string;
        };
        return userId;
    }

    throw new AuthError();
}
