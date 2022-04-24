// Given an array of numbers, return all pairs that add up to a given sum. 
// The numbers can be used more than once.

let chai = require('chai');

const { assert } = chai;

const twoSum = (array, sum) => {
	const pairs = [];
	const store = [];

	for (let part1 of array) {
		const part2 = sum - part1;
		if (store.indexOf(part2) !== -1) {
			pairs.push([part1, part2]);
		}
		store.push(part1);
		// console.log({part1, part2, pairs, store});
	}

	return pairs;
};

describe("Two Sum", () => {
	it("Should implement two sum", () => {
		assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
	});
});

const _twoSum = (array, sum) => {
	const pairs = [];
	const storeMap = {};

	for (let part1 of array) {
		const part2 = sum - part1;
		if (storeMap.hasOwnProperty(part2)) {
			pairs.push([part1, part2]);
		}
		storeMap[part1] = true;
		// console.log({part1, part2, pairs, storeMap});
	}

	return pairs;
};

describe("Two Sum", () => {
	it("Should implement two sum", () => {
		assert.deepEqual(_twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
	});
});
