// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples:
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "

function doubleChar(str) {
  let test = [];
  for (let i = 0; i < str.length; i++) {
    test.push(str[i].repeat(2));
  }
  return test.join("");
}
console.log(doubleChar("String"));
