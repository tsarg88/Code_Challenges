// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

// Examples:
// convertBinary("house") ➞ "01110"
// convertBinary("excLAIM") ➞ "0100000"
// convertBinary("moon") ➞ "0111"

// Notes:
// Conversion should be case insensitive (see example #2).

function convertBinary(str) {
  const regex = /[abcdefghijklm]/g;
  const regex2 = /[nopqrstuvwxyz]/g;
  return str.toLowerCase().replace(regex, 0).replace(regex2, 1);
}
console.log(convertBinary("house"));
