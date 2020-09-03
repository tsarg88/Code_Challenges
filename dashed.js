// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

// Examples:
// dashed("Edabit") ➞ "-E-d-a-b-i-t"
// dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"
// dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"

// Notes:
// A string can contain uppercase and lowercase vowels.
// Y is not considered a vowel.

// function dashed(str) {
//   let vow = "aeiouAEIOU";
//   let result = "";
//   for (i = 0; i < str.length; i++) {
//     if (vow.includes(str[i])) {
//       result += "-" + str[i] + "-";
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(dashed("Edabit"));

// Solution 2

function dashed(str) {
  return [...str].map((x) => (/[aeiou]/gi.test(x) ? `-${x}-` : x)).join("");
}
console.log(dashed("Edabit"));
