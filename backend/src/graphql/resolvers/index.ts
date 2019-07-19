import authMutation from './Mutation/auth';
import userQuery from './Query/user';
import characterMutation from './Mutation/character';
import campaignMutation from './Mutation/campaign';

export default {
    Query: {
        ...userQuery,
    },
    Mutation: {
        ...authMutation,
        ...characterMutation,
        ...campaignMutation,
    },
};
