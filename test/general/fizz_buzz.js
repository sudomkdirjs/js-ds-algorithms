// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// Math Hint: when a number is divisible by both a and b, it’s also divisible by their lowest common multiple.

let chai = require('chai');

const { assert } = chai;

const fizzBuzz = number => {
    let output = [];
    for (let i = 1; i <= number; i++) {
        if (i % 6 === 0) output.push("Fizz Buzz");
        else if (i % 2 === 0) output.push("Fizz");
        else if (i % 3 === 0) output.push("Buzz");
        else output.push(i);
    }
    return output;
};

describe("Fizz Buzz", () => {
    let output;
    beforeEach(() => (output = fizzBuzz(30)));

    it("Should output number", () => {
        assert.equal(output[0], 1);
    });

    it("Should output Fizz", () => {
        assert.equal(output[1], "Fizz");
    });

    it("Should output Buzz", () => {
        assert.equal(output[2], "Buzz");
    });

    it("Should output Fizz Buzz", () => {
        assert.equal(output[5], "Fizz Buzz");
    });
});