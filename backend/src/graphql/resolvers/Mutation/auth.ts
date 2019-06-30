import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../../utils';
import User from '../../../entities/User';
import { getRepository } from 'typeorm';
import USER_ROLE from '../../../enums/User/UserRoleEnum';

type AuthArgs = { email: string; password: string };
type AuthArgsWithRole = AuthArgs & { role: USER_ROLE };

export default {
    register: async (parent: any, args: AuthArgsWithRole, ctx: Context): Promise<User> => {
        if (process.env.APP_SECRET) {
            const password = await bcrypt.hash(args.password, 10);
            // @ts-ignore
            const user = new User({
                email: args.email,
                password,
                role: args.role,
            });

            console.log(user);

            const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
            ctx.response.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
            });

            return await getRepository(User).save(user);
        }

        return Promise.reject('Something went wrong');
    },
    login: async (parent: any, args: AuthArgs, ctx: Context) => {
        if (process.env.APP_SECRET) {
            const user = await getRepository(User).findOne({ where: { email: args.email } });
            if (!user) {
                throw new Error(`No user found with email ${args.email}`);
            }
            const validPassword = await bcrypt.compare(args.password, user.password);
            if (!validPassword) {
                throw new Error('Invalid password');
            }

            const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
            ctx.response.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 365,
            });

            const { password, ...rest } = await getRepository(User).findOneOrFail(user.id);
            return rest;
        }

        return Promise.reject('Something went wrong');
    },
};
