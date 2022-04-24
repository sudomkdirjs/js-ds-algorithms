// Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

let chai = require('chai');

const { expect } = chai;

var reverseString = function(s) {
    return s.reverse();
};

describe("Reverse String", () => {
    it("Should return Reversed String", () => {
        expect(reverseString(["h","e","l","l","o"])).to.eql(["o","l","l","e","h"]);
        expect(reverseString(["H","a","n","n","a","h"])).to.eql(["h","a","n","n","a","H"]);
    })
})

var _reverseString = function (s) {
    const length = s.length;
    const limit = Math.floor(length / 2); // iterate only to the half of the length of the string
  
    let temp;
    for (let i = 0, j = length - 1; i < limit; i++, j--) {
      // swap the items between left and right
      temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
  
    return s;
};

// Approach
// Reversing the array of characters or a string, will follow the two pointer approach. 
// Exchange each element between left and right side pointers. 
// String length, either odd or even will not make a difference.

describe("Reverse String", () => {
    it("Should return Reversed String", () => {
        expect(_reverseString(["h","e","l","l","o"])).to.eql(["o","l","l","e","h"]);
        expect(_reverseString(["H","a","n","n","a","h"])).to.eql(["h","a","n","n","a","H"]);
    })
})
