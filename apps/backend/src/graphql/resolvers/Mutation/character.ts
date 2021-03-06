import Character from '../../../entities/Character';
import { getRepository } from 'typeorm';
import User from '../../../entities/User';
import { Context } from '../../../utilities/utils';
import Campaign from '../../../entities/Campaign';

type CharacterInput = {
    name: Character['name'];
    userId: User['id'];
    metadata?: Character['metadata'];
    campaignId?: Campaign['id'];
};

export default {
    createCharacter: async (parent: any, args: { data: CharacterInput }, ctx: Context) => {
        const { userId, name, metadata, campaignId } = args.data;
        if (args.data.userId === ctx.request.userId) {
            const user = await getRepository(User).findOneOrFail(userId);
            const character = new Character();
            character.name = name;
            character.user = user;

            if (campaignId) {
                const linkedCampaign = await getRepository(Campaign).findOneOrFail(campaignId);
                character.campaign = linkedCampaign;

                if (user.campaigns && linkedCampaign) {
                    const campaigns = user.campaigns || [];
                    user.campaigns = [...campaigns, linkedCampaign];
                    await getRepository(User).save(user);
                }
            }

            return await getRepository(Character).save(character);
        }

        throw new Error();
    },
};
