// Hamming distance is the number of characters that differ between two strings.

// Examples:
// hammingDistance("abcde", "bcdef") ➞ 5
// hammingDistance("abcde", "abcde") ➞ 0
// hammingDistance("strong", "strung") ➞ 1

function hammingDistance(str1, str2) {
  let counter = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      counter += 1;
    } else {
      continue;
    }
  }
  return counter;
}
console.log(hammingDistance("abcde", "bcdef"));
