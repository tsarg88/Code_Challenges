// Given two strings, create a function that returns the total number of unique characters from the combined string.
// Examples:
// countUnique("apple", "play") ➞ 5
// "appleplay" has 5 unique characters:
// "a", "e", "l", "p", "y"
// countUnique("sore", "zebra") ➞ 7
// "sorezebra" has 7 unique characters:
// "a", "b", "e", "o", "r", "s", "z"
// countUnique("a", "soup") ➞ 5
// Notes:
// Each word will contain at least one letter.
// All words will be lower cased.

// function countUnique(s1, s2) {
//   let test = [];
//   test.push(s1);
//   test.push(s2);
//   console.log(test);
//   return test
//     .join("")
//     .split("")
//     .filter(function (item, i, arg) {
//       return arg.indexOf(item) === i;
//     }).length;

//   for (i = 0; i < s1.length; i++) {
//     for (i2 = 0; i2 < s1.length; i2++) {
//       if (s1[i] != s2[i2]) {
//         test.push(s1[i]);
//       }
//     }
//   }
//   return test;
// }
// console.log(countUnique("apple", "play"));

// Method 2 using Set

// function countUnique(s1, s2) {
//   return new Set(s1 + s2).size;
// }
// console.log(countUnique("apple", "play"));

// Method 3 clean/thoughtful approach
// function countUnique(s1, s2) {
//   var mySet = [];
//   sum = s1 + s2;
//   //   console.log(typeof sum);
//   for (var i = 0; i < sum.length; ++i) {
//     if (mySet.indexOf(sum[i]) < 0) {
//       mySet.push(sum[i]);
//     }
//   }
//   return mySet.length;
// }
// console.log(countUnique("apple", "play"));

// Method 3 using includes() with ternary operator

function countUnique(s1, s2) {
  let number = 0;
  const x = s1.split("");
  const y = s2.split("");
  const all = x.concat(y);
  const unique = [];
  for (let i = 0; i < all.length; i++) {
    unique.includes(all[i]) ? i : unique.push(all[i]);
  }
  return unique.length;
}
console.log(countUnique("apple", "play"));
