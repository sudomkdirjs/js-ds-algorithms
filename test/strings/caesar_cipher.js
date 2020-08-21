// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
// Hint: Caesar cipher is one of the Encode and decode technique.
// https://cryptii.com/pipes/caesar-cipher (Online caesar cipher).

let chai = require('chai');

const { assert } = chai;

const caesarCipher = (string, number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const input = string.toLowerCase();
    let output = "";

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        if (alphabet.indexOf(letter) === -1) {
            output += letter;
            continue;
        }

        let index = alphabet.indexOf(letter) + number % 26;
        if (index > 25) index -= 26;
        if (index < 0) index += 26;

        output +=
            string[i] === string[i].toUpperCase()
                ? alphabet[index].toUpperCase()
                : alphabet[index];
    }

    return output;
};

function _caesarCipher(str, n) {
    let result = Array(str.length);
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        let lower = "a".charCodeAt(0);
        if (code >= lower && code < lower + 26)
            code = (code - lower + n) % 26 + lower;
        let upper = "A".charCodeAt(0);
        if (code >= upper && code < upper + 26)
            code = (code - upper + n) % 26 + upper;
        result[i] = String.fromCharCode(code);
    }
    return result.join("");
}

describe("Caesar Cipher", () => {
    it("Should shift to the right", () => {
        // positive number - shift to right.
        assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
        assert.equal(caesarCipher("Marees", 10), "Wkbooc");
        assert.equal(_caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
        assert.equal(_caesarCipher("Marees", 10), "Wkbooc");
    });

    it("Should shift to the left", () => {
        // negative number - shift to left.
        assert.equal(caesarCipher("E hkra FwrwOynelp!", -100), "I love JavaScript!");
        assert.equal(caesarCipher("Wkbooc", -10), "Marees");
        // assert.equal(_caesarCipher("E hkra FwrwOynelp!", -100), "I love JavaScript!");
        // assert.equal(_caesarCipher("Wkbooc", -10), "Marees");
    });
});