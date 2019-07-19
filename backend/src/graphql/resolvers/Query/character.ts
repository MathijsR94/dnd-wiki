import { getRepository } from 'typeorm';
import Character from '../../../entities/Character';

export default {
    character: (parent: any, { id }: { id: string }) => {
        if (id) {
            return getRepository(Character).findOne(id);
        }
        return null;
    },
};
