// A value is omnipresent if it exists in every subarray inside the main array.

// Examples:
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
// isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
// isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false

function isOmnipresent(arr, val) {
  return arr.every((x) => x.includes(val));
}
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
);

// Solution 2:
// function isOmnipresent(arr, val) {
// 	for (let i =0; i<arr.length; i++){
// 		if (arr[i].includes(val)){
// 		}else{return false}
// 	}
// 	return true;
// }
