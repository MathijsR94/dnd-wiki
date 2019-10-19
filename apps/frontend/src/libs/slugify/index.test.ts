import slugify from './index';

describe('Slugify function', () => {
    it('should correctly create a valid slug', () => {
        const text = 'MY Awesome title!-- (^.^)';
        expect(slugify(text)).toEqual('my-awesome-title');
    });

    it('should correctly handle non string input', () => {
        // @ts-ignore
        expect(slugify({})).toEqual('');
        // @ts-ignore
        expect(slugify([])).toEqual('');
        // @ts-ignore
        expect(slugify(null)).toEqual('');
        // @ts-ignore
        expect(slugify(undefined)).toEqual('');
    });
});
