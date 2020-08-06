// Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower
// case version if its ASCII code is odd.

// Examples:
// asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"
// asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"
// asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."

function asciiCapitalize(str) {
  result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) % 2 === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}
console.log(asciiCapitalize("to be or not to be!"));
