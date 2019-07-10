import authMutation from './Mutation/auth';
import userQuery from './Query/user';
import characterMutation from './Mutation/character';

export default {
    Query: {
        ...userQuery,
    },
    Mutation: {
        ...authMutation,
        ...characterMutation,
    },
};
