// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted
// as a phone number (e.g. (555) 555-5555).

// Examples:
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"

// Notes:
// Don't forget the space after the closing parenthesis.

// function formatPhoneNumber(numbers) {
//   let arr = "(XXX) XXX-XXXX".split("");
//   numbers.forEach((n) => {
//     arr[arr.indexOf("X")] = n;
//   });
//   return arr.join("");
// }
// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Solution 2
function formatPhoneNumber(numbers) {
  let masked = "(###) ###-####";
  numbers.forEach((v) => (masked = masked.replace("#", v)));
  return masked;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
