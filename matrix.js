// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]),
// each containing y number of item z.
// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.

// Examples:
// matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]
// matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]
// matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]

// Notes:
// The first two arguments will always be integers.
// The third argument is either a string or an integer.

// function matrix(x, y, z) {
//     return Array(x).fill(Array(y).fill(z));
// }

// Solution 2:
// function matrix(x, y, z) {
//   let array = [];
//   for (let i = 0; i < x; i++) {
//     array.push([]);
//     for (let j = 0; j < y; j++) {
//       array[i].push(z);
//     }
//   }
//   return array;
// }

// Solution 3:
function matrix(x, y, z) {
  var final = [];
  var tab = [];

  for (var i = 0; i < y; i++) {
    tab.push(z);
    //   console.log(tab);
  }

  for (var i = 0; i < x; i++) {
    final.push(tab);
  }

  return final;
}
console.log(matrix(3, 2, 3));
