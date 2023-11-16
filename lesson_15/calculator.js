/**
 *
 *A class containing method for summing and multiplying parameters.
 * @class Calculator
 */
 class Calculator {
    constructor() {
    };
    /**
     *
     *
     * @param {Array<Number>} theArgs array of numbers for summing
     * @return {Number} sum of numbers
     * @memberof Calculator
     */
    sum(...theArgs) {                               //сори, но я все же заменю название метода на sum, потому что на add мне смотреть как-то не нравится :)
        let result = 0;
        for (let i = 0; i < theArgs.length; i++) {
          result += theArgs[i];
        }
  
        return result;
    };
    /**
     *
     *
     * @param {Array<Number>} theArgs array of numbers for multiplication
     * @return {Number}
     * @memberof Calculator
     */
    multiply(...theArgs) {
        let result = 1;
        for (let i = 0; i < theArgs.length; i++) {
          result = result * theArgs[i];
        }
        return result;
    };
    
    subtraction(reduced, subtrahend) {
        return reduced - subtrahend;
    }

    divide(dividend, divider) {
        return dividend / divider;
    }

    exponentiation(number) {
        return number * number;
    }
  };
  
  module.exports = Calculator;