// Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Constraints:

// 1 <= numRows <= 30

let chai = require('chai');

const { assert, expect } = chai;

var generate = function(numRows) {
    
    let resultArray = [[1]];
    
    for (i=1; i<numRows; i++) {
        let innerArray = getInnerArray(i, resultArray);
        resultArray[i] = innerArray;
    }
    
    return resultArray;
};

var getInnerArray = function(index, resultArray) {
    
    let innerArray = [1];
    
    let previous = resultArray[index-1];
    
    for (i=1; i<index; i++) {
        innerArray[i] = previous[i-1] + previous[i];
    }
    
    innerArray[index] = 1;
    
    return innerArray;
}

describe("Pascal's Triangle", () => {
    it("Should return Pascal's Triangle", () => {
        expect(generate(1)).to.eql([[1]]);
        expect(generate(2)).to.eql([[1], [1,1]]);
        expect(generate(3)).to.eql([[1],[1,1],[1,2,1]]);
        expect(generate(4)).to.eql([[1],[1,1],[1,2,1],[1,3,3,1]]);
        expect(generate(5)).to.eql([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
    })
})

// Start with a pascal 2D array with default array with value 1. 
// Use nested loops; one for row generation and other for values inside the each row. 
// Let each value of the current row be calculated from previous row values excluding 1st and last element.
// Prepend and append 1 to each row value (pattern says by default)

var _generate = function (numRows) {
    var pascal = [[1]];
  
    for (var i = 1; i < numRows; i++) {
      pascal[i] = [1]; // 1st element of all the rows is 1
  
      for (var j = 1; j < i; j++) {
        pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
      }
  
      pascal[i][i] = 1; // last element of all the rows is 1
    }
    return pascal;
};

describe("Pascal's Triangle", () => {
    it("Should return Pascal's Triangle", () => {
        expect(_generate(1)).to.eql([[1]]);
        expect(_generate(2)).to.eql([[1], [1,1]]);
        expect(_generate(3)).to.eql([[1],[1,1],[1,2,1]]);
        expect(_generate(4)).to.eql([[1],[1,1],[1,2,1],[1,3,3,1]]);
        expect(_generate(5)).to.eql([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
    })
})