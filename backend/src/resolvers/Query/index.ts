import { getUser, Context } from '../../utils';

export const Query = {
    async user(parent, args, ctx: Context) {
        const userId = ctx.request.userId;
        return ctx.db.user({ id: userId });
    },
};
