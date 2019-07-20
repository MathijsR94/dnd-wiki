var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getRepository } from 'typeorm';
import User from '../../../entities/User';
import Campaign from '../../../entities/Campaign';
export default {
    createCampaign: (parent, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const { name } = args.data;
        console.log(name, ctx.request.userId);
        if (name && ctx.request.userId) {
            const campaign = new Campaign();
            const user = yield getRepository(User).findOneOrFail(ctx.request.userId);
            campaign.name = name;
            campaign.dm = user;
            return yield getRepository(Campaign).save(campaign);
        }
        throw new Error();
    }),
};
//# sourceMappingURL=campaign.js.map