// Create a function that takes a string and returns a new string with all vowels removed.
// Examples:
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"
// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

function removeVowels(str) {
  //   let test = [];
  //   let test2 = str.split("");
  //   console.log(typeof test2);
  let regex = /[aeiouAEIOU]/gi;
  console.log(str.replace("/[aeiouAEIOU]/gi", "-"));
  //   console.log("test");
  //   for (let i = 0; i < str.length; i++) {
  //     test.push(str[i].replace(/[aeiouAEIOU]/gi, "-"));
  //   }
  //   return test;
  return str.replace(regex, "");
}
console.log(
  removeVowels("I have never seen a thin person drinking Diet Coke.")
);

// return str.split("").filter((x) => "aeiouAEIOU".includes(x)).length;
