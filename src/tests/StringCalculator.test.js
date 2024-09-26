const { StringCalculator } = require('../app/common-functions');

describe('String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('returns 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('returns 1 for input "1"', () => {
        expect(calculator.add("1")).toBe(1);
    });

    test('returns 6 for input "1,5"', () => {
        expect(calculator.add("1,5")).toBe(6);
    });

    test('returns 10 for input "1,2,3,4"', () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    });

    test('returns 6 for input "1\\n2,3"', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test('returns 3 for input "//;\\n1;2"', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test('throws an error for negative numbers', () => {
        expect(() => calculator.add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });

    test('throws an error for multiple negative numbers', () => {
        expect(() => calculator.add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
    });

});