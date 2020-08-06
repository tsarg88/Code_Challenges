// A repdigit is a positive number composed out of the same digit.
// Create a function that takes an integer and returns whether it's a repdigit or not.

// Examples:
// isRepdigit(66) ➞ true
// isRepdigit(0) ➞ true
// isRepdigit(-11) ➞ false

// Notes:
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.

function isRepdigit(num) {
  num += "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] != num[0]) {
      return false;
    }
  }
  return true;
}
console.log(isRepdigit(66));

// Solution 2 using Set

// function isRepdigit(num) {
//   //   console.log(new Set("" + num));
//   return new Set("" + num).size === 1;
// }
// console.log(isRepdigit(-66));
