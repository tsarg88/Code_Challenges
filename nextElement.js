// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is
// formed by adding the same constant to the previous element.

// Examples:
// nextElement([3, 5, 7, 9]) ➞ 11
// nextElement([-5, -6, -7]) ➞ -8
// nextElement([2, 2, 2, 2, 2]) ➞ 2

function nextElement(arr) {
  let diffrence = arr[arr.length - 1] - arr[arr.length - 2];
  return arr[arr.length - 1] + diffrence;
}
console.log(nextElement([3, 5, 7, 9]));
