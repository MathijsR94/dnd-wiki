import { Context } from '../../utils';

export default {
    async campaigns(parent, args, ctx: Context) {
        return await ctx.db.user({ id: parent.id }).campaigns();
    },
    async characters(parent, args, ctx: Context) {
        return await ctx.db.user({ id: parent.id }).characters();
    },
    async password() {
        return '';
    },
};
