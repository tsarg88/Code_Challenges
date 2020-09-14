// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers.
// Return your result in the following format:

// Examples:
// evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]
// evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]
// evenOddPartition([1, 3, 5, 7, 9]) ➞ [[], [1, 3, 5, 7, 9]]
// evenOddPartition([]) ➞ [[], []]

function evenOddPartition(arr) {
  let even = [];
  let odd = [];
  let result = [even, odd];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return result;
}
console.log(evenOddPartition([5, 8, 9, 2, 0]));
