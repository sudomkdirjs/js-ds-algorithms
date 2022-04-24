/**
 * Majority Element
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
Constraints:
n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1
 */

let chai = require('chai');

const { expect } = chai;

var majorityElement = function(nums) {

    function occurrenceReducer(accumulator, element) {
        let elementOccurrence = accumulator[element];
        if (elementOccurrence) {
            accumulator[element] = elementOccurrence + 1;
        } else {
            accumulator[element] = 1;
        }

        if (accumulator[element] > accumulator.maxValue) {
            accumulator.maxElement = element;
            accumulator.maxValue = accumulator[element];
        }

        return accumulator;
    }
    let occurrences = nums.reduce(occurrenceReducer, {maxElement: 0, maxValue: 0});

    return occurrences.maxElement;
};

describe("Majority Element", () => {
    it("Should return a Majority Element", () => {
        expect(majorityElement([3,2,3])).to.equal(3);
        expect(majorityElement([2,2,1,1,1,2,2])).to.equal(2);
        expect(majorityElement([9,3,3,2,3,5,7,3,3])).to.equal(3);
    })
})


var _majorityElement = function (nums) {
    const length = nums.length;
  
    let majority;
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (count === 0) majority = nums[i];
  
      if (nums[i] === majority) count += 1;
      else count -= 1;
    }
  
    return majority;
};

/**
 * Approach
Good approach would be to keep map of elements and their count by iterating through the array. 
The one with highest count should be the result.
The best approach for this problem would be to just note the majority element as we know there is a majority element for sure.
(Boyer-Moore Voting Algorithm)
 */

describe("Majority Element", () => {
    it("Should return a Majority Element", () => {
        expect(_majorityElement([3,2,3])).to.equal(3);
        expect(_majorityElement([2,2,1,1,1,2,2])).to.equal(2);
        expect(_majorityElement([9,3,3,2,3,5,7,3,3])).to.equal(3);
    })
})