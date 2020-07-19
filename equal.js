// Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

// Examples:
// equal(3, 4, 3) ➞ 2
// equal(1, 1, 1) ➞ 3
// equal(3, 4, 1) ➞ 0

// Notes:
// Your function must return 0, 2 or 3.

function equal(a, b, c) {
  const size = new Set([a, b, c]).size;
  //   console.log(size);
  return size === 3 ? 0 : 4 - size;
}
console.log(equal(1, 3, 3));

// Solution 2
// function equal(a, b, c) {
//     if (a === b && a === c) {
//        return 3;}
//     if (a === b || a === c || b === c) {
//        return 2;}
//            return 0;
//        }
