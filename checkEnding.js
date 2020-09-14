// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

// Examples
// checkEnding("abc", "bc") ➞ true
// checkEnding("abc", "d") ➞ false
// checkEnding("samurai", "zi") ➞ false
// checkEnding("feminine", "nine") ➞ true
// checkEnding("convention", "tio") ➞ false

function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}
console.log(checkEnding("abc", "bcd"));
