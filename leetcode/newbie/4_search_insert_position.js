// Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

let chai = require('chai');

const { assert } = chai;

var searchInsert = function(nums, target) {
    
    // let index = nums.indexOf(target);
    // if (index >= 0) {
    //     return index;
    // }
    
    let lowIndex = 0;
    let highIndex =  nums.length - 1;
    let midIndex;
    
    while(lowIndex <= highIndex) {
        midIndex = Math.floor((lowIndex+highIndex) / 2);
        if (nums[midIndex] === target) {
            return midIndex;
        } else if (nums[midIndex] < target) {
            lowIndex = midIndex + 1;
        } else if (nums[midIndex] > target) {
            highIndex = midIndex - 1;
        }
    }
    
    return lowIndex;
};


describe("Search Insert Position", () => {
    it("Should return Search Insert Position", () => {
        assert.equal(searchInsert([1,3,5,6], 5), 2);
        assert.equal(searchInsert([1,3,5,6], 2), 1);
        assert.equal(searchInsert([1,3,5,6], 7), 4);
        assert.equal(searchInsert([1,3,5,6], 9), 4);
        assert.equal(searchInsert([1,3,5,6, 7, 10], 15), 6);
        assert.equal(searchInsert([1,3,5,6, 100, 300, 500], 550), 7);
    });
});