// Create a function that returns the number of hashes and pluses in a string.

// Examples:
// hashPlusCount("###+") ➞ [3, 1]
// hashPlusCount("##+++#") ➞ [3, 3]
// hashPlusCount("#+++#+#++#") ➞ [4, 6]
// hashPlusCount("") ➞ [0, 0]

// Notes:
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].

function hashPlusCount(str) {
  let test = str.split("");
  let test2 = [];
  let test3 = 0;
  let test4 = 0;
  // test2.push("#");
  // console.log(test2);
  // return test
  //   .filter((x) => [x === "#"])
  //   .join("")
  //   .split("");
  // console.log(test2);
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("#")) {
      test3 += 1;
    } else if (str[i].includes("+")) {
      test4 += 1;
    } else {
      return [0, 0];
    }
  }
  // console.log(test4);
  return [test3, test4];
}
console.log(hashPlusCount("###+"));
