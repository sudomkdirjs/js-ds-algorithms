// Implement a performant recursive function for the fibonacci series.


let chai = require('chai');

const { assert } = chai;

const fibonacci = (element, cache = []) => {
    if (cache[element]) return cache[element];
    else {
        if (element < 3) return 1;
        else
            cache[element] =
                fibonacci(element - 1, cache) + fibonacci(element - 2, cache);
    }
    return cache[element];
};

const _memoize = fn => {
    const cache = {};
    return (...args) => {
        console.log("----->", args, cache)
        if (cache[args]) return cache[args];

        const output = fn.apply(this, args);
        cache[args] = output;
        console.log(cache)
        return output;
    };
};

const _fibonacci = element =>
    element < 2
        ? element
        : _memoized_fibonacci(element - 1) + _memoized_fibonacci(element - 2);


const _memoized_fibonacci = _memoize(_fibonacci);

describe("Memoized Fibonacci", () => {
    it("Should implement memoized fibonacci", () => {
        assert.equal(fibonacci(6), 8);
        assert.equal(fibonacci(10), 55);
        assert.equal(_memoized_fibonacci(10), 55);
    });
});