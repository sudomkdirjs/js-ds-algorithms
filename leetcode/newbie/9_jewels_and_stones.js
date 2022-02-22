// Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.


let chai = require('chai');

const { assert } = chai;

var numJewelsInStones = function(jewels, stones) {
    
    let result = 0;
    
    stones.split('').forEach(v => {
        if(jewels.indexOf(v) !== -1) {
            result++;
        }
    })
    
    return result;
};

describe("Jewels and Stones", () => {
    it("Should return how many of the stones you have are also jewels", () => {
        assert.equal(numJewelsInStones("aA", "aAAbbbb"), 3);
        assert.equal(numJewelsInStones("z", "ZZ"), 0);
        assert.equal(numJewelsInStones("Mari", "Mari"), 4);
    });
});

var _numJewelsInStones = function (jewels, stones) {
    const jewelsSet = new Set(jewels); // create Set with jewels as values
  
    let jewelsCount = 0;
    for (let ch of stones) {
      if (jewelsSet.has(ch)) {
        jewelsCount += 1; // increment the jewels count iff stone is a jewel
      }
    }
  
    return jewelsCount;
};

// Approach
// Naive approach would be to check the each character from the stones string to be present or not in jewels. This approach is takes long for lengthier strings.
// Good approach would be to store the jewels in a Set and can be used to check against each character of the stones

describe("Jewels and Stones", () => {
    it("Should return how many of the stones you have are also jewels", () => {
        assert.equal(_numJewelsInStones("aA", "aAAbbbb"), 3);
        assert.equal(_numJewelsInStones("z", "ZZ"), 0);
        assert.equal(_numJewelsInStones("Mari", "Mari"), 4);
    });
});