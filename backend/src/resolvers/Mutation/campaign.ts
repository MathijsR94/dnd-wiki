import { Context, getUserId } from '../../utils';

export const campaignMutations = {
    async createCampaign(parent, args, ctx: Context) {
        const dmId = await getUserId(ctx);
        return await ctx.db.createCampaign({
            ...args.data,
            dm: {
                connect: {
                    id: dmId,
                },
            },
        });
    },
};
