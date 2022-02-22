// Matrix Diagonal Sum
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Constraints:
// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100


let chai = require('chai');

const { assert } = chai;

var diagonalSum = function(mat) {
    
    let sum = 0;
    let matLength = mat.length;
    
    for(i=0, j=matLength-1; i<matLength; i++, j--) {
        sum += mat[i][i];
        
        if(i+'#'+i !== j+'#'+i) {
            sum += mat[j][i]
        }
    
    }
    return sum;
};

describe("Matrix Diagonal Sum", () => {
    it("Should return Matrix Primary Diagonal Sum", () => {
        assert.equal(diagonalSum([[1,2,3],
            [4,5,6],
            [7,8,9]]), 25);
        assert.equal(diagonalSum([[1,1,1,1],
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1]]), 8);
        assert.equal(diagonalSum([[5]]), 5);
        assert.equal(diagonalSum([[5, 5],
            [5, 5]]), 20);
    });
});

// Approach
// The diagonal sum of matrix can be calculated by calculating the sum of the each diagonal and adding up. 
// One point to be taken care here is that in case the matrix is having odd number of rows, then central element has to be skipped.

var _diagonalSum = function(mat) {
    
    let sum = 0;
    let matLength = mat.length;
    
    for(i=0, j=matLength-1; i<matLength; i++, j--) {
        sum += mat[i][i];
        
        sum += mat[j][i];
    
    }
    
    if (matLength%2 === 1) {
        sum -= mat[Math.floor(matLength/2)][Math.floor(matLength/2)];
    }
    
    return sum;
};

describe("Matrix Diagonal Sum", () => {
    it("Should return Matrix Primary Diagonal Sum", () => {
        assert.equal(_diagonalSum([[1,2,3],
            [4,5,6],
            [7,8,9]]), 25);
        assert.equal(_diagonalSum([[1,1,1,1],
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1]]), 8);
        assert.equal(_diagonalSum([[5]]), 5);
        assert.equal(_diagonalSum([[5, 5],
            [5, 5]]), 20);
    });
});
