/**
 * This is a demo task.
 * smallest positive integer

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */


let chai = require('chai');

const { assert } = chai;


// function solution(A) { // worst implementation. 11% marks only :(
//     // write your code in JavaScript (Node.js 8.9.4)
//     let result = 1;

//     A.sort((a, b) => a - b);

//     console.log(A);

//     for (let i=0; i<A.length; i++) {
//         let num = A[i] + 1;
//         if (num > 0 && A.findIndex(value => value === num) === -1) {
//             result = num;
//             break;
//         }
//     }

//     return result <= 0 ? 1 : result;
// }

function solution(A) { // very good implementation. 100% marks :)
    // only positive values, sorted
    A = A.filter(x => x > 0).sort((a, b) => a - b);

    let result = 1;

    for(let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if(result < A[i]) {
            return result;
        }
        result = A[i] + 1;
    }

    return result;
}

describe("Smallest positive integer", () => {
    it("Should return the smallest positive integer", () => {
        assert.equal(solution( [1,2,3] ), 4);
        assert.equal(solution( [1, 3, 6, 4, 1, 2] ), 5);
        assert.equal(solution( [-1, -3] ), 1);
        assert.equal(solution( [-1, -3, 0, 1] ), 2);
        assert.equal(solution( [-1, -3, 0, 1, 5, 4, 2, 3] ), 6);
    })
})
