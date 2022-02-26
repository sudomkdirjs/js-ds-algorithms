/**
 * Rotate Array
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * 
 * Constraints:
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 */

 let chai = require('chai');

const { expect } = chai;

const rotate = function(nums, k) {
    nums.push(...nums.splice(0, nums.length - k%nums.length));
    return nums;
};

describe("Rotate Array", () => {
    it("Should return Rotated Array", () => {
        expect(rotate([1,2,3,4,5,6,7], 3)).to.eql([5,6,7,1,2,3,4]);
        expect(rotate([-1,-100,3,99], 2)).to.eql([3,99,-1,-100]);
        expect(rotate([9,9,2,2,5,5,7,3,3], 1)).to.eql([3, 9,9,2,2,5,5,7,3]);
        expect(rotate([1,2], 3)).to.eql([2,1]);
    })
})

const _rotate = function(nums, k) {
    let removeCount = k%nums.length;
    let a = nums.splice(-1*removeCount, removeCount);
    // return [...a, ...nums];
    nums.unshift(...a);
    return nums;
};

describe("Rotate Array", () => {
    it("Should return Rotated Array", () => {
        expect(_rotate([1,2,3,4,5,6,7], 3)).to.eql([5,6,7,1,2,3,4]);
        expect(_rotate([-1,-100,3,99], 2)).to.eql([3,99,-1,-100]);
        expect(_rotate([9,9,2,2,5,5,7,3,3], 1)).to.eql([3, 9,9,2,2,5,5,7,3]);
        expect(_rotate([1,2], 3)).to.eql([2,1]);
    })
})