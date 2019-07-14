import { FatalErrorMessage } from '../../errors/Fatal';

const helmet = (resolver: any) => async (...args: any) => {
    try {
        return await resolver(...args);
    } catch (err) {
        if (err.path) {
            throw new FatalErrorMessage(err);
        } else {
            throw new FatalErrorMessage();
        }
    }
};

export { helmet };
