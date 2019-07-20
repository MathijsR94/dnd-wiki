"use strict";
const sum = (...a) => a.reduce((acc, val) => acc + val, 0);
describe('utilities', () => {
    test('sum', () => {
        expect(sum(1, 2)).toEqual(3);
    });
});
//# sourceMappingURL=utils.test.js.map