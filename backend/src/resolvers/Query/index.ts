import { getUserId, Context } from '../../utils';

export const Query = {
    user(parent, args, ctx: Context) {
        const id = getUserId(ctx);
        return ctx.db.user({ id });
    },
    users(parent, args, ctx: Context) {
        return ctx.db.users();
    },
};
