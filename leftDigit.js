// Write a function that takes a string as an argument and returns the left most digit in the string.

// Examples:
// leftDigit("TrAdE2W1n95!") ➞ 2
// leftDigit("V3r1ta$") ➞ 3
// leftDigit("U//DertHe1nflu3nC3") ➞ 1
// leftDigit("J@v@5cR1PT") ➞ 5

function leftDigit(num) {
  const regex = /[0-9]/g;
  return Number(num.match(regex)[0]);
}
console.log(leftDigit("TrAdE2W1n95!"));
