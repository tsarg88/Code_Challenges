// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Examples:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
// findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]

function findLargestNums(arr) {
  //   let test = [...arr];
  //   console.log(test);
  //   console.log(Math.max.apply(test));
  return arr.map((x) => Math.max(...x));
}
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);

// Solution 2 uses more self-intuitive lines of code
function findLargestNums(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i];
    arr1.sort(function (a, b) {
      return a - b;
    });
    res.push(arr1[arr1.length - 1]);
  }
  return res;
}
