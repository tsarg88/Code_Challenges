// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

// Examples:
// isSubset([3, 2, 5], [5, 3, 7, 9, 2]) ➞ true
// isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) ➞ true
// isSubset([1, 2], [3, 5, 9, 1]) ➞ false

// Both arrays will contain only unique values.

function isSubset(arr1, arr2) {
  return arr1.every((val) => arr2.includes(val));
}
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));
