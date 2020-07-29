// Write a function that groups a string into parentheses cluster. Each cluster should be balanced.

// Examples:
// split("()()()") ➞ ["()", "()", "()"]
// split("((()))") ➞ ["((()))"]
// split("((()))(())()()(()())") ➞ ["((()))", "(())", "()", "()", "(()())"]
// split("((())())(()(()()))") ➞ ["((())())", "(()(()()))"]

// Notes:
// All input strings will only contain parentheses.
// Balanced: Every opening parens ( must exist with its matching closing parens ) in the same cluster.

function split(str) {
  let parenCount = 0;
  let result = [];
  let builder = "";

  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    builder += c;

    if (c == "(") {
      parenCount += 1;
    } else if (c == ")") {
      parenCount -= 1;

      if (parenCount == 0) {
        result.push(builder);
        builder = "";
      }
    }
  }

  return result;
}
console.log(split("()()()"));

// Solution 2
// function split(str) {
//   if (str.length == 0) {
//     return [];
//   }
//   var left = 0;
//   var right = 0;
//   var new_s = str;
//   var count = 0;
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] == "(") {
//       left++;
//     }
//     if (str[i] == ")") {
//       right++;
//     }
//     if (left == right) {
//       new_s =
//         new_s.substr(0, i + count + 1) + "." + new_s.substr(count + i + 1);
//       count++;
//     }
//   }
//   return new_s.split(".");
// }
