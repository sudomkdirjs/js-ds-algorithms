// Given a phrase, capitalize every word.

let chai = require('chai');

const { assert } = chai;

const capitalize = string => {
    let _string = string.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");

    return _string;
}

const _capitalize = string => {
    
    let _string = string[0].toUpperCase();

    for (let i = 1; i < string.length; i++) {
        _string += string[i -1] === ' ' ? string[i].toUpperCase() : string[i].toLowerCase();
    }

    return _string;
}

describe("Capitalization", () => {
    it("Should capitalize phrase", () => {
        assert.equal(capitalize("hello world"), "Hello World");
        assert.equal(_capitalize("hello world"), "Hello World");
    });
});