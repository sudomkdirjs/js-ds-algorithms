// Given a phrase, reverse the order of the characters of each word.

let chai = require('chai');

const { assert } = chai;

const reverseWords = string => {
    let _string = string.split(" ").map(word => {
        let _word = "";
        for (let char of word) {
            _word = char + _word;
        }

        return _word;
    }).join(" ");

    return _string;
}

const _reverseWords = string => {
    return string.split(" ").map(word => word.split('').reverse().join('')).join(" ");
}

describe("Reverse Words", () => {
    it("Should reverse each word in phrase", () => {
        assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
        assert.equal(_reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
    });
});