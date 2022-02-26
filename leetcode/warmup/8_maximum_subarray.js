/**
 * Maximum Subarray
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 * Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
Follow up: If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach, which is more subtle.
 */

let chai = require('chai');

const { assert } = chai;

var maxSubArray = function(nums) {
    let highest = nums[0];  // highest local subarray sum
    let highestSoFar = nums[0]; // highest subarray sum
    let total;
    
    // Kadane's algorithm logic
    for(let i=1;i<nums.length; i++){
        total = highest + nums[i];
        highest = total > nums[i] ? total : nums[i];
        highestSoFar = highest > highestSoFar ? highest : highestSoFar;
    }
        
    return highestSoFar;
};

/**
 * Approach
 * The solution is the direct implementation of Kadane's algorithm(divide and conquer approach).
 */

describe("Maximum Subarray", () => {
	it("Should return Maximum Subarray", () => {
		assert.deepEqual(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);
		assert.deepEqual(maxSubArray([1]), 1);
		assert.deepEqual(maxSubArray([5,4,-1,7,8]), 23);
	});
});