let chai = require('chai');

const { assert } = chai;

const factorial = number => number < 2 ? 1 : number * factorial(number - 1);

const _factorial = number => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
};

describe("Factorial", () => {
    it("Should implement factorial", () => {
        assert.equal(factorial(0), 1);
        assert.equal(factorial(1), 1);
        assert.equal(factorial(2), 2);
        assert.equal(factorial(3), 6);
        assert.equal(factorial(4), 24);
        assert.equal(factorial(5), _factorial(5));
    });
});