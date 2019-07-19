import { getRepository } from 'typeorm';
import User from '../../../entities/User';
import { Context } from '../../../utilities/utils';
import Campaign from '../../../entities/Campaign';

type CampaignInput = {
    name: Campaign['name'];
};

export default {
    createCampaign: async (parent: any, args: { data: CampaignInput }, ctx: Context) => {
        const { name } = args.data;
        console.log(name, ctx.request.userId);
        if (name && ctx.request.userId) {
            const campaign = new Campaign();
            const user = await getRepository(User).findOneOrFail(ctx.request.userId);

            campaign.name = name;
            campaign.dm = user;

            return await getRepository(Campaign).save(campaign);
        }

        throw new Error();
    },
};
