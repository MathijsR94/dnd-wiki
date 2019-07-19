import { FatalErrorMessage } from '../../errors/Fatal';

export const helmet = (resolver: any) => async (...args: any) => {
    try {
        return await resolver(...args);
    } catch (err) {
        if (err.path) {
            throw new FatalErrorMessage(err);
        } else {
            throw err;
        }
    }
};
