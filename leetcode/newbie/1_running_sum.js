// Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Constraints:
// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6


let chai = require('chai');

const { assert, expect } = chai;

var runningSum = function(nums) {
    
    for (i=1; i<nums.length; i++) {
        nums[i] += nums[i-1];
    }
    
    return nums;
};

describe("Running Sum of 1d Array", () => {
    it("Should calculate running sum of array", () => {
        expect(runningSum([1,2,3,4])).to.eql([1,3,6,10]);
        expect(runningSum([1,1,1,1,1])).to.eql([1,2,3,4,5]);
        expect(runningSum([3,1,2,10,1])).to.eql([3,4,6,16,17]);
    })
})
