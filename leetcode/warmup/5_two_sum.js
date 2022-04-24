/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
 */

let chai = require('chai');

const { assert } = chai;

const twoSum = (nums, target) => {

	const storeMap = {};

	for (let i = 0; i< nums.length; i++) {
		let a = nums[i];
		if (storeMap.hasOwnProperty(a)) {
			return [storeMap[a], i];
		} else {
			let b = target - a;
			storeMap[b] = i;
		}
	}

};

describe("Two Sum", () => {
	it("Should return indices of the two numbers", () => {
		assert.deepEqual(twoSum([2,7,11,15], 9), [0,1]);
		assert.deepEqual(twoSum([3,2,4], 6), [1,2]);
		assert.deepEqual(twoSum([3,3], 6), [0,1]);
		assert.deepEqual(twoSum([-1,-2,-3,-4,-5], -8), [2,4]);
	});
});
