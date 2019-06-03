import { rule, shield, and, or, not } from 'graphql-shield';
import { getUser } from '../utils';

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
    const user = await getUser(ctx);
    return user !== null;
});

const isAdmin = rule()(async (parent, args, ctx, info) => {
    const user = await getUser(ctx);
    return user.role === 'ADMIN';
});

const bool = rule()(async () => {
    return true;
});

export const permissions = shield({
    Query: {
        user: isAuthenticated,
        campaign: isAuthenticated,
    },
    Mutation: {
        register: bool,
        login: bool,
        removeUsers: isAdmin,
        createCampaign: isAuthenticated,
    },
});
