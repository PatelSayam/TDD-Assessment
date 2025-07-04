const { add } = require('../src/stringCalculator');

describe("String Calculator Addition", () => {

    test('should return 0 on empty string', () => {
        expect(add("")).toBe(0);
    })

});
