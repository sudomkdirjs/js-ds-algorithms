// Anagrams are words or phrases that contain the same number of characters. 
// Create a function that checks for this.

let chai = require('chai');

const { assert } = chai;

const charCount = string => {
    const table = {};

    for (let char of string.replace(/\W/g, "").toLowerCase())
        table[char] = table[char] + 1 || 1;

    return table;
};

const anagrams = (stringA, stringB) => {
    const charCountA = charCount(stringA);
    const charCountB = charCount(stringB);

    if (Object.keys(charCountA).length !== Object.keys(charCountB).length) {
        return false;
    }

    for (let char in charCountA) {
        if (charCountA[char] !== charCountB[char]) {
            return false;
        }
    }

    return true;
};

const _sort = string => string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
const _anagrams = (stringA, stringB) => _sort(stringA) === _sort(stringB);

describe("Anagrams", () => {
    it("Should implement anagrams", () => {
        assert.equal(anagrams("hello world", "world hello"), true);
        assert.equal(anagrams("hellow world", "hello there"), false);
        assert.equal(anagrams("hellow world", "hello there!"), false);
        
        assert.equal(_anagrams("hello world", "world hello"), true);
        assert.equal(_anagrams("hellow world", "hello there"), false);
    });
});