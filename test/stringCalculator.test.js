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

    test('should return sum for unknown amount of numbers', () => {
        expect(add("1,2,3,4")).toBe(10);
        expect(add("5,6,7,8,9")).toBe(35);
    })

    test('should handle new line as delimeter', () => {
        expect(add("1\n2,3")).toBe(6);
        expect(add("1\n2\n3")).toBe(6);
    })

    test('should handle custome delimeters', () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//;\n3;4\n5;6")).toBe(18);  
    })
});
