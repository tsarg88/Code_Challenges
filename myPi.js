// Given a number n, write a function that returns PI to n decimal places.
// Example:
// myPi(5) ➞ 3.14159
// myPi(4) ➞ 3.1416
// myPi(15) ➞ 3.141592653589793

function myPi(n) {
  return parseFloat(Math.PI.toFixed(n));
}
console.log(myPi(5));
