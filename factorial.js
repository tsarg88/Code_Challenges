// Write a function that takes a positive integer and return its factorial.
// Examples:
// factorial(4) ➞ 24
// factorial(0) ➞ 1
// factorial(9) ➞ 362880
// Notes:
// The factorial of 0 is 1.
// The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).

function factorial(z) {
  let total = 1;
  if (z == 0) {
    return 1;
  } else {
    for (let i = 0; i < z; z--) {
      total *= z;
    }
  }
  return total;
}
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(9));
