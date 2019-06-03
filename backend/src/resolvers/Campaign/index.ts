import { Context } from '../../utils';

export default {
    async dm(parent, args, ctx: Context) {
        return await ctx.db.campaign({ id: parent.id }).dm();
    },
    async locations(parent, args, ctx: Context) {
        return await ctx.db.campaign({ id: parent.id }).locations();
    },
    async players(parent, args, ctx: Context) {
        return await ctx.db.campaign({ id: parent.id }).players();
    },
};
