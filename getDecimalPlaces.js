// Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal
// point count towards the number of decimal places.

// Examples:
// getDecimalPlaces("43.20") ➞ 2
// getDecimalPlaces("400") ➞ 0
// getDecimalPlaces("3.1") ➞ 1

// Notes:
// Return 0 if the number doesn't have any decimal places (see example #2).

function getDecimalPlaces(num) {
  let test = num.split(".");
  return test.length === 1 ? 0 : test[1].length;
}
console.log(getDecimalPlaces("43.20"));
