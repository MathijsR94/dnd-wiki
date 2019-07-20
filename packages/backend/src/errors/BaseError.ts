import { ApolloError } from 'apollo-errors';

export type BaseErrorConfig = {
    data?: { [key: string]: any };
    internalData?: { [key: string]: any };
    message: string;
};

const options = {
    showPath: false,
    showLocations: false,
};

export default class BaseError extends ApolloError {
    constructor(name: string, config: BaseErrorConfig) {
        const conf = { ...config, ...options };
        super(name, conf, conf);
    }
}
