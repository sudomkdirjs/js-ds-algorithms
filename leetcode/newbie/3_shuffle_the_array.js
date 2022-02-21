// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Constraints:
// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3

let chai = require('chai');

const { expect } = chai;

var shuffle = function(nums, n) {
    let result = [];
    
    for (i=0, j=n; i<n; i++, j++) {
        result.push(nums[i], nums[j]);
    }
    
    return result;
};

describe("Shuffle the Array [x1,x2,...,xn,y1,y2,...,yn]", () => {
    it("Should Shuffle the Array into [x1,y1,x2,y2,...,xn,yn]", () => {
        expect(shuffle([2,5,1,3,4,7], 3)).to.eql([2,3,5,4,1,7]);
        expect(shuffle([1,2,3,4,4,3,2,1], 4)).to.eql([1,4,2,3,3,2,4,1]);
        expect(shuffle([1,1,2,2], 2)).to.eql([1,2,1,2]);
    })
})