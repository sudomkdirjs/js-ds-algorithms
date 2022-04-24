/**
 * Can you write code for this function: sum(a)(b)(c)....( n)(). 
 * This should return the sum of a+b+c....+n. 
 */


let chai = require('chai');

const { assert } = chai;

let sum = function(a) {
    return function(b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}


describe("sum(1)(2)(3)(4)..( n)()", () => {
    it("Should return the sum of a+b+c....+n", () => {
        assert.equal(sum(1)(2)(3)(), 6);
        assert.equal(sum(1)(2)(3)(4)(5)(), 15);
        assert.equal(sum(1)(2)(3)(4)(5)(6)(7)(), 28);
        assert.equal(sum(1)(2)(3)(4)(5)(6)(7)(8)(), 36);
        assert.equal(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(), 45);
        assert.equal(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(), 55);
        assert.equal(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(), 66);
        assert.equal(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(), 78);

        // if last function argument is not undefined means it wil return function.
        let value = sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13);
        assert.equal(typeof value, "function");
    });
});

const es6Sum = (a) => (b) => b ? es6Sum(a + b) : a;

describe("sum(1)(2)(3)(4)..( n)()", () => {
    it("Should return the sum of a+b+c....+n", () => {
        assert.equal(es6Sum(1)(2)(3)(), 6);
        assert.equal(es6Sum(1)(2)(3)(4)(5)(), 15);
        assert.equal(es6Sum(1)(2)(3)(4)(5)(6)(7)(), 28);
        assert.equal(es6Sum(1)(2)(3)(4)(5)(6)(7)(8)(), 36);
        assert.equal(es6Sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(), 45);
        assert.equal(es6Sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(), 55);
        assert.equal(es6Sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(), 66);
        assert.equal(es6Sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(), 78);

        // if last function argument is not undefined means it wil return function.
        let value = es6Sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13);
        assert.equal(typeof value, "function");
    });
});