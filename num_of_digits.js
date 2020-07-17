// Create a function that will return an integer number containing the amount of digits in the given integer num.

// Examples:
// num_of_digits(1000) ➞ 4
// num_of_digits(12) ➞ 2
// num_of_digits(1305981031) ➞ 10
// num_of_digits(0) ➞ 1

// Notes:
// In case of negative number, do not count the negative sign!

function num_of_digits(num) {
  let test = num.toString().split("");
  //   console.log(test.length);
  if (test[0] === "-") {
    return test.slice(1, test.length).length;
  } else {
    return test.length;
  }
  //   return Math.abs(num.toString().length);
}
console.log(num_of_digits(-123));
