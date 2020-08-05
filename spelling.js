// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Examples:
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

function spelling(str) {
  return str.split("").map((c, i) => str.slice(0, i + 1));
}
console.log(spelling("bee"));

// Solution 2
// function spelling(str) {
// 	let newArr = [];
// 	for(let i = 1; i <= str.length; i++){
// 		newArr.push(str.slice(0, i));
// 	}
// 	return newArr;
// }
