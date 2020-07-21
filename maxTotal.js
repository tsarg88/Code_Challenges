// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// Examples:
// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43
// maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100
// maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40

function maxTotal(nums) {
  let sorted = nums.sort(function (a, b) {
    return a - b;
  });
  let total = 0;
  return sorted.slice(5, 10).reduce((acc, curr) => acc + curr, 0);

  //   return nums.reduce((acc, curr) => acc + curr.slice(0, 5), 0);
  //   for (let i = 0; i < nums.length; i++) {

  //   }
}
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));

