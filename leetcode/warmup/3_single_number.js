/**
 * Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. 
 * Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */


let chai = require('chai');

const { expect } = chai;

const singleNumber = function(nums) {
    
   function singleNumberReducer(accumulator, element) {
        accumulator[element] = accumulator[element] ? accumulator[element] + 1 : 1;
        return accumulator;
   }
   let obj = nums.reduce(singleNumberReducer, {});

   for (property in obj) {
       if(obj[property] === 1) {
           return Number(property);
       }
   }
};

describe("Single Number", () => {
    it("Should return a Single Number", () => {
        expect(singleNumber([3,2,3])).to.equal(2);
        expect(singleNumber([2,2,1,1,3,3, 6])).to.equal(6);
        expect(singleNumber([9,9,2,2,5,5,7,3,3])).to.equal(7);
        expect(singleNumber([2,2,1])).to.equal(1);
        expect(singleNumber([4,1,2,1,2])).to.equal(4);
        expect(singleNumber([1])).to.equal(1);
    })
})

const _singleNumber = function(nums) {
    return nums.reduce((a, b) => a ^ b);
}

/**
 * Approach
 * Good approach would be to store the count of each elements, 
 * and return the element having single occurrence.
 * As the elements are only positive integers in this problems, XOR operation can be utilized. 
 * All the elements occur twice, except one; XOR between same elements will result in 0 and left one will be single non duplicated number. 
 * (order of XOR operation does not matter)
 * XOR gates produce a 0 when both inputs match.
 */

describe("Single Number", () => {
    it("Should return a Single Number", () => {
        expect(_singleNumber([3,2,3])).to.equal(2);
        expect(_singleNumber([2,2,1,1,3,3, 6])).to.equal(6);
        expect(_singleNumber([9,9,2,2,5,5,7,3,3])).to.equal(7);
        expect(_singleNumber([2,2,1])).to.equal(1);
        expect(_singleNumber([4,1,2,1,2])).to.equal(4);
        expect(_singleNumber([1])).to.equal(1);
    })
})