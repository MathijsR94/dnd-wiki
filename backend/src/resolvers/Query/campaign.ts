import { Context, getUserId } from '../../utils';

export const campaignQueries = {
    async campaign(parent, args, ctx: Context, info) {
        return await ctx.db.campaign({ id: args.id });
    },
};
