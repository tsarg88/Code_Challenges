// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
// Create a function that sorts an array and removes all duplicate items from it.

// Examples:
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
// set([4, 4, 4, 4]) ➞ [4]
// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
// set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]

// Notes:
// For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be
// converted from one to the other).

function set(arr) {
  let test = Array.from(new Set(arr));
  //   console.log(test);
  return test.filter((x) => x);
}
console.log(set([1, 3, 3, 5, 5]));
