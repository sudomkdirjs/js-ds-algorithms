/**
 * Missing Number
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 * 
 * Constraints:
n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
 */

let chai = require('chai');

const { expect } = chai;

var missingNumber = function(nums) {
    nums.sort((a, b) => a-b);
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (result < nums[i]) {
            return result;
        }
        result += 1;
    }
    return result;
};

describe("Missing Number", () => {
    it("Should return a Missing Number", () => {
        expect(missingNumber([3,0,1])).to.equal(2);
        expect(missingNumber([0,1])).to.equal(2);
        expect(missingNumber([9,6,4,2,3,5,7,0,1])).to.equal(8);
    })
})

var _missingNumber = function(nums) {
    return nums.reduce((sum, v, i) => sum += (i - v), nums.length);
};

describe("Missing Number", () => {
    it("Should return a Missing Number", () => {
        expect(_missingNumber([3,0,1])).to.equal(2);
        expect(_missingNumber([0,1])).to.equal(2);
        expect(_missingNumber([9,6,4,2,3,5,7,0,1])).to.equal(8);
    })
})