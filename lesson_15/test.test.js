const Calculator = require('./calculator')
const calculator = new Calculator;


describe ('Test for types', () => {
    test('testing type of sum function result', () => {
        expect(typeof calculator.sum()).toBe('number')
    });
});

describe('Tests for sum feature of calculator', () => {
    test('Testing sum of positive numbers', () => {
        expect(calculator.sum(1337, 1, 2)).toBe(1340);
    });
    test('Testing sum of negative numbers', () => {
        expect(calculator.sum(-1337, -1, -2)).toBe(-1340); 
      });
      test('Testing sum of empty method', () => {
        expect(calculator.sum()).toBe(0); 
      });
});

describe('Tests for multiply feature of calculator', () => {
    test('Testing multiply of positive numbers', () => {
        expect(calculator.multiply(13, 11)).toBe(143);
    });
    test('Testing multiply of negative numbers', () => {
        expect(calculator.multiply(-13, -11)).toBe(143);
    });
    test('Testing multiply of positive and negative numbers', () => {
        expect(calculator.multiply(-13, 11)).toBe(-143);
    });
});

describe('Tests for divide funsction', () => {
    test('Testing division of positive numbers', () => {
        expect(calculator.divide(1337, 1337)).toBe(1);
    });
    test('Testing division of negative numbers', () => {
        expect(calculator.divide(-1337, -1337)).toBe(1);
    });
    test('Testing division of positive and negative numbers', () => {
        expect(calculator.divide(-1337, 1337)).toBe(-1);
    });
});

describe('Tests for substract funsction', () => {
    test('Testing substruct of positive numbers', () => {
        expect(calculator.subtraction(1337, 1323)).toBe(14);
    });
    test('Testing substruct of positive numbers and with negative result', () => {
        expect(calculator.subtraction(1323, 1337)).toBe(-14);
    });
    test('Testing substruct of negative numbers', () => {
        expect(calculator.subtraction(-1337, -1323)).toBe(-14);
    });
    test('Testing substruct of negative numbers and woth positive result', () => {
        expect(calculator.subtraction(-1323, -1337)).toBe(14);
    });
});

describe('Tests for exponentiation funsction', () => {
    test('Testing exponentiation with positive numbers', () => {
        expect(calculator.exponentiation(13)).toBe(169);
    });
    test('Testing exponentiation with negative numbers', () => {
        expect(calculator.exponentiation(-13)).toBe(169);
    });
});


