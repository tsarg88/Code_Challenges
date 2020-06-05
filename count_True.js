// Create a function which returns the number of true values there are in an array.
// Examples:
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Notes:
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// function countTrue(arr) {
//   return arr.filter(function (value) {
//     return value === true;
//   }).length;
// }
// console.log(countTrue([true, false, false, true, false]));
// console.log(countTrue([false, false, false, false]));
// console.log(countTrue([]));

// Method 2
function countTrue(arr) {
    return arr.filter((n) => n == true).length;
  }
  console.log(countTrue([true, false, false, true, false]));
  