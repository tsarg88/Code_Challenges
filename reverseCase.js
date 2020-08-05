// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Examples:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") ➞ "many thanks"
// reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

function reverseCase(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str[i] = result.push(str[i].toLowerCase());
    } else {
      str[i] = result.push(str[i].toUpperCase());
    }
  }
  return result.join("");
}
console.log(reverseCase("Happy Birthday"));
