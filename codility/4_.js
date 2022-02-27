/**
*
* There are N people, numbered from 0 to N-1, playing a game.
* The K-th person is assigned the letter S[K].
* At the beginning the 0th person sends a message, consisting of a single letter S[0], to the A[0]-th person. 
* When the K-th person receives the message, they append their letter S[K] to the message and forward it to A[K]. 
* The game ends when the 0th person receives the message. 
* Find the final message. You can assume that A contains every integer from 0 to N-1 exactly once. 
* Write a function: that given a string S and an array of integers A, both of length N, returns a string denoting the final message received by the 0th person. 
* Examples: 
* 1. Given S = "cdeo" and A = [3, 2, 0, 1), your function should returns "code". 
* At the beginning, the oth person sends a message "c" to the 3rd person. 
* Next, the 3rd person forwards the message "co" to the 1st person. 
* After that the 1st person forwards the message "cod" to the 2nd person. 
* After appending the letter 'e' to it, the 2nd person forward it to the oth person. 
* The final message, received by oth person, is "code". 
* 2. Given S="cdeenetpi" and A = [5, 2,0, 1, 6, 4, 8, 3, 71, your function should returns "centipede". 
* 3. Given S = "bytdag" and A = [4,3,0, 1, 2, 5), your function should returns "bat". 
* Notice, that not all letters from Shave to be used. 
* Assume that: • N is an integer within the range (1..1,000); 
* string S consists only of lowercase letters (a-z); 
* A contains all integers within range (O...N-1); • S and A are both of length N
* 
*/

let chai = require('chai');

const { assert } = chai;

const getMessage = function (S, A) {
    const charArray = Object.assign([], S);

    // Initial message
    // First letter in the array
    let finalMessage = charArray[0];

    // Person in spot 0 will tell me where to send the message
    let destination = A[0];

    while (destination != 0) {
        finalMessage += charArray[destination];
        destination = A[destination];
    }

    return finalMessage;
}

describe("Two Sum", () => {
    it("Should implement two sum", () => {
        assert.deepEqual(getMessage("cdeo", [3, 2, 0, 1]), "code");
        assert.deepEqual(getMessage("cdeenetpi", [5, 2, 0, 1, 6, 4, 8, 3, 7]), "centipede");
        assert.deepEqual(getMessage("bytdag", [4, 3, 0, 1, 2, 5]), "bat");
    });
});
/**
 * private static String getMessage(String s, int[] a)
{
char[] chars = s.toCharArray();
// Initial message
// First letter in the array
String finalMessage = String.valueOf(chars[0]);
// Person in spot 0 will tell me where to send the message
int destination = a[0];
while (destination != 0)
{
finalMessage += chars[destination];
destination = a[destination];
}
return finalMessage;
}
 */