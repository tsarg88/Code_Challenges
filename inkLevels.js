// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print
// before any of the colors run out.

// Examples:
// inkLevels({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
//   }) ➞ 10
//   inkLevels({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
//   }) ➞ 432
//   inkLevels({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
//   }) ➞ 0

function inkLevels(inks) {
  let total = Object.values(inks);
  console
  .log(total)
  return Math.min(...total);
  //   console.log(...total);
}
console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
);
