export default class LimitExceededError extends Error {
    constructor(limit: number) {
        super(`The limit(${limit}) has been exceeded`);
    }
}
