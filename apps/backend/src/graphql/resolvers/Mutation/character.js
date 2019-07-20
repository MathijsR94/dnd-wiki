var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Character from '../../../entities/Character';
import { getRepository } from 'typeorm';
import User from '../../../entities/User';
import Campaign from '../../../entities/Campaign';
export default {
    createCharacter: (parent, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const { userId, name, metadata, campaignId } = args.data;
        if (args.data.userId === ctx.request.userId) {
            const user = yield getRepository(User).findOneOrFail(userId);
            const character = new Character();
            character.name = name;
            character.user = user;
            if (campaignId) {
                const linkedCampaign = yield getRepository(Campaign).findOneOrFail(campaignId);
                character.campaign = linkedCampaign;
                if (user.campaigns && linkedCampaign) {
                    const campaigns = user.campaigns || [];
                    user.campaigns = [...campaigns, linkedCampaign];
                    yield getRepository(User).save(user);
                }
            }
            return yield getRepository(Character).save(character);
        }
        throw new Error();
    }),
};
//# sourceMappingURL=character.js.map