// Create a function that finds a target number in a list of prime numbers. Implement a binary search algorithm in your function.
// The target number will be from 2 through 97. If the target is prime then return "yes" else return "no".

// var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
// isPrime(primes, 3) ➞ "yes"
// isPrime(primes, 4) ➞ "no"
// isPrime(primes, 67) ➞ "yes"
// isPrime(primes, 36) ➞ "no"

// Notes:
// You could use built-in functions to solve this, but the point of this challenge is to see if you understand the binary search algorithm.
// The solution is in the Resources tab.

// Iterative Approach
var primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];
function isPrime(primes, num) {
  let start = 0;
  let end = primes.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (primes[mid] === num) return "yes";
    else if (primes[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "no";
}
console.log(isPrime(primes, 3));
