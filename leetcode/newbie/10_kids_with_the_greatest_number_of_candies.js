/** 
Kids With the Greatest Number of Candies
There are n kids with candies. You are given an integer array candies, 
where each candies[i] represents the number of candies the ith kid has,
and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.

Constraints:
n == candies.length
2 <= n <= 100
1 <= candies[i] <= 100
1 <= extraCandies <= 50 
**/

let chai = require('chai');

const { expect } = chai;

var kidsWithCandies = function(candies, extraCandies) {
    
    //     let max = candies[0];
        
    //     candies.forEach(candy => {
            
    //       if (candy > max) {
    //           max = candy;
    //       }
            
    //     });
        
    let maxReducer = (max, value) => {
        if (value > max) {
            return value;
        }
        return max;
    }
    
    let max = candies.reduce(maxReducer);
        
    return candies.map(candy => (candy + extraCandies) >= max);
};

// Approach
// The best approach would be to check the maximum value from the candies 
// and then check if each of the value in the array when added can sum up to the maximum value or higher

describe("Kids With the Greatest Number of Candies", () => {
    it("Should return a boolean array result of length n", () => {
        expect(kidsWithCandies([2,3,5,1,3], 3)).to.eql([true,true,true,false,true]);
        expect(kidsWithCandies([4,2,1,1,2], 1)).to.eql([true,false,false,false,false]);
        expect(kidsWithCandies([12,1,12], 10)).to.eql([true,false,true]);
    })
})