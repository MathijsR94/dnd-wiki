import { Context, getUserId } from '../../utils';
import LimitExceededError from '../../errors/LimitExceeded';

export const campaignMutations = {
    async createCampaign(parent, args, ctx: Context) {
        const dmId = await getUserId(ctx);
        const campaigns = await ctx.db.user({ id: dmId }).campaigns();

        if (campaigns && campaigns.length < 2) {
            return await ctx.db.createCampaign({
                ...args.data,
                dm: {
                    connect: {
                        id: dmId,
                    },
                },
            });
        }

        throw new LimitExceededError(2);
    },
};
