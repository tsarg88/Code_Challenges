// Write two functions:
// firstArg() should return the first parameter passed in.
// lastArg() should return the last parameter passed in.

// Examples:
// firstArg(1, 2, 3) ➞ 1
// lastArg(1, 2, 3) ➞ 3
// firstArg(8) ➞ 8
// lastArg(8) ➞ 8

function firstArg(nums) {
  return arguments[0];
}
// console.log(firstArg(1, 2, 3));

function lastArg(nums) {
  let test = arguments[arguments.length - 1];
  return test;
}
console.log(lastArg(4, 5, 6));
