// A "magic square" is a square divided into smaller squares each containing a number, such that the numbers in each vertical,
// horizontal, and diagonal row add up to the same value.

// Examples:
// isMagicSquare([
//     [8, 1, 6],
//     [3, 5, 7],
//     [4, 9, 2]
//   ]) ➞ true
//   isMagicSquare([
//     [16,  3,  2, 13],
//     [ 5, 10, 11,  8],
//     [ 9,  6,  7, 12],
//     [ 4, 15, 14,  1]
//   ]) ➞ true
//   isMagicSquare([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]) ➞ false

// Notes:
// Check diagonals as well.
// Test input will always be square.
// Check the Resources tab for additional info on magic squares.

function isMagicSquare(square) {
  const sum = (arr) => arr.reduce((a, c) => a + c, 0);
  var rowSum = sum(square[0]);
  //   console.log(rowSum);
  //   console.log(square.length);
  for (var i = 0; i < square.length; i++) {
    if (sum(square[i]) != rowSum) {
      return false;
    }
    // if (sum(square.map((row) => row[i])) != rowSum) {
    //   return false;
    // }
  }
  return true;
}
console.log(
  isMagicSquare([
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ])
);
