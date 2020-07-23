// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// Examples:
// indexShuffle("abcdefg") ➞ "acegbdf"
// indexShuffle("holiday") ➞ "hldyoia"
// indexShuffle("maybe") ➞ "myeab"

// Notes:
// 0 should be treated as an even number.

function indexShuffle(str) {
  const even = [...str].filter((char, i) => i % 2 === 0);
  const odd = [...str].filter((char, i) => i % 2);

  return [...even, ...odd].join("");
}
console.log(indexShuffle("abcdefg"));
