import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../utils';

export const auth = {
    async register(parent, args, ctx: Context) {
        const password = await bcrypt.hash(args.password, 10);
        const user = await ctx.db.createUser({
            email: args.email,
            password,
            role: args.role,
        });

        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        console.log({ token });
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        });
        return user;
    },
    async login(parent, { email, password }, ctx: Context, info) {
        const user = await ctx.db.user({ email });
        if (!user) {
            throw new Error(`No user found with email ${email}`);
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });
        return user;
    },
    // TODO: remove
    async removeUsers(parent, args, ctx: Context) {
        await ctx.db.deleteManyUsers();
    },
};
