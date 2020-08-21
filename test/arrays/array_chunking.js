// Given an array and a size, split the array items into a list of arrays of the given size.

let chai = require('chai');

const { assert } = chai;

const chunk = (array, size) => {
    let chunks = [];

    for (let item of array) {
        let lastChunk = chunks[chunks.length - 1];
        if (!lastChunk || lastChunk.length === size) {
            chunks.push([item]);
        } else {
            lastChunk.push(item);
        }
    }

    return chunks;
}

const _chunk = (array, size) => {
    const chunks = [];
    let index = 0;

    while (index < array.length) {
        chunks.push(array.slice(index, index + size));
        index += size;
    }

    return chunks;
};

const __chunk = (array, size) => {
    let chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size))
    }   

    return chunks;
}

describe("Array Chunking", () => {
    it("Should implement array chunking", () => {
        assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
        assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);

        assert.deepEqual(_chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(_chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
        assert.deepEqual(_chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);

        assert.deepEqual(__chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(__chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
        assert.deepEqual(__chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
    });
});