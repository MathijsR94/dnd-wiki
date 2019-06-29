export default class CustomError extends Error {
    code: number;
    message: string;

    constructor(code: number) {
        const message = '';
        super(message);

        this.code = code;
        this.message = message;
    }
}
