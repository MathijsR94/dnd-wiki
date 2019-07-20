import { getRepository } from 'typeorm';
import User from '../../../entities/User';
import { helmet } from '../helmet';

export default {
    user: helmet((parent: any, { id }: { id: string }) => {
        return getRepository(User).findOne(id);
    }),
};
