import { ApolloError } from 'apollo-errors';
const options = {
    showPath: false,
    showLocations: false,
};
export default class BaseError extends ApolloError {
    constructor(name, config) {
        const conf = Object.assign({}, config, options);
        super(name, conf, conf);
    }
}
//# sourceMappingURL=BaseError.js.map