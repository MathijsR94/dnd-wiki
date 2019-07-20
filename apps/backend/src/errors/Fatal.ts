import BaseError from './BaseError';

export class FatalErrorMessage extends BaseError {
    constructor(err?: Error) {
        super('FatalErrorMessage', {
            message: 'Something went wrong on our side. Please try again in a few minutes.',
            internalData: {
                error: err,
            },
        });
    }
}
