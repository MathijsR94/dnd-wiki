import * as jwt from 'jsonwebtoken';
export class AuthError extends Error {
    constructor() {
        super('Please login to request this information');
    }
}
export function getUserId(ctx) {
    const { token } = ctx.request.cookies;
    if (token && process.env.APP_SECRET) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        return userId;
    }
    throw new AuthError();
}
//# sourceMappingURL=utils.js.map