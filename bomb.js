// Create a function that finds the word "bomb" in the given string. If there is a bomb, return "Duck!!!"
// otherwise return "There is no bomb, relax.".

// Examples:
// bomb("There is a bomb.") ➞ "Duck!!!"
// bomb("Hey, did you think ther is a bomb?") ➞ "Duck!!!"
// bomb("This goes boom!!!") ➞ "There is no bomb, relax."

// Notes:
// "bomb" may appear in different formats(uppercase/lowercase/mixed).

function bomb(str) {
  let word = "bomb";
  return str.toLowerCase().includes(word)
    ? "Duck!!!"
    : "There is no bomb, relax.";
}
console.log(bomb("There is a Bomb."));
