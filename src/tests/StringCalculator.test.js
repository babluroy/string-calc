const { StringCalculator } = require('../app/common-functions');

describe('String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('returns 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });
    
});