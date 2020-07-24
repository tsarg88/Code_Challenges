// Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich,
// the string must satisfy the following rules:
// The first and last characters must be a consonant.
// The character in the middle must be a vowel.

// Examples:
// isVowelSandwich("cat") ➞ true
// isVowelSandwich("ear") ➞ false
// isVowelSandwich("bake") ➞ false
// isVowelSandwich("try") ➞ false

// Notes:
// Return false if the word is not 3 characters in length.
// All words will be given in lowercase.
// y is not considered a vowel.

function isVowelSandwich(str) {
  let vowels = /[aeiou]/gi;
  let consonant = /[bcdfghjklmnpqrstvwxysz]/gi;
  //   console.log([...str][0]);
  //   return str[-1].match(vowels) && str[2].match(consonant) ? true : false;
  //   return [...str][2].match(consonant);
  return [...str].length < 4 &&
    [...str][0].match(consonant) &&
    [...str][str.length - 1].match(consonant) &&
    [...str][1].match(vowels)
    ? true
    : false;
}
console.log(isVowelSandwich("cat"));
