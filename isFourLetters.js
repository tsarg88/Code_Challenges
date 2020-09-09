// Create a function that takes an array of strings and returns the words that are exactly four letters.

// Examples:
// isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]
// isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]
// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]

function isFourLetters(arr) {
  return arr.filter((n) => n.length === 4);
}
console.log(isFourLetters(["Tomato", "Potato", "Pair"]));
