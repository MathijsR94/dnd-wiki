import { Context } from '../../utils';

export const User = {
    campaigns: ({ id }, args, ctx: Context) => {
        return ctx.db.user({ id }).campaigns();
    },
};
