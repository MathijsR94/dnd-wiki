import authMutation from './Mutation/auth';
import userQuery from './Query/user';
import characterMutation from './Mutation/character';
import campaignMutation from './Mutation/campaign';
export default {
    Query: Object.assign({}, userQuery),
    Mutation: Object.assign({}, authMutation, characterMutation, campaignMutation),
};
//# sourceMappingURL=index.js.map