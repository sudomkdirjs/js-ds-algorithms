// For a given number, find all the prime numbers from zero to that number.

let chai = require('chai');

const { assert } = chai;

const isPrime = number => {
    if (number < 2) {
        return false;
    }

    if (number <= 3) {
        return true
    }

    // This is checked so that we can skip
    // middle five numbers in below loop
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    let isPrime = true;

    for (let i = 2; i <= number / 2; i++) {
        if(number % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}
const getPrimeNumbers = input => {
    let primeNumbers = [];

    for (let i = 2; i <= input; i++) {
        if(isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}


// Math Hint: By definition, products of any integer cannot be prime, while 0 and 1 are ignored because divisibility by them does not affect primality.
const primes = number => {
    const numbers = new Array(number + 1);
    numbers.fill(true);
    numbers[0] = numbers[1] = false;

    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        for (let j = 2; i * j <= number; j++) {
            numbers[i * j] = false;
        }
    }

    return numbers.reduce(
        (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
        []
    );
};

describe("Prime Number", () => {
    it("Should return all prime numbers", () => {
        assert.deepEqual(getPrimeNumbers(10), [2, 3, 5, 7]);
        assert.deepEqual(getPrimeNumbers(20), primes(20));
    });
});

describe("Sieve of Eratosthenes(Prime Number)", () => {
    it("Should return all prime numbers", () => {
        assert.deepEqual(primes(10), [2, 3, 5, 7]);
        assert.deepEqual(primes(25), getPrimeNumbers(25));
    });
});