// Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Constraints:
// -231 <= x <= 231 - 1

let chai = require('chai');

const { assert } = chai;

var reverse = function(x) {
    
    if (x === 0) {
        return 0;
    }
    
    let isNegative = x < 0 ? -1 : 1;
    
    x = Math.abs(x);
    
    let result = x.toString().split('').reverse().join('');
    
    result = parseInt(result);
    
     if (result > 2 ** 31) {
        return 0;
    }
    
    return result * isNegative;
};

// Approach
// The problem can be solved by converting the number in to a string and then reversing the string. 

describe("Reverse Integer", () => {
    it("Should return Reversed Integer", () => {
        assert.equal(reverse(123), 321);
        assert.equal(reverse(3210), 123);
        assert.equal(reverse(40000), 4);
        assert.equal(reverse(2147483640), 463847412);
        assert.equal(reverse(2147483648), 0);
        assert.equal(reverse(0), 0);
        assert.equal(reverse(-9123), -3219);
        assert.equal(reverse(-10), -1);
    });
});

var _reverse = function(x) {
    
    if (x === 0) {
        return 0;
    }
    
    let isNegative = x < 0 ? -1 : 1;
    
    x = Math.abs(x);
    
    let result = 0;
    let remainder;
    
    while(x) {
        remainder = x % 10;
        result = result * 10 + remainder;
        x = Math.floor(x / 10);
    }
    
     if (result > 2 ** 31) {
        return 0;
    }
    
    return result * isNegative;
};

// Approach
// We will follow the integer reverse approach for mathematical logical solution
// The number can be reversed by creating a number from last digit 
// i.e remainder and then multiplying the number with 10 before next remainder addition

describe("Reverse Integer", () => {
    it("Should return Reversed Integer", () => {
        assert.equal(_reverse(123), 321);
        assert.equal(_reverse(3210), 123);
        assert.equal(_reverse(40000), 4);
        assert.equal(_reverse(2147483640), 463847412);
        assert.equal(_reverse(2147483648), 0);
        assert.equal(_reverse(0), 0);
        assert.equal(_reverse(-9123), -3219);
        assert.equal(_reverse(-10), -1);
    });
});