import BaseError from './BaseError';

export class InvalidCredentialsError extends BaseError {
    constructor() {
        super('InvalidCredentialsError', {
            message: 'The provided credentials are invalid.',
        });
    }
}

export class DuplicateUserError extends BaseError {
    constructor() {
        super('DuplicateUserError', {
            message: 'A user with these credentials already exists.',
        });
    }
}
