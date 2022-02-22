

/**
 * Second Largest Element in an Array.
 * Given the array of integers nums, Return the second largest element.
 * Constraints:
    2 <= nums.length <= 500
    1 <= nums[i] <= 10^3
 */

let chai = require('chai');

const { assert } = chai;

var findSecondLargest = function(nums) {
    
    let firstMax = nums[0] > nums[1] ? nums[0] : nums[1]
    let secondMax = nums[0] > nums[1] ? nums[1] : nums[0];
    
    for (let i = 2; i < nums.length; i++) {
        
        if (nums[i] > firstMax) {
            // if the current element is higher than the highest
            secondMax = firstMax;
            firstMax = nums[i];
        } else if (nums[i] > secondMax) {
            // if the current element is higher than the 2nd highest
            secondMax = nums[i];
        }
    }
    
    return secondMax;
};

// Approach
// The logic here is to find the highest and second highest number. 
// The highest and the second highest can be found out in a single pass of loop

describe("Second Largest Element in an Array.", () => {
    it("Should return the second largest element.", () => {
        assert.equal(findSecondLargest([3,4,5,2]), 4);
        assert.equal(findSecondLargest([1,5,4,5, 30]), 5);
        assert.equal(findSecondLargest([3,7]), 3);
    });
});
    