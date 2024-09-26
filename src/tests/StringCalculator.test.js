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

});