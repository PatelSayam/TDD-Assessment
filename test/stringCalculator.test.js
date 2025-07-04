const { add } = require('../src/stringCalculator');

describe("String Calculator Addition", () => {

    test('should return 0 on empty string', () => {
        expect(add("")).toBe(0);
    })

    test('should return number itself for single input', () => {
        expect(add("1")).toBe(1);
    })

    test('should return sum for two comma seperated numbers', () => {
        expect(add("1,2")).toBe(3);
        expect(add("3,4")).toBe(7);
    })

});
