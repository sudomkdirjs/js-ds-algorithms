/**
 * Maximum Product of Two Elements in an Array
 * Given the array of integers nums, you will choose two different indices i and j of that array. 
 * Return the maximum value of (nums[i]-1)*(nums[j]-1).
 * Constraints:
    2 <= nums.length <= 500
    1 <= nums[i] <= 10^3
 */

let chai = require('chai');

const { assert } = chai;

var maxProduct = function(nums) {
    
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
    
    return (firstMax - 1) * (secondMax - 1);
};

// Approach
// The logic here is to find the highest and second highest number and then multiple them after decrementing. 
// The highest and the second highest can be found out in a single pass of loop

describe("Maximum Product of Two Elements in an Array", () => {
    it("Should return (nums[i]-1)*(nums[j]-1)", () => {
        assert.equal(maxProduct([3,4,5,2]), 12);
        assert.equal(maxProduct([1,5,4,5]), 16);
        assert.equal(maxProduct([3,7]), 12);
    });
});
