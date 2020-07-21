// Write a function that removes all capitals letters from a sentence except the first letter, put quotation marks around the sentence
// and add ", whispered Edabit." to the end.

// Examples:
// shhh("HI THERE!") ➞ "'Hi there!', whispered Edabit."
// shhh("tHaT'S Pretty awesOme") ➞ "'That's pretty awesome', whispered Edabit."
// shhh("") ➞ "'', whispered Edabit."

// Notes:
// How will you add a quotation mark symbol in a string without JavaScript getting confused?

function shhh(sentence) {
  let test = sentence.slice(1);
  let test2 = sentence.charAt(0).toUpperCase() + test.toLowerCase();
  //   console.log(test);
  return JSON.stringify(test2.toString("")) + "," + " whispered Edabit.";
}
console.log(shhh("HI THERE!"));

// Solution 2
// function shhh(sentence) {
//     return `"${sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()}", whispered Edabit.`
//   }
