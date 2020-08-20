let chai = require('chai');

const { assert } = chai;

const reverse = integer =>
    parseInt(
        integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer);


describe("Integer Reversal", () => {
    it("Should reverse integer", () => {
        assert.equal(reverse(1234), 4321);
        assert.equal(reverse(-1200), -21);
    });
});