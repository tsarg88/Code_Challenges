// Create a function that returns the index of the first vowel in a string.

// Examples:
// firstVowel("apple") ➞ 0
// firstVowel("hello") ➞ 1
// firstVowel("STRAWBERRY") ➞ 3
// firstVowel("pInEaPPLe") ➞ 1

// Notes:
// Input will be single words.
// Characters in words will be upper or lower case.
// "y" is not considered a vowel.
// Input always contains a vowel.

function firstVowel(str) {
  let regex = /[AEIOU]/;
  return str.toUpperCase().search(regex);
}
console.log(firstVowel("apple"));
console.log(firstVowel("hello"));
console.log(firstVowel("STRAWBERRY"));
console.log(firstVowel("pInEaPPLe"));
