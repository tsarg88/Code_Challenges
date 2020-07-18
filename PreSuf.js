// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).
// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.

// Examples:
// isPrefix("automation", "auto-") ➞ true
// isSuffix("arachnophobia", "-phobia") ➞ true
// isPrefix("retrospect", "sub-") ➞ false
// isSuffix("vocation", "-logy") ➞ false

// Notes:
// The prefix and suffix arguments have dashes - in them.

function isPrefix(word, prefix) {
  let testp = prefix.split("").slice(0, -1).join("");
  //   let testw = word.split("");
  //   console.log(testp.slice(0).join(""));
  return word.startsWith(testp) ? true : false;
  //   if (testp.slice(0).join("") === testw.slice(0, testp.length).join("")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

function isSuffix(word, suffix) {
  let tests = suffix.split("").slice(1).join("");
  //   console.log(word);
  return word.endsWith(tests) ? true : false;
  //   if (word.endsWith(tests)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}
console.log(isPrefix("automation", "auto-"));
// console.log(isSuffix("arachnophobia", "-phobia"));
