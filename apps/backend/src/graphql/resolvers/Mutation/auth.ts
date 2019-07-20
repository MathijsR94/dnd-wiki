import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../../utilities/utils';
import User from '../../../entities/User';
import { getRepository } from 'typeorm';
import USER_ROLE from '../../../enums/User/UserRoleEnum';
import { InvalidCredentialsError, DuplicateUserError } from '../../../errors/Auth';
import { GenericError } from '../../../errors/Generic';

type AuthArgs = { email: User['email']; password: User['password'] };
type AuthArgsWithRole = AuthArgs & { role: User['role'] };

export default {
    register: async (parent: any, args: AuthArgsWithRole, ctx: Context): Promise<User> => {
        if (process.env.APP_SECRET) {
            const password = await bcrypt.hash(args.password, 10);
            const user = new User();
            user.email = args.email;
            user.password = password;
            user.role = args.role;

            try {
                const newUser = await getRepository(User).save(user);
                const token = jwt.sign({ userId: newUser.id }, process.env.APP_SECRET);
                ctx.response.cookie('token', token, {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
                });
                return newUser;
            } catch (err) {
                throw new DuplicateUserError();
            }
        }
        throw new GenericError();
    },
    login: async (parent: any, args: AuthArgs, ctx: Context) => {
        if (process.env.APP_SECRET) {
            const user = await getRepository(User).findOne({ where: { email: args.email } });
            if (!user) {
                throw new DuplicateUserError();
            }

            const validPassword = await bcrypt.compare(args.password, user.password);
            if (!validPassword) {
                throw new InvalidCredentialsError();
            }

            const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
            ctx.response.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 365,
            });

            const { password, ...rest } = await getRepository(User).findOneOrFail(user.id);
            return rest;
        }

        throw new GenericError();
    },
};
