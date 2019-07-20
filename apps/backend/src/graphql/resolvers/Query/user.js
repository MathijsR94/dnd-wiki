import { getRepository } from 'typeorm';
import User from '../../../entities/User';
import { helmet } from '../helmet';
export default {
    user: helmet((parent, { id }) => {
        return getRepository(User).findOne(id);
    }),
};
//# sourceMappingURL=user.js.map