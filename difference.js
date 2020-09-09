// Given an array of integers, return the difference between the largest and smallest integers in the array.

// Examples:
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// 20 - 2 = 18
// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// 15 - (-9) = 24
// difference([4, 17, 12, 2, 10, 2]) ➞ 15

function difference(nums) {
  return Math.max(...nums) - Math.min(...nums);
}
console.log(difference([10, 15, 20, 2, 10, 6]));
