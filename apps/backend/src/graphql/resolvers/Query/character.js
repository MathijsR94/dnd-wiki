import { getRepository } from 'typeorm';
import Character from '../../../entities/Character';
export default {
    character: (parent, { id }) => {
        if (id) {
            return getRepository(Character).findOne(id);
        }
        return null;
    },
};
//# sourceMappingURL=character.js.map