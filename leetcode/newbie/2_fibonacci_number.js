// The Fibonacci numbers, commonly denoted F(n) form a sequence,
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
// That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Constraints:

// 0 <= n <= 30

let chai = require('chai');

const { assert } = chai;

const fibonacci = (element) => {
    // if (element < 0) throw new Error("Index cannot be negative");
    if (element === 0) {
        return element;
    }
    return element < 3 ? 1 : fibonacci(element - 1) + fibonacci(element - 2);
}

describe("Fibonacci", () => {
    it("Should return Fibonacci", () => {
        assert.equal(fibonacci(2), 1);
        assert.equal(fibonacci(3), 2);
        assert.equal(fibonacci(4), 3);
        assert.equal(fibonacci(8), 21);
        assert.equal(fibonacci(9), 34);
        assert.equal(fibonacci(10), 55);
    });
});

var fib = function(n) {

    // here n is fibonacci array's index.

    let f = [0, 1];

    if (n < 2) {
        return f[n];
    }
    
    for (i=2; i<=n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
        
    return f[n];
};

describe("Fibonacci", () => {
    it("Should return Fibonacci", () => {
        assert.equal(fib(2), 1);
        assert.equal(fib(3), 2);
        assert.equal(fib(4), 3);
        assert.equal(fib(8), 21);
        assert.equal(fib(9), 34);
        assert.equal(fib(10), 55);
    });
});

let _fib = function (n) {
    // initialize 0th and 1st fibonacci numbers
    let fib0 = 0, fib1 = 1;
  
    for (let i = 1; i <= n; i++) {
      temp = fib1;
      fib1 = fib0 + fib1; // next fibonacci number is sum of current and next
      fib0 = temp; // current fibonacci number is next fibonacci number
    }
  
    return fib0;
};

describe("Fibonacci", () => {
    it("Should return Fibonacci", () => {
        assert.equal(_fib(2), 1);
        assert.equal(_fib(3), 2);
        assert.equal(_fib(4), 3);
        assert.equal(_fib(8), 21);
        assert.equal(_fib(9), 34);
        assert.equal(_fib(10), 55);
    });
});