// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

let chai = require('chai');

const { assert } = chai;

const ransomNote = (note, magazine) => {
    const magazineWords = magazine.split(" ");
    const magazineHash = {};

    magazineWords.forEach(word => {
        // if (!magazineHash[word]) magazineHash[word] = 0;
        // magazineHash[word]++;
        magazineHash[word] = magazineHash[word] + 1 || 1; //NaN
    });

    const noteWords = note.split(" ");
    let possible = true;

    noteWords.forEach(word => {
        if (magazineHash[word]) {
            magazineHash[word]--;
            if (magazineHash[word] < 0) {
                possible = false;
            }
        } else {
            possible = false;
        }
    });

    return possible;
};

const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
    it("Should return true", () => {
        assert.equal(ransomNote("sit ad est sint", magazine), true);
    });

    it("Should return false", () => {
        assert.equal(ransomNote("sit ad est love", magazine), false);
    });

    it("Should return true", () => {
        assert.equal(ransomNote("sit ad est sint in in", magazine), true);
    });

    it("Should return false", () => {
        assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
    });
});