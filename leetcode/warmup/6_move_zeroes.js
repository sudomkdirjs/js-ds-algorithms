/**
 * Move Zeroes
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */

let chai = require('chai');

const { assert } = chai;

const moveZeroes = function(nums) {
    let nonZeroArray = nums.filter(element => element !== 0);
    let zeroArray = nums.filter(element => element === 0);
    let result = [...nonZeroArray, ...zeroArray];

    // because of in-place requirement.
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
    return nums;
};

describe("Move Zeroes", () => {
	it("Should return array", () => {
		assert.deepEqual(moveZeroes([0,1,0,3,12]), [1,3,12,0,0]);
		assert.deepEqual(moveZeroes([0]), [0]);
		assert.deepEqual(moveZeroes([3,3,0,1,2,3,0]), [3,3,1,2,3,0,0]);
		assert.deepEqual(moveZeroes([-5,-4,-3,-2,-1,0,1,2,3,4,5]), [-5,-4,-3,-2,-1,1,2,3,4,5,0]);
	});
});

const _moveZeroes = function (nums) {
    const length = nums.length;
    let zeroPointer = -1; // initialize and update the position when zero appears
  
    for (let i = 0; i < length; i++) {
      // if number is not zero then move the element to the zeroPointer position and mark current position as zero
      if (nums[i] !== 0 && zeroPointer !== -1) {
        nums[zeroPointer] = nums[i];
        nums[i] = 0;
        zeroPointer += 1; // increment zeroPointer
      }
      // if element is 0, update the zeroPointer for the first time
      else if (nums[i] === 0 && zeroPointer === -1) {
        zeroPointer = i;
      }
    }
    return nums;
};

/**
 * Approach
 * Better approach would be to do in-place movement. Two pointers approach can be used here. Keep a zeroPointer and loop index pointer.
 * Keep moving non-zero elements to pointer pointed to zero. Increment the zero for next replacement.
 */

describe("Move Zeroes", () => {
	it("Should return array", () => {
		assert.deepEqual(_moveZeroes([0,1,0,3,12]), [1,3,12,0,0]);
		assert.deepEqual(_moveZeroes([0]), [0]);
		assert.deepEqual(_moveZeroes([3,3,0,1,2,3,0]), [3,3,1,2,3,0,0]);
		assert.deepEqual(_moveZeroes([-5,-4,-3,-2,-1,0,1,2,3,4,5]), [-5,-4,-3,-2,-1,1,2,3,4,5,0]);
	});
});