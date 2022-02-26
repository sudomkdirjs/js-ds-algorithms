/**
 * Squares of a Sorted Array
 * Given an integer array nums sorted in non-decreasing order, 
 * return an array of the squares of each number sorted in non-decreasing order.
 * Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
Follow up: Squaring each element and sorting the new array is very trivial, 
could you find an O(n) solution using a different approach?
 */

let chai = require('chai');

const { assert } = chai;

const sortedSquares = function(nums) {

    return nums.map(num => num*num).sort((a,b) => a-b);
    
};

describe("Squares of a Sorted Array", () => {
	it("Should return an array of the squares of each number sorted in non-decreasing order.", () => {
		assert.deepEqual(sortedSquares([0,1,0,3,12]), [0,0,1,9,144]);
		assert.deepEqual(sortedSquares([0]), [0]);
		assert.deepEqual(sortedSquares([3,3,0,1,2,3,0]), [0,0,1,4,9,9,9]);
		assert.deepEqual(sortedSquares([-4,-1,0,3,10]), [0,1,9,16,100]);
        assert.deepEqual(sortedSquares([-7,-3,2,3,11]), [4,9,9,49,121]);
	});
});