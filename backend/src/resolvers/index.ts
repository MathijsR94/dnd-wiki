import { Query } from './Query';
import { auth } from './Mutation/auth';
import { campaignMutations } from './Mutation/campaign';
import { campaignQueries } from './Query/campaign';
import Campaign from './Campaign';
import User from './User';

export default {
    Query: {
        ...campaignQueries,
        ...Query,
    },
    Mutation: {
        ...auth,
        ...campaignMutations,
    },
    Campaign,
    User,
};
