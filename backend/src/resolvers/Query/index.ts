import { getRepository } from 'typeorm';
import User from '../../entities/User';

export const Query = {
    user: (parent: any, { id }: { id: string }) => {
        return getRepository(User).findOne(id);
    },
};
