import BaseError from './BaseError';
export class GenericError extends BaseError {
    constructor() {
        super('GenericError', {
            message: 'Something went wrong. Please try again in a few minutes.',
        });
    }
}
//# sourceMappingURL=Generic.js.map