// For a given number of steps, print out a “staircase” using hashes and spaces.

let chai = require('chai');

const { assert } = chai;

const steps = number => {
    let stairs = "";

    for (let row = 0; row < number; row++) {
        let stair = "";

        for (let column = 0; column < number; column++)
            stair += column <= row ? "#" : " ";

        stairs += stair + "\n";
    }

    return stairs;  
};

const _steps = (number, row = 0, stair = "", stairs = "") => {
    if (row === number) return stairs;

    if (stair.length === number)
        return _steps(number, row + 1, "", stairs + stair + "\n");

    return _steps(number, row, stair + (stair.length <= row ? "#" : " "), stairs);
};


describe("Staircase", () => {
    it("Should print steps", () => {
        assert.equal(steps(3), "#  \n## \n###\n");
        assert.equal(_steps(3), "#  \n## \n###\n");
    });
});