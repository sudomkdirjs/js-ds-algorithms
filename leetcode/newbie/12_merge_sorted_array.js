/**
 * Merge Sorted Array
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function,
 but instead be stored inside the array nums1. 
 To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
 and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Constraints:
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 */

let chai = require('chai');

const { expect } = chai;

var merge = function(nums1, m, nums2, n) {
    // we should mutate the nums1 array.
    nums1.length=m;
    nums1.push(...nums2);
    nums1.sort((a,b)=>a-b);
    return nums1;
};

describe("Merge Sorted Array", () => {
    it("Should Merge Arrays and return Sorted Array", () => {
        expect(merge([1,2,3,0,0,0], 3, [2,5,6], 3)).to.eql([1,2,2,3,5,6]);
        expect(merge([1,2,4,0,0,0], 3, [2,5,6], 3)).to.eql([1,2,2,4,5,6]);
        expect(merge([1], 1, [], 0)).to.eql([1]);
        expect(merge([0], 0, [1], 1)).to.eql([1]);
        expect(merge([2,5,6,0,0,0], 3, [1,2,3], 3)).to.eql([1,2,2,3,5,6]);
        expect(merge([1,2,4,0,0,0], 3, [5,5,6], 3)).to.eql([1,2,4,5,5,6]);
    })
})

var _merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;           // pointer to the 1st array
    let p2 = n - 1;           // pointer to the 2nd array
    let p3 = m + n - 1;       // pointer to the merge position
  
    // if both pointers are pointing to the items, keep merging
    while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
        nums1[p3] = nums1[p1];
        p1 -= 1;
      } else {
        nums1[p3] = nums2[p2];
        p2 -= 1;
      }
      p3 -= 1;
    }
  
    // iff p2 is not complete, move the items
    if (p2 !== -1) {
      while (p3 >= 0) {
        nums1[p3] = nums2[p2];
        p2 -= 1;
        p3 -= 1;
      }
    }
    return nums1;
};

/** Approach
As the in place replacement for the array has to be done, 
we will utilize the space provided in the 1st array. 
As the space is provided at the end of the array, the items can be merged in reverse order filling from the highest to the lowest. 
Two pointer approach is used here.
*/

describe("Merge Sorted Array", () => {
    it("Should Merge Arrays and return Sorted Array", () => {
        expect(_merge([1,2,3,0,0,0], 3, [2,5,6], 3)).to.eql([1,2,2,3,5,6]);
        expect(merge([1,2,4,0,0,0], 3, [2,5,6], 3)).to.eql([1,2,2,4,5,6]);
        expect(_merge([1], 1, [], 0)).to.eql([1]);
        expect(_merge([0], 0, [1], 1)).to.eql([1]);
        expect(_merge([2,5,6,0,0,0], 3, [1,2,3], 3)).to.eql([1,2,2,3,5,6]);
        expect(merge([1,2,4,0,0,0], 3, [5,5,6], 3)).to.eql([1,2,4,5,5,6]);
    })
})
