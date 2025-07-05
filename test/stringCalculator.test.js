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

    test('should throw error for negative numbers', () => {
        expect(() => add("-2,-17")).toThrow("negative numbers are not allowed -2,-17")
        expect(() => add("1,-4,-7, 8")).toThrow("negative numbers are not allowed -4,-7")
    })

    test('Number bigger than 1000 should be ignored', () => {
        expect(add("1000, 2")).toBe(1002);
        expect(add("2999, 40, 17")).toBe(57);
        expect(add("4466, 3388, 9999")).toBe(0);        
    })

    test('should handle delimiter having more than one character',() => {
        expect(add("//[***]\n1***2***3")).toBe(6);
        expect(add("//[!!]\n4!!5!!6")).toBe(15);
        expect(add("//[##]\n2##1001##3")).toBe(5);
        expect(() => add("//[!!]\n1!!-2!!-3")).toThrow("negative numbers are not allowed -2,-3");
        expect(add("//[@@]\n")).toBe(0);
    })

    test('Should handle multiple delimiter having one length', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
        expect(add("//[#][%][*]\n3#5%3")).toBe(11);
    })

    test('Should handle Multiple delimiter having more than one length', () => {
        expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
        expect(add("//[**][##]\n1##2**3##1")).toBe(7);
    })

    
});
