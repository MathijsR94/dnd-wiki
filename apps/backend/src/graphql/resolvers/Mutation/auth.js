var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from '../../../entities/User';
import { getRepository } from 'typeorm';
import { InvalidCredentialsError, DuplicateUserError } from '../../../errors/Auth';
import { GenericError } from '../../../errors/Generic';
export default {
    register: (parent, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        if (process.env.APP_SECRET) {
            const password = yield bcrypt.hash(args.password, 10);
            const user = new User();
            user.email = args.email;
            user.password = password;
            user.role = args.role;
            try {
                const newUser = yield getRepository(User).save(user);
                const token = jwt.sign({ userId: newUser.id }, process.env.APP_SECRET);
                ctx.response.cookie('token', token, {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24 * 365,
                });
                return newUser;
            }
            catch (err) {
                throw new DuplicateUserError();
            }
        }
        throw new GenericError();
    }),
    login: (parent, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        if (process.env.APP_SECRET) {
            const user = yield getRepository(User).findOne({ where: { email: args.email } });
            if (!user) {
                throw new DuplicateUserError();
            }
            const validPassword = yield bcrypt.compare(args.password, user.password);
            if (!validPassword) {
                throw new InvalidCredentialsError();
            }
            const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
            ctx.response.cookie('token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 365,
            });
            const _a = yield getRepository(User).findOneOrFail(user.id), { password } = _a, rest = __rest(_a, ["password"]);
            return rest;
        }
        throw new GenericError();
    }),
};
//# sourceMappingURL=auth.js.map