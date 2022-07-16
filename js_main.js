// function stackBoxes(n) {
//   return n > 0 ? Math.pow(n, n) : 0;
//   //   if (n == 0) {
//   //     return 0;
//   //   } else {
//   //     return Math.pow(n, n);
//   //   }
// }
// console.log(stackBoxes(0));

// function flipBool(b) {
//   return b == true ? 0 : 1;
// }
// console.log(flipBool(false));

// function isPlural(word) {
//   console.log(word.endsWith("s"));
// }
// console.log(isPlural("changes"));

// function footballPoints(wins, draws, losses) {
// 	return wins * 3 + draws * 1
// }

// function isOdd(num) {
//   if (num % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isOdd(-5));

// function validStrNumber(n) {
//   if (isNaN(n)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(validStrNumber("3..3"));

// function nSidedShape(n) {
//   let obj = {
//     1: "circle",
//     2: "semi-circle",
//     3: "triangle",
//     4: "square",
//     5: "pentagon",
//     6: "hexagon",
//     7: "heptagon",
//     8: "octagon",
//     9: "nonagon",
//     10: "decagon",
//   };
//   return obj[n];
// }
// console.log(nSidedShape(2));

// function longBurp(num) {
//   let word = "r";
//   return "Bu" + word.repeat(num) + "p";
// }
// console.log(longBurp(3));

// function spaceMeOut(str) {
//   return str.split("").join(" ");
// }
// console.log(spaceMeOut("space"));

// function countWords(str) {
//   return str.split(" ").length;
// }
// console.log(countWords("This is a test"));

// function both(n1, n2) {
//   if (n1 < 0 && n2 < 0) {
//     return true;
//   } else if (n1 > 0 && n2 > 0) {
//     return true;
//   } else if (n1 == 0 && n2 == 0) {
//     return true;
//   }
// }
// console.log(both(6, 2));

// function findSmallestNum(arr) {
//   return Math.min(...arr);
// }
// console.log(findSmallestNum([34, 15, 88, 2]));

// function firstLast(arr) {
//   return [arr.shift(), arr.pop()];
// }
// console.log(firstLast([5, 10, 15, 20, 25]));

// function addEnding(arr, ending) {
//   return arr.map((n) => n + ending);
// }
// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));

// function getFillings(sandwich) {
//   return sandwich.filter(() => sandwich.pop());
// }
// console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));

// function additiveInverse(arr) {
//   return arr.map((n) => -n);
// }
// console.log(additiveInverse([5, -7, 8, 3]));

// function repetition(txt, n) {
//   return txt.repeat(n);
// }
// console.log(repetition("ab", 3));

// function filterArray(arr) {
//   return arr.filter((n) => typeof n == "number");
// }
// console.log(filterArray([1, 2, "a", "b"]));

// function factorial(z) {
// 	for(i=0; i < z; i++){

//     }
// }

// function flip(y) {
//   return "dsad" ? y == 0 : "0";
// }
// console.log(flip(0));

// function charCount(myChar, str) {
//   return str.split("").filter((n) => n == myChar).length;
// }
// console.log(charCount("b", "big fat bubble"));

// const animal = "cat";

// for (let i = 0; i < animal.length; i++) {
//   console.log(animal[i]);
//   for (let j = 1; j < 8; j++) {
//     console.log(j);
//   }
// }

// const team = {
//   _players: [
//     {
//       firstName: "Luffy",
//       lastName: "Monkey",
//       age: 19,
//     },
//   ],
//   _games: [
//     {
//       opponent: "Crocodile",
//       teamPoints: 3,
//       opponentPoints: 2,
//     },
//   ],
//   get players() {
//     return this._players;
//   },
//   get games() {
//     return this._games;
//   },
//   addPlayer(firstName, lastName, age) {
//     const player = {
//       firstName,
//       lastName,
//       age,
//     };
//     this.players.push(player);
//   },
// };

// team.addPlayer("John", "Doe", 13);
// team.addPlayer("Jane", "Doe", 37);
// console.log(team.players);

// function factorial(int) {
//   let result = int;
//   while (int > 1) {
//     int--;
//     result = result * int;
//   }
//   return result;
// }
// console.log(factorial(3));

// function setTest(s) {
//   // let test = {
//   //   a: 1,
//   //   b: 2,
//   //   b: 2,
//   // };
//   // console.log(test);
//   // test = new Set();
//   let mySet = new Set();

//   mySet.add(1); // Set [ 1 ]
//   mySet.add(5); // Set [ 1, 5 ]
//   mySet.add(5); // Set [ 1, 5 ]
//   console.log(typeof mySet);
// }
// console.log(setTest());

// function countUnique(s1, s2) {
//   let number = 0;
//   const x = s1.split("");
//   const y = s2.split("");
//   const all = x.concat(y);
//   const unique = [];
//   for (let i = 0; i < all.length; i++) {
//     unique.includes(all[i]) ? i : unique.push(all[i]);
//   }
//   return unique.length;
// }

// const countUnique = (s1, s2) => {
//   let chars = s1.split("").concat(...s2);
//   return [...new Set(chars)].length;
// };
// console.log(countUnique("apple", "play"));

// const REGEXP = /(?:red|blue) flag/g;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("edabit");
//   }, 1000);
// });
// let test = promise();
// console.log(test);

// function isSymmetrical(num) {
//   return num.toString().split("").reverse().join("") === num.toString();
// }
// console.log(isSymmetrical(7224));

// function sortDescending(num) {
//   let test = num.toString();
//   // console.log(Number(test));
//   return Number(
//     test
//       .split("")
//       .sort(function (a, b) {
//         return b - a;
//       })
//       .join("")
//   );
// }
// console.log(sortDescending(123));

// function toArray(num) {
//   // console.log([...num.toString()]);
//   return [...num.toString()].map((s) => Number(s));
// }
// console.log(toArray(235));

// function toNumber(arr) {
//   return Number(arr.join(""));
// }
// console.log(toNumber([2, 3, 5]));

// function num_of_digits(num) {
//   return Math.abs(num.toString().length);
// }
// console.log(num_of_digits(-123));

// function arrayOperation(x, y, n) {
//   let test = [];
//   for (let i = x; i <= y; i++) {
//     if (i % n === 0) {
//       test.push(i);
//     }
//   }
//   return test;
// }
// console.log(arrayOperation(1, 10, 3));

// function equal(a, b, c) {

// }
// console.log(equal(3, 4, 3))

// function findMissingNumbers(arr) {
//   // Create sparse array with a 1 at each index equal to a value in the input.
//   var sparse = arr.reduce((sparse, i) => ((sparse[i] = 1), sparse), []);
//   // Create array 0..highest number, and retain only those values for which
//   // the sparse array has nothing at that index (and eliminate the 0 value).
//   return [...sparse.keys()].filter((i) => i && !sparse[i]);
// }

// var someArr = [7, 2, 3, 6, 5, 9, 1, 4, 8];
// var result = findMissingNumbers(someArr);
// console.log(result);

// const miss = (arr) => {
//   let missArr = [];
//   let l = Math.max(...arr);
//   for (i = 1; i < l; i++) {
//     if (arr.indexOf(i) < 0) {
//       missArr.push(i);
//     }
//   }
//   return missArr;
// };
// console.log(miss([7, 2, 3, 6, 5, 9, 1, 4, 8, 11]));

// function matrix(x, y, z) {
//   var final = [];
//   var tab = [];

//   for (var i = 0; i < y; i++) {
//     tab.push(z);
//     console.log(tab);
//   }

//   for (var i = 0; i < x; i++) {
//     final.push(tab);
//   }

//   return final;
// }
// console.log(matrix(3, 2, 3));

// string = "Go ahead, make my day.";
// console.log(string.split("a"));

// function pifagore(arr) {
//   return arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2 ? true : false;
// }
// console.log(pifagore([3, 4, 5]));

// function add_suffix(suffix) {
//   if (suffix.endsWith("s") || suffix.endsWith("l")) {
//     return suffix + "ly";
//   } else if (suffix.endsWith("r") || suffix.endsWith("h")) {
//     return suffix + "less";
//   } else {
//     return suffix + "ing";
//   }
// }
// console.log(add_suffix("hopeless"));

// function FizzBuzz(num) {
//   return num % 3 === 0 && num % 5 === 0
//     ? "FizzBuzz"
//     : num % 3 === 0
//     ? "Fizz"
//     : num % 5 === 0
//     ? "Buzz"
//     : String(num);
// }
// console.log(FizzBuzz(9));

// function reverse(bool) {
//   return typeof bool === "boolean" ? !bool : "aghandz";
// }
// console.log(reverse("ds"));
// return typeof bool === "boolean" ? !bool : "aghandz";

// function smallerNum(n1, n2) {
//   let result = Math.min(parseInt(n1), parseInt(n2));
//   return String(result);
// }
// smallerNum("21", "44");

// function gradePercentage(userScore, passScore) {
//   let s = "";
//   userScore = parseInt(userScore.substring(0, userScore.length - 1));
//   passScore = parseInt(passScore.substring(0, passScore.length - 1));
//   if (userScore >= passScore) {
//     s = "PASSED";
//   } else if (userScore < passScore) {
//     s = "FAILED";
//   }

//   return `You ${s} the Exam `;
// }
// console.log(gradePercentage("85%", "85%"));

// const nextElement = (arr) => {
//   const [secondLast, last] = arr.slice(-3);
//   console.log(last);
//   // return last + (last - secondLast);
// };
// console.log(nextElement([3, 5, 7, 9]));

// function addName(obj, name, value) {
//   return { ...obj, [name]: value };
// }
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

// function countCharacters(arr) {
//   return arr.join("").length;
// }
// console.log(countCharacters(["###", "###", "###"]));

// function isStrangePair(str1, str2) {
//   // let test = ["a", "b"];
//   // // test.push(["a", "b"]);
//   // let test0 = test[0];
//   // console.log(test0);
// let last2 = str2[str2.length - 1];
//   let last1 = str1[str1.length - 1];
//   if (str1[0] === last2 && last1 === str2[0]) {
//     return true;
//   }
//   false;
// }
// console.log(isStrangePair("ratio", "orator"));

// function howManyTimes(num) {
//   return `Ed${"a".repeat(num)}bit`;
// }
// console.log(howManyTimes(5));

// function removeFirstLast(str) {
//   // let last = str[str.length - 1];
//   let strtoarr = str.split("");
//   let beforelast = strtoarr.length - 1;
//   let length = strtoarr.length;
//   return length > 2 ? `${str.slice(1, beforelast)}` : str;
// }
// console.log(removeFirstLast("hello"));

// function mysteryFunc(arr, num) {
// let a = x / num if a - a === 0 return 0 else a -
// }
// console.log(mysteryFunc([5, 7, 8, 2, 1], 2));

// function asd(num){

// }
// console.log()

// console.log(3 % 2);
// console.log(4 % 2);
// console.log(5 % 2);
// console.log(6 % 2);
// console.log(7 % 2);
// console.log(8 % 2);
// console.log(9 % 2);
// console.log(11 % 2);
// console.log(13 % 2);
// console.log(5 % 3);
// console.log(7 % 3);

//function modulo(num1, num2) {
// var sign = num1 < 0 ? -1 : 1;
// var dividend = Math.abs(num1);
// var divisor = Math.abs(num2);

// if (dividend === 0) {
//   return 0;
// }
// if (dividend === 0 || isNaN(dividend) || isNaN(divisor)) {
//   return NaN;
// }
// if (dividend < divisor) {
//   return sign * dividend;
// }

//   var counter = num1;
//   while (counter >= num2) {
//     counter = counter - num2;
//   }
//   return counter;
// }

//console.log(modulo(237, 4));

// function mysteryFunc(arr, num) {
//   var counter = arr;
//   let result = [];
// for (let i = 0; i < counter.length; i++)
// while (let i = 0; i < counter.length; i++) {
//   console.log(counter[i]);
// counter = counter[i] - num
// }
//  }
//result.push(counter)
//return result;
// }
// console.log(mysteryFunc([5, 7, 8, 2, 1], 2));

// function replaceVowels(str, ch) {
//   let result = [];
//   // let regex = /aiou/g;
//   // console.log(str.includes("a"));
//   for (let i = 0; i <= str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "o" ||
//       str[i] === "i" ||
//       str[i] === "u"
//     ) {
//       result.push(ch);
//     } else {
//       result.push(str[i]);
//     }
//   }
//   return result.join("");
// }

// function removeKFromList(l, k) {
//   let output = [];
//   for (let i in l) {
//     if (l[i] !== k) {
//       output.push(l[i]);
//     }
//   }
//   return output;
// }
// console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle.
// The first 5 numbers of the sequence, or dots, are:
// 1, 3, 6, 10, 15
// function triangle(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(triangle(3));

// This challenges in about factorial
// paths(4) ➞ 24
// paths(1) ➞ 1
// paths(9) ➞ 362880
// function paths(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * paths(n - 1);
//   }
// }
// console.log(paths(4));
// Create a function that squares every digit of a number.
// function squareDigits(n) {
//   // return n.map(x => x**2)
//   const result = Array.from(String(n), arr);
//   return parseInt(result.map((n) => n ** 2).join(""));
// }
// console.log(squareDigits(9119));

// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...
// function boxSeq(step) {
//   var r = 0;
//   for (var i = 0; i < step; i++) {
//     if (i % 2 == 0) r += 3;
//     else r -= 1;
//   }
//   return r;
// }
// console.log(boxSeq(2));

// Create a function that returns the mean of all digits.
// function mean(num) {
//   let str = Array.from(String(num), Number);
//   let total = 0;
//   for (let i = 0; i < str.length; i++) {
//     total += str[i];
//   }
//   return Math.floor(total / str.length);
// }
// console.log(mean(512));

// Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.
// function isSastry(number) {
//   let conNum = "" + number + (number + 1);
//   // console.log(conNum);
//   // console.log(conNum % 1 == 0);
//   if (Math.sqrt(conNum) % 1 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isSastry(184));

// Create a function that takes his current age and returns the given age 20 (or 21) years,
// with number base in the format specified in the below examples.
// function happyBirthday(age) {
//   let base = age / 2;
//   if (age % 2 == 0) {
//     return `Mubashir is just 20, in base ${base}!`;
//   } else {
//     return `Mubashir is just 21, in base ${Math.floor(base)}!`;
//   }
// }
// console.log(happyBirthday(65));

// Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.
// function getBaseLog(x, y) {
//   return Math.log(y) / Math.log(x);
// }
// function solveForExp(a, b) {
//   return getBaseLog(a, b);
// }
// console.log(solveForExp(4, 1024));

// Let's say the string word is an occurrence of the string sequence if sequence contains word as a substring.
// Let's say the string word is a k-occurrence of the string sequence if sequence contains word repeated k times as a substring. Note that if word is an occurrence of sequence, it is a 1-occurrence as well.
// For example, if word = "ab" and sequence = "dabcacab", then word is a 1-occurrence of sequence but not a 2-occurrence, because sequence doesn't contain "abab" as a substring. On the other hand, the string "ca" is a 2-occurrence of sequence, since it contains "caca" as a substring.
// Given a string sequence and an array of strings words, your task is to find the maximal value of k for each element, such that words[i] is a k-occurrence of sequence. Return the k-values as an array of integers of length words.length.
// Example
// For sequence = "ababcbabc" and words = ["ab", "babc", "bca"], the output should be maxKOccurrences(sequence, words) = [2, 2, 0].
// words[0] = "ab" is a 2-occurrence of sequence, because sequence[0..4] = "abab";
// words[0] = "ab" is not a 3-occurence of sequence, because there is no substring "ababab" in sequence;
// words[1] = "babc" is a 2-occurrence of sequence, because sequence[1..8] = "babcbabc";
// words[1] = "babc" is not a 3-occurence of sequence, because there is no substring "babcbabcbabc" in sequence;
// words[2] = "bca" is a 0-occurrence of sequence, because there is no substring "bca" in sequence.L

// function maxKOccurences(str, arr) {
//   let output = [];

//   for (let word of arr) {
//     // console.log(word);
//     let curStr = word;
//     let count = 0;

//     while (str.includes(curStr)) {
//       count++;
//       curStr += word;
//     }

//     output.push(count);
//   }

//   return output;
// }
// console.log(maxKOccurences("ababcbabc", ["ab", "babc", "bca"]));

// Given a positive integer represented as a string number. The task is to count the number of its substrings that form an integer divisible by 3.

// const threeDivisibleSubsequences = (input) => {
//   let count = 0;
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i; j < input.length; j++) {
//       if (Number(input.slice(i, j + 1)) % 3 === 0) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
// console.log(threeDivisibleSubsequences("456"));

// Given an integer n, your task is to create a square frame of size n, represented
// as an array of strings. The frame should consists of empty space, enclosed by lines made of
// "*" characters on all the edges, like this:
// Example:
// For n = 8, the output should be:
/* ["********",
   "*      *",
   "*      *",
   "*      *",
   "*      *",
   "*      *",
   "*      *",
   "********"]
*/
// For n = 5, the output should be :
/* 
[
  "*****",
  "*    *",
  "*    *",
  "*    *", 
  "*****"
]
*/

// function frameGenerator(n) {
//   // let main = [];
//   // for (i = 0; i < n; i++) {
//   //   main.push("*");
//   // }
//   // return main.join().repeat(4).split();

//   // first/last row, all filled, nothing fancy
//   const fullRow = "*".repeat(n);
//   // a star + (n-2) spaces and another star at the end
//   // there are n - 2 spaces because if you look at columns,
//   // you have 1st and last row filled and n - 2 columns w/ spaces
//   const headTailRow = "*" + " ".repeat(n - 2) + "*";
//   const res = [];
//   res.push(fullRow);
//   for (let i = 0; i < n - 2; i++) res.push(headTailRow);
//   res.push(fullRow);
//   return res;
// }
// console.log(frameGenerator(5));

// function makeSquare(num) {
//   const arr = [];

//   // our nested array loops over y coord and then x
//   for (let y = 0; y < num; y++) {
//     // if we're on the first or last row then
//     // we just fill with stars and continue
//     if (y === 0 || y === num - 1) {
//       arr[y] = Array(num).fill("*");
//       continue;
//     }

//     // we dont have an array for this row assigned so we make one
//     if (!arr[y]) {
//       arr[y] = [];
//     }

//     // now we loop over the columns in this row
//     for (let x = 0; x < num; x++) {
//       // if its the first or last column we add a star
//       if (x === 0 || x == num - 1) {
//         arr[y][x] = "*";
//         // otherwise we add blank space
//       } else {
//         arr[y][x] = "";
//       }
//     }
//   }
//   return arr;
// }

// console.log(makeSquare(4));

// function frameGenerator(num) {
//   const arr = [];

//   // our nested array loops over y coord
//   for (let y = 0; y < num; y++) {
//     // if we're on the first or last row then
//     // we just fill with stars
//     if (y === 0 || y === num - 1) {
//       arr[y] = "*".repeat(num);

//       // otherwise.. one star at the beginning and end,
//       // and fill the middle with space
//     } else {
//       arr[y] = "*" + " ".repeat(num - 2) + "*";
//     }
//   }
//   return arr;
// }

// console.log(frameGenerator(5));

// // frameGenerator() solution that i most liked:
// const frameGenerator = (n) => {
//   // we know the easy cases
//   if (n === 1) return ["*"];
//   if (n === 2) return ["**", "**"];
//   // first/last row, all filled, nothing fancy
//   const fullRow = "*".repeat(n);
//   // a star + (n-2) spaces + another star at the end
//   // there are n - 2 spaces because if you look at columns,
//   // you have 1st and last row filled and n - 2 columns w/ spaces
//   const headTailRow = "*" + " ".repeat(n - 2) + "*";
//   const res = [];
//   res.push(fullRow);
//   for (let i = 0; i < n - 2; i++) res.push(headTailRow);
//   res.push(fullRow);
//   return res;
// };

// const n = prompt("N = ?");
// console.log(frameGenerator(3));

// function threeDivisibleSubsequences(number) {
//   let count = 0;
//   for (let i = 0; i < number.length; i++) {
//     for (let j = i; j < number.length; j++) {
//       if (Number(number.slice(i, j + 1) % 3 == 0)) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(threeDivisibleSubsequences("999"));

// function frameGenerator(n) {
//   let main = [];
//   for (i = 0; i < n; i++) {
//     if (i == 0 || i == n - 1) {
//       main[i] = "*".repeat(n);
//     } else {
//       main[i] = "*" + " ".repeat(n - 2) + "*";
//     }
//   }
//   return main;
// }
// console.log(frameGenerator(5));

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku
// puzzle according to the layout rules described above. Note that the puzzle represented by
// grid does not have to be solvable.

// function sudoku2(grid) {
//   const valid = (cb) => {
//     for (let i = 0; i < 9; i++) {
//       // console.log("i@", i);
//       const set = new Set();
//       for (let j = 0; j < 9; j++) {
//         // console.log("j@", i);
//         const item = cb(i, j);
//         if (item !== ".") {
//           if (set.has(item)) {
//             return false;
//           } else {
//             set.add(item);
//           }
//         }
//       }
//     }
//     return true;
//   };

//   return (
//     valid((i, j) => grid[i][j]) &&
//     valid((i, j) => grid[j][i]) &&
//     valid(
//       (i, j) =>
//         grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]
//     )
//   );
// }
// console.log(
//   sudoku2([
//     [".", ".", ".", "1", "4", ".", ".", "2", "."],
//     [".", ".", "6", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", "1", ".", ".", ".", ".", ".", "."],
//     [".", "6", "7", ".", ".", ".", ".", ".", "9"],
//     [".", ".", ".", ".", ".", ".", "8", "1", "."],
//     [".", "3", "6", ".", ".", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", "7", ".", ".", "."],
//     [".", ".", ".", "5", ".", ".", ".", "7", "."],
//   ])
// );

// set = new Set();
// set.add("1");
// set.add("2");
// console.log(set);

// function sudoku2(grid) {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       var c = grid[i][j];
//       console.log("tiyer!", grid[1][3]);
//       if (c !== ".") {
//         // check row
//         for (let z = 0; z < 9; z++) {
//           if (j !== z && grid[i][z] === c) return false;
//         }
//         // check column
//         for (let z = 0; z < 9; z++) {
//           console.log("steghum!", grid[z][j]);
//           if (i !== z && grid[z][j] === c) return false;
//         }
//         // check square
//         var a = i - (i % 3),
//           b = j - (j % 3);
//         for (let x = a; x < a + 3; x++) {
//           for (let y = b; y < b + 3; y++) {
//             if (x !== i && y !== j && grid[x][y] === c) return false;
//           }
//         }
//       }
//     }
//   }
//   return true;
// }
// console.log(
//   sudoku2([
//     [".", ".", ".", "1", "4", ".", ".", "2", "."],
//     [".", ".", "4", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", "1", ".", ".", ".", ".", ".", "."],
//     [".", "6", "7", ".", ".", ".", ".", ".", "9"],
//     [".", ".", ".", ".", ".", ".", "8", "1", "."],
//     [".", "3", "5", ".", ".", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", "7", ".", ".", "."],
//     [".", ".", ".", "5", ".", ".", ".", "7", "."],
//   ])
// );

// function firstNotRepeatingCharacter(s) {
//   for (var i = 0; i < s.length; i++) {
//     // console.log(s.indexOf(s[i]));
//     if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
//       return s[i];
//     }
//   }

//   return "_";
// }

// console.log(firstNotRepeatingCharacter("aibacabad"));

// function firstNotRepeatingCharacter(s) {
//   var arr = new Array(1).fill(0);
//   for (var i in s) {
//     // console.log(i);
//     var val = s.charCodeAt(i);
//     arr[val] = arr[val] ? "Infinity" : +i + 1;
//   }

//   //Return the character at the minimum index.
//   //If there is no such character, return '_'.
//   return s[Math.min(...arr.filter((x) => x)) - 1] || "_";
// }

// console.log(firstNotRepeatingCharacter("aibacabadt"));

// Math.min(parseInt(test.join()))

// Basic idea:
// - 26 is O(1), so make an array with length 26,
//    one entry for each character.
// - First time we see a value, remember the index.
// - After that, set the index to Infinity.

// function firstNotRepeatingCharacter(s) {
//   var map = new Array(26).fill(0);
//   for (var i in s) {
//     var val = s.charCodeAt(i);
//     map[val] = map[val] ? Infinity : +i + 1;
//   }

//   //Return the character at the minimum index.
//   //If there is no such character, return '_'.
//   // return s[Math.min(...map.filter((val) => val)) - 1] || "_";
//   console.log(3 =+ 1);
// }
// console.log(
//   firstNotRepeatingCharacter("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe")
// );

// function firstNotRepeatingCharacter(s) {
//   const arr = new Array(26).fill(0);
//   for (let i in s) {
//     // console.log(i);
//     let val = s.charCodeAt(i);
//     arr[val] = arr[val] ? "Exist" : +i + 1;
//   }

//   //Return the character at the minimum index.
//   //If there is no such character, return '_'.
//   // const withoutInfinity = (arr) => {
//   //   return arr;
//   // };
//   const str = arr.join();
//   const regex = /[1-9]/g;
//   const main = str.match(regex);
//   // console.log(...main);
//   if (main == null) {
//     return "_";
//   } else {
//     return s[Math.min(...main.filter((x) => x)) - 1];
//   }
//   // return s[Math.min(...main.filter((x) => x)) - 1] || "_";
// }
// console.log(
//   firstNotRepeatingCharacter("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe")
// );

// function firstNotRepeatingCharacter(s) {
//   for (let i in s) {
//     if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
//       return s[i];
//     }
//   }
//   return "_";
// }
// console.log(firstNotRepeatingCharacter("aibacabad"));

// function firstNotRepeatingCharacter(s) {
//   // console.log(s.indexOf("i") == "6");
//   for (var i = 0; i < s.length; i++) {
//     // console.log(i);
//     // var c = s.charAt(i);
//     if (s.indexOf(s[i]) == i && s.indexOf(s[i], i + 1) == -1) {
//       return s[i];
//     }
//   }
//   return "_";
// }
// console.log(firstNotRepeatingCharacter("abacabaabacaba"));

// function testLoop(s) {
//   for (let i in s) {
//     console.log(typeof i);
//   }
// }
// console.log(testLoop("abacabiad"));

// function bubbleSort(arr) {
//   const swap = (firstIndex, secondIndex) => {
//     let temp = arr[firstIndex];
//     arr[firstIndex] = arr[secondIndex];
//     arr[secondIndex] = temp;
//   };

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(j, j + 1);
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([8, 1, 5, 7, 4]));

// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the
// second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number
// for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
// Example
// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
// my solution:
// function firstDuplicate(a) {
//   const mainIndex = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < a.length; j++) {
//       if (a[i] == a[j + 1]) {
//         mainIndex.push(j + 1);
//       }
//     }
//   }

//   const solution = Math.min(...mainIndex);

//   return mainIndex.length > 0 ? a[solution] : -1;
// }
// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));

// console.log(firstDuplicate([2, 2]));

// agha's solution with better fuckin time/space complexity:

// function firstDuplicate(a) {
//   var obj = {};

//   for (let i = 0; i < a.length; i++) {
//     if (obj[a[i]] !== undefined) {
//       return a[i];
//     } else {
//       obj[a[i]] = i;
//     }
//   }
//   return -1;
// }
// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));

// function objTest() {
//   let arr = [1, 2, 3];
//   let obj = {};
//   obj[arr[0]] = 0;
//   obj[arr[1]] = 1;
//   return obj[1];
// }
// console.log(objTest());

// the solution that looks cool
// function rotateImage(a) {
//   return a.map((row, rowIndex) => a.map((val) => val[rowIndex]).reverse());
// }
// console.log(
//   rotateImage([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// the solution with for loops
// function rotateImage(a) {
//   let n = a.length;
//   console.log(n);

//   for (let row = n - 1; row >= 0; row--) {
//     for (let col = 0; col < n; col++) {
//       let item = a[row].shift();
//       a[col].push(item);
//     }
//   }

//   return a;
// }
// console.log(
//   rotateImage([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// function isCryptSolution(crypt, solution) {
//   let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let obj = {};

//   for (let i = 0; i < abc.length; i++) {
//     obj[abc[i]] = -1;
//   }

//   for (let i = 0; i < solution.length; i++) {
//     obj[solution[i][0]] = solution[i][1];
//   }

//   crypt = crypt.map((vString) =>
//     vString
//       .split("")
//       .map((v) => obj[v])
//       .join("")
//   );

//   const isValid = (str) => {
//     return !(str[0] == "0" && str.length > 1);
//   };

//   return isValid(crypt[0]) && isValid(crypt[1]) && isValid(crypt[2]) && true
//     ? Number(crypt[0]) + Number(crypt[1]) == Number(crypt[2])
//     : false;
// }
// console.log(
//   isCryptSolution(
//     ["SEND", "MORE", "MONEY"],
//     [
//       ["O", "0"],
//       ["M", "1"],
//       ["Y", "2"],
//       ["E", "5"],
//       ["N", "6"],
//       ["D", "7"],
//       ["R", "8"],
//       ["S", "9"],
//     ]
//   )
// );

// brute force approach
// function prefixSums(arr, k) {
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     if (sum == k) {
//       count++;
//     }
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = sum + arr[j];
//       if (sum == k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(prefixSums([1, 1, 1], 2));

// map approach
// var prefixSums = function (nums, k) {
//   var map = new Map();
//   map.set(0, 1);
//   var sum = 0;
//   var cnt = 0;
//   for (var num of nums) {
//     sum += num;
//     if (map.has(sum - k)) {
//       cnt += map.get(sum - k);
//     }
//     map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
//   }
//   return cnt;
// };
// console.log(prefixSums([1, 1, 1], 2));

// solution with subarrays
// function prefixSums(arr, k) {
//   let subarrays = 0;

//   const seen = {};
//   const sums = [];
//   let currentSum = 0;

//   // let test = arr[0] + 2;
//   // console.log(test);

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];
//     const diffWithK = currentSum - k;
//     if (diffWithK in seen) {
//       subarrays += seen[diffWithK];
//     }
//     if (currentSum == k) {
//       subarrays++;
//     }
//     if (currentSum in seen) {
//       seen[currentSum]++;
//     } else {
//       seen[currentSum] = 1;
//     }
//   }
//   return subarrays;
// }
// console.log(prefixSums([1, 1, 1], 2));

// ------- Linked Lists -----------

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// function removeKFromList(l, k) {
//   if (l === null) return null;
//   else {
//     l.next = removeKFromList(l.next, k);
//     return l.value === k ? l.next : l;
//   }
// }

// the full solution, which includes how to convert arr to list to pass it to ListNode and then covert it back to array
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// function removeKFromList(l, k) {
//   // create new list node
//   let list = new ListNode();
//   // assign list.next to the beginning of the given linked list
//   list.next = l;
//   // create new node(list) to use it to iterate and modify the main node list
//   let node = list;

//   // use while loop to loop while node.next is true(there is/are value)
//   while (node.next) {
//     // if the node.next.value is k
//     if (node.next.value == k) {
//       // assign/overwrite node.next to the next node
//       node.next = node.next.next;
//     } else {
//       // just move to the next node
//       node = node.next;
//     }
//   }
//   // return the modified list
//   return list.next;
// }

// // All changes are in the part below:

// function arrayToList(arr) {
//   return arr.reduceRight(
//     (next, val) => Object.assign(new ListNode(val), { next }),
//     null
//   );
// }

// function listToArray(list) {
//   const arr = [];
//   for (let node = list; node; node = node.next) {
//     arr.push(node.value);
//   }
//   return arr;
// }

// const list = arrayToList([3, 1, 2, 3, 4, 5]);
// const mainFun = removeKFromList(list, 3);
// const result = listToArray(mainFun);
// console.log(result);

// function prefixSums(arr, k) {
//   let subArr = 0;
//   const seen = {};
//   let currentSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     if (currentSum == k) {
//       subArr++;
//     }

//     const diffWithK = currentSum - k;
//     if (diffWithK in seen) {
//       subArr += seen[diffWithK];
//     }

//     seen[currentSum] = 1;
//   }
//   return subArr;
// }
// console.log(prefixSums([1, 1, 1, 1], 2));

// the relatively easy solution
// function isListPalindrome(l) {
//   l = JSON.stringify(l).slice(1, -1).split(",");
//   return l + "" == l.reverse();
// }
// console.log(isListPalindrome([0, 1, 9]));

// the hard solution using more "pure" LinkedList approach
// function ListNode(x) {
//   this.value = this.value;
//   this.next = null;
// }

// function isListPalindrome(l) {
//   let list = new ListNode();
//   list.next = l;

//   let res = [];
//   //   let node = list.next
//   while (list.next) {
//     res.push(list.next.value);
//     list.next = list.next.next;
//   }
//   return "" + res == res.reverse();
// }

// function arrayToList(arr) {
//   return arr.reduceRight(
//     (next, val) => Object.assign(new ListNode(val), { next }),
//     null
//   );
// }

// function listToArray(list) {
//   const arr = [];
//   for (let node = list; node; node = node.next) {
//     arr.push(node.value);
//   }
// }

// const list = arrayToList([1, 1, 2]);
// const mainFun = isListPalindrome(list);
// listToArray(mainFun);
// console.log(mainFun);

// function WhileTest(arr) {
//   let n = 0;

//   do {
//     n = n + 1;
//   } while (n < 3);
//   return n;
// }
// console.log(WhileTest([1, 2, 3, 4]));

// brute force i payav
// function pairWithGivenDifference(list, diff) {
//   for (let i = 0; i < list.length; i++) {
//     for (let j = i; j < list.length; j++) {
//       if (list[i] - list[j + 1] == diff) {
//         return list[i] + "-" + list[j + 1];
//       }
//     }
//   }
//   for (let a = list.length - 1; a >= 0; a--) {
//     for (let b = a; b >= 0; b--) {
//       if (list[a] - list[b - 1] == diff) {
//         return list[a] + "-" + list[b - 1];
//       }
//     }
//   }
// }
// console.log(pairWithGivenDifference([5, 20, 3, 2, 50, 80], 17));

// function setTest() {
//   let mySet = new Set();
//   let obj = { a };
//   mySet.add(obj);
//   // mySet.add(2);
//   return mySet;
// }
// console.log(setTest());

// solution with set
// function pairWithGivenDifference(list, diff) {
//   let set = new Set();

//   for (let i = 0; i < list.length; i++) {
//     let val = list[i];
//     if (set.has(diff + val)) {
//       return [diff + val, val];
//     }
//     if (set.has(list[i] - diff)) {
//       return [val, val - diff];
//     }
//     set.add(val);
//   }
//   return false;
// }
// console.log(pairWithGivenDifference([5, 20, 3, 2, 50, 80], 1));

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// function addTwoHugeNumbers(a, b) {
//   let la = new ListNode();
//   let lb = new ListNode();
//   la = a;
//   lb = b;
// }

// function arrayToList(arr) {
//   return arr.reduceRight(
//     (next, val) => Object.assign(new ListNode(val), { next }),
//     null
//   );
// }

// function listToArray(list) {
//   const arr = [];
//   for (let node = list; node; node = node.next) {
//     arr.push(node.value);
//   }
// }

// const list = arrayToList([9876, 5432, 1999]);
// const list2 = arrayToList([1, 8001]);
// const mainFun = addTwoHugeNumbers(list, list2);
// listToArray(mainFun);
// console.log(mainFun);

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// function addTwoHugeNumbers(a, b) {
//   let la = new ListNode();
//   let lb = new ListNode();
//   la.next = a;
//   lb.next = b;
//   let res = [];

//   let nodeA = la;
//   let arrA = [];
//   while (nodeA.next) {
//     arrA.push(nodeA.next.value);
//     nodeA = nodeA.next;
//   }

//   let nodeB = lb;
//   let arrB = [];
//   while (nodeB.next) {
//     arrB.push(nodeB.next.value);
//     nodeB = nodeB.next;
//   }

//   // for(let i=0; i<arrA.length; i++){
//   if (arrA.length == 3 && arrB.length == 3) {
//     res.push(arrA[0] + arrB[0]);
//     res.push(arrA[1] + arrB[1]);
//     res.push(arrA[2] + arrB[2]);
//   }
//   // }

//   if (arrA.length !== arrB.length) {
//     let first = arrA;
//     let strFirst = first.join("");

//     let second = arrB;
//     let strSecond = second.join("");

//     let len = [];
//     let lenDiv = 0;
//     if (first.length >= second.length) {
//       len.push(first);
//       lenDiv += first.length;
//     } else {
//       len.push(second);
//       lenDiv += second.length;
//     }

//     // len.map((v) => v.map((val) => console.log(typeof val)));
//     strLen = len.join();

//     let arrLen = strLen.split("");
//     let filter = arrLen.filter((v) => v !== ",");
//     lenNum = filter.length;

//     let num = Number(strFirst) + Number(strSecond);
//     // console.log(lenDiv);

//     let numArr = Array.from(num);
//     let asd = String(num);
//     let asdArr = asd.split("");
//     // console.log(lenDiv);

//     let chunk = lenDiv + 1;
//     let test = [];
//     for (i = 0; i < asdArr.length; i += chunk) {
//       test.push(asdArr.slice(i, i + chunk));
//       // do whatever
//     }
//     let mainArr = [];
//     test = test.map((v) => {
//       mainArr.push(Number(v.join("")));
//     });
//     // console.log(mainArr);
//   }
// }

// function arrayToList(arr) {
//   return arr.reduceRight(
//     (next, val) => Object.assign(new ListNode(val), { next }),
//     null
//   );
// }

// function listToArray(list) {
//   const arr = [];
//   for (let node = list; node; node = node.next) {
//     arr.push(node.value);
//   }
// }

// const list = arrayToList([9876, 5432, 1999]);
// const list2 = arrayToList([1, 8001]);
// const mainFun = addTwoHugeNumbers(list, list2);
// listToArray(mainFun);
// console.log(mainFun);

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// function mergeTwoLinkedLists(l1, l2) {
//   let list1 = new ListNode();
//   let list2 = new ListNode();

//   list1.next = l1;
//   list2.next = l2;

//   let res = [];

//   let node1 = list1;
//   while (node1.next) {
//     res.push(node1.next.value);
//     node1 = node1.next;
//   }

//   let node2 = list2;
//   while (node2.next) {
//     res.push(node2.next.value);
//     node2 = node2.next;
//   }

//   res.sort(function (a, b) {
//     console.log("a", a);
//     console.log("b", b);
//     return a - b;
//   });

//   return res;
// }

// function arrayToList(arr) {
//   return arr.reduceRight(
//     (next, val) => Object.assign(new ListNode(val), { next }),
//     null
//   );
// }

// function listToArray(list) {
//   const arr = [];
//   for (let node = list; node; node = node.next) {
//     arr.push(node.value);
//   }
// }

// const list = arrayToList([5, 10, 15, 40]);
// const list2 = arrayToList([2, 3, 20]);
// const mainFun = mergeTwoLinkedLists(list, list2);
// listToArray(mainFun);
// console.log(mainFun);

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// function reverseNodesInKGroups(l, k) {
//   let list = new ListNode();
//   list.next = l;

//   let res = [];
//   let mainRes = [];
//   while (list.next) {
//     res.push(list.next.value);
//     list.next = list.next.next;
//   }
//   let main = [];
//   let chunk = k;

//   for (let i = 0; i < res.length; i += chunk) {
//     if (res.length >= i + chunk) {
//       mainRes.push(res.slice(i, i + chunk).reverse());
//     } else {
//       mainRes.push(res.slice(i, i + chunk));
//     }
//   }

//   mainRes.map((v) => v.map((val) => main.push(val)));

//   return main;
// }

// function arrayToList(arr) {
//   return arr.reduceRight(
//     (next, val) => Object.assign(new ListNode(val), { next }),
//     null
//   );
// }

// function listToArray(list) {
//   const arr = [];
//   for (let node = list; node; node = node.next) {
//     arr.push(node.value);
//   }
// }

// const list = arrayToList([1, 2, 3, 4, 5, 6, 7, 8]);
// const mainFun = reverseNodesInKGroups(list, 3);
// listToArray(mainFun);
// console.log(mainFun);

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// function rearrangeLastN(l, n) {
//   if (!n) return l;

//   let list = new ListNode();
//   list.next = l;

//   let res = [];
//   while (list.next) {
//     res.push(list.next.value);
//     list.next = list.next.next;
//   }

//   var cut = res.splice(res.length - n, n);
//   res = cut.concat(res);
//   return res;
// }

// function arrayToList(arr) {
//   return arr.reduceRight(
//     (next, val) => Object.assign(new ListNode(val), { next }),
//     null
//   );
// }

// function listToArray(list) {
//   const arr = [];
//   for (let node = list; node; node = node.next) {
//     arr.push(node.value);
//   }
// }

// const list = arrayToList([1, 2, 3, 4, 5, 6, 7, 8]);
// let mainFun = rearrangeLastN(list, 3);
// const res = listToArray(mainFun);
// console.log(mainFun);

// function groupingDishes(dishes) {
//   // let test = new Array(127);
//   // console.log(test.length);
//   var ingredients = {};
//   dishes.forEach((dish) => {
//     var ingIndex;
//     var ingredient;
//     for (ingIndex = 1; ingIndex < dish.length; ingIndex++) {
//       ingredient = dish[ingIndex];
//       if (!ingredients[ingredient]) {
//         ingredients[ingredient] = [dish[0]];
//       } else {
//         ingredients[ingredient].push(dish[0]);
//       }
//     }
//   });

//   var res = [];
//   // let test = Object.keys(ingredients);

//   Object.keys(ingredients)
//     .sort()
//     .forEach(function (key) {
//       console.log(ingredients["Tomato"]);
//       if (ingredients[key].length > 1) {
//         res.push([key].concat(ingredients[key].sort()));
//       }
//     });

//   // return res;
// }
// console.log(
//   groupingDishes([
//     ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//     ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//     ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//     ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"],
//   ])
// );

// class HashTable {
//   constructor() {
//     this.table = new Array(127);
//     this.size = 0;
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash += key.charCodeAt(i);
//     }
//     return hash % this.table.length;
//   }

//   set(key, value, val) {
//     const index = this._hash(key);
//     this.table[index] = [key, value, val];
//     this.size++;
//   }

//   get(key) {
//     const target = this._hash(key);
//     return this.table[target];
//   }

//   remove(key) {
//     const index = this._hash(key);

//     if (this.table[index] && this.table[index].length) {
//       this.table[index] = [];
//       this.size--;
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const ht = new HashTable();
// ht.set("Canada", 300, 700);
// ht.set("France", 100);
// ht.set("Spain", 110);
// console.log(ht.get("Canada"));

// function groupingDishes(dishes) {
//   let ingredients = {};

//   let ingIndex;
//   let ingValue;
//   dishes.forEach((dish) => {
//     for (ingIndex = 1; ingIndex < dish.length; ingIndex++) {
//       ingValue = dish[ingIndex];
//       if (!ingredients[ingValue]) {
//         ingredients[ingValue] = [dish[0]];
//       } else {
//         ingredients[ingValue].push(dish[0]);
//       }
//     }
//   });
//   let res = [];
//   Object.keys(ingredients)
//     .sort()
//     .forEach((key) => {
//       if (ingredients[key].length > 1) {
//         res.push([key].concat(ingredients[key].sort()));
//       }
//     });
//   console.log(res);
// }
// console.log(
//   groupingDishes([
//     ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//     ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//     ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//     ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"],
//   ])
// );

// const getColumn = (matrix, column) => {
//   // console.log("tesnanq", [...matrix]);
//   return [...Array(3).keys()].map((i) => {
//     return matrix[i][column];
//     // console.log(matrix[i][column]);
//   });
// };

// let test = [...Array(3).keys()];
// console.log(test);

// console.log(test[0][0]);
// // console.log("suaba", ...test[0]);
// const computeKernel = (matrix) => {
//   return [
//     ...getColumn(matrix, 0),
//     ...getColumn(matrix, 1),
//     ...getColumn(matrix, 2),
//   ];
// };

// const isSubMatrixFull = (matrix) => {
//   const n = matrix[0].length;
//   const answer = new Array(n - 2).fill(false);
//   let kernel = computeKernel(matrix);
//   for (let i = 0; i < n - 3; i++) {
//     if (new Set(kernel).size === 9) {
//       answer[i] = true;
//     }
//     if (i < n - 3) {
//       kernel = [...kernel.slice(3), ...getColumn(matrix, i + 3)];
//     }
//   }
//   return answer;
// };

// const numbers = [
//   [1, 2, 3, 2, 5, 7],
//   [4, 5, 6, 1, 7, 6],
//   [7, 8, 9, 4, 8, 3],
// ];
// console.log(isSubMatrixFull(numbers));

// function addTwoDigits(n) {
//   let arr = [n];
//   let res = arr
//     .join("")
//     .split("")
//     .map((v) => Number(v));
//   // console.log(res.length);
//   for (let i = 0; i < res.length; i++) {
//     let test = res[i];
//     const reducer = (previousValue, currentValue) =>
//       previousValue + currentValue;
//     return res.reduce(reducer);
//   }

//   // let test = [1, 2, 3];
//   // console.log(test.join());
// }
// console.log(addTwoDigits(12));

// function largestNumber(n) {
//   let res = `${9}`.repeat(n);
//   return Number(res);
// }
// console.log(largestNumber(4));

// function largestNumber(n) {
//   return Math.pow(10, n) - 1;
//   // let test = Math.pow(2, 3);
//   // console.log(test);
// }
// console.log(largestNumber(2));

// function candies(n, m) {
//   let res = m / n;
//   return Math.floor(res) * n;
// }
// console.log(candies(3, 10));

// kind of visual but long solution
// function seatsInTheater(nCols, nRows, col, row) {
//   let res = [];
//   for (let i = 0; i < nRows; i++) {
//     res.push("*".repeat(nCols));
//   }

//   res = res.map((v, i) => v.split("").slice(col - 1));
//   res = res.splice(row);
//   res = [].concat.apply([], res);
//   res = res.filter((v) => v == "*").length;
//   return res;
// }

// console.log(seatsInTheater(16, 11, 5, 3));

// clear way:
// function seatsInTheater(nCols, nRows, col, row) {
//   return (nCols - (col - 1)) * (nRows - row);
// }

// function arrayShift(elements) {
//   let original = elements;
//   let compare = [];
//   compare = compare.push(original);
//   for (let i = elements.length - 1; i >= 0; i--) {
//     compare[0] = original[i];
//     if (JSON.stringify(compare) == JSON.stringify(elements)) {
//       // return true;
//     } else {
//       // return false;
//     }
//   }
//   let arr = [1, 2, 3];
//   let arr2 = [1, 2, 1];
//   return JSON.stringify(arr) == JSON.stringify(arr2);
// }
// console.log(arrayShift([3, 4, 1, 2]));

// blyat' hisht dev@:
// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
// };
// console.log(rotate([3, 4, 1, 2], 3));

// time/space av qunogh solution, tipa bubble sorta brazni siqisha anum vmseto
// built in method neri!!, naxuy!!
// const reverse = (nums, from, to) => {
//   for (let i = from, j = to; i < j; i++, j--) {
//     let t = nums[i];
//     nums[i] = nums[j];
//     nums[j] = t;
//   }
// };

// const rotate = (nums, k) => {
//   k %= nums.length;
//   reverse(nums, 0, nums.length - 1);
//   reverse(nums, 0, k - 1);
//   reverse(nums, k, nums.length - 1);
//   return nums;
// };
// console.log(rotate([3, 4, 1, 2], 3));

// function maxMultiple(divisor, bound) {
//   // for(let i=0; i<bound; i++)
//   for (let i = bound; i > 0; i--) {
//     if (i % 3 == 0) {
//       return bound[i];
//     }
//   }
// }
// console.log(maxMultiple(10, 50));

// function circleOfNumbers(n, firstNumber) {

// }
// console.log(circleOfNumbers(10, 2))

// function callTest(arg, arg2) {
//   console.log(arg + arg2);
// }

// function callTestBack(cb) {
//   // let test = "OOOSSSDSD";
//   cb(1, 332);
// }
// console.log(callTestBack(callTest));

// function circleOfNumbers(n, firstNumber) {
//   let diff = n / 2;
//   // let res =  diff - firstNumber
//   // return Math.abs(res)

//   if (firstNumber < diff) {
//     return Math.abs(diff + firstNumber);
//   } else if (n == firstNumber) {
//     return 0;
//   } else {
//     return Math.abs(diff - firstNumber);
//   }
// }

// function circleOfNumbers(n, firstNumber) {
//   console.log("moduloin res@", 10 % 15);
//   return (firstNumber + n / 2) % n;
// }
// console.log(circleOfNumbers(12, 4));

// // console.log("dsadsa", 10 % 3);

// function lateRide(n) {
//   // n = 808
//   // 13 hr == 780
//   //  28 min remaining
//   let hr = Math.floor(n / 60);
//   // console.log(hr);
//   let min = n % 60;
//   conc = "" + hr + min;
//   conc = conc.split("").map((v) => Number(v));
//   res = conc.reduce((acc, cur) => acc + cur);
//   return res;
// }
// console.log(lateRide(808));

// function phoneCall(min1, min2_10, min11, s) {
//   let totalMin = 0;

//   s = s - min1;
//   totalMin++;

//   if (s != 0) {
//     for (let i = 0; i < 9; i++) {
//       if (s == 0) {
//         return totalMin;
//       } else {
//         s = s - min2_10;
//         totalMin++;
//       }
//     }
//     while (s != 0) {
//       s = s - min11;
//       totalMin++;
//     }
//   }

//   return totalMin;
// }

// function phoneCall(min1, min2_10, min11, s) {
//   let totalMin = 0;

//   if (s < min1) {
//     return 0;
//   }

//   s = s - min1;
//   totalMin++;

//   for (let i = 0; i < 9; i++) {
//     if (s <= min2_10) {
//       return totalMin;
//     } else {
//       s = s - min2_10;
//       totalMin++;
//     }
//   }

//   while (s >= min11) {
//     if (s >= min11) {
//       s = s - min11;
//       totalMin++;
//     }
//   }

//   // if (s > 0) {
//   //   s = s - min11;
//   //   totalMin++;
//   // }

//   return totalMin;
// }

// console.log(phoneCall(10, 10, 10, 8));

// function coolFeature(a, b, queries) {
//   let res = [];
//   let count = 0;
//   let count2 = 0;
//   let firstCompValue = queries[0][1];
//   let secondCompValue = queries[2][1];

//   // for(let i=0; i<)
//   let arrLong = a.length > b.length ? a : b;

//   for (let i = 0; i < arrLong.length; i++) {
//     for (let j = 0; j < arrLong.length; j++) {
//       if (a[i] + b[j] == firstCompValue) {
//         count2++;
//       }
//     }
//   }
//   changeValue = queries[2];
//   b.splice(0, 1, queries[1][2]);

//   for (let i = 0; i < arrLong.length; i++) {
//     for (let j = 0; j < arrLong.length; j++) {
//       if (a[i] + b[j] == secondCompValue) {
//         count++;
//       }
//     }
//   }
//   res.push(count, count2);
//   return res;
// }
// console.log(
//   coolFeature(
//     [1, 2, 3],
//     [3, 4],
//     [
//       [1, 5],
//       [0, 0, 1],
//       [1, 5],
//     ]
//   )
// );

// var triangleNumber = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (
//           nums[i] + nums[j] > nums[k] &&
//           nums[i] + nums[k] > nums[j] &&
//           nums[j] + nums[k] > nums[i]
//         )
//           count++;
//       }
//     }
//   }
//   return count;
// };
// console.log(triangleNumber([2, 2, 3, 4]));

// function knapsackLight(value1, weight1, value2, weight2, maxW) {
//   let weighVar = maxW;
//   let res = 0;
//   // if (weight1 > maxW || weight2 > maxW) {
//   //   return 0;
//   // }
//   let maxW1 = maxW;
//   let If1 = maxW1 - Math.min(weight1, weight2);
//   let If11 = If1 - Math.max(weight1, weight2);
//   if (Math.sign(If1) == -1 && Math.sign(If11) == -1) {
//     return 0;
//   }
// at this time we know that we can subtract
// to at least min wight
// but we would like to know if we can also subtract to
// the min weight then which value is bigger
// min value or max value?

// maxW should be compared without modification
// to the values of weight

//   let checkValue = Math.max(value1, value2);
//   // if(maxW >= Math.max(weight1, weight2)){
//   //   checkValue =
//   // }

//   let maxW2 = maxW;
//   let If2 = maxW2 - Math.min(weight1, weight2);
//   let If22 = If2 - Math.max(weight1, weight2);
//   if (Math.sign(If2) == -1 && Math.sign(If22) == 1) {
//     return (res += Math.min(value1, value2));
//   }

//   let maxW3 = maxW;
//   let If3;
//   if (maxW3 - Math.min(weight1, weight2) == 0) {
//     If3 = 1;
//   } else {
//     If3 = maxW3 - Math.min(weight1, weight2);
//   }
//   console.log("ss", If3);
//   let If33 = If3 - Math.max(weight1, weight2);
//   if (Math.sign(If3) == 1 && Math.sign(If3) == 1) {
//     if (If3 >= Math.max(weight1, weight2)) {
//       return (res += value1 + value2);
//     }
//     if (maxW >= Math.max(weight1, weight2)) {
//       return (res += Math.max(value1, value2));
//     }
//     if (If3 == 1) {
//       if (maxW >= weight1) {
//         return (res += value1);
//       }
//       if (maxW <= weight1) {
//         return (res += value2);
//       }
//       if ((res += Math.min(value1, value2))) {
//         return (res += Math.min(value1, value2));
//       }
//       return (res += Math.min(value1, value2));
//     }
//     if ((res += Math.max(value1, value2))) {
//       return (res += Math.max(value1, value2));
//     }
//   } else {
//     return (res += Math.max(value1, value2));
//   }

//   let maxW4 = maxW;
//   let If4 = maxW4 - Math.max(weight1, weight2);
//   let If44;

//   if (If4 - Math.min(weight1, weight2) == 0) {
//     If44 = 1;
//   } else {
//     If44 = If4 - Math.min(weight1, weight2);
//   }

//   if (Math.sign(If4) == 1 && Math.sign(If44) == 1) {
//     return res + (value1 + value2);
//   }
//   return res;
// }
//   if (Math.sign(1 == 1)) {
//     return "pod";
//   } else {
//     return false;
//   }
// }

// console.log(knapsackLight(10, 5, 6, 4, 9));

// aveli mmoshni variant@:
// function knapsackLight(value1, weight1, value2, weight2, maxW) {
//   if (weight1 + weight2 <= maxW) return value1 + value2;
//   if (value1 > value2 && weight1 <= maxW) return value1;
//   if (weight2 <= maxW) return value2;
//   if (weight1 <= maxW) return value1;
//   return 0;
// }
// console.log(knapsackLight(10, 5, 6, 4, 9));

// pizdec! amena lav@!:
// function knapsackLight(value1, weight1, value2, weight2, maxW) {
//   // return Math.max(
//   //   maxW >= weight1 && value1,
//   //   maxW >= weight2 && value2,
//   //   maxW >= weight1 + weight2 && value1 + value2
//   // );
//   let test = Math.max(1999, 2, 3);
//   console.log(test);
// }
// console.log(knapsackLight(4, 3, 6, 1, 8));

// function checkPalindrome(inputString) {
//   let arr = inputString.split("").reverse().join("");
//   // console.log(arr);
//   // console.log("abs" == "ahs");
//   return true ? inputString == arr : false;
// }
// console.log(checkPalindrome("aabaa"));

// function makeArrayConsecutive2(statues) {
//   let count = 0;
//   let sort = statues.sort(function (a, b) {
//     return a - b;
//   });

//   for (let i = 0; i < sort.length - 1; i++) {
//     if (sort[i + 1] - sort[i] > 0) {
//       let res = sort[i + 1] - sort[i];
//       count += res - 1;
//     }
//   }
//   return count;
// }
// function makeArrayConsecutive2(sequence) {
//   return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
// }

// console.log(makeArrayConsecutive2([6, 2, 3, 8]));

// function almostIncreasingSequence(sequence) {
//   let res = [];
//   for (let i = 0; i < sequence.length; i++) {
//     if (sequence.length > 2) {
//       sequence.pop(sequence[i]);
//     } else {
//       continue;
//     }

//     if (sequence[i] < sequence[i + 1]) {
//       res.push(1);
//     } else if (sequence[i] > sequence[i + 1]) {
//       res.push(0);
//     }
//   }
//   if (res.includes(0)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(almostIncreasingSequence([1, 3, 2]));

// function almostIncreasingSequence(sequence) {
//   var res = [];
//   if (sequence.length == 2) {
//     return true;
//   }

// if (sequence.some((val, i) => sequence.indexOf(val) !== i)) {
//   return false;
// }

// for (let i = 0; i < sequence.length; i++) {
//   if (sequence[i] >= sequence[i + 1]) {
//     // after comparison is true take out sequence[i]
//     // continue

//     res.push(sequence[i]);
//     sequence.splice(i, 1);

//     for (let j = 0; j < sequence.length; j++) {
//       if (sequence[j] > sequence[j + 1]) {
//         res.push(sequence[i]);
//       }
//     }
// count = count + 1;
// if (count > 1) {
//   return false;
// }
// if (
// sequence[i] >= sequence[i + 2] &&
// sequence[i - 1] >= sequence[i + 1]
// sequence.some((val, i) => sequence.indexOf(val) !== i)
// ) {
//   return false;
//     // }
//   }

//   // true ? res.length >  1 : false
// }

// if (res.length > 1) {
//   return false;
// } else {
//   return true;
// }

//   const counts = {};
//   const sampleArray = [1, 1, 2, 3];
//   sampleArray.forEach(function (x) {
//     counts[x] = (counts[x] || 0) + 1;
//   });
//   console.log(counts);
// }
// console.log(almostIncreasingSequence([1, 2, 1, 2]));

// function matrixElementsSum(matrix) {
//   let count = 0;

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; i < matrix[0].length; i++) {
//       if ((count += matrix[i][j])) {
//         if (matrix[i][j] == 0 && i < matrix.length - 1) {
//           matrix[i + 1][j] = 0;
//         }
//       }
//     }
//   }
//   return count;
// }
// console.log(
//   matrixElementsSum([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ])
// );
// clear outer bracket array with flat()
// inputArray = inputArray.flat();

// function allLongestStrings(inputArray) {
//   // let length = inputArray.reduce((x, y) => Math.max(x, y.length), 0);
//   let maxLng = Math.max(...inputArray.map((elem) => elem.length));
//   // console.log(maxLng);
//   return inputArray.filter((elem) => elem.length === maxLng);
// }
// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

// function commonCharacterCount(s1, s2) {
//   var s1Array = s1.split("");
//   var s2Array = s2.split("");
//   var count = 0;
//   let index = 0;

//   s1Array.filter((s1) => {
//     index = s2Array.findIndex((s2) => s2 == s1);
//     console.log(index);
//     if (index >= 0) {
//       count++;
//       s2Array.splice(index, 1);
//     }
//   });
//   // return count;
// }
// console.log(commonCharacterCount("aabcc", "adcaa"));

// function isLucky(n) {
//   let str = "" + n;
//   let half = str.length / 2;
//   com1 = [];
//   com2 = [];
//   com1.push(str.slice(0, half));
//   com2.push(str.slice(half));
//   com1 = com1.join("").split("");
//   com2 = com2.join("").split("");
//   const reducer = (previousValue, currentValue) =>
//     parseInt(previousValue) + parseInt(currentValue);
//   let res1 = com1.reduce(reducer);
//   let res2 = com2.reduce(reducer);
//   return res1 == res2 ? true : false;
// }
// console.log(isLucky(1230));

// function sortByHeight(a) {
//   let filtered = a.filter((v) => v !== -1);
//   let sorted = filtered.sort((a, b) => a - b);
//   return a.map((v) => (v == -1 ? -1 : sorted.shift()));
// }

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// function whileTest(N) {
//   let a = 0;
//   for (i = 0; i < N; i++) {
//     for (j = N; j > i; j--) {
//       a = a + i + j;
//     }
//   }
//   return a;
// }
// console.log(whileTest(2));

// function reverseInParentheses(s) {
//   while (true) {
//     let c = s.indexOf(")");

//     if (c === -1) {
//       break;
//     }

//     let o = s.substring(0, c).lastIndexOf("(");
//     console.log("stegh", s.substring(0, c).lastIndexOf("("));
//     let start = s.substring(0, o);
//     let middle = s
//       .substring(o + 1, c)
//       .split("")
//       .reverse()
//       .join("");
//     let end = s.substring(c + 1, s.length);

//     s = start + middle + end;
//   }

//   return s;
// }

// console.log(reverseInParentheses("foo(bar)baz(blim)"));

// function letVar() {
//   let me = "me";
//   let me = "me1";
//   console.log(me);
// }
// console.log(letVar());

// function alternatingSums(a) {
//   let res = [];
//   let even = 0;
//   let odd = 0;

//   for (let i = 0; i < a.length; i++)
//     if (i % 2 !== 0) {
//       odd += a[i];
//     } else {
//       even += a[i];
//     }
//   res.push(even);
//   res.push(odd);
//   return res;
// }
// console.log(alternatingSums([50, 60, 60, 45, 70]));

// function addBorder(picture) {
//   return [
//     "*".repeat(picture[0].length + 2),
//     ...picture.map((v) => `*${v}*`),
//     "*".repeat(picture[0].length + 2),
//   ];
// }
// console.log(addBorder(["abc", "ded"]));

// function areSimilar(a, b) {
//   var notEqual = {
//     first: [],
//     second: [],
//   };

//   for (var i = 0; i < a.length; i++)
//     if (a[i] !== b[i]) {
//       notEqual.first.push(a[i]);
//       notEqual.second.push(b[i]);
//     }

//   if (notEqual.first.length >= 3) return false;

//   if (
//     notEqual.first[0] === notEqual.second[1] &&
//     notEqual.first[1] === notEqual.second[0]
//   )
//     return true;

//   return false;
// }

// console.log(areSimilar([1, 2, 2], [2, 1, 1]));

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countdown(9));

// function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
//   if (
//     Math.max(yourLeft, yourRight) == Math.max(friendsLeft, friendsRight) &&
//     Math.min(yourLeft, yourRight) == Math.min(friendsLeft, friendsRight)
//   ) {
//     return true;
//   }
//   return false;
// }
// console.log(solution(10, 15, 15, 10));

// function solution(inputArray) {
//   let res = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] > inputArray[i + 1]) {
//       let temp = inputArray[i] - inputArray[i + 1];
//       res.push(temp);
//     }
//   }

//   for (let i = inputArray.length; i >= 0; i--) {
//     if (inputArray[i] > inputArray[i - 1]) {
//       let temp = inputArray[i] - inputArray[i - 1];
//       res.push(temp);
//     }
//   }

//   let final = Math.max(...res);
//   if (final > 0) {
//     return final;
//   } else {
//     return 0;
//   }
// }
// console.log(solution([10, 11, 13]));

// function solution(arr) {
//   // return Math.max(...arr.slice(1).map((x,i)=>Math.abs(x-arr[i])))
//   return Math.max(...arr.slice(0));
// }
// console.log(solution([10, 11, 13]));

// IsInfiniteProcess = (a, b) => (a + b) % 2 || a > b;
// console.log(IsInfiniteProcess(10, 10));

// more forthcoming approach
// function IsInfiniteProcess(a, b) {

//     if(a > b){
//         return true
//     }

//     if(a == b){
//       return false
//     }

//     else if(a<b){
//         if((b + a) % 2 == 1){
//             return true
//         } else {
//             return false
//         }
//     }

//     return false

// }

// function arithExpression(a, b, c) {
//   if (a + b == c) {
//     return true;
//   } else if (a - b == c) {
//     return true;
//   } else if (a * b == c) {
//     return true;
//   } else if (a / b == c) {
//     return true;
//   }
//   return false;
// }
// console.log(arithExpression(3, 2, 5));

// function tennisSet(score1, score2) {
//   if (score1 == 6 && score2 < 5) {
//     return true;
//   }
//   if (score1 < 5 && score2 == 6) {
//     return true;
//   }
//   if (
//     (score1 == 7 && score2 >= 5 && score2 < 7) ||
//     (score1 >= 5 && score1 < 7 && score2 == 7)
//   ) {
//     return true;
//   }
//   return false;
// }
// console.log(tennisSet(3, 6));

// function rangeBitCount(a, b) {
//   // var res = "";
//   // while (a <= b) {
//   //   res += a.toString(2);
//   //   a++;
//   // }
//   // return res.split("").filter((i) => i == 1).length;

//   // // return res.split('1').length-1;
// }
// console.log(rangeBitCount(2, 7));

// function mirrorBits(a) {
//   let bin = a.toString(2) + "";
//   let rev = Number(bin.split("").reverse().join(""));
//   return parseInt(rev, 2);
// }
// console.log(mirrorBits(97));

// function secondRightZeroBit(n) {
//   // return Math.pow(2,n.toString(2).split('').reverse().join("").split("0", 2).join("0").length);

//   return n.toString(2).split("").reverse().join("").split("0", 2);
// }
// console.log(secondRightZeroBit(37));

// function leastFactorial(n) {
//   let res = 1;
//   for (let i = 0; res < n; i++) {
//     res *= i;
//   }
//   return res;
// }
// console.log(17);

// function magicalWell(a, b, n) {
//   let res = 0;
//   for (let i = 0; i < n; i++) {
//     res += a * b;
//     a++;
//     b++;
//   }
//   return res;
// }
// console.log(magicalWell(1, 2, 2));

// Binary Search approach
// function search(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2);
//     const current = nums[middle];

//     if (current > target) {
//       // ignore the right part from the array and the current index
//       right = middle - 1;
//     } else if (current < target) {
//       // ignore the left part from the array and the current index
//       left = middle + 1;
//     } else {
//       return middle;
//     }
//   }
//   // return -1 if middle did never equal the target
//   return -1;
// }
// console.log(search([-1, 0, 3, 5, 9, 12], 9));

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let current = arr[mid];

//     if (current > target) {
//       right = mid - 1;
//     } else if (current < target) {
//       left = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));

// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) {
//       return i;
//     } else if (nums[i] > target) {
//       return i;
//     }
//   }
// };
// console.log(searchInsert([1, 3, 5, 6], 5));

// function arrReplace(inputArray, elemToReplace, substitutionElem) {
//   let str = inputArray.join(",");
//   for (let i = 0; i < inputArray.length; i++) {
//     str = str.replace(elemToReplace, substitutionElem);
//   }
//   return str.split(",").map(Number);
// }
// console.log(arrReplace([1, 2, 1], 1, 3));

// function arrReverse(arr) {
//   arr.length > 0 ? [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]: []
//   return arr
// }
// console.log(arrReverse([1, 2, 3, 4, 5]));

// function conArray(a, b) {
//   return a.concat(b);
// }
// console.log(conArray([2, 2, 1], [5, 6, 7]));

// function remArrPart(inputArray, l, r) {
//   return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
// }
// console.log(remArrPart([2, 4, 10, 9, 7], 1, 2));

// function remArrPart(inputArray, l, r) {
//   var toRemove = r - l + 1;
//   // console.log(toRemove);
//   inputArray.splice(0, 2);
//   return inputArray;
// }
// console.log(remArrPart([2, 3, 20, 3, 4, 5], 2, 4));

// function solution578665(arr) {
//   let half = arr.length / 2;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0] == arr[arr.length - 1]) {
//       if (arr.length % 2 == 0) {
//         if (arr[half] + arr[half - 1] == arr[0]) {
//           return true;
//         }
//       }
//     }
//   }
// }
// console.log(solution578665([7, 2, 2, 5, 10, 7]));

// function replaceMiddle(arr) {
//   let middle = arr.length / 2;
//   // console.log(arr.length);
//   if (arr.length == 2) {
//     let temp = arr[0] + arr[1];
//     // console.log("stegh", temp);
//     arr.splice(0, 2);
//     arr.push(temp);
//     return arr;
//   } else if (arr.length % 2 == 0) {
//     let temp = arr[middle - 1] + arr[middle];
//     arr.splice(middle - 1, 2);
//     console.log("asd", arr);
//     let newMiddle = arr.length / 2;
//     arr.splice(newMiddle, 0, temp);
//     console.log(temp);
//   }
//   return arr;
// }
// console.log(replaceMiddle([7, 2, 2, 5, 10, 7]));

// function makeArrayConsecutive(statues) {
//   let sort = statues.sort(function (a, b) {
//     return a - b;
//   });
//   // let max = statues.join(",");
//   // statues = statues.map((x) => Number(x));
//   // let max = Math.max(...statues);
//   // let temp = statues[sort.length - 2];
//   // let res = max - temp;
//   // return res;
//   let res = 0;
//   for (let i = 0; i < sort.length; i++) {
//     if (Number.isInteger(sort[i + 1])) {
//       if (sort[i] + 1 !== sort[i + 1]) {
//         let temp = sort[i + 1] - sort[i];
//         res += temp - 1;
//       }
//     }

//   }
//   return res;
// }
// console.log(makeArrayConsecutive([6, 2, 3, 8]));

// function isPower(n) {
//   if (n == 1) return true;
//   for (i = 2; i <= Math.sqrt(n); i++) {
//     for (j = 2; Math.pow(i, j) < n; j++);
//     if (Math.pow(i, j) == n) return true;
//   }
//   return false;
// }

// function isSumConsecutive(n) {
//   let i = 1;
//   let j = 1;
//   let count = 0;
//   let sum = 1;

//   while (j < n) {
//     if (sum == n) {
//       count++;
//       sum -= i;
//       i++;
//       j++;
//       sum += j;
//     } else if (sum < n) {
//       j++;
//       sum += j;
//     } else {
//       sum -= i;
//       i++;
//     }
//   }
//   return count;
// }
// console.log(isSumConsecutive(15));

// function solution(n) {

//   c=0 //counter
//   l=1 //smallest number to be added ('left')
//   r=2 //biggest number to be added ('right')
//   s=3 //sum of all numbers in range [l,r] (including l and r)

//   while(1) {

//       if(l==r) return c // rangesize < 2 -> no more fitting ranges can be found -> return counter

//       if(s==n) c++ // found a fitting range

//       if(s<=n) s += ++r // sum is too small: grow to right side

//       if(s>n) s -= l++ // sum is too big: shrink from left side

//   }
// }

// function pageNumbering(current, numberOfDigits) {
//   // store and count number of characters of current in a var
//   // pending: store value of current in a var as a res
//   // make a res var as an empty array
//   // make a for loop
//   // pending: increment res
//   // push the increment value of current to res
//   // store and count number of characters of res in a var as res_len
//   // compare res_len to numberOfDigits
//   // if number of characters of res_len is bigger than numberOfDigits
//   // return current

//   let cur_len = String(current).length;
//   let res = [];
//   for (let i = 0; i < numberOfDigits; i++) {
//     res.push(current + i);
//     let test = "1234";
//     let res_len = res.join("");
//     // res_len = res_len.split("").join("---");
//     console.log("stegh", res_len.length);
//     if (res_len.length === numberOfDigits) {
//       return res[res.length - 1];
//     } else if (res_len.length > numberOfDigits) {
//       return res[res.length - 2];
//     }
//   }

//   // let res = [];
//   // let cur_len = String(current);
//   // for (let i = 0; i < numberOfDigits; i++) {
//   //   if (cur_len.length == 2) {
//   //     // let cur = current;
//   //     // let cur_plus = cur + 1;
//   //     res.push(current + i);
//   //     let join = res.join("");
//   //   } else if (res.push(current + i) && res.join("").length < numberOfDigits) {
//   //     res.push(current + i);
//   //     return res[res.length - 1];
//   //   } else if (join.length == numberOfDigits - 1) {
//   //     return res[res.length - 1];
//   //   } else {
//   //     res.push(current++);
//   //     let len = res.join("").length;
//   //     if (len == numberOfDigits) {
//   //       return res[res.length - 1];
//   //     }
//   //   }
//   // }
// }
// console.log(pageNumbering(21, 6));

// function pageNumbering(current, numberOfDigits) {
//   while (numberOfDigits >= current.toString().length) {
//     numberOfDigits -= current.toString().length;
//     current++;
//   }
//   return current - 1;
// }
// console.log(pageNumbering(21, 6));

// function LateRide(n) {
//   return (Math.floor(n / 60) + "" + (n % 60))
//     .split("")
//     .map((v) => Number(v))
//     .reduce((acc, curr) => acc + curr);
// }

// console.log(LateRide(808));

// function mathMaxTest() {
//   return Math.max(1 + 1, 1 + 2, false);
// }
// console.log(mathMaxTest());

// function solution(s) {
//   let res = []
//   let dup = s.split("").reverse().join("");

//   // compare dup to s
//     // if palindrome return empty string
//   // if not, remove last character s and store to res
//     // compare dup to s
// }
// console.log(solution("abbab"))

// function checkPalindrome(inputString) {
//   let arr = inputString.split("").reverse().join("");
//   // console.log(arr);
//   // console.log("abs" == "ahs");
//   return true ? inputString == arr : false;
// }

// function solution(arr) {
//   let total = 0;

//   // let test = ["a", "b", "c"];
//   // console.log(arr.join().split(",").reverse());
//   function rev(num) {
//     test = String(num).split("").reverse().join("").replace("0", "");
//     return Number(test);
//   }
//   // console.log(rev(arr));
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (
//         arr[i] + rev(arr[j]) == arr[j] + rev(arr[i])
//       ) {
//         total += 1;
//       }
//     }
//   }
//   return total;
// }

// console.log(solution([1, 20, 2, 11]));

// function solution(numbers) {
//   let total = [];
//   for (let a = 0; a < numbers.length; a++) {
//     let b = a + 1;
//     let c = a + 2;
//     if (c === numbers.length) {
//       return total;
//     } else if (
//       (numbers[a] < numbers[b] && numbers[b] > numbers[c]) ||
//       (numbers[a] > numbers[b] && numbers[b] < numbers[c])
//     ) {
//       total.push(1);
//     } else {
//       total.push(0);
//     }
//     // for (let b = 1; b < numbers.length; b++) {
//     //   for (let c = 2; c < numbers.length; c++) {
//     //     if (numbers[a] < numbers[b] > numbers[c]) {
//     //       total.push(1);
//     //     }
//     //   }
//     // }
//   }

//   return total;
// }
// console.log(solution([1, 2, 1, 3, 4]));

// function solution(numbers) {
//   const swap = (firstIndex, secondIndex) => {
//     let temp = numbers[firstIndex];
//     numbers[firstIndex] = numbers[secondIndex];
//     numbers[secondIndex] = temp;
//   };
//   for (let a = 0; a < numbers.length; a++) {
//     let b = a + 1;
//     if (numbers[a] > numbers[b]) {
//       swap(a, b);
//     }
//   }

//   if (
//     numbers.every(function (x, i) {
//       return i === 0 || x >= numbers[i - 1];
//     })
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(solution([1, 3, 900, 10]));

// solution = (n) => {
//   let count = 0;
//   let m = {};
//   let arr = [];

//   // Find divisiors
//   //starting for 2 loops, starting from 1 to n and fincding divisors; saving them to m object
//   for (let i = 1; i <= n; i++) {
//     m[i] = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) m[i]++;
//     }
//   }

//   // Find Weakness
//   // starting back loop of n, if divisors(values of m object) is less than n,
//   // increase count
//   while (n > 0) {
//     for (let l = n - 1; l > 0; l--) {
//       if (m[n] < m[l]) count++;
//     }
//     arr.push(count);
//     count = 0;
//     n--;
//   }

//   // Find weakest and its quantity, finds max value of saved values in arr,
//   // saves them in weakness, returns weakness and count as number of same values as weakness
//   let weakness = Math.max(...arr);
//   for (let k in arr) {
//     if (weakness === arr[k]) count++;
//   }
//   return [weakness, count];
// };

// function solution(a) {
//   // if (
//   //   a.sort(function (a, b) {
//   //     return b + a;
//   //   })
//   // ) {
//   //   return false;
//   // }
//   let sort = a.sort(function (a, b) {
//     return a - b;
//   });
//   let res = [];
//   // let sort = a.sort((a, b) => a - b);
//   // console.log(sort);
//   let len = sort.length - 1;
//   for (len; len > 0; len--) {
//     // console.log(sort[len], sort[len - 1], sort[0]);
//     if (sort[len] - sort[len - 1] === sort[0]) {
//       res.push(true);
//     }
//   }
//   let test = [true, true, true];
//   return test.every((val) => val === res[0]);
// }
// console.log(solution([1, 3, 5, 6, 4, 2]));

// function solution(arr, m) {
//   let res = [];
//   let total = [];
//   for (let i = 0; i < arr.length - (m - 1); i++) {
//     let index = m + i;
//     for (let j = i; j < index; j++) {
//       console.log("res", res);
//       res.push(arr[j]);
//       console.log("length of res", res.length, res);
//       if (res.length === m) {
//         console.log("hateee");

//         var counts = {};
//         res.forEach(function (n) {
//           // if property counts[n] doesn't exist, create it
//           counts[n] = counts[n] || 0;
//           // now increment it
//           counts[n]++;
//         });

//         // iterate counts object and remove any that aren't dups
//         for (var key in counts) {
//           if (counts[key] < 2) {
//             delete counts[key];
//           }
//         }

//         let test;
//         var vals = Object.keys(counts).map(function (key) {
//           test = counts[key];
//         });
//         // console.log('test', test)

//         res = [];
//         test > 0 ? total.push(test) : total.push(1);
//       }
//     }
//   }
//   return total;
// }
// console.log(solution([2, 1, 2, 3, 3, 2, 2, 2, 2, 1], 3));

// function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
//   // let first_car =  ride_time * cost_per_minute[0] + ride_distance * cost_per_mile[0]
//   // first_car = Number(first_car.toFixed(1))
//   // let second_car = ride_time * cost_per_minute[1] + ride_distance * cost_per_mile[1]
//   // let third_car = ride_time * cost_per_minute[2] + ride_distance * cost_per_mile[2]
//   // let fourth_car = ride_time * cost_per_minute[3] + ride_distance * cost_per_mile[3]
//   // let res = []
//   // res.push(first_car, second_car, third_car, fourth_car)
//   // return res
//   let res = [];
//   for (let i = 0; i < cost_per_minute.length; i++) {
//     res.push(Math.ceil(ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]))
//   }
//   return res;
// }
// console.log(solution(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));

// function solution(departure, destination) {
//   // return (destination[0] - departure[0]) + (destination[1] - departure[1])
//   console.log(Math.ceil(departure[0]));
//   if (departure[0] % 1 !== 0) {
//     departure[0] = 1 - departure[0];
//   }
//   if (departure[1] % 1 !== 0) {
//     departure[1] = 1 - departure[1];
//   }
//   if (destination[0] % 1 !== 0) {
//     destination[0] = 1 - destination[0];
//   }
//   if (destination[1] % 1 !== 0) {
//     destination[1] = 1 - destination[1];
//   }
//   // return destination[0] - departure[0] + (destination[1] - departure[1]);
// }
// console.log(solution([0.4, 1], [0.9, 3]));

// Call back functions are PASSED IN to higher order functions as an argument
// Higher Order Functions RECEIVE a callback function as an argument
// example:
// Higher order function
// function calc(num1, num2, operator) {
//   return operator(num1, num2);
// }
// // Call back function
// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log(calc(2, 4, add));

// function solution(a, k) {
//   let res = 0;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if ((a[i] + a[j]) % 3 == 0) {
//         res += 1;
//       }
//     }
//   }
//   return res;
// }
// console.log(solution([1, 2, 3, 4, 5], 3));

// function solution(n, a) {
//   let res = [];
//   if (a.length == 1) {
//     return a;
//   }
//   for (let i = 0; i < 1; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       let c = j - 1;
//       let temp = a[c] + a[j] + a[j + 1];
//       if (!isNaN(temp)) {
//         res.push(a[c] + a[j] + a[j + 1]);
//       } else {
//         res.push(a[c] + a[j]);
//       }
//     }
//   }
//   let test = a[0] + a[1];
//   res.unshift(test);
//   return res;
// }

// function solution(trainingData) {
//   let div = 0;
//   let res = [];
//   for (let i = 0; i < trainingData.length; i++) {
//     if (Math.sign(trainingData[i][1]) == 1 && trainingData[i][1] === 1) {
//       res.push(trainingData[i][0]);
//       div += 1;
//     }
//   }
//   let total = res.reduce((acc, curr) => acc + curr, 0) / div;
//   if (total === "null" || total === undefined || isNaN(total)) {
//     return 0;
//   } else {
//     return total;
//   }
// }

// function solution(domains) {
//   return domains.map(
//     (v) =>
//       ({ m: "commercial", g: "organization", t: "network", o: "information" }[
//         v.slice(-1)
//       ])
//   );
//   // let test = domains[0].slice(2);
//   // console.log(test);
//   // let res = [];
//   // //domains = domains[0].split(".");
//   // // console.log(domains[domains.length - 1]);
//   // for (let i = 0; i < domains.length; i++) {
//   //   let finder = domains[i].split(".");
//   //   // console.log(finder);
//   //   if (finder[finder.length - 1].includes("org")) {
//   //     res.push("organization");
//   //   } else if (finder[finder.length - 1].includes("com")) {
//   //     res.push("commercial");
//   //   } else if (finder[finder.length - 1].includes("net")) {
//   //     res.push("network");
//   //   } else if (finder[finder.length - 1].includes("info")) {
//   //     res.push("information");
//   //   }
//   // }
//   // return res;
// }
// console.log(
//   solution(["en.wiki.org", "codesignal.com", "happy.net", "code.info"])
// );

// function solution(l, fares) {
//   // quick method with filter
//   let cat = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
//   let i = fares.filter((v) => v * l <= 20).length - 1;
//   return cat[i];
//   // more easy to understand but long solution
//   // let res = [];
//   // for (let i = 0; i < fares.length; i++) {
//   //   res.push(fares[i] * l);
//   // }
//   // for (let i = 0; i < res.length; i++) {
//   //   if (20 === res[i]) {
//   //     return cat[i];
//   //   } else if (20 < res[i]) {
//   //     return cat[i - 1];
//   //   }
//   // }
// }
// console.log(solution(30, [0.3, 0.5, 0.7, 1, 1.3]));

// function solution(threshold, ratings) {
//   const res = [];
//   const reducer = (previousValue, currentValue) => previousValue + currentValue;
//   for (let i = 0; i < ratings.length; i++) {
//     // console.log('reducer', ratings[i].reduce(reducer) )
//     let sum = ratings[i].reduce(reducer);
//     if (sum / ratings[i].length < threshold) {
//       res.push(i);
//     }
//   }
//   return res;
// }

// function solution(systemNames, stepNumbers) {
//   let res = [];
//   const stage1 = [];
//   const stage2 = [];
//   const dragon = [];
//   const Falcon_9 = [];
//   const CrewDragon = [];
//   for (let i = 0; i < systemNames.length; i++) {
//     if (systemNames[i] === "stage_1") {
//       stage1.push(stepNumbers[i]);
//     }
//   }
//   for (let i = 0; i < systemNames.length; i++) {
//     if (systemNames[i] === "stage_2") {
//       stage2.push(stepNumbers[i]);
//     }
//   }

//   for (let i = 0; i < systemNames.length; i++) {
//     if (systemNames[i] === "dragon") {
//       dragon.push(stepNumbers[i]);
//     }
//   }

//   for (let i = 0; i < systemNames.length; i++) {
//     if (systemNames[i] === "Falcon 9") {
//       Falcon_9.push(stepNumbers[i]);
//     }
//   }

//   for (let i = 0; i < systemNames.length; i++) {
//     if (systemNames[i] === "CrewDragon") {
//       CrewDragon.push(stepNumbers[i]);
//     }
//   }

//   function checkDuplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//         return false;
//       }
//     }
//   }

//   if (
//     checkDuplicate(stage1) === false ||
//     checkDuplicate(stage2) === false ||
//     checkDuplicate(dragon) === false ||
//     checkDuplicate(Falcon_9) === false ||
//     checkDuplicate(CrewDragon) === false
//   ) {
//     return false;
//   }

//   function isAscending(arr) {
//     return arr.every(function (x, i) {
//       return i === 0 || x >= arr[i - 1];
//     });
//   }
//   res.push(isAscending(stage1));
//   res.push(isAscending(stage2));
//   res.push(isAscending(dragon));
//   res.push(isAscending(Falcon_9));
//   res.push(isAscending(CrewDragon));
//   const answer = (val) => val === true;

//   return res.every(answer) === true ? true : false;
// }

// function isAscending(arr) {
//   return arr.every(function (x, i) {
//     return i === 0 || x >= arr[i - 1];
//   });
// }
// console.log(isAscending([2, 1]));

// function checkDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//       return false;
//     }
//   }
// }
// console.log(checkDuplicate([1, 1, 2]));

// let solution = (systemNames, stepNumbers) => {
//   let obj = {};
//   for(let i=0; i<stepNumbers.length;i++){
//       if(obj[systemNames[i]] >= stepNumbers[i]){
//           return false;
//       }
//       obj[systemNames[i]] = stepNumbers[i];
//   }
//   return true;
// }

// console.log(
// solution(
// ["stage_1",
// "stage_2",
// "dragon",
// "stage_1",
// "stage_2",
// "dragon"],
//   [1, 10, 11, 2, 12, 111]
// )
// );

// function solution(time) {
//   let res = [];

//   // let compare = ["12"];
//   let split = time.split(":");
//   let zero_based = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
//   // console.log(typeof Number(split[0]));

//   if(time.length === 0){
//       return false
//   }

//   for (let i = 0; i <= 9; i++) {
//     console.log('zero_based[i]', zero_based[i])
//       if (Number(split[0]) === Number(zero_based[i])) {
//         res.push(Number(split[i]));
//     }
//   }

//   for (let i = 12; i <= 23; i++) {
//     console.log('zero_based[i]', zero_based[i])
//     if (Number(split[0]) === i) {
//       res.push(i);
//     } else if (Number(split[0]) === Number(zero_based[i])) {
//       res.push(Number(split[i]));
//     }
//   }
//   for (let i = 0; i <= 60; i++) {
//     if (Number(split[1]) === Number(zero_based[i])) {
//       res.push(Number(split[i]));
//     } else if (Number(split[1]) === i) {
//       res.push(Number(split[1]));
//     }
//   }

//   // res.splice(1, 0, ":");

//   return res.length === 2 ? true : false;
//   // console.log(res);
//   // let test = Number(res.join(""));
// }

// function solution(time) {
//   // let h, m;
//   let res;
//   // [h, m] = time.split(":");
//   time = time.split(":");
//   console.log(time);
//   // return Number(res[0]) < 24 && Number(res[1]) < 60 ? true : false;
// }
// console.log(solution("09:56"));

// function solution(l) {
//   let fast = l;
//   let slow = l;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow.value;
// }
// console.log(solution([5, 4, 3, 2, 1]));

// function solution(a) {
//   let bin = a.toString(2);
//   bin = bin.split("");
//   bin = bin.reverse();
//   bin = Number(bin.join(""));
//   res = parseInt(bin, 2);
//   return res;
// }
// console.log(solution(97));

// function solution(l) {
//   l = JSON.stringify(l).slice(1, -1);
//   // .split(",");
//   //   test = l.join();
//   console.log(l);
//   // return l + "" == l.reverse();
// }
// console.log(solution([0, 1, 1]));

// function solution(inputArray, l, r) {
//   return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
// }
// console.log(solution([2, 3, 2, 3, 4, 5], 2, 4));

// function solution(
//   marathonLength,
//   maxScore,
//   submissions,
//   successfulSubmissionTime
// ) {
//   let attempt = submissions === 1 ? 1 : submissions - 1;
//   let attemptScore = attempt * 10;
//   let formula =
//     successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength);
//   let res = maxScore - attemptScore - formula;
//   console.log(res);
//   if(0 <= res && res <= 200){
//     return res
//   } else if(res > 200){

//   }
//   // return res <= 200 ? 200 : res == 0 ? 0 : res
// }
// console.log(solution(100, 400, 95, -1));

// function solution(a, b) {
//   let res = [];
//   let bin = [];
//   let reducer = (previousValue, currentValue) => previousValue + currentValue;
//   for (let i = a; i <= b; i++) {
//     bin.push(i.toString(2));
//   }
//   for (let i = 0; i < bin.length; i++) {
//     res.push(bin[i].split("").map(Number).reduce(reducer));
//   }
//   return res.reduce(reducer);
//   // let test = [1, 2, 3, 4];
//   // return test.reduce((acc, curr) => acc + curr, 10);

//   // console.log(test);
// }
// console.log(solution(2, 7));

// function solution(param1, param2) {
//   // loop by lengthiest number's length
//   // take rightmost digit of param1 add to rightmost digit
//   // of param2; if the result is 2 digits then take
//   // rightmost digit and push to res(array)
//   // ... then reverse array ...

//   // edge case:
//   if (param1 === 0) {
//     return param2;
//   } else if (param2 === 0) {
//     return param1;
//   }

//   let temp = [];
//   let res = [];
//   let p1_convert = "" + param1;
//   p1_convert = p1_convert.split("");
//   let p2_convert = "" + param2;
//   p2_convert = p2_convert.split("");
//   let mLen = Math.max(p1_convert.length, p2_convert.length);

//   for (let i = 0; i < mLen; i++) {
//     // let reducer = (previousValue, currentValue) => previousValue + currentValue;
//     temp.push(p1_convert.pop());
//     if (temp.some((item) => item === undefined) === true) {
//       temp = [];
//     }
//     temp.push(p2_convert.pop());
//     temp = temp.map(Number).reduce((acc, curr) => acc + curr, 0);
//     temp = temp + "";
//     temp = temp.split("");
//     if (temp.length > 1) {
//       let num = temp.map(Number).pop();
//       res.push(num);
//       temp = [];
//     } else {
//       let num = temp.map(Number).pop();
//       res.push(num);
//       temp = [];
//     }
//   }
//   res.reverse();
//   return Number(res.join(""));
//   // console.log(res);
//   // let reducer = (previousValue, currentValue) => previousValue + currentValue;
//   // let test = ["1", "2", "3"];
//   // test.map(Number).reduce(reducer);
//   // console.log(test);
// }
// console.log(solution(456, 1734));

// function bubbleSort(arr) {
//   const swap = (firstIndex, secondIndex) => {
//     let temp = arr[firstIndex];
//     arr[firstIndex] = arr[secondIndex];
//     arr[secondIndex] = temp;
//   };
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > arr[j + 1]) {
//         swap(i, j + 1);
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([1, 5, 3, 2, 4]));

// function solution(dishes) {
//   var ingredients = {};

//   dishes.forEach(function (dish) {
//     var ingIndex;
//     var ingredient;
//     for (ingIndex = 1; ingIndex < dish.length; ingIndex++) {
//       ingredient = dish[ingIndex];
//       if (!ingredients[ingredient]) {
//         ingredients[ingredient] = [dish[0]];
//       } else {
//         ingredients[ingredient].push(dish[0]);
//       }
//     }
//   });

//   var res = [];
//   Object.keys(ingredients)
//     .sort()
//     .forEach(function (key) {
//       if (ingredients[key].length > 1) {
//         res.push([key].concat(ingredients[key].sort()));
//       }
//     });
//   return res;
// }

// function solution(dishes) {
//   let obj = {};
//   let res = [];
//   dishes.forEach(function (dish) {
//     for (let i = 1; i < dish.length; i++) {
//       let ingredient = dish[i];
//       if (!obj[ingredient]) {
//         obj[ingredient] = [dish[0]];
//       } else {
//         obj[ingredient].push(dish[0]);
//       }
//     }
//   });

//   Object.keys(obj)
//     .sort()
//     .forEach(function (key) {
//       if (obj[key].length > 1) {
//         res.push([key].concat(obj[key].sort()));
//       }
//     });
//   return res;
// }
// console.log(
//   solution([
//     ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//     ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//     ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//     ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"],
//   ])
// );

// function solution(arr) {
//   // edge case
//   if (arr.length == 1 && arr[0] === 0) {
//     return 1;
//   } else if (!arr.includes(0)) {
//     return 0;
//   }

//   arr.sort((a, b) => (a < b ? -1 : ""));
//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i] + 1;
//     }
//   }
// }
// console.log(solution([3, 1, 0]));

// function solution(sentence) {
//   // convert string to arr
//   sentence = sentence.split(" ");
//   // use reverse() method
//   sentence = sentence.reverse();

//   // convert back to string and return
//   return sentence.join(" ");
// }
// console.log(solution("Man bites dog"));

// function solution(s) {
//   let res = 0;
//   let vowels = ["a", "e", "i", "o", "u", "y"];

//   for (let i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       res += 1;
//     } else {
//       res += 2;
//     }
//   }
//   return res;
// }
// console.log(solution("abcde"));

// function solution(a) {
//   let copy = JSON.parse(JSON.stringify(a));
//   a.sort((a, b) => (a < b ? -1 : ""));
//   // console.log(a);

//   function removeItemAll(a, value) {
//     var i = 0;
//     while (i < a.length) {
//       if (a[i] === value) {
//         a.splice(i, 1);
//       } else {
//         i++;
//       }
//     }
//     return a;
//   }

//   removeItemAll(a, -1);

//   for (let i = 0; i < copy.length; i++) {
//     if (copy[i] === -1) {
//       a.splice(i, 0, -1);
//       //console.log(a);
//     }
//   }
//   return a;
// }
// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));

// function solution(pattern, test) {
//   if (pattern[pattern.length - 1] === "$") {
//     return true;
//   }
//   function removeItemAll(a, value) {
//     var i = 0;
//     while (i < a.length) {
//       if (a[i] === value) {
//         a.splice(i, 1);
//       } else {
//         i++;
//       }
//     }
//     return a;
//   }
//   pattern = pattern.split("");
//   console.log(pattern);
//   removeItemAll(pattern, "^");
//   pattern = pattern.join("");
//   return test.includes(pattern);
// }

// function replaceTest(str) {
//   return str.replace("a", "");
// }
// console.log(replaceTest("abcd"));

// function solution(n) {
//   n = "" + n;
//   n = n.split("");
//   return Number(n[0]) + Number(n[1]);
// }
// console.log(solution(29));

// function solution(x) {
//   x = x + "";
//   x = x.split("");
//   if (x[0] === "-") {
//     x.shift();
//     x.reverse();
//     x.map((v) => Number(v));
//     x.splice(0, 0, "-");
//     return Number(x.join(""));
//   } else {
//     x.reverse();
//     return Number(x.join(""));
//   }
// }
// console.log(solution(4243));

// function palindrome(str) {
//   const isUpperCase = (string) => string.toLowerCase() != string;

//   str = str.split(" ");
//   str = str.join("");
//   if (isUpperCase(str) === true) {
//     str = str.toLowerCase();
//     str = str.split(".");
//     str = str.join("");
//     str = str.split(",");
//     str = str.join("");
//     let rev = str.split("");
//     rev = rev.reverse();
//     rev = rev.join("");
//     return rev === str ? true : false;
//   } else if (str[0] === "_") {
//     str = str.split("");
//     str.shift();
//     str = str.join("");
//     let rev = str.split("");
//     rev = rev.reverse();
//     rev = rev.join("");
//     return rev === str ? true : false;
//   } else {
//     let rev = str.split("");
//     rev = rev.reverse();
//     rev = rev.join("");
//     return rev === str ? true : false;
//   }

//   //
// }
// console.log(palindrome("A man, a plan, a canal. Panama"));

// function sym(arg, arg2) {
//   let dif = [];
//   // getting rid of duplicate value in an array
//   arg = [...new Set(arg)];
//   arg2 = [...new Set(arg2)];

//   for (let i = 0; i < arg.length; i++) {
//     if (arg2.includes(arg[i]) === false) {
//       dif.push(arg[i]);
//     }
//   }
//   for (let i = 0; i < arg2.length; i++) {
//     if (arg.includes(arg2[i]) === false) {
//       dif.push(arg2[i]);
//     }
//   }
//   return dif;
// }
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));

// function updateInventory(arr1, arr2) {
//   let res = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr1[i][1] === arr2[j][1]) {
//         arr1[i][0] = arr1[i][0] + arr2[j][0];
//         res.push(arr1[i][0], arr2[j][1]);
//       }
//     }
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i][1] === false)) {
//       res.push(arr1[i][0], arr1[i][1]);
//     }
//   }
//   return res;

// function payout(paid) {
//   let sorted = paid.sort((a, b) => a - b);
//   let total = 0;

//   // for (let amt of sorted) {
//   //   total += amt;
//   // }
//   total = sorted.reduce((acc, curr) => acc + curr, 0);
//   let avg = total / sorted.length;
//   let payer = 0;
//   let recipient = sorted.length - 1;
//   let carry = 0;

//   while (sorted[payer] !== sorted[recipient]) {
//     let amtToPay = avg - sorted[payer];
//     sorted[payer] += amtToPay;
//     sorted[recipient] -= amtToPay;
//     // console.log(`payer ${recipient} pays ${amtToPay} to recipient ${payer}`);
//     if (sorted[recipient] === avg) {
//       // carry = avg - sorted[recipient];
//       // sorted[recipient] = avg;
//       recipient -= 1;
//     }

//     payer += 1;
//   }
//   return payer;
// }
// let payments = [20, 5, 5, 5, 10, 15];
// console.log(payout(payments));

// Javascript implementation of QuickSort

// // A utility function to swap two elements
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// /* This function takes last element as pivot, places
//  the pivot element at its correct position in sorted
//  array, and places all smaller (smaller than pivot)
//  to left of pivot and all greater elements to right
//  of pivot */
// function partition(arr, low, high) {
//   // pivot
//   let pivot = arr[high];

//   // Index of smaller element and
//   // indicates the right position
//   // of pivot found so far
//   let i = low - 1;

//   for (let j = low; j <= high - 1; j++) {
//     // If current element is smaller
//     // than the pivot
//     if (arr[j] < pivot) {
//       // Increment index of
//       // smaller element
//       i++;
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, i + 1, high);
//   return i + 1;
// }

// /* The main function that implements QuickSort
//         arr[] --> Array to be sorted,
//         low --> Starting index,
//         high --> Ending index
// */
// function quickSort(arr, low, high) {
//   if (low < high) {
//     // pi is partitioning index, arr[p]
//     // is now at right place
//     let pi = partition(arr, low, high);

//     // Separately sort elements before
//     // partition and after partition
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
//   return arr;
// }
// let arr = [10, 7, 8, 9, 1, 5];
// let n = arr.length;
// console.log(quickSort(arr, 0, n - 1));

// utility function to swap elements
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// // the partition function
// function partition(arr, low, high) {
//   // pivot would be the last value of the high
//   let pivot = arr[high];
//   // i would be the returned value as a pivot
//   let i = low - 1;

//   // starts for loop to compare the current element with pivot
//   for (let j = low; j <= high - 1; j++) {
//     // if current element is smaller than pivot
//     if (arr[j] < pivot) {
//       // increment i
//       // and call swap with arr, i and j
//       i++;
//       swap(arr, i, j);
//     }
//   }
//   // call swap with arr, i+1 and high
//   // and return i+1
//   swap(arr, i + 1, high);
//   return i + 1;
// }

// // the main function of quickSort
// function quickSort(arr, low, high) {
//   if (low < high) {
//     // calling partition function as pi
//     let pi = partition(arr, low, high);

//     // this algorithm should call 2 recursive calls
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
//   return arr;
// }
// console.log(quickSort([8, 5, 4, 1], 0, 3));

// // the swap utility function
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// // the partition function
// function partition(arr, low, high) {
//   // creates pivot as the value of arr as high
//   let pivot = arr[high];
//   // creates i as returned value/pivot of this function
//   let i = low - 1;

//   // for loop to compare j with pivot
//   for (let j = low; j <= high - 1; j++) {
//     // if value of j is less than pivot
//     if (arr[j] < pivot) {
//       // increment i
//       // and call swap with arr, i and j
//       i++;
//       swap(arr, i, j);
//     }
//   } // call swap with arr, i+1 and high
//   // return i+1
//   swap(arr, i + 1, high);
//   return i + 1;
// }

// // the main quickSort function
// // will take 3 arguments: arr, low(which would be the starting index), high(the ending index)
// function quickSort(arr, low, high) {
//   // compares low with high
//   if (low < high) {
//     // calls partition function as pi
//     let pi = partition(arr, low, high);

//     // this algo should call 2 recursive calls
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
//   return arr;
// }
// console.log(quickSort([8, 5, 4, 1], 0, 3));

// function payout(arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   let total = arr.reduce((acc, curr) => acc + curr, 0);
//   let avg = total / arr.length;
//   let recipient = sorted.length - 1;
//   let payer = 0;
//   while (sorted[payer] !== sorted[recipient]) {
//     let amtToPay = avg - sorted[payer];
//     sorted[payer] += amtToPay;
//     sorted[recipient] -= amtToPay;

//     if (sorted[recipient] === avg) {
//       recipient -= 1;
//     }
//     payer += 1;
//   }
//   return payer;
// }

// let payments = [0, 5, 10, 25];

// console.log(payout(payments));

// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// function solution(t, s) {
//   if (!t) return false;
//   s -= t.value;
//   if (!t.left && !t.right) {
//     return s === 0;
//   }
//   return solution(t.left, s) || solution(t.right, s);
// }
// console.log(
//   solution(
//     {
//       value: 4,
//       left: {
//         value: 1,
//         left: {
//           value: -2,
//           left: null,
//           right: {
//             value: 3,
//             left: null,
//             right: null,
//           },
//         },
//         right: null,
//       },
//       right: {
//         value: 3,
//         left: {
//           value: 1,
//           left: null,
//           right: null,
//         },
//         right: {
//           value: 2,
//           left: {
//             value: -2,
//             left: null,
//             right: null,
//           },
//           right: {
//             value: -3,
//             left: null,
//             right: null,
//           },
//         },
//       },
//     },
//     7
//   )
// );

// function isValidSubsequence(array, sequence) {
//   let seqIdx = 0;
//   for (let value of array) {
//     if (seqIdx === sequence.length) {
//       break;
//     }
//     if (sequence[seqIdx] === value) {
//       seqIdx++;
//     }
//   }
//   return seqIdx === sequence.length;
// }
// console.log(isValidSubsequence([1, 2, 3, 4], [2, 4]));

// var containsDuplicate = function (nums) {
//   let withOutDuplicate = [...new Set(nums)];
//   return nums.length === withOutDuplicate.length ? false : true;
// };
// console.log(containsDuplicate([1, 2, 3]));

// function FirstFactorial(num) {
//   let total = 4;
//   // code goes here
//   for (let i = num - 1; i >= 1; i--) {
//     console.log(i);
//   }
// }
// console.log(FirstFactorial(4));

// brute force approach using double loop
// time: O(n^2) space: O(1)
// function twoNumberSum(array, targetSum) {
//   // Write your code here.

//   // start 2 for loops: inned and outer as i and j
//   // take the value of i and add to value of j(which should be i+1)
//   // if the addition is equal to target
//   // return both values of i and j
//   // edge case:
//   //	return []

//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length - 1; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return [array[i], array[j]];
//       }
//     }
//   }
//   return [];
// }
// console.log(twoNumberSum([4, 6], 10));

// sortedSquaredArray with better time and space complexity:
// time: O(n) space: O(n)
// function sortedSquaredArray(array) {
//   // Write your code here.
//   // optimal solution with pointers
//   let sortedSquares = [];
//   let smallerValueIdx = 0;
//   let largerValueIdx = array.length - 1;

//   for (let idx = array.length - 1; idx >= 0; idx--) {
//     let smallerValue = array[smallerValueIdx];
//     let largerValue = array[largerValueIdx];
//     if (Math.abs(smallerValue) > Math.abs(largerValue)) {
//       sortedSquares[idx] = smallerValue * smallerValue;
//       smallerValueIdx++;
//     } else {
//       sortedSquares[idx] = largerValue * largerValue;
//       largerValueIdx--;
//     }
//   }
//   return sortedSquares;
// }

// hash table approach
// time: O(n) space: O(n)
// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   let nums = {};
//   for (let num of array) {
//     let potentialMatch = targetSum - num;

//     if (potentialMatch in nums) {
//       return [potentialMatch, num];
//     } else {
//       nums[num] = true;
//     }
//   }
//   return [];
// }
// console.log(twoNumberSum([4, 6, 1, -3], 3));

// using pointers approach
// time: O(n log n) space: O(1)
// function twoNumberSum(array, targetSum) {
//   array = array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     let currentSum = array[right] + array[left];
//     if (currentSum === targetSum) {
//       return [array[right], array[left]];
//     } else if (currentSum < targetSum) {
//       left++;
//     } else if (currentSum > targetSum) {
//       right--;
//     }
//   }
//   return [];
// }
// console.log(twoNumberSum([4, 6, 1, -3], 3));

// function variableTest() {
//   const test = 1;
//   test = 1;
//   return test;
// }
// console.log(variableTest());

// using hash/object approach but with some additional functions like finding keys by value etc,
// therefore time and space would be approximately: O(n^2)
// function tournamentWinner(competitions, results) {
//   // Write your code here.

//   // using hash table/object approach

//   // defiining hash/object
//   let main = {};

//   // using for loop to traverse and compare values from both arays

//   for (let i = 0; i <= competitions.length - 1; i++) {
//     let homeTeamWins = competitions[i][0];
//     let awayTeamWins = competitions[i][1];
//     if (results[i] === 0) {
//       if (main[awayTeamWins] === undefined) {
//         main[awayTeamWins] = 3;
//       } else {
//         main[awayTeamWins] += 3;
//       }
//     } else {
//       // console.log(main[homeTeamWins]);
//       if (main[homeTeamWins] === undefined) {
//         main[homeTeamWins] = 3;
//       } else {
//         main[homeTeamWins] += 3;
//       }
//     }
//   }

//   // finding biggest value in main
//   let arr = Object.values(main);
//   let maxValue = Math.max(...arr);

//   // finding correct key based on value
//   function getKeyByValue(main, maxValue) {
//     return Object.keys(main).find((key) => main[key] === maxValue);
//   }
//   return getKeyByValue(main, maxValue);
// }

// create Home_Team_Won which will store 1 as a winning team score
// create currentBestTeam which will store initially an empty string
// create an object scores with key of currentBestTeam and a value as 0
// make a for loop from the len of competition
// create result to store the current result from result[i]
// create [homeTeam, awayTeam] to store current values from competitions[i]
// create winningTeam which will determine and store current winning team
// create updateScore function which will take args(winingTeam, 3, scores)
// to store winning team in score(if its not there) and add 3 to it if its there
// call updateScore
// check in scores if values from winningTeam is bigger than currentBestTeam
// if so update currentBestTeam with winningTeam
// return currentBestTeam

// time: O(n) space: O(n)
// let Home_Team_Won = 1;
// function tournamentWinner(competitions, results) {
//   let currentBestTeam = "";
//   let scores = { [currentBestTeam]: 0 };

//   for (let i = 0; i < competitions.length; i++) {
//     let result = results[i];
//     let [homeTeam, awayTeam] = competitions[i];

//     let winningTeam = result === Home_Team_Won ? homeTeam : awayTeam;
//     updateScore(winningTeam, 3, scores);

//     if (scores[winningTeam] > scores[currentBestTeam]) {
//       currentBestTeam = winningTeam;
//     }
//   }
//   return currentBestTeam;

//   function updateScore(winningTeam, points, scores) {
//     if (!(winningTeam in scores)) {
//       scores[winningTeam] = points;
//     } else {
//       scores[winningTeam] += points;
//     }
//   }
// }

// console.log(
//   tournamentWinner(
//     [
//       ["HTML", "C#"],
//       ["C#", "Python"],
//       ["Python", "HTML"],
//     ],
//     [0, 0, 1]
//   )
// );

// sort the coins
// make a change var, set it to 0, to check the current change
// make a for loop through coins
// if the coin[i] > change+1
// return change+1
// else, change+1
// return change+1

// time: O(nlogn) space: O(1)
// function nonConstructibleChange(coins) {
//   // Write your code here.
//   coins.sort((a, b) => a - b);
//   let change = 0;
//   for (let coin of coins) {
//     if (coin > change + 1) {
//       return (change += 1);
//     } else {
//       change += coin;
//     }
//   }
//   return (change += 1);
// }
// console.log(nonConstructibleChange([2, 3, 5]));

// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   //recursive solution which takes more space O(logn)
//   insert(value) {
//     if (value < this.value) {
//       if (this.left === null) {
//         this.left = new BST(value);
//       } else {
//         this.left.insert(value);
//       }
//     } else {
//       if (this.right === null) {
//         this.right = new BST(value);
//       } else {
//         this.right.insert(value);
//       }
//     }
//     return this;
//   }

//   // iterative solution which takes less space O(1)
//   insert(value) {
//     let currentNode = this;
//     while (true) {
//       if (value < currentNode.value) {
//         if (currentNode.left === null) {
//           currentNode.left = new BST(value);
//           break;
//         } else {
//           currentNode = currentNode.left;
//         }
//       } else {
//         if (currentNode.right === null) {
//           currentNode.right = new BST(value);
//           break;
//         } else {
//           currentNode = currentNode.right;
//         }
//       }
//     }
//     return this;
//   }

//   contains(value) {
//     let currentNode = this;
//     while (currentNode !== null) {
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else {
//         return true;
//       }
//     }
//     return false;
//   }

//   remove(value) {
//     // Write your code here.
//     // Do not edit the return statement of this method.
//     return this;
//   }
// }

// let test = new BST();
// test.insert(1);
// test.insert(3);
// test.insert(5);
// console.log(test.contains(89));

// creating Node class, which will have:
// a value and left and right attributes
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // creating BST class which will have:
// // a root attribute
// class BST {
//   constructor() {
//     this.root = null;
//   }

//   // insert method, which will take an argument as a value
//   insert(value) {
//     // first, create a new node
//     let newNode = new Node(value);
//     // check to see if there is a value in root
//     // if no, assign the root with that newNode and return this'
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     // let current as a root
//     let current = this.root;
//     // traverse through with while
//     while (current) {
//       // if the value is a duplicate with root, return undefined
//       if (value === current.value) return undefined;
//       // if the value less than current value
//       // check if the current left is null
//       // if so, assign current.left to newNode, and return this
//       // if not, assign current to current.left(basically it becomes new root)
//       // and continue traversing
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }

//   find(value) {
//     // first check if there is a root
//     // if not, return false
//     if (!this.root) return false;
//     // let current as a this.root
//     let current = this.root;
//     let found = false;
//     // start while loop with current and found as arguments
//     // check if the value of the newNode is the value we're looking for
//     while (current && !found) {
//       if (value < current.value) {
//         current = current.left;
//       } else if (value > current.value) {
//         current = current.right;
//       } else {
//         found = current;
//       }
//     }
//     if (!found) return `the value of ${value} not found!`;
//     return true;
//   }
// }
// time: O(logn) space: O(1), because we solve this iteratively!
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     // creating newNode with value
//     let newNode = new Node(value);

//     // check this.root if its null
//     // assign to this.root the newNode and return this
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     //creating current as a pointer to this.root
//     let current = this.root;

//     // while the current
//     while (current) {
//       // if the value is less than current.value
//       if (value < current.value) {
//         // and if current.left is null
//         if (current.left === null) {
//           // assign newNode to current.left
//           current.left = newNode;
//           // return this
//           return this;
//         }
//         // assign current to current left
//         // to traverse to the left to node
//         current = current.left;
//       } else if (value > current.value) {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }

//   find(value) {
//     // if not this.root return false
//     if (!this.root) return false;

//     //creating current as a pointer to this.root node
//     let current = this.root;
//     // creating found as false
//     let found = false;

//     //while current and !false
//     while (current && !found) {
//       // if the value is less than current.value
//       if (value < current.value) {
//         // move current to current.left node
//         current = current.left;
//       }
//       // same here with bigger than
//       else if (value > current.value) {
//         current = current.right;
//       }
//       // else means we've found the value
//       else {
//         // just assign current to found(makes it true)
//         found = current;
//       }
//     }
//     // return value if not found(if found remains false)
//     if (!found) return `we did not find ${value} in BST!`;
//     return found;
//   }

//   remove(value) {
//     // assigning this.root to removeNode method with
//     // this.root and value
//     this.root = this.removeNode(this.root, value);
//   }
//   removeNode(current, value) {
//     // base case: if the tree is empty, just return it
//     if (current === null) return current;

//     // if the value is the same as current.value, then we've found the node with that value to be deleted
//     if (value === current.value) {
//       // we check to see whether the node is without child
//       if (current.left === null && current.right === null) {
//         // easy case, the node is the leaf: we just return null or delete the node
//         return null;
//       } //if the left is null
//       else if (current.left === null) {
//         // then we return current.right node as a replacement to the removed node/value
//         return current.right;
//       } else if (current.right === null) {
//         return current.left;
//       }

//       // else case, where the node have 2 children
//       else {
//         // we have to get the smallest node in the RIGHT subtree
//         // we create tempNode which will call smallestNode method with current.right as arg
//         let tempNode = this.smallestNode(current.right);
//         // and then we will overwrite current.value with tempNode.value
//         current.value = tempNode.value;

//         // calling removeNode recursively on current.right with
//         // current.right and tempNode value to traverse and delete the moved node
//         current.right = this.removeNode(current.right, tempNode.value);
//         return current;
//       }
//     }
//     // else if the value is less than current value
//     else if (value < current.value) {
//       // assign current.left to recursive call to removeNode with
//       // current.left and value
//       current.left = this.removeNode(current.left, value);
//       return current;
//     } else {
//       current.right = this.removeNode(current.right, value);
//     }
//   }
//   // smallestNode takes node(current.right)
//   // traverses from it to left side
//   // and returns smallest left most value of the node
//   smallestNode(node) {
//     while (node.left !== null) {
//       node = node.left;
//     }
//     return node;
//   }

// }

// Finding Closest Node in BST
// time: O(logn) space: O(1)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     let current = this.root;
//     while (current) {
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else if (value > current.value) {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }

//   findClosestValueInBstTree() {
//     let target = 2;
//     return this.findClosestValueInBstTreeHelper(
//       this.root,
//       target,
//       this.root.value
//     );
//   }

//   findClosestValueInBstTreeHelper(current, target, closest) {
//     // while current !== null
//     // if the abs difference target - closest > than target - current.value
//     // means than current.value is less far(is less than closest) from target than closest
//     // so we have to assign current = current.value
//     while (current.value !== null) {
//       if (Math.abs(target - closest) > Math.abs(target - current.value)) {
//         closest = current.value;
//       }
//       if (target < current.value) {
//         current = current.left;
//       } else if (target > current.value) {
//         current = current.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
//   }
// }

// Calculate Branch Sums of a given BST
// time: O(n) space: O(n)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let current = this.root;
//     while (current) {
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//         }
//         current = current.left;
//         return this;
//       } else if (value > current.value) {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }

//   branchSums() {
//     let sums = [];
//     this.calculateBranchSums(this.root, 0, sums);
//     return sums;
//   }

//   calculateBranchSums(node, runningSum, sums) {
//     if (!node) return;

//     let newRunningSum = runningSum + node.value;

//     if (!node.left && !node.right) {
//       sums.push(newRunningSum);
//       return;
//     }
//     this.calculateBranchSums(node.left, newRunningSum, sums);
//     this.calculateBranchSums(node.right, newRunningSum, sums);
//   }
// }

// Node Depths
// Recursive approach
// time: O(n) space: O(h)

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let current = this.root;

//     while (current) {
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else if (value > current.value) {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }

//   nodeDepths() {
//     let depth = 0;
//     if (this.root.value === null) return 0;
//     return (
//       depth +
//       this.nodeDepths(this.root.left, depth + 1) +
//       this.nodeDepths(this.root.right, depth + 1)
//     );
//   }
// }

// let test = new BST();
// test.insert(1);
// test.insert(2);
// test.insert(4);
// test.insert(8);
// test.nodeDepths();

// time: O(nlogn); space: O(1)
// function minimumWaitingTime(queries) {
// let res = 0;
// queries = queries.sort((a, b) => a - b);
// for (let i = 1; i < queries.length; i++) {
//   res += (queries.length - i) * queries[i - 1];
// }
// return res;

// clean way:
//   queries.sort((a, b) => a - b);

//   let totalWaitingTime = 0;
//   for (let i = 0; i < queries.length; i++) {
//     let duration = queries[i];
//     let queriesLeft = queries.length - (i + 1);
//     totalWaitingTime += duration * queriesLeft;
//   }
//   return totalWaitingTime;
// }
// console.log(minimumWaitingTime([3, 2, 1, 2, 6]));

// time: O(nlogn); space: O(1)
// function classPhotos(blueShirtHeights, redShirtHeights) {
//   blueShirtHeights.sort((a, b) => b - a);
//   redShirtHeights.sort((a, b) => b - a);

//   let blueOrRed = blueShirtHeights[0] > redShirtHeights[0] ? "BLUE" : "RED";
//   console.log(blueOrRed);
//   for (let i = 0; i < blueShirtHeights.length; i++) {
//     if (blueOrRed === "BLUE") {
//       if (blueShirtHeights[i] <= redShirtHeights[i]) {
//         return false;
//       }
//     } else if (redShirtHeights[i] <= blueShirtHeights[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(classPhotos([5, 8, 1, 3, 4, 9], [6, 9, 2, 4, 5, 1]));

// function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
// when returning max sum
// we will pair slowest with fastest

// when returning min sum
// we will pair fastest with fastest
//   let res = [];

//   for (let i = 0; i < redShirtSpeeds.length; i++) {
//     if (fastest === true) {
//       let true_case_red = redShirtSpeeds.sort((a, b) => a - b);
//       let true_case_blue = blueShirtSpeeds.sort((a, b) => b - a);
//       if (true_case_red[i] > true_case_blue[i]) {
//         res.push(true_case_red[i]);
//       } else {
//         res.push(true_case_blue[i]);
//       }
//     } else if (fastest === false) {
//       let false_case_red = redShirtSpeeds.sort((a, b) => b - a);
//       let false_case_blue = blueShirtSpeeds.sort((a, b) => b - a);
//       if (false_case_red[i] > false_case_blue[i]) {
//         res.push(false_case_red[i]);
//       } else {
//         res.push(false_case_blue[i]);
//       }
//     }
//   }
//   return res.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], (fastest = true)));

// Depth-first Search
// time: O(v+e) (vertices + edges) space: O(1)
// class Node {
//   constructor(name) {
//     this.name = name;
//     this.children = [];
//   }

//   addChild(name) {
//     this.children.push(new Node(name));
//     return this;
//   }

//   depthFirstSearch(array) {
//     array.push(this.name);
//     for (let child of this.children) {
//       child.depthFirstSearch(array);
//     }
//     return array;
//   }
// }
// let test = new Node();
// test.addChild("A");
// test.addChild("B");
// test.addChild("C");
// test.depthFirstSearch([]);

// Finding duplicate in Linked List
// Time: O(n) space: O(1)
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }

//   removeDuplicatesFromLinkedList(linkedList) {
//     let currentNode = linkedList;
//     while (currentNode !== null) {
//       let nextDistinctNode = currentNode.next;
//       while (
//         nextDistinctNode !== null &&
//         nextDistinctNode.value === currentNode.value
//       ) {
//         nextDistinctNode = nextDistinctNode.next;
//       }
//       currentNode.next = nextDistinctNode;
//       currentNode = nextDistinctNode;
//     }
//     return linkedList;
//   }
// }

// Get nth Fibonacci
// Brute force, time: O(2^n) space: O(n)
// function getNthFib(n) {
//   if (n === 1) {
//     return 0;
//   } else if (n === 2) {
//     return 1;
//   } else {
//     return getNthFib(n - 1) + getNthFib(n - 2);
//   }
// }

// using hash approach to save time
// time: O(n) space: O(n)
// function getNthFib(n) {
//   let memo = {1: 0, 2:1}
//   if(n in memo){
//     return memo[n]
//   } else {
//     memo[n] = getNthFib(n - 1) + getNthFib(n - 2)
//     return memo[n]
//   }
// }

// Iterative approach
// time: O(n) space: O(1)
// function getNthFib(n) {
//   let lastTwo = [0, 1];
//   let counter = 3;
//   while (counter <= n) {
//     let nextFib = lastTwo[0] + lastTwo[1];
//     lastTwo[0] = lastTwo[1];
//     lastTwo[1] = nextFib;
//     counter++;
//   }
//   return n > 1 ? lastTwo[1] : lastTwo[0];
// }

// console.log(getNthFib(1));

// Product sum, recursive approach
// time O(n) space: O(d) where d === depth of recursive calls to subarrays
// function productSum(array, mul = 1) {
//   let sum = 0;
//   for (let el of array) {
//     if (Array.isArray(el)) {
//       sum += productSum(el, mul + 1);
//     } else {
//       sum += el;
//     }
//   }
//   return sum * mul;
// }

// find target in Binary Search Tree
// Recursive approach
// time: O(log(n)) space: O(1)
// function binarySearch(array, target) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let current = array[mid];
//     if (target === current) {
//       return mid;
//     } else if (current > target) {
//       right = mid - 1;
//     } else if (current < target) {
//       left = mid + 1;
//     }
//   }
//   return -1;
// }

// Find 3 largest numbers
// Iterative approach with helper function calls
// time: O(n) space: O(1)
// function findThreeLargestNumbers(array) {
//   let threeLargest = [null, null, null];
//   for (let num of array) {
//     updateLargest(threeLargest, num);
//   }
//   return threeLargest;
// }

// function updateLargest(threeLargest, num) {
//   if (threeLargest[2] === null || num > threeLargest[2]) {
//     shiftAndUpdate(threeLargest, num, 2);
//   } else if (threeLargest[1] === null || num > threeLargest[1]) {
//     shiftAndUpdate(threeLargest, num, 1);
//   } else if (threeLargest[0] === null || num > threeLargest[0]) {
//     shiftAndUpdate(threeLargest, num, 0);
//   }
// }

// function shiftAndUpdate(threeLargest, num, idx) {
//   for (let i = 0; i <= idx; i++) {
//     if (i === idx) {
//       threeLargest[i] = num;
//     } else {
//       threeLargest[i] = threeLargest[i + 1];
//     }
//   }
// }
// console.log(findThreeLargestNumbers([10, 5, 9, 10, 12]));

// Bubble Sort with better time complexity
// best case, time: O(n) space is always O(1); average case, time: O(n^2)
// function bubbleSort(array) {
//   let isSorted = false;
//   let counter = 0;

//   let swap = (firstIndex, secondIndex) => {
//     let temp = array[firstIndex];
//     array[firstIndex] = array[secondIndex];
//     array[secondIndex] = temp;
//   };

//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < array.length - 1 - counter; i++) {
//       if (array[i] > array[i + 1]) {
//         swap(i, i + 1);
//         isSorted = false;
//       }
//     }
//     counter++;
//   }
//   return array;
// }
// console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));

// Insertion Sort
// average time/space, time: O(n^2) space O(1)
// function insertionSort(arr) {
//   let swap = (firstIndex, secondIndex) => {
//     let temp = arr[firstIndex];
//     arr[firstIndex] = arr[secondIndex];
//     arr[secondIndex] = temp;
//   };

//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j !== 0 && arr[j] < arr[j - 1]) {
//       swap(j, j - 1);
//       j -= 1;
//     }
//   }
//   return arr;
// }
// console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));

// Selection Sort
// time: O(n^2) space: O(1)
// function selectionSort(arr) {
//   let swap = (i, j) => {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   };

//   let startIdx = 0;
//   while (startIdx < arr.length - 1) {
//     let smallestIdx = startIdx;
//     for (let i = startIdx + 1; i < arr.length; i++) {
//       if (arr[smallestIdx] > arr[i]) {
//         smallestIdx = i;
//       }
//     }
//     swap(startIdx, smallestIdx);
//     startIdx++;
//   }
//   return arr;
// }
// console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));

// Is Palindrome
// Brute force approach. time: O(n) space: O(n)
// function isPalindrome(str) {
//   let compare = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     compare.push(str[i]);
//   }
//   compare = compare.join("");
//   return str === compare;
// }

// Recursive approach with ternary
// time: O(n) space O(n)
// function isPalindrome(string, i = 0) {
//   let j = string.length - 1 - i;
//   return i === j
//     ? true
//     : string[i] === string[j] && isPalindrome(string, i + 1);
// }

// Iterative approach
// time O(n) space: O(1)
// function isPalindrome(string) {
//   let leftIdx = 0;
//   let rightIdx = string.length - 1;
//   while (leftIdx < rightIdx) {
//     if (string[leftIdx] !== string[rightIdx]) {
//       return false;
//     } else {
//       leftIdx++;
//       rightIdx--;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("abcdcba"));

// const obj = {
//   prop: 1,
// };
// console.log(obj.prop);

// Object.defineProperty(obj, "prop", {
//   writable: false,
//   value: 2,
// });
// console.log(obj.prop);

// obj.prop = 3;
// console.log(obj.prop);

// function* gen1() {
//   console.log(yield 1);
//   console.log(yield 2);
//   console.log(yield 3);
// }

// const iterator = gen1();

// console.log(iterator.next("a").value);
// console.log(iterator.next("b").value);
// console.log(iterator.next("c").value);

// const myArray = new Array(2);

// myArray[1] = 1;
// myArray[3] = 3;

// console.log("Length", myArray.length);

// console.log("Elements");
// for (const el of myArray) {
//   console.log("\t", el);
// }

// async function apiCall() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("b");
//     }, 50);
//   });
// }
// async function logger() {
//   setTimeout(() => console.log("a"), 10);
//   console.log(await apiCall());
//   console.log("c");
// }
// logger();

// caesarCipherEncryptor, Iterative approach
// time: O(n) | space: O(n)
// function caesarCipherEncryptor(string, key) {
//   const getNewLetters = (letter, alphabet, key) => {
//     let newLetterCode = alphabet.indexOf(letter) + key;
//     return alphabet[newLetterCode % 26];
//   };

//   let newLetters = [];
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//   for (let letter of string) {
//     newLetters.push(getNewLetters(letter, alphabet, key));
//   }
//   return newLetters.join("");
// }
// console.log(caesarCipherEncryptor("xyz", 2));

// runLengthEncoding, Iterative approach
// time: O(n) | space: O(n)
// function runLengthEncoding(string) {
//   const encodedStringCharacters = [];
//   let currentRunLength = 1;

//   for (let i = 1; i < string.length; i++) {
//     if (string[i] !== string[i - 1] || currentRunLength === 9) {
//       encodedStringCharacters.push(currentRunLength.toString());
//       encodedStringCharacters.push(string[i - 1]);
//       currentRunLength = 0;
//     }
//     currentRunLength++;
//   }
//   encodedStringCharacters.push(currentRunLength.toString());
//   encodedStringCharacters.push(string[string.length - 1]);
//   return encodedStringCharacters.join("");
// }
// console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));

// generateDocument, Recursive approach
// time: O(m * (n + m)) where n is the number of chars and m is the length of the document
// space: O(1)
// function generateDocument(characters, document) {
//   const countCharacterFrequency = (character, target) => {
//     let frequency = 0;
//     for (const char of target) {
//       if (char === character) frequency++;
//     }
//     return frequency;
//   };

//   for (const character of document) {
//     const documentFrequency = countCharacterFrequency(character, document);
//     const chractersFrequency = countCharacterFrequency(character, characters);
//     if (documentFrequency > chractersFrequency) return false;
//   }
//   return true;
// }

// Hash/object approach
// time: O(n + m) where n is the number of characters, m is the length of the document
// space: O(c) where c is the number of unique characters in the characters
// function generateDocument(characters, document) {
//   const characterCounts = {};

//   for (const character of characters) {
//     if (!(character in characterCounts)) {
//       characterCounts[character] = 0;
//     }
//     characterCounts[character]++;
//   }

//   for (const character of document) {
//     if (!(character in characterCounts) || characterCounts[character] === 0) {
//       return false;
//     } else {
//       characterCounts[character]--;
//     }
//   }
//   return true;
// }
// console.log(
//   generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
// );
// firstNonRepeatingCharacter with iterative double loop approach
// time: O(n^2) | space: O(1)
// function firstNonRepeatingCharacter(string) {
//   for (let idx = 0; idx < string.length; idx++) {
//     let foundDuplicate = false;
//     for (let idx2 = 0; idx2 < string.length; idx2++) {
//       if (string[idx] === string[idx2] && idx !== idx2) {
//         foundDuplicate = true;
//       }
//     }
//     if (!foundDuplicate) {
//       return idx;
//     }
//   }
//   return -1;
// }

// firstNonRepeatingCharacter with hash/object approach
// time: O(n) where n is the length of the input string
// space: O(1) because the input string only has lowercase eng letters
// function firstNonRepeatingCharacter(string) {
//   const characterCounts = {};
//   for (char of string) {
//     if (!(char in characterCounts)) {
//       characterCounts[char] = 0;
//     }
//     characterCounts[char]++;
//   }
//   for (let i = 0; i < string.length; i++) {
//     if (characterCounts[string[i]] === 1) {
//       return i;
//     }
//   }
// }
// console.log(firstNonRepeatingCharacter("abcdcaf"));

// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j) {
//         if (array[i] + array[j] === targetSum) {
//           return [array[i], array[j]];
//         }
//       }
//     }
//   }
//   return [];
// }

// function twoNumberSum(array, targetSum){
//   const nums = {}
//   for(num of array){
//     let potentialMatch = targetSum - num
//     if(potentialMatch in nums){
//       return [num, potentialMatch]
//     } nums[num] = true
//   }
// }
// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// function isValidSubsequence(array, sequence) {
//   let obj = {};
//   // let res = [];
//   for (let i = 0; i < array.length; i++) {
//     obj[array[i]] = i;
//   }
//   for (let i = 0; i < sequence.length - 1; i++) {
//     let j = i + 1;
//     if (!(sequence[i] && sequence[j] in obj)) {
//       return false;
//     }
//     else if (obj[sequence[i]] < obj[sequence[j]]) {
//       continue
//     }
//   } return true
// }
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [4, 5, 1, 22, 25, 6, -1, 8, 10]));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let current = this.root;
//     while (current) {
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else if (value > current.value) {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//       }
//       current = current.right;
//     }
//   }

//   findClosestValueInBstTree(target) {
//     // let target = 2;
//     return this.findClosestValueInBstTreeHelper(
//       this.root,
//       target,
//       this.root.value
//     );
//   }

//   findClosestValueInBstTreeHelper(current, target, closest) {
//     // while current !== null
//     // if the abs difference target - closest > than target - current.value
//     // means than current.value is less far(is less than closest) from target than closest
//     // so we have to assign current = current.value
//     while (current) {
//       if (Math.abs(target - closest) > Math.abs(target - current.value)) {
//         closest = current.value;
//       }
//       if (target < current.value) {
//         current = current.left;
//       } else if (target > current.value) {
//         current = current.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     let currentNode = this.root;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         if (currentNode.left === null) {
//           currentNode.left = newNode;
//           return this;
//         } else {
//           currentNode = currentNode.left;
//         }
//       } else if (value > currentNode.value) {
//         if (currentNode.right === null) {
//           currentNode.right = newNode;
//           return this;
//         } else {
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
//   // findClosestValueInBst(target) {
//   //   return this.findClosestValueInBstHelper(this.root, target, this.root.value);
//   // }
//   // findClosestValueInBstHelper(currentNode, target, closest) {
//   //   while (currentNode) {
//   //     if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
//   //       closest = currentNode.value;
//   //     } else if (target < currentNode.value) {
//   //       currentNode = currentNode.left;
//   //     } else if (target > currentNode.value) {
//   //       currentNode = currentNode.right;
//   //     } else {
//   //       break;
//   //     }
//   //   }
//   //   return closest;
//   // }
//   // branchSums() {
//   //   let sums = [];
//   //   return this.calculateBranchSums(this.root, 0, sums);
//   // }

//   // calculateBranchSums(node, runningSum, sums) {
//   //   if (node === null) return;
//   //   let newRunningSum = runningSum + node.value;
//   //   if (!node.left && !node.right) {
//   //     sums.push(newRunningSum);
//   //     return;
//   //   }
//   //   this.calculateBranchSums(node.left, newRunningSum, sums);
//   //   this.calculateBranchSums(node.right, newRunningSum, sums);
//   //   return sums;
//   // }

//   nodeDepths() {
//     let sumOfDepths = 0;
//     const stack = [{ node: this.root, depth: 0 }];
//     console.log(stack.length);
//     while (stack.length > 0) {
//       const { node, depth } = stack.pop();
//       if (node === null) continue;
//       sumOfDepths += depth;
//       stack.push({ node: node.left, depth: depth + 1 });
//       stack.push({ node: node.right, depth: depth + 1 });
//     }
//     return sumOfDepths;
//   }
// }

// let test = new BST();
// test.insert(4);
// test.insert(6);
// test.insert(5);
// test.insert(8);
// test.insert(3);
// test.insert(9);
// console.log(test.nodeDepths());
// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }

//   removeDuplicatesFromLinkedList(linkedList) {
//     let currentNode = linkedList;
//     while (currentNode !== null) {
//       let nextDistinctNode = currentNode.next;
//       while (
//         nextDistinctNode !== null &&
//         nextDistinctNode.value === currentNode.value
//       ) {
//         nextDistinctNode = nextDistinctNode.next;
//       }
//       currentNode.next = nextDistinctNode;
//       currentNode = nextDistinctNode;
//     }
//     return linkedList;
//   }
// }
// let node1 = new ListNode(2);
// let node2 = new ListNode(3);
// let node2 = new ListNode(3);
// let node2 = new ListNode(5);
// let list = new LinkedList(node1);
// console.log(list.removeDuplicatesFromLinkedList());

// Three number sum
// time: O(n^2) | space: O(n)
// function threeNumberSum(array, targetSum) {
//   array.sort((a, b) => a - b);
//   const triplets = [];
//   for (let i = 0; i < array.length; i++) {
//     let right = array.length - 1;
//     let left = i + 1;
//     while (left < right) {
//       let potentialMatch = array[i] + array[left] + array[right];
//       if (potentialMatch === targetSum) {
//         triplets.push([array[i], array[left], array[right]]);
//         left++;
//         right--;
//       } else if (potentialMatch < targetSum) {
//         left++;
//       } else if (potentialMatch > targetSum) {
//         right--;
//       }
//     }
//   }
//   return triplets;
// }

// Smallest diference
// time: O(nlog(n) + mlog(m)) because we sort it first, where n is the length of the firts array and m is the length of the second array
// | space: O(1)

// function smallestDifference(arrayOne, arrayTwo) {
//   arrayOne.sort((a, b) => a - b);
//   arrayTwo.sort((a, b) => a - b);
//   let idxOne = 0;
//   let idxTwo = 0;
//   let smallest = Infinity;
//   let current = 0;
//   let smallestPair = [];

//   while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
//     let firstNum = arrayOne[idxOne];
//     let secondNum = arrayTwo[idxTwo];
//     if (firstNum < secondNum) {
//       current = secondNum - firstNum;
//       idxOne++;
//     } else if (firstNum > secondNum) {
//       current = firstNum - secondNum;
//       idxTwo++;
//     } else {
//       return [firstNum, secondNum];
//     }
//     if (smallest > current) {
//       smallest = current;
//       smallestPair = [firstNum, secondNum];
//     }
//   }
//   return smallestPair;
// }
//"arrayOne": [-1, 5, 10, 20, 3],
//"arrayTwo": [26, 134, 135, 15, 17]

// Move element to end
// time: O(n) | space: O(1)
// function moveElementToEnd(array, toMove) {
//   let left = 0;
//   let right = array.length - 1;

//   const swap = (firstIndex, secondIndex) => {
//     let temp = array[firstIndex];
//     array[firstIndex] = array[secondIndex];
//     array[secondIndex] = temp;
//   };

//   while (left < right) {
//     let leftNum = array[left];
//     let rightNum = array[right];
//     if (leftNum === toMove && rightNum !== toMove) {
//       swap(left, right);
//     } else if (leftNum !== toMove) {
//       left++;
//     } else if (rightNum === toMove) {
//       right--;
//     }
//   }
//   return array;
// }

// Is monotonic
// time: O(n) | space: O(1)
// function isMonotonic(array) {
//   let isNonIncreasing = true;
//   let isNonDecreasing = true;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       isNonDecreasing = false;
//     } else if (array[i] < array[i + 1]) {
//       isNonIncreasing = false;
//     }
//   }
//   return isNonDecreasing || isNonIncreasing;
// }

// function isPalindromeWithOneCharRemoved(str) {
//   // let temp = str;
//   // temp = temp.replace("a", "");
//   // console.log(str);

//   const isPalindrome = (temp) => {
//     let leftIdx = 0;
//     let rightIdx = temp.length - 1;
//     while (leftIdx < rightIdx) {
//       if (temp[leftIdx] !== temp[rightIdx]) {
//         return false;
//       } else {
//         leftIdx++;
//         rightIdx--;
//       }
//     }
//     return true;
//   };

//   for (let i = 0; i < str.length; i++) {
//     let temp = str;
//     temp = temp.replace(temp[i], "");
//     if (isPalindrome(temp) === true) {
//       return true;
//     } else {
//       continue;
//     }
//   }
//   return false;
// }
// console.log(isPalindromeWithOneCharRemoved("tacocats"));

// racercar

// the hardest of parenthes problem: given input of balanced/unbalanced parenthes give output of balanced parenthes

// function balanceParenthes(str) {
//   let weights = {
//     "(": 1,
//     ")": -1,
//   };
//   let partialResult = removeUnnecessaryChars(str, weights);

//   processedString = partialResult.join("");
//   processedString = processedString.split("");
//   reversedProcessedString = processedString.reverse();
//   reversedProcessedString = reversedProcessedString.split("");
//   weights = {
//     ")": 1,
//     "(": -1,
//   };
//   partialResult = removeUnnecessaryChars(reversedProcessedString, weights);
//   partialResult.reverse();
//   return partialResult.join("");
// }

// function removeUnnecessaryChars(str, weight) {
//   let partialResult = [];
//   let weightSum = 0;
//   for (let char of str) {
//     if (!(char in weight)) {
//       partialResult.push(char);
//       continue;
//     } else if (weightSum + weight[char] < 0) {
//       continue;
//     }
//     weightSum += weight[char];
//     partialResult.push(char);
//     continue;
//   }
//   return partialResult;
// }

// console.log(balanceParenthes("(()()("));

//  balance("(()()(") -> "()()"

// the easy one of the parentehs series questions: given input of parenthes give output as true/false depending on balanced

// function isBalanced(str) {
//   const stack = [];
//   for (let char of str) {
//     if (char === "(") {
//       stack.push(char);
//     } else if (stack.pop() !== "(") {
//       return false;
//     }
//   }
//   return stack.length === 0 ? true : false;
// }
// console.log(isBalanced("()())"));

// given input of parenthes give output of number of unbalanced parenthes

// function balanceParentheses(s) {
//   let right = 0;
//   let left = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       right++;
//     } else if (s[i] === ")" && right > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return left + right;
// }
// console.log(balanceParentheses("())"));

// Longest peak
// time: O(n) | space: O(1)
// function longestPeak(array) {
//   let tempLongest = 0;
//   let longest = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i + 1] > array[i] && array[i + 1] > array[i + 2]) {
//       tempLongest += 1;
//       for (let j = i + 1; j > 0; j--) {
//         if (array[j] > array[j - 1]) {
//           tempLongest += 1;
//         } else {
//           break;
//         }
//       }
//       for (let y = i + 1; y < array.length; y++) {
//         if (array[y] > array[y + 1]) {
//           tempLongest += 1;
//         } else {
//           break;
//         }
//       }
//     }
//     if (longest === 0) {
//       longest = tempLongest;
//       tempLongest = 0;
//     } else if (tempLongest > longest) {
//       longest = tempLongest;
//       tempLongest = 0;
//     } else {
//       tempLongest = 0;
//     }
//   }
//   return longest;
// }

//Array of products
// time: O(n) | space: O(n)
// function arrayOfProducts(array) {
//   let res = [];

//   for (let i = 0; i < array.length; i++) {
//     let runningProduct = 1;
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j) {
//         runningProduct *= array[j];
//       }
//     }
//     res[i] = runningProduct;
//   }
//   return res;
// }
// console.log(arrayOfProducts([5, 1, 4, 2]));

// Merge Over Intervals
// time: O(nlog(n)) space: O(n)
// function mergeOverlappingIntervals(array) {
//   let sortedIntervals = array.sort((a, b) => a[0] - b[0]);
//   let mergedIntervals = [];
//   let currentInterval = sortedIntervals[0];
//   mergedIntervals.push(currentInterval);

//   for (let nextInterval of sortedIntervals) {
//     [_, currentIntervalEnd] = currentInterval[
//       (nextIntervalStart, nextIntervalEnd)
//     ] = nextInterval;

//     if (currentIntervalEnd >= nextIntervalStart) {
//       currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
//     } else {
//       currentInterval = nextInterval;
//       mergedIntervals.push(currentInterval);
//     }
//   }
//   return mergedIntervals;
// }

// console.log(
//   mergeOverlappingIntervals([
//     [1, 2],
//     [3, 5],
//     [4, 7],
//     [6, 8],
//     [9, 10],
//   ])
// );

// Max subset sum of non adjasent values
// time: O(n) | space: O(n)
// function maxSubsetSumNoAdjacent(array) {
//   if (!array.length) return 0;
//   if (array.length === 1) return array[0];

//   const maxSums = array.slice();
//   maxSums[1] = Math.max(maxSums[0], maxSums[1]);

//   for (let i = 2; i < array.length; i++) {
//     maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + maxSums[i]);
//   }
//   return maxSums[maxSums.length - 1];
// }

// another approach with better space
// time: O(n) | space: O(1)
// function maxSubsetSumNoAdjacent(array) {
//   if (!array.length) return 0;
//   if (array.length === 1) return array[0];

//   let prevValue = array[0];
//   let currentValue = Math.max(array[0], array[1]);

//   for (let i = 2; i < array.length; i++) {
//     let current = Math.max(currentValue, prevValue + array[i]);
//     prevValue = currentValue;
//     currentValue = current;
//   }
//   return currentValue;
// }

// console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));

// Number of ways to make change
// time: O(nd) | space: O(n) where n is the target amount and d is the number of coin denominations
// function numberOfWaysToMakeChange(n, denoms) {
//   const ways = new Array(n + 1).fill(0);
//   ways[0] = 1;

//   for (let denom of denoms) {
//     for (let ammount = 1; ammount <= n; n++) {
//       if (denom <= ammount) {
//         ways[ammount] += ways[ammount - denom];
//       }
//     }
//   }
//   return ways[n];
// }

// function levenshteinDistance(str1, str2) {
//   let diffLen = str2.length > str1.length ? str2.length - str1.length : 0;
//   let res = 0;
//   res += diffLen;
//   let dup = 0;

//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         dup += 1;
//       }
//     }
//   }
//   let diff = str1.length - dup;
//   let totalDiff = str2.length - res - diff;
//   return Math.abs(totalDiff);
// }
// console.log(levenshteinDistance("abc", ""));

// take a str palindrome

// aba

// function isPalindrome(str, i=0) {
//   // let rev = str.split("");
//   // rev = rev.reverse();
//   // rev = rev.join("");
//   // return str === rev ? true : false;

//   // let rev = [];
//   // for (let i = str.length - 1; i >= 0; i--) {
//   //   rev.push(str[i]);
//   // }
//   // rev = rev.join("");
//   // return str === rev ? true : false;

//   // let left = 0;
//   // let right = str.length - 1;

//   // for (let i = 0; i <= str.length; i++) {
//   //   if (str[left] === str[right]) {
//   //     left++;
//   //     right--;
//   //   } else {
//   //     return false;
//   //   }
//   // }
//   // return true;

//   let j = str.length-1-i
//   return i >= j ? true : str[i] === str[j] && isPalindrome(str, i+1)

//   // space: O(1)

// }
// console.log(palindrome("abda"));

// function billFor(month, activeSubscription, users) {
//   // your code here!
// //   console.log(month, activeSubscription, users, "stegh")
// //     console.log(activeSubscription.monthlyPriceInDollars)

// // finds the current number of days in a month
// function getDaysInMonth(year, month) {
//   return new Date(year, month, 0).getDate();
// }

// const date = new Date();
// const currentYear = date.getFullYear();
// const currentMonth = date.getMonth() + 1;
// const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
// // console.log(daysInCurrentMonth);

//   // finds daily rate, by deviding monthly price to number of current month's days
//   let dailyRate = activeSubscription.monthlyPriceInDollars / daysInCurrentMonth
//   let daulyRateFixed = dailyRate.toFixed(2)
//   console.log(daulyRateFixed)
// //   console.log(new Date(year, month, 0).getDate(); "stegh")

// Kadanes Algorithm
// time: O(n) | space: O(1)
// function kadanesalgorithm(array) {
//   let currentMax = array[0];
//   let max = array[0];

//   for (let i = 1; i < array.length; i++) {
//     currentMax = Math.max(array[i], array[i] + currentMax);
//     max = Math.max(max, currentMax);
//   }
//   return max;
// }

// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }

//   oddEvenList(head) {
//     if(head ==null ) return head;
//     let odd = head;
//     let headNode = head;
//     let even = head.next;
//     let evenHead = head.next;

//     while(even !== null && even.next !==null){
//         odd.next = odd.next.next;
//         odd= odd.next;
//         even.next = odd.next;
//         even = even.next;
//     }

//     odd.next = evenHead;
//     return headNode;
// };

//   // oddEvenList(head){
//   //   if (!head) return null;
//   //   let odd = head
//   //   let even = odd.next
//   //   let evenHead = even;

//   //   while (even && even.next) {
//   //     odd.next = even.next;
//   //     even.next = odd.next.next;
//   //     odd = odd.next;
//   //     even = even.next;
//   //   }
//   //   odd.next = evenHead;
//   //   return head;
//   // };

// }
// let node1 = new ListNode(1);
// node1.next = new ListNode(2);
// node1.next.next = new ListNode(3);
// node1.next.next.next = new ListNode(4);
// let list = new LinkedList(node1);
// console.log(list.oddEvenList(node1));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     let currentNode = this.root;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         if (currentNode.left === null) {
//           currentNode.left = newNode;
//           return this;
//         } else {
//           currentNode = currentNode.left;
//         }
//       } else if (value > currentNode.value) {
//         if (currentNode.right === null) {
//           currentNode.right = newNode;
//           return this;
//         } else {
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }

//   /*
// 1. Use BFS to traverse nodes in level-order.
// 2. For each level, keep track of the maximum value and push it to the result array.
// 3. Return the result array.
// */

//   largestValues(root) {
//     // If given root is null, return an empty array
//     if (!root) {
//       return [];
//     }
//     // result array
//     let res = [];
//     // queue stores nodes to be traversed
//     let queue = [];
//     // the first node to be traversed is the root
//     queue.push(root);

//     // while there are nodes to be traversed
//     while (queue.length > 0) {
//       // number of nodes in one level
//       let queueLen = queue.length;
//       let max = -Infinity;
//       for (let i = 0; i < queueLen; i++) {
//         let node = queue.shift();
//         max = Math.max(max, node.val);
//         // push nodes in next level into queue
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//       }
//       res.push(max);
//     }
//     return res;
//     // T.C: O(N), we traverse every node once
//     // S.C: O(N), the bottom level can contain at most N/2 nodes, and hence so can queue
//   }
// }

// let test = new BST();
// test.insert(1);
// test.insert(3);
// test.insert(3);
// test.insert(5);
// test.insert(2);
// test.insert(9);
// console.log(test.largestValues());

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   largestValues(root = this.value) {
//     // If given root is null, return an empty array
//     if (!root) {
//       return [];
//     }
//     // result array
//     let res = [];
//     // queue stores nodes to be traversed
//     let queue = [];
//     // the first node to be traversed is the root
//     queue.push(root);

//     // while there are nodes to be traversed
//     while (queue.length > 0) {
//       // number of nodes in one level
//       let queueLen = queue.length;
//       let max = -Infinity;
//       for (let i = 0; i < queueLen; i++) {
//         let node = queue.shift();
//         max = Math.max(max, node.value);
//         // push nodes in next level into queue
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//       }
//       res.push(max);
//     }
//     return res;
//     // T.C: O(N), we traverse every node once
//     // S.C: O(N), the bottom level can contain at
//     // most N/2 nodes, and hence so can queue
//   }
// }

// //     1
// //   / \
// //   3   2
// // / \   \
// // 5   3   9

// let test = new Node();
// test.value = new Node(1);
// test.value.left = new Node(3);
// test.value.left.right = new Node(3);
// test.value.left.left = new Node(5);
// test.value.right = new Node(2);
// test.value.right.right = new Node(9);
// test.largestValues();

// function findMaxSum(arr, n) {
//   let incl_curr = arr[0];
//   let excl_curr = 0;

//   let incl_prev = incl_curr;
//   let excl_prev = excl_curr;

//   for (let i = 0; i < n; i++) {
//     excl_curr = max(incl_prev, excl_prev);
//     incl_curr = excl_prev + arr[i];

//     excl_prev = excl_curr;
//     incl_prev = incl_curr;
//   }
//   return max(excl_curr, incl_curr);
// }

// function max(x, y) {
//   return x > y ? x : y;
// }
// console.log(findMaxSum([5, 5, 10, 200, 10, 5], 6));

// O(n logn ) time O(logn or O(n) in worst case) space
// var merge = function (intervals) {
//   // Sort the intervals
//   intervals.sort((a, b) => a[0] - b[0]);
//   let mergedIntervals = [];
//   currentInterval = intervals[0];
//   mergedIntervals.push(currentInterval);

//   for (let nextInterval of intervals) {
//     let [_, currentIntervalEnd] = currentInterval;
//     let [nextIntervalStart, nextIntervalEnd] = nextInterval;

//     if (currentIntervalEnd >= nextIntervalStart) {
//       currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
//     } else {
//       currentInterval = nextInterval;
//       mergedIntervals.push(currentInterval);
//     }
//   }
//   return mergedIntervals;
// };

// console.log(
//   merge([
//     [1, 3],
//     [2, 7],
//     [4, 9],
//   ])
// );

// class Node{
//   constructor(val, left = null, right = null){
//       this.val = val;
//       this.left = left;
//       this.right = right;
//   }
// }
// const bst = new Node(27);
// bst.left = new Node(14);
// bst.left.left = new Node(10);
// bst.left.right = new Node(19);
// bst.right = new Node(35);
// bst.right.left = new Node(31);
// bst.right.right = new Node(42);

// function plusMinus(arr) {
// let positiveNums = [];
// let negativeNums = [];
// let zeroNums = [];
// let len = 0;

// for (let num of arr) {
//   if (Math.sign(num) === 1) {
//     positiveNums.push(num);
//   } else if (Math.sign(num) === 0) {
//     zeroNums.push(num);
//   } else if (Math.sign(-1)) {
//     negativeNums.push(num);
//   }
// }

// if (positiveNums.length > 0) {
//   let ratio = positiveNums.length / arr.length;
//   console.log(ratio.toFixed(6));
// }
// if (negativeNums.length > 0) {
//   let ratio = negativeNums.length / arr.length;
//   console.log(ratio.toFixed(6));
// }
// if (zeroNums.length > 0) {
//   let ratio = zeroNums.length / arr.length;
//   console.log(ratio.toFixed(6));
// }

//   let positiveNums = 0;
//   let negativeNums = 0;
//   let zeroNums = 0;

//   for (let num of arr) {
//     if (num > 0) {
//       positiveNums++;
//     } else if (num < 0) {
//       negativeNums++;
//     } else {
//       zeroNums++;
//     }
//   }
//   [positiveNums, negativeNums, zeroNums].forEach((e) => {
//     console.log(e / arr.length);
//   });
// }

// console.log(plusMinus([1, -2, -7, 9, 1, -8, -5]));

// var mostCommonWord = function (paragraph, banned) {
//   let res = {};

//   paragraph = paragraph.toLowerCase();
//   paragraph = paragraph.split(/\W+/);
//   console.log(paragraph);
//   if (paragraph.length === 1) {
//     return paragraph.join("");
//   }
//   for (let i = 0; i < paragraph.length; i++) {
//     if (
//       paragraph[i] !== banned[0] &&
//       paragraph[i] !== "" &&
//       !(paragraph[i] in res)
//     ) {
//       res[paragraph[i]] = 1;
//     } else if (paragraph[i] !== banned[0] && paragraph[i] in res) {
//       res[paragraph[i]] += 1;
//     }
//   }
//   return Object.keys(res).reduce((a, b) => (res[a] > res[b] ? a : b));
// };
// console.log(mostCommonWord("abc abc? abcd the jeff!", ["abc", "abcd", "jeff"]));

// function test() {
//   let str = "a b c";
//   str = str.split(" ");
//   return str;
// }
// console.log(test());

// var mostCommonWord = function (paragraph, banned) {
//   const bannedSet = new Set(banned);

//   const words = paragraph.toLowerCase().split(/\W+/);
//   // console.log(words);

//   const map = {};
//   let frequentWord;
//   let maxCount = 0;

//   for (const word of words) {
//     if (word && !bannedSet.has(word)) {
//       map[word] = (map[word] || 0) + 1;
//       if (map[word] > maxCount) {
//         maxCount = map[word];
//         frequentWord = word;
//       }
//     }
//   }

//   return frequentWord;
// };
// console.log(
//   mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
//     "hit",
//   ])
// );

// function test() {
//   // let res = "Bob hit a ball!!!!, the hit??? BALL flew far after it was hit.";
//   // res = res.split(/\W+/);
//   // return res;
//   let str = "a,b,c";
//   str = str.split(",").join("");
//   let testSet = new Set(str);
//   console.log(testSet);
// }
// console.log(test());

// function mostCummonWord(paragraph, banned) {
//   const words = paragraph.toLowerCase().split(/\W+/);
//   let frequentWord;
//   let maxValue = 0;
//   let obj = {};
//   for (let word of words) {
//     if (banned.includes(word) === false) {
//       obj[word] = (obj[word] || 0) + 1;
//     }
//     if (obj[word] > maxValue) {
//       maxValue = obj[word];
//       frequentWord = word;
//     }
//   }
//   return frequentWord;

// }
// console.log(
//   mostCummonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
//     "hit",
//   ])
// );

// function test() {
//   let obj = {
//     a: 1,
//     b: 2,
//   };

//   if ("a" in obj) {
//     return "kkk";
//   } else {
//     return "das";
//   }
// }

// console.log(test());

// BST depth-first search
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }

//   dfsIterativePreorder(root) {
//     const stack = [root],
//     let traversed = [];
//     let curr;

//     while (stack.length) {
//       curr = stack.pop();
//       traversed.push(curr.val);
//       if (curr.right) stack.push(curr.right);
//       if (curr.left) stack.push(curr.left);
//     }

//     return traversed;
//   }
// }
// const bst = new Node(27);
// bst.left = new Node(14);
// bst.left.left = new Node(10);
// bst.left.right = new Node(19);
// bst.right = new Node(35);
// bst.right.left = new Node(31);
// bst.right.right = new Node(42);
// bst.dfsIterativePreorder(bst);

// var countBinarySubstrings = function (s) {
//   let numSubstrings = 0
//   let numPrev = 0
//   let numCurr = 1

//   for(let i=0; i<s.length-1; i++){
//     if(s[i] === s[i+1]){
//       numCurr++
//     } else {
//       [numPrev, numCurr] = [numCurr 1]
//     }
//     if(numPrev >= numCur) numSubstrings++
//   } return numSubstrings
// };

// console.log(countBinarySubstrings("00110011"));

// function getPermutations(array) {
//   let permutations = [];
//   permutationsHelper(0, permutations, array);
//   return permutations;
// }

// function permutationsHelper(i, permutations, array) {
//   if (i === array.length - 1) {
//     permutations.push(array.slice());
//   }
//   for (let j = i; j < array.length; j++) {
//     swap(i, j, array);
//     permutationsHelper(i + 1, permutations, array);
//     swap(i, j, array);
//   }
// }

// function swap(i, j, array) {
//   const temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }
// console.log(getPermutations([1, 2, 3]));

// ------ BST -- TRIE(pronounces like try), which inclides: insert, search, startsWith:
// class Trie {
//   constructor() {
//     this.root = {};
//   }

//   insert(word) {
//     let node = this.root;
//     for (let letter of word) {
//       if (node[letter] === undefined) {
//         node[letter] = {};
//       }
//       node = node[letter];
//     }
//     node.isEnd = true;
//   }

//   search(word) {
//     let node = this.root;
//     for (let letter of word) {
//       if (!node[letter]) {
//         return false;
//       } else {
//         node = node[letter];
//       }
//     }
//     return node && node.isEnd === true;
//   }

//   startsWith(prefix) {
//     let node = this.root;
//     for (let letter of prefix) {
//       if (!node[letter]) {
//         return false;
//       } else {
//         node = node[letter];
//       }
//     }
//     return true;
//   }
// }
// let trie = new Trie();
// trie.insert("apple");
// trie.search("apple"); // return True
// trie.search("app"); // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app"); // return True

// class Node{
//   constructor(value){
//     this.value = value
//     this.right = null
//     this.left = null
//   }

//   dfsTraversal(root=this.value){
//     let traversed = []
//     let curr
//     let stack = [root]
//     //let max = -Infinity
//     while(stack.length > 0){
//       curr = stack.pop()
//       traversed.push(curr.val)
//       if(curr.left) stack.push(curr.left)
//       if(curr.right) stack.push(curr.right)
//     } return traversed
//   }

//   //   dfsIterativePreorder(root) {
// //     const stack = [root],
// //     let traversed = [];
// //     let curr;

// //     while (stack.length) {
// //       curr = stack.pop();
// //       traversed.push(curr.val);
// //       if (curr.right) stack.push(curr.right);
// //       if (curr.left) stack.push(curr.left);
// //     }

// }

// var sortArrayByParityII = function(nums) {
//   /*
//   Approach:
//   Take care of even indexes only, odd indexes will be fixed automatically. It will work the other way also.
//   Whenever we find an odd value on an even index, we will fetch an even value from the next possible odd index and swipe the values
//   */
//   let temp,  j=1;
//   for(let i=0;i<nums.length;i+=2){
//       if(nums[i]%2!==0){//if we find an odd value on an even index
//           for(;j<nums.length;j+=2){
//               if(nums[j]%2===0){//fetch an even value from the next possible odd index
//                   temp = nums[i];
//                   nums[i] = nums[j];
//                   nums[j] = temp;
//                   break;
//               }
//           }
//       }
//   }
//   return nums;
// };
// console.log(sortArrayByParityII([4,1,6,7]))

// function maxIncreaseKeepingSkyline(grid) {
//   let row = new Array(grid.length).fill(0);
//   let col = new Array(grid.length).fill(0);

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++) {
//       row[i] = Math.max(row[i], grid[i][j]);
//       col[j] = Math.max(col[j], grid[i][j]);
//     }
//   }
//   let ans = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++) {
//       ans += Math.min(row[i], col[j]) - grid[i][j];
//     }
//   }
//   return ans;
// }

// var dietPlanPerformance = function (calories, k, lower, upper) {
//   let rollingSum = 0;
//   let res = 0;

//   for (let i = 0; i < calories.length; i++) {
//     rollingSum += calories[i];
//     if (i < k - 1) {
//       continue;
//     }
//     if (i >= k) {
//       rollingSum -= calories[i - k];
//     }

//     if (rollingSum > upper) {
//       res++;
//     }

//     if (rollingSum < lower) {
//       res--;
//     }
//   }
//   return res;
// };
// console.log(dietPlanPerformance([1, 2, 3, 4, 5], 2, 3, 3));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function insert(node){
//   if(this.root === null){
//     this.root = node
//   }

//   let current = this.root
//   while(current){
//     if(node.value < current.value){
//       if(current.left === null){
//         current.left = node
//       } else {
//         current = current.left
//       }
//     } else {
//       if(current.right === null){
//         current.right = node
//       } else {
//         current = current.right
//       }
//     }
//   }

// }

// let root = new Node(3);
// root.left = new Node(4);
// root.left.left = new Node(1);
// root.left.right = new Node(2);
// root.right = new Node(5);
// let bst = root;

// let root2 = new Node(4000);
// root2.left = new Node(1);
// root2.right = new Node(2);
// let bst2 = root2;
// console.log(bst.isSubtree(bst, bst2));

// function maxValueInTree(rootNode) {
//   let curr;
//   let max = -Infinity;
//   let stack = [rootNode];

//   while (stack.length) {
//     curr = stack.pop();
//     max = Math.max(max, curr.value);

//     if (curr.left) stack.push(curr.left);
//     if (curr.right) stack.push(curr.right);
//   }
//   return max;
// }

// var partitionLabels = function(s) {
//   let last = -1
//   let res = []
//   let left = 0
//   for(let i=0; i<s.length; i++){
//     last = Math.max(last, s.lastIndexOf(s[i]))
//     if(i === last){
//       res.push(i - left + 1)
//       left = i+1
//     }
//   } return res
// }
// console.log(partitionLabels("ababcbacadefegdehihklij"))

// function filterArrayDuplicates() {
//   // let test = [1, 1, 2, 2, 3, 3];
//   // test = test.filter((item, pos) => {
//   //   return test.indexOf(item) == pos;
//   // });
//   // return test;

//   let myMap = new Map();
//   console.log(myMap);
// }
// console.log(filterArrayDuplicates());

// var relativeSortArray = function (arr1, arr2) {
//   let included = [];
//   let nonExist = [];
//   for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr1[j] == arr2[i]) {
//         included.push(arr1[j]);
//       }
//     }
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (!included.includes(arr1[i])) {
//       nonExist.push(arr1[i]);
//     }
//   }
//   nonExist.sort(function (a, b) {
//     return a - b;
//   });
//   let final = included.concat(nonExist);

//   return final;
// };

// function test() {
//   let res = [];
//   let dig = ["abc abc", "dig1 1a a b", "dig2 3 6"];
//   dig.forEach((log) => {
//     // if (/ \d/.test(log)) {
//     //   res.push(log);
//     // }
//     if (/ \d/.test(log)) {
//       res.push(log);
//     }
//   });
//   return res;
// }
// console.log(test());

// function reorderLogFiles(logs) {
//   let letterLogs = [];
//   let digitLogs = [];

//   logs.forEach((log) => {
//     if (/ \d/.test(log)) {
//       digitLogs.push(log);
//     } else {
//       letterLogs.push(log);
//     }
//   });
//   letterLogs.sort((a, b) => {
//     let aWithOutId = a.slice(a.indexOf(" ") + 1);
//     let bWithOutId = b.slice(b.indexOf(" ") + 1);

//     let localeCompare = aWithOutId.localeCompare(bWithOutId);
//     if (localeCompare !== 0) {
//       return localeCompare;
//     } else {
//       return a.localeCompare(b);
//     }
//   });
//   return [...letterLogs, ...digitLogs];
// }
// console.log(
//   reorderLogFiles([
//     "dig1 8 1 5 1",
//     "let1 art can",
//     "dig2 3 6",
//     "let2 own kit dig",
//     "let3 art zero",
//   ])
// );

// function test() {
//   let myMap = new Map();
//   myMap.set(1, "abc");
//   myMap.set(2, "abc");
//   myMap.set(4, "abc");
//   myMap.set(8, "abc");

//   if (myMap.has(1)) {
//     return myMap.get(1);
//   }
// }
// console.log(test());

// function test() {
//   let arr = [
//     [1, 2],
//     [2, 1],
//     [3, 4],
//     [5, 6],
//   ];

//   if (arr[0].reverse().toString() === arr[1].toString()) {
//     return "hatee";
//   }
// }
// console.log(test());

// var numEquivDominoPairs = function(dominoes) {
//   var sum = 0;
//   var obj = {};
//   dominoes.map((x) => {
//     var cha = x.sort((a, b) => a - b).join("");
//     if (obj.hasOwnProperty(cha)) {
//       sum += obj[cha];
//       obj[cha]++;
//     } else {
//       obj[cha] = 1;
//     }
//   });
//   return sum;

// }

// var maximumUnits = function (boxTypes, truckSize) {
//   boxTypes.sort((a, b) => b[1] - a[1]);
//   console.log(boxTypes);
//   let max = 0;
//   for (const [numberOfBoxes, numberOfUnistsPerBox] of boxTypes) {
//     if (numberOfBoxes >= truckSize) {
//       max += truckSize * numberOfUnistsPerBox;
//       //return max;
//     } else {
//       max += numberOfBoxes * numberOfUnistsPerBox;
//       truckSize -= numberOfBoxes;
//     }
//   }
//   //return max;
// };

// function test() {
//   let arr = [7, 1, 3, 5, 2, 4, 6];
//   return arr.sort((a, b) => b - a);
// }
// console.log(test());

// function countBinarySubstrings(s){
//   let numSubstrings = 0
//   let currVal = 1
//   let prevVal = 0

//   for(let i=0; i<s.length-1; i++){
//     if(s[i] === s[i+1]){
//       currVal++
//     } else {
//       [currVal, prevVal] = [prevVal, 1]
//     }
//     if(prevVal >= currVal){
//       numSubstrings++
//     }
//   } return numSubstrings
// }

// function test() {
//   let str = "aba";
//   return str[1];
// }
// console.log(test());

// function sortBoxes(boxList) {
//   let letterLogs = [];
//   let digitLogs = [];

//   // logs.forEach((log) => {
//   //   if (/ \d/.test(log)) {
//   //     digitLogs.push(log);
//   //   } else {
//   //     letterLogs.push(log);
//   //   }
//   // });

//   boxList.forEach((log) => {
//     if (/ \d/.test(log)) {
//       digitLogs.push(log);
//     } else {
//       letterLogs.push(log);
//     }
//   });

//   //console.log(digitLogs);

//   letterLogs.sort((a, b) => {
//     let aWithOutId = a.slice(a.indexOf(" ") + 1);
//     let bWithOutId = b.slice(b.indexOf(" ") + 1);

//     let localeCompare = aWithOutId.localeCompare(bWithOutId);
//     if (localeCompare !== 0) {
//       return localeCompare;
//     } else {
//       return a.localeCompare(b);
//     }
//   });
//   return [...letterLogs, ...digitLogs];
// }

// // console.log()

// console.log(
//   sortBoxes([
//     "mi2 jog mid pet",
//     "wz3 34 54 398",
//     "a1 alps cow bar",
//     "x4 45 21 7",
//   ])
// );

// function getItems(entries) {
//   const entries_modified = [];
//   const result = [];

//   let i = 0;
//   entries.map((e, a) => {
//     if (e[0] == "VIEW") {
//       i++;
//     } else {
//       if (!entries_modified[i]) {
//         entries_modified[i] = {};
//       }
//       entries_modified[i][e[2]] = e[1];
//     }
//   });

//   entries_modified.map((e, a) => {
//     for (let i in e) {
//       result.push(e[i]);
//     }
//   });

//   return result;
// }
// console.log(
//   getItems([
//     ["INSERT", "fries", "4"],
//     ["INSERT", "soda", "2"],
//     ["VIEW", "-", "-"],
//     ["VIEW", "-", "-"],
//     ["INSERT", "hamburger", "5"],
//     ["VIEW", "-", "-"],
//     ["INSERT", "nuggets", "4"],
//     ["INSERT", "cookie", "1"],
//     ["VIEW", "-", "-"],
//     ["VIEW", "-", "-"],
//   ])
// );

// function getItems(entries) {
//   let tempArr = [];
//   let res = [];
//   let viewCounter = -1;

//   const sortFunc = (subArr) => {
//     if (tempArr.includes(subArr[1])) {
//       return subArr.sort(a[1] < b[1] ? -1 : 1);
//     } else {
//       return subArr.sort(a[0] < b[0] ? -1 : 1);
//     }
//   };

//   for (let i = 0; i < entries.length; i++) {
//     if (entries[i][i] === "INSERT") {
//       tempArr.push([entries[i][1][2]]);
//     } else if (entries[i][i] === "VIEW") {
//       viewCounter += 1;
//       tempArr.push(sortFunc(entries[i][i]));
//       res.push(tempArr[viewCounter][0]);
//     }
//   }
//   //return res;

//   let testArr = [
//     ["banna", "1"],
//     ["apple", "2"],
//   ];
//   let arr = [];
//   arr.push(testArr[0][0]);
//   // return arr;
//   // return testArr[0][0];

//   return testArr.sort((a, b) => (a[0] < b[0] ? -1 : 1));
// }

// console.log(
//   getItems([
//     ["INSERT", "fries", "4"],
//     ["INSERT", "soda", "2"],
//     ["VIEW", "-", "-"],
//     ["VIEW", "-", "-"],
//     ["INSERT", "hamburger", "5"],
//     ["VIEW", "-", "-"],
//     ["INSERT", "nuggets", "4"],
//     ["INSERT", "cookie", "1"],
//     ["VIEW", "-", "-"],
//     ["VIEW", "-", "-"],
//   ])
// );

// function test() {
//   twoDArr = [
//     ["fries", "4"],
//     ["berries", "1"],
//     ["apple", "2"],
//   ];

//   for (let i = 0; i < twoDArr.length; i++) {
//     if (twoDArr[i][1] === "2") {
//       twoDArr.splice(i, 1);
//     }
//   }
//   return twoDArr;
//   // if (twoDArr.flat().includes("4")) {
//   //   return "karoghchipyahe";
//   // }
// }
// console.log(test());

// function getItems(entries) {
//   let tempArr = [];
//   let res = [];
//   let viewCounter = -1;

//   const findIndex = (array, item) => {
//     for (var i = 0; i < array.length; i++) {
//         // This if statement depends on the format of your array
//         if (array[i][1] == item[1]) {
//             return i;   // Found it
//         }
//     }
// }

//   const sortFunc = (subArr) => {
//     let flat = [].concat(...tempArr)
//      if(flat.includes( subArr[1])){
//        let temp = []
//        let index
//        for(let i=0; i<tempArr.length; i++){
//          if(tempArr[i][1] === subArr[1]){
//             temp = []
//             index = findIndex(tempArr, subArr)
//             temp.push(tempArr[i][1], subArr)
//             tempArr.splice(index, 1)
//             temp.sort((a, b) => a[0] < b[0] ? -1 : 1)
//             return tempArr.splice(index, 0, temp[0], temp[1])

//            }
//         }

//          //tempArr.push([ subArr[0], subArr[1]   ])
//          //return tempArr.sort((a, b) => a[0] < b[0] ? -1 : 1)
//       } else {
//          tempArr.push([ subArr[0], subArr[1]   ])
//          return tempArr.sort((a, b) => a[1] < b[1] ? -1 : 1)
//       }
//   }

//   for (let i = 0; i < entries.length; i++) {
//     if (entries[i][0] === "INSERT") {
//      // tempArr.push([ entries[i][1], entries[i][2]   ])
//       sortFunc([ entries[i][1], entries[i][2]   ])
//     } else if (entries[i][0] === "VIEW") {
//       viewCounter += 1;

//       res.push(tempArr[viewCounter][0])
//     }
//   }
//   return res;
// }

// console.log(
//   getItems([
//     ["INSERT", "fries", "4"],
//     ["INSERT", "soda", "2"],
//     ["VIEW", "-", "-"],
//     ["VIEW", "-", "-"],
//     ["INSERT", "hamburger", "5"],
//     ["VIEW", "-", "-"],
//     ["INSERT", "nuggets", "4"],
//     ["INSERT", "cookie", "1"],
//     ["VIEW", "-", "-"],
//     ["VIEW", "-", "-"],
//   ])
// );

// var countCharacters = function (words, chars) {
//   let counter = 0;
//   charsCopy = chars;
//   const isLegit = (word) => {
//     for (let char of word) {
//       if (charsCopy.includes(char)) {
//         charsCopy.replace(char, "");
//       } else {
//         return false;
//       }
//     }
//     return true;
//   };

//   for (let word of words) {
//     isLegit(word) ? (counter += word.length) : null;
//   }

//   return counter;
// };

// needs review with possible diffrent solutions!
// var numRollsToTarget = function (d, f, target) {
//   const dp = [...new Array(d + 1)].map(() => new Array(target + 1).fill(0));
//   //const mod = 10**9 + 7;
//   dp[0][0] = 1;
//   for (let dice = 1; dice <= d; dice++) {
//     for (let val = 0; val <= target; val++) {
//       for (let face = 1; face <= f; face++) {
//         if (val < face) {
//           continue;
//         }
//         dp[dice][val] = dp[dice][val] + dp[dice - 1][val - face];
//         //% mod
//       }
//     }
//   }
//   return dp[d][target];
// };
// console.log(numRollsToTarget(1, 6, 3));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let current = this.root;
//     while (current) {
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         } else {
//           current = current.left;
//         }
//       } else {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         } else {
//           current = current.right;
//         }
//       }
//     }
//   }
// }

// var findTarget = function (root, k) {
//   //console.log(root.value);
//   if (!root) return false;
//   const set = new Set();
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     if (set.has(k - node.value)) return true;
//     set.add(node.value);
//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
//   }
//   return false;
// };

// const bst = new BST();
// bst.insert(5);
// bst.insert(3);
// bst.insert(6);
// bst.insert(2);
// bst.insert(4);
// bst.insert(7);
// console.log(findTarget(bst.root, 9));

// bst.left = new Node(14);
// bst.left.left = new Node(10);
// bst.left.right = new Node(19);
// bst.right = new Node(35);
// bst.right.left = new Node(31);
// bst.right.right = new Node(42);
// console.log(maxValueInTree(bst))

// var gcdOfStrings = function (str1, str2) {
//   if (str1 + str2 !== str2 + str1) return "";
//   let s = "";
//   let str = "";
//   const length = Math.min(str1.length, str2.length);
//   for (let i = 0; i < length; i++) {
//     s += str1[i];
//     if (str1.length % s.length === 0 && str2.length % s.length === 0) {
//       str = s;
//     } else {
//       continue;
//     }
//   }
//   return str;
// };

// var reverseStr = function (s, k) {
//   if (k > s.length) return s.split("").reverse().join("");

//   const split = s.split("");

//   // reverse the segment and put it back
//   for (let i = 0; i < s.length; i += 2 * k) {
//     const reverse = split.splice(i, k).reverse();
//     split.splice(i, 0, ...reverse);
//   }

//   return split.join("");
// };
// console.log(reverseStr("abcdefg", 2));

// function test() {
//   let map = new Map();
//   map.set("a", "1");
//   // map.set("b", "2");
//   map.delete("a");
//   return map;
// }
// console.log(test());

// ---- LRUCache ------ //
// class LRUCache {
//   constructor(capacity) {
//     this.cache = new Map();
//     this.capacity = capacity;
//   }

//   get(key) {
//     if (!this.cache.has(key)) return -1;

//     const v = this.cache.get(key);
//     this.cache.delete(key);
//     this.cache.set(key, v);
//     return this.cache.get(key);
//   }

//   put(key, value) {
//     if (this.cache.has(key)) {
//       this.cache.delete(key);
//     }
//     this.cache.set(key, value);
//     if (this.cache.size > this.capacity) {
//       this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
//     }
//   }
// }

// let lru = new LRUCache(2);
// lru.put("red", "red");
// lru.put("red", "red");
// lru.put("grey", "grey");
// lru.put("blue", "blue");
// lru.get("red");

// var kClosest = function (points, k) {
//   // Sort the array with a custom lambda comparator function
//   points.sort((a, b) => squaredDistance(a) - squaredDistance(b));

//   // Return the first k elements of the sorted array
//   return points.slice(0, k);
// };

// // Calculate and return the squared Euclidean distance
// const squaredDistance = ([x, y]) => Math.pow(x, 2) + Math.pow(y, 2);

// var generateMatrix = function (n) {
//   let output = new Array(n).fill(0).map(() => new Array(n).fill(0));

//   let count = 0;

//   let size = n * n;

//   let left = 0;

//   let right = n - 1;

//   let top = 0;

//   let bottom = n - 1;

//   while (count < size) {
//     //going right
//     for (let i = left; i <= right; i++) {
//       count++;
//       output[top][i] = count;
//     }
//     top++;

//     // going down
//     for (let i = top; i <= bottom; i++) {
//       count++;
//       output[i][right] = count;
//     }
//     right--;

//     //going left
//     for (let i = right; i >= left; i--) {
//       count++;
//       output[bottom][i] = count;
//     }
//     bottom--;

//     //going up
//     for (let i = bottom; i >= top; i--) {
//       count++;
//       output[i][left] = count;
//     }
//     left++;
//   }

//   return output;
// };

// console.log(generateMatrix(3));

// var prisonAfterNDays = function (cells, N) {
//   const nextDay =  (prison) => {
//     let newPrison = "";
//     for (let i = 0; i < prison.length; i++) {
//       if (prison[i - 1] == prison[i + 1]) newPrison += "1";
//       else newPrison += "0";
//     }
//     return newPrison;
//   };
//   let prison = cells.join("");
//   let history = [];
//   while (N--) {
//     prison = nextDay(prison);
//     let lookUp = history.indexOf(prison); // cycle found, get the cycle position
//     if (lookUp != -1) {
//       let mod = N % (history.length - lookUp); // check how many extra moves after the cycle
//       return history[lookUp + mod].split("");
//     }
//     history.push(prison);
//   }
//   return prison.split("");
// };
// console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000));

// average values of node levels:
// var averageOfLevels = function (root = bst) {
//   let AverageValues = [];
//   let queue = [root];
//   while (queue.length) {
//     const LENGTH = queue.length;
//     let sum = 0;
//     for (let i = 0; i < LENGTH; i++) {
//       const node = queue.shift();
//       sum += node.val;
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     AverageValues.push(sum / LENGTH);
//   }
//   return AverageValues;
// };

// find/conatins method of a BST
// contains(value) {
//   if(value < this.value){
//           if(this.left === null){
//               return false
//           } else {
//               return this.left.contains(value)
//           }
//       } else if(value > this.value){
//           if(this.right === null){
//               return false
//           } else {
//               return this.right.contains(value)
//           }
//       } else {
//           return true
//       }
// }

// var spellchecker = function (wordlist, queries) {
//   const set = new Set();
//   const map1 = new Map();
//   const map2 = new Map();

//   for (const word of wordlist) {
//     const lowered = word.toLowerCase();
//     const devoweled = maskVowels(lowered);

//     set.add(word);
//     if (!map1.has(lowered)) map1.set(lowered, word);
//     if (!map2.has(devoweled)) map2.set(devoweled, word);
//   }

//   const res = [];

//   for (const query of queries) {
//     const lowered = query.toLowerCase();
//     const devoweled = maskVowels(lowered);

//     if (set.has(query)) res.push(query);
//     // takes care of the capitalization case
//     else if (map1.has(lowered)) res.push(map1.get(lowered));
//     // takes care of the vowel errors
//     else if (map2.has(devoweled)) res.push(map2.get(devoweled));
//     else res.push("");
//   }

//   return res;

//   function maskVowels(str) {
//     let replaced = "";

//     for (const char of str) {
//       if (/[aeiou]/gi.test(char)) replaced += "*";
//       else replaced += char;
//     }

//     return replaced;
//   }
// };
// console.log(
//   spellchecker(
//     ["KiTe", "kite", "hare", "Hare"],
//     [
//       "kite",
//       "Kite",
//       "KiTe",
//       "Hare",
//       "HARE",
//       "Hear",
//       "hear",
//       "keti",
//       "keet",
//       "keto",
//     ]
//   )
// );

// var dietPlanPerformance = function (calories, k, lower, upper) {
//   let points = 0;
//   let tot = 0;

//   for (let i = 0; i < calories.length; i++) {
//     tot += calories[i];

//     if (i + 1 < k) continue;
//     if (i + 1 > k) tot -= calories[i - k];

//     if (tot < lower) points--;
//     if (tot > upper) points++;
//   }
//   return points;
// };
// console.log(dietPlanPerformance([6, 13, 8, 7, 10, 1, 12, 11], 6, 5, 37));

// const isSubtree = (root, subRoot) => {
//   const areEqual = (node1, node2) => {
//     if (!node1 || !node2) return !node1 && !node2;
//     if (node1.val !== node2.val) return false;
//     return (
//       areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right)
//     );
//   };
//   const queue = [root];
//   while (queue.length) {
//     const node = queue.pop();
//     if (!node) continue;
//     if (areEqual(node, subRoot)) return true;
//     queue.push(node.right, node.left);
//   }
//   return false;
// };

// isSubtree several implementations with BST including insert method:
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(val) {
//     let newNode = new Node(val);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let current = this.root;
//     while (current) {
//       if (val < current.val) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         } else {
//           current = current.left;
//         }
//       } else if (val > current.val) {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         } else {
//           current = current.right;
//         }
//       }
//     }
//   }
// }

// const isSubtree = (root = bst1.root, subRoot = bst2.root) => {
//   const areEqual = (node1, node2) => {
//     if (!node1 || !node2) return !node1 && !node2;
//     if (node1.val !== node2.val) return false;
//     return (
//       areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right)
//     );
//   };
//   const queue = [root];
//   while (queue.length) {
//     const node = queue.pop();
//     if (!node) continue;
//     if (areEqual(node, subRoot)) return true;
//     queue.push(node.right, node.left);
//   }
//   return false;
// };

// var isSubtree = function(root = bst1.root, subRoot = bst2.root) {
//     if (!root) return !subRoot;
//     return isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
// };

// function isEqual(root1, root2) {
//     if (!root1 || !root2) return !root1 && !root2;
//     if (root1.val !== root2.val) return false;
//     return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
// }

// var isSubtree = function (root = bst1.root, subRoot = bst2.root) {
//   let stack = [root];
//   while (stack.length > 0) {
//     let node = stack.pop();
//     if (isSubtreeEqual(node, subRoot)) {
//       return true;
//     }
//     if (node.left) stack.push(node.left);
//     if (node.right) stack.push(node.right);
//   }

//   return false;
// };

// function isSubtreeEqual(root1, root2) {
//   if (root1 === null && root2 === null) {
//     return true;
//   } else if (root1 === null || root2 === null) {
//     return false;
//   } else {
//     return (
//       root1.val === root2.val &&
//       isSubtreeEqual(root1.left, root2.left) &&
//       isSubtreeEqual(root1.right, root2.right)
//     );
//   }
// }

// let bst1 = new BST();
// bst1.insert(8);
// bst1.insert(4);
// bst1.insert(1);
// bst1.insert(5);
// bst1.insert(9);

// let bst2 = new BST();
// bst2.insert(4);
// bst2.insert(1);
// bst2.insert(5);

// isSubtree();

// function test() {
//   let twoDArr = Array.from(Array(3), () => Array(2).fill(0));
//   console.log(twoDArr);
// }
// console.log(test());

// var numRollsToTarget = function(d, f, target) {
//   const MOD = 1e9 + 7;
// // If there are no dices, then there is no way to reach any of the values.
//   let prevDP = new Array(target + 1).fill(0); // [1]

//   for (let face = 1; face <= Math.min(f, target); face++) {
// // In the case we have 1 dice, there is 1 way to reach each of the dice's face values.
// // However, there is no way to reach anything greater than those values.
//     prevDP[face] = 1; // [2]
//   }

// // The dice rolls
//   for (let dice = 2; dice <= d; dice++) {  // [3]
//       const newDP = new Array(target + 1).fill(0);

// // The dice's face values we will get from a roll
//       for (let face = 1; face <= f; face++) { // [4]

// // The number we are currently targeting
//           for (let num = 1; num <= target; num++) { // [5]

// // The remaining value we get will be less than our target value, so we can look at our prevDP to see how many ways there are to get there.
//           const rem = num - face; // [6]

// // The reason why its diff > 0 is because if the difference is 0, then the # of ways to get there is 0 since the dice starts at value 1.
// // If you put d >= 0 you still get the right answer since you are just adding 0. We can also just forgo the conditional check if
// // we set "num = face".
//               if (rem > 0) { // [7]
//                   newDP[num] = (newDP[num] + prevDP[rem]) % MOD;
//               }
//           }
//       }
//       prevDP = newDP;
//   }

//   return prevDP[target];
// };

// /*

// [1] If there are no dices, then there is no way to reach any of the values.

// [2] In the case we have 1 dice, there is 1 way to reach each of the dice's face values.
//   However, there is no way to reach anything greater than those values.

// [3] The dice rolls

// [4] The dice's face values we will get from a roll

// [5] The number we are currently targeting

// [6] The remaining value we get will be less than our target value, so we can look at our prevDP to see how many ways there are to get there.

// [7] The reason why its diff > 0 is because if the difference is 0, then the # of ways to get there is 0 since the dice starts at value 1.
//   If you put d >= 0 you still get the right answer since you are just adding 0. We can also just forgo the conditional check if
//   we set "num = face".

// */
// console.log(numRollsToTarget(2, 6, 3));

// function maxArea(height){
//   let res = 0
//   let left = 0
//   let right = height.length-1

//   while(left < right){
//     let smallestSide = Math.min(height[left], height[right])
//     let area = (right - left) * smallestSide

//     if(area > res){
//       res = area
//     }

//     if(height[left] < height[right]){
//       left++
//     } else {
//       right--
//     }

//   } return res
// }

// function numRollsToTarget(d, f, target){
//   const dp = Array.from(Array(target+1), () => Array(d+1).fill(0))
//   // const mode = 10 ** 9 + 7
//   dp[0][0] = 1

//   for(let i = 1; i<=target; i++){
//     for(let j=1; j<=d; j++){
//       for(let k=1; k<=f; k++){
//         if(k > i) break
//         dp[i][j] += dp[i-k][j-1]
//         // % mod
//       }
//     }
//   } return dp[target][d]

// }

// var arrayRankTransform = function(arr) {

//     let res = []
//     let numSet = new Set(arr)
//     let numArr = [...numSet].sort((a, b) => a-b)

// //     const swap = (firstIndex, secondIndex) => {
// //         let temp = numArr[firstIndex]
// //         numArr[firstIndex] = numArr[secondIndex]
// //         numArr[secondIndex] = temp
// //     }

// //     for(let i=0; i<numArr.length; i++){
// //         for(let j=i; j<numArr.length; j++){
// //             if(numArr[i] > numArr[j+1]){
// //               swap(i, j+1)
// //             }
// //         }
// //     }

//     for(let i=0; i<arr.length; i++){
//         res.push(numArr.indexOf(arr[i]) +1)
//     }
//     return res

// };

// var twoSumBSTs = function(root1, root2, target) {
//   // In-order traverse
//   const inorder = (root, tree) => {
//     if (!root) return;
//     inorder(root.left, tree);
//     tree.push(root.val);
//     inorder(root.right, tree);
//   }

//   const tree1 = [], tree2 = [];
//   inorder(root1, tree1);
//   inorder(root2, tree2);

//   // Return false if not possible
//   if ((target < tree1[0] + tree2[0]) ||  // less that minimum sum
//       (target > tree1[tree1.length - 1] + tree2[tree2.length - 1])) // greater than maximum sum
//     return false;

//   // Two sum
//   const s = new Set(tree1.map(v => target - v));
//   return tree2.some(v => s.has(v));
// };

// function merge(nums1, m, nums2, n) {
//   let idx1 = m - 1;
//   let idx2 = n - 1;
//   let idx3 = nums1.length - 1;

//   while (idx2 >= 0) {
//     nums1[idx3--] = nums1[idx1] > nums2[idx2] ? nums1[idx--] : nums2[idx2--];
//   }
//   return res;
// }

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(val) {
//     let newNode = new Node(val);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let current = this.root;
//     while (current) {
//       if (val < current.val) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         } else {
//           current = current.left;
//         }
//       } else if (val > current.val) {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         } else {
//           current = current.right;
//         }
//       }
//     }
//   }
// }

// var twoSumBSTs = function(root1=bst1.root, root2=bst2.root, target=5) {
//   // In-order traverse
//   const inorder = (root, tree) => {
//     if (!root) return;
//     inorder(root.left, tree);
//     tree.push(root.val);
//     inorder(root.right, tree);
//   }

//   const tree1 = [], tree2 = [];
//   inorder(root1, tree1);
//   inorder(root2, tree2);

//   // Return false if not possible
//   if ((target < tree1[0] + tree2[0]) ||  // less that minimum sum
//       (target > tree1[tree1.length - 1] + tree2[tree2.length - 1])) // greater than maximum sum
//     return false;

//   // Two sum
//   const s = new Set(tree1.map(v => target - v));
//   return tree2.some(v => s.has(v));
// };

// let bst1 = new BST();
// bst1.insert(2);
// bst1.insert(1);
// bst1.insert(4);

// let bst2 = new BST();
// bst2.insert(1);
// bst2.insert(0);
// bst2.insert(3);
// twoSumBSTs()

// function test() {
//   let s = "A man, ???a plan, a canal: Panama";
//   return (s = s.replace(/[\W_]+/g, "").toLowerCase());
// }
// console.log(test());

// function test() {
//   //return 1 ^ 6;
//   // bitwise and operator -- &
//   let carry = 2 & 4;
//   return carry;
//   // 010
//   // 100
//   // 000
//   /*
//   1
//   10
//   11
//   100
//   101
//   110
//   111
//   */
// }
// console.log(test());

// by Speedhunter
// var validWordAbbreviation = function (word, abbr) {
//   let i = 0;
//   let j = 0;

//   while (i < word.length && j < abbr.length) {
//     let wordChar = word.charAt(i);
//     let abbrNum = parseInt(abbr.substring(j));

//     if (abbrNum === 0) return false;

//     if (Number.isInteger(abbrNum)) {
//       i += abbrNum;
//       j += String(abbrNum).length;
//     } else {
//       let abbrChar = abbr.charAt(j);
//       if (wordChar !== abbrChar) return false;
//       i += 1;
//       j += 1;
//     }
//   }
//   return word.length === i && abbr.length === j;
// };

// var addStrings = function (num1, num2) {
//   num1 = num1.split("");
//   num2 = num2.split("");
//   let res = new Array(Math.max(num1.length, num2.length) + 1);
//   let i = num1.length - 1,
//     j = num2.length - 1,
//     k = res.length - 1;
//   let carry = 0,
//     sum = 0;
//   while (i >= 0 || j >= 0) {
//     sum =
//       (i >= 0 ? Number(num1[i]) : 0) + (j >= 0 ? Number(num2[j]) : 0) + carry;
//     carry = sum >= 10 ? 1 : 0;
//     res[k] = sum % 10;
//     i--, j--, k--;
//   }
//   if (carry > 0) {
//     res[k] = carry;
//   }
//   return res.join("");
//   // T.C: O(M + N), M = length of num1, N = length of num2
//   // S.C: O(M + N)
// };

// var sumZero = function (n) {
//   let num = Math.floor(n / 2);
//   let res = [];

//   for (let i = 1; i <= num; i++) {
//     res.push(i, -i);
//   }

//   if (n % 2 !== 0) {
//     res.push(0);
//   }
//   return res;
// };

// var arraySign = function (nums) {
//   let result = 1;
//   for (var q = 0; q < nums.length; q++) {
//     if (nums[q] == 0) return 0;
//     if (nums[q] < 0) result *= -1;
//   }
//   return result;
// };

// var arraySign = function (nums) {
//   let result = 1;
//   for (var q = 0; q < nums.length; q++) {
//     if (nums[q] == 0) return 0;
//     if (nums[q] < 0) result *= -1;
//   }
//   return result;
// };

// class Logger {
//   constructor() {
//       this.map = new Map()
//   }

//   shouldPrintMessage(timestamp, message) {
//       if (this.map.has(message)) {
//         if (timestamp < this.map.get(message) + 10) {
//           return false
//       }
//   }

//       this.map.set(message, timestamp)
//       return true
// }
// }

// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";
//   let prefix = "";
//   let maxPrefixLength = Math.min(...strs.map((v) => v.length));

//   for (let i = 0; i < maxPrefixLength; i++) {
//     let char = strs[0][i];
//     if (strs.every((str) => str[i] === char)) {
//       prefix += char;
//     } else {
//       break;
//     }
//   }
//   return prefix;
// };

// Valid parentheses
// var isValid = function (s) {
//   const stack = [];
//   for (let char of s) {
//     if (char === "(") {
//       stack.push(")");
//     } else if (char === "{") {
//       stack.push("}");
//     } else if (char === "[") {
//       stack.push("]");
//     } else {
//       if (char !== stack.pop()) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };

// --- Linked list with mergeTwoLists method/function ---
// class ListNode {
//   constructor(val, next) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// let node1 = new ListNode(1);
// node1.next = new ListNode(2);
// node1.next.next = new ListNode(4);
// let node2 = new ListNode(1)
// node2.next = new ListNode(3)
// node2.next.next = new ListNode(4)
// // let list1 = new LinkedList(node1);
// // let list2  = new LinkedList(node2)

// const mergeTwoLists = function(l1 = node1, l2 = node2) {
//     const head = new ListNode(null);
//     let curr = head;
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             curr.next = l1;
//             l1 = l1.next;
//         } else {
//             curr.next = l2;
//             l2 = l2.next;
//         }
//         curr = curr.next;
//     }
//     curr.next = l1 || l2;
//     return head.next;

// };
// mergeTwoLists()

// var strStr = function(haystack, needle) {

//   //     let len = needle.length

//   //     for(let i=0; i<needle.length; i++){
//   //         for(let j=0; j<haystack.length; j++){
//   //             if(needle[i] === haystack[j]){
//   //                let isMatch = haystack.substring(j, len+j)
//   //                if(isMatch === needle){
//   //                    return j
//   //                } else {
//   //                    continue
//   //                }
//   //             } else {
//   //                 continue
//   //             }
//   //         }
//   //     } return -1

//       if(needle.length === 0) return 0

//       for(let i=0; i<haystack.length; i++){
//           let j = 0
//           let k = i
//             while(haystack[k] === needle[j] && j < needle.length){
//                   k += 1
//                   j += 1
//           }
//             if(j === needle.length) return i

//       } return -1

//       // Time Complexity: O(m*n)
//       // Space Complexity: O(1)

//   }

// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   digits.unshift(1);
//   return digits;
// };

// var mySqrt = function (x) {
//   let num = 0;
//   let res;
//   while (num * num <= x) {
//     res = num;
//     num++;
//   }
//   return res;
// };

// var climbStairs = function(n) {
//   let dp = Array.from(n+1)
//   dp[1] = 1
//   dp[2] = 2

//   for(let i=3; i<=n; i++){
//      dp[i] = dp[i-1] + dp[i-2]
//   }
//   return dp[n]
// }

// inOrder traversal wth BST tree implemented
// class Node{
//   constructor(val){
//     this.val = val
//     this.left = null
//     this.right = null
//     }
//   }

//   class BST{
//     constructor(){
//       this.root = null
//       }

//       insert(val){
//         let newNode = new Node(val)

//         if(this.root === null){
//           this.root = newNode
//           return this
//           }

//           let curr = this.root
//           while(curr){
//             if(val < curr.val){
//                 if(curr.left === null){
//                     curr.left = newNode
//                     return this
//                   }
//                   curr = curr.left
//               }else if(val > curr.val){
//                 if(curr.right === null){
//                     curr.right = newNode
//                     return this
//                   }
//                   curr = curr.right
//               }

//             }

//         }

//     }

// var inorderTraversal = function(root=bst) {
//   const output = [];

//   if (root === null) {
//     return output;
//   }

//   const stack = [];
//   let curr = root;

//   while (curr !== null || stack.length !== 0) {
//     if (curr !== null) {
//       stack.push(curr);
//       curr = curr.left;
//     } else {
//       curr = stack.pop();
//       output.push(curr.val);
//       curr = curr.right;
//     }
//   }

//   return output;
// };

// let bst = new Node(1)
// bst.right = new Node(2)
// bst.right.left = new Node(3)
// inorderTraversal()

// isSymentric tree with BST implemented
// class Node{
//   constructor(val){
//     this.val = val
//     this.left = null
//     this.right = null
//     }
//   }

//   class BST{
//     constructor(){
//       this.root = null
//       }

//       insert(val){
//         let newNode = new Node(val)

//         if(this.root === null){
//           this.root = newNode
//           return this
//           }

//           let curr = this.root
//           while(curr){
//             if(val < curr.val){
//                 if(curr.left === null){
//                     curr.left = newNode
//                     return this
//                   }
//                   curr = curr.left
//               }else if(val > curr.val){
//                 if(curr.right === null){
//                     curr.right = newNode
//                     return this
//                   }
//                   curr = curr.right
//               }

//             }

//         }

//     }

// var isSymmetric = function(root=bst) {
// //     if there is no root that means it is a symettric tree
//     if(!root) return true
// //     Start 2 queue one for the left banch and one for the right branch
//     let q1 = [root.left], q2 = [root.right]
// //     traverse through both branches, until they are both exhausted at the same time
//     while (q1.length > 0 && q2.length > 0){
// //         get current left and compare it to the right of each branch (this is how a mirror works)
//         let node1 = q1.shift()
//         let node2 = q2.shift()
// //         if both are null at the same time, just move on
//         if(!node1 && !node2) continue
// //         if the current level is not symmetric (1 of them is null or they are not equal) return false
//         if(!node1 || !node2 || node1.val !== node2.val) return false
// //         to mentain comparing left to right (this is the tricky part, you have to push left and right & reverse for each branch)
//         q1.push(node1.left)
//         q2.push(node2.right)
//         q1.push(node1.right)
//         q2.push(node2.left)
//     }
// //     If both are exhausted at the same time and they are symmeteric return true
//     return true

// };

// let bst = new Node(1)
// bst.right = new Node(2)
// bst.left = new Node(2)
// bst.left.left = new Node(3)
// bst.right.right = new Node(3)
// bst.left.right = new Node(4)
// bst.right.left = new Node(400)

// isSymmetric()

// var maxProfit = function (prices) {
//   let profit = 0;
//   let min = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     if (min > prices[i]) {
//       min = prices[i];
//     } else if (prices[i] - min > profit) {
//       profit = prices[i] - min;
//     }
//   }
//   return profit;
// };

// var singleNumber = function (nums) {
//   let map = {};
//   for (let num of nums) {
//     if (map[num] === undefined) {
//       map[num] = 0;
//     }
//     map[num] += 1;
//   }

//   for (let key in map) {
//     if (map[key] === 1) {
//       return key;
//     }
//   }
// };

// Min Stack with stack implmentation
// class MinStack{
//   constructor(){
//       this.stack = []
//       this.min = Infinity
//   }

//   push(x){
//       const stackObj = {val:x, prevMin:this.min}
//       this.stack.push(stackObj)
//       this.min = Math.min(this.min, x)
//   }

//   pop(){
//       const {prevMin} = this.stack.pop()
//       this.min = prevMin
//   }

//   top(){
//       return this.stack[this.stack.length-1].val
//   }

//   getMin(){
//       return this.min
//   }

// }
// let minStack = new MinStack();
// minStack.push(2);
// minStack.push(0);
// minStack.push(3);
// minStack.push(0);
// minStack.getMin(); // return -3
// minStack.pop();

// class ListNode {
//   constructor(val, next) {
//     this.val = val;
//     this.next = null;
//   }
// }
// // class LinkedList {
// //   constructor(val) {
// //     this.val = val;
// //     this.next = null;
// //   }
// // }

// var getIntersectionNode = function (headA = node1, headB = node2) {
//   const set = new Set(); // This set will store all the nodes that are encountered while traversing the first LL
//   let curr = headA;
//   while (curr) {
//     set.add(curr.val);
//     curr = curr.next;
//   }
//   curr = headB;
//   while (curr && !set.has(curr.val)) {
//     // the loop will break when we find the intersection node or if there is no intersection
//     curr = curr.next;
//   }
//   return curr;
// };

// let node1 = new ListNode(4);
// node1.next = new ListNode(1);
// node1.next.next = new ListNode(8);
// node1.next.next.next = new ListNode(4);
// node1.next.next.next.next = new ListNode(5);

// let node2 = new ListNode(6);
// node2.next = new ListNode(1);
// node2.next.next = new ListNode(8);
// node2.next.next.next = new ListNode(4);
// node2.next.next.next.next = new ListNode(5);
// // let list1 = new LinkedList(node1);
// // let list2  = new LinkedList(node2)
// getIntersectionNode();

// var findMissingRanges = function (nums, lower, upper) {
//   const res = [];
//   let start = lower;

//   const formatRange = (lower, upper) => {
//     if (lower === upper) return String(lower);
//     return `${lower}->${upper}`;
//   };

//   for (let num of nums) {
//     if (start < num) {
//       res.push(formatRange(start, num - 1));
//     }
//     start = num + 1;
//   }
//   if (start <= upper) res.push(formatRange(start, upper));
//   return res;
// };

// var majorityElement = function (nums) {
//     let obj = {}
//     let len  = nums.length / 2

//     for(let num of nums){
//         if(obj[num] === undefined){
//            obj[num] = 1
//         } else {
//             obj[num] += 1
//         }
//     }

//     for(let key in obj){
//        if(obj[key] >= len){
//            return key
//        }
//     }

//   let majorityNum = nums[0];
//   let count = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (count === 0) {
//       majorityNum = nums[i];
//     }
//     count = nums[i] === majorityNum ? (count += 1) : (count -= 1);
//   }

//   return majorityNum;
// };

// var reverseBits = function (n) {
//   let res = 0,
//     pow = 31;
//   while (n > 0) {
//     let rightMost = n & 1;
//     res = res + (rightMost << pow);
//     pow--;
//     n = n >>> 1;
//   }
//   // take negative into positive
//   return res >>> 0;
// };
// console.log(reverseBits(111));

// function test() {
//   let num = 123;

//   return num
//     .toString()
//     .split("")
//     .reduce(function (sum, num) {
//       console.log(num);
//       return sum + num;
//     }, 0);

//   // return num
//   //   .toString()
//   //   .split("")
//   //   .reduce((acc, curr) => acc + curr, 0);
//   // return num
//   //   .toString()
//   //   .split("")
//   //   .reduce(function (sum, num) {
//   //     return sum + Math.pow(num, 2);
//   //   }, 0);
// }
// console.log(test());

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let counts = {};

//   for (let char of s) {
//     counts[char] = (counts[char] || 0) + 1;
//   }

//   for (let char of t) {
//     if (!counts[char]) return false;
//     counts[char]--;
//   }
//   return true;
// };

// var missingNumber = function (nums) {
//   nums.sort((a, b) => a - b);

//   // Ensure that n is at the last index
//   if (nums[nums.length - 1] != nums.length) {
//     return nums.length;
//   }
//   // Ensure that 0 is at the first index
//   else if (nums[0] != 0) {
//     return 0;
//   }

//   // If we get here, then the missing number is on the range (0, n)
//   for (let i = 0; i < nums.length; i++) {
//     let expectedNum = nums[i] + 1;
//     if (nums[i + 1] != expectedNum) {
//       return expectedNum;
//     }
//   }
//   // 0, 1, 3
//   // Array was not missing any numbers
//   return -1;
// };

// var reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }
//   return s;

// const helper = function(left, right) {
//   if (left < right) {
//     [s[left], s[right]] = [s[right], s[left]]
//     helper(left + 1, right - 1)
//   }
// }
// helper(0, s.length - 1)
//};

// var intersect = function (nums1, nums2) {
//   let obj = {};
//   let res = [];
//   for (let num of nums1) {
//     if (obj[num] === undefined) {
//       obj[num] = 1;
//     } else {
//       obj[num] += 1;
//     }
//   }
//   for (let num of nums2) {
//     if (num in obj && obj[num] > 0) {
//       res.push(num);
//       obj[num] = obj[num] - 1;
//     }
//   }
//   return res;
// };

// how to get the key of the max value from an obj:
// var sortable = [];
// for (var key in scores) {
//     sortable.push([key, scores[key]]);
// }

// sortable.sort((a, b) => b[1] - a[1])
// sortable[0][0]

// let arr = Object.values(obj);
// let max = Math.max(...arr);

// for (let key in obj) {
//   if (obj[key] === max) {
//     return key;
//   }
// }

// function findClosestValueInBst(tree=bst, target=12) {
//     // let target = 2;
//     return findClosestValueInBstHelper(
//       tree,
//       target,
//       tree.val
//     );
//   }

// function findClosestValueInBstHelper(current, target, closest) {
//     // while current !== null
//     // if the abs difference target - closest > than target - current.value
//     // means than current.value is less far(is less than closest) from target than closest
//     // so we have to assign current = current.value

//     while (current) {
//       if (Math.abs(target - closest) > Math.abs(target - current.val)) {
//         closest = current.val;
//       }
//       if (target < current.val) {
//         current = current.left;
//       } else if (target > current.val) {
//         current = current.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
//   }

// Depth First Traversal of Binary Tree
// function dfsTraversal(root) {
//   let visited = [];
//   let curr = root;

//   const traversal = (node) => {
//     visited.push(node.val);

//     if (node.left) traversal(node.left);
//     if (node.right) traversal(node.right);
//   };

//   traversal(curr);
//   return visited;
// }

//   //   dfsIterativePreorder(root) {
// //     const stack = [root],
// //     let traversed = [];
// //     let curr;

// //     while (stack.length) {
// //       curr = stack.pop();
// //       traversed.push(curr.val);
// //       if (curr.right) stack.push(curr.right);
// //       if (curr.left) stack.push(curr.left);
// //     }

// }

// Bredth First Traversal of Binary Tree
// function bfsTraversal(root) {
//   let visited = [];
//   let stack = [];
//   let curr = root;

//   stack.push(curr);
//   while (stack.length) {
//     curr = stack.shift();
//     visited.push(curr.val);

//     if (curr.left) stack.push(curr.left);
//     if (curr.right) stack.push(curr.right);
//   }
//   return visited;
// }
// // balanced binary tree
// let bst = new Node(10);
// bst.right = new Node(15);
// bst.left = new Node(7);
// bst.left.left = new Node(6);
// bst.left.right = new Node(9);
// bst.right.left = new Node(13);
// bst.right.right = new Node(18);

// Remove duplicates from Linked List
// with manual tree implementation
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function removeDuplicatesFromLinkedList(linkedList = ls) {
//   let currentNode = linkedList;
//   while (currentNode !== null) {
//     let nextDistinctNode = currentNode.next;
//     while (
//       nextDistinctNode !== null &&
//       nextDistinctNode !== null &&
//       nextDistinctNode.value === currentNode.value
//     ) {
//       nextDistinctNode = nextDistinctNode.next;
//       currentNode.next = nextDistinctNode;
//     }

//     currentNode = currentNode.next;
//   }
//   return linkedList;
// }

// let ls = new LinkedList(1);
// ls.next = new LinkedList(1);
// ls.next.next = new LinkedList(3);
// ls.next.next.next = new LinkedList(4);
// ls.next.next.next.next = new LinkedList(4);
// ls.next.next.next.next.next = new LinkedList(4);
// ls.next.next.next.next.next.next = new LinkedList(5);
// ls.next.next.next.next.next.next.next = new LinkedList(6);
// ls.next.next.next.next.next.next.next.next = new LinkedList(6);
// removeDuplicatesFromLinkedList(ls);

// function isSameTree(p, q) {
//   if (!p && !q) return true;

//   if ((p && !q) || (q && !p) || p.val !== q.val) return false;
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }

// Invert Binary Tree dfs or bfs(shift or pop) in-place approach
// var invertTree = function (root) {
//   if (!root) {
//     return null;
//   }

//   let stack = [root];

//   while (stack.length) {
//     let node = stack.pop();

//     [node.left, node.right] = [node.right, node.left];

//     if (node.left) {
//       stack.push(node.left);
//     }
//     if (node.right) {
//       stack.push(node.right);
//     }
//   }

//   return root;
// };

// var maxDepth = function (root) {
//   if (root === null) return null;

//   let depth = 1;
//   let leftDepth = 0;
//   let rightDepth = 0;

//   if (root.left) leftDepth = maxDepth(root.left);
//   if (root.right) rightDepth = maxDepth(root.right);

//   return depth + Math.max(leftDepth, rightDepth);
// };

// Is Subtree of Binary Tree

// function isSubtree(root, subRoot) {
//   let stack = [root];

//   const isSubTreeEqual = (root, subRoot) => {
//     if (root === null && subRoot === null) return true;
//     if (root === null || subRoot === null) return false;

//     return (
//       root.val === subRoot.val &&
//       isSubTreeEqual(root.left, subRoot.left) &&
//       isSubTreeEqual(root.right, subRoot.right)
//     );
//   };

//   while (stack.length > 0) {
//     let node = stack.shift();

//     if (isSubTreeEqual(node, subRoot)) {
//       return true;
//     }

//     if (node.left) stack.push(node.left);
//     if (node.right) stack.push(node.right);
//   }
//   return false;
// }

// Lowest Common Ancestor of Binary Tree(balanced)
// function lowestCommonAncestor(root, p, q) {
//   if (p.val < root.val && q.val < root.val) {
//     return lowestCommonAncestor(root.left, p, q);
//   }
//   if (p.val > root.val && q.val > root.val) {
//     return lowestCommonAncestor(root.right, p, q);
//   } else {
//     return root;
//   }
// }

// var containsDuplicate = function (nums) {
//   let obj = {};

//   for (let num of nums) {
//     if (num in obj) {
//       return true;
//     } else {
//       obj[num] = true;
//     }
//   }
//   return false;
// };

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   let counts = {};

//   for (let char of s) {
//     counts[char] = (counts[char] || 0) + 1;
//   }

//   for (let char of t) {
//     if (counts[char] === 0 || counts[char] === undefined) return false;
//     counts[char]--;
//   }
//   return true;
// }

// function twoSum(nums, target) {
//   let obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     let potMatch = target - nums[i];
//     if (potMatch in obj) {
//       return [i, obj[potMatch]];
//     } else {
//       obj[nums[i]] = i;
//     }
//   }
//   return -1;
// }

// Regex to target only alphanumeric values and remove space
// /[^a-z0-9]/gi, ""

// function maxProfit(prices) {
//   let profit = 0;
//   let min = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     if (min > prices[i]) {
//       min = prices[i];
//     } else if (prices[i] - min > profit) {
//       profit = prices[i] - min;
//     }
//   }
//   return profit;
// }

// function searchRoratedArray(nums, target){
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if(nums[mid] === target) return mid;

//     // When dividing the roated array into two halves, one must be sorted.

//     // Check if the left side is sorted
//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target <= nums[mid]) {
//         // target is in the left
//         right = mid - 1;

//       } else {
//         // target is in the right
//         left = mid + 1;
//       }
//     }

//     // Otherwise, the right side is sorted
//     else {
//       if (nums[mid] <= target && target <= nums[right]) {
//         // target is in the right
//         left = mid + 1;

//       } else {
//         // target is in the left
//         right = mid - 1;
//       }
//   }

//   }

//   return -1;
// }

// var isPalindrome = function (s) {
//   s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (s[left] === s[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// function hasCycle(head) {
//   let fast = head;

//   while (fast && fast.next) {
//     head = head.next;
//     fast = fast.next.next;
//     if (head === fast) return true;
//   }
//   return false;
// }

// class WordDictionary {
//   constructor() {
//     this.root = {};
//   }

//   addWord(word) {
//     let node = this.root;
//     for (let letter of word) {
//       if (!node[letter]) {
//         node[letter] = {};
//       }
//       node = node[letter];
//     }
//     node.isEnd = true;
//   }

//   search(word) {
//     const traverse = (node, i) => {
//       let char = word[i];
//       if (i === word.length) return node.isEnd || false;

//       if (char === ".") {
//         for (let key in node) {
//           if (traverse(node[key], i + 1)) return true;
//         }
//       } else if (node[char]) {
//         return traverse(node[char], i + 1);
//       }
//       return false;
//     };

//     return traverse(this.root, 0);
//   }
// }

// Dynamic Programming
// function rob(nums) {
//   let prevMax = 0;
//   let nextMax = 0;

//   for (let num of nums) {
//     let tempMax = Math.max(num + prevMax, nextMax);
//     prevMax = nextMax;
//     nextMax = tempMax;
//   }
//   return nextMax;
// }

// 2d array, 2D array, creating Array
//Array.from(Array(2), () => new Array(2))

// function climbStairs(n) {
//   let dp = []
//   dp[1] = 1
//   dp[2] = 2

//   for(let i=3; i<=n; i++){
//     dp[i] = dp[i-1] + dp[i-2]
//   } return dp[n]
// }
// console.log(test());

// var rob2 = function (nums) {
//   if (nums.length === 1) return nums[0];

//   const helper = (nums) => {
//     let prevMax = 0;
//     let nextMax = 0;

//     for (let num of nums) {
//       let tempMax = Math.max(num + prevMax, nextMax);
//       prevMax = nextMax;
//       nextMax = tempMax;
//     }
//     return nextMax;
//   };

//   return Math.max(
//     helper(nums.slice(0, nums.length - 1)),
//     helper(nums.slice(1))
//   );
// };

// var letterCombinations = function (digits) {
//   if (digits.length === 0) return [];
//   const Digit_Letters = {
//     0: ["0"],
//     1: ["1"],
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };

//   const helperFunc = (i, digits, currMnemonic, mnemonicsFound) => {
//     if (i === currMnemonic.length) {
//       const mnemonic = currMnemonic.join("");
//       mnemonicsFound.push(mnemonic);
//     } else {
//       const digit = digits[i];
//       const letters = Digit_Letters[digit];
//       for (let letter of letters) {
//         currMnemonic[i] = letter;
//         helperFunc(i + 1, digits, currMnemonic, mnemonicsFound);
//       }
//     }
//   };

//   const currMnemonic = new Array(digits.length).fill(0);
//   const mnemonicsFound = [];
//   helperFunc(0, digits, currMnemonic, mnemonicsFound);
//   return mnemonicsFound;
// };

// var threeSum = function(array) {

// solution with set
//   nums.sort((a,b)=> a-b);

//   let set = new Set();
//   let result = [];

//   if(nums.length < 3 || !nums.length)return []

//   for(let i =0; i < nums.length-2; i++){
//       if(nums[i] > 0) break
//       let start = i+1;
//       let end = nums.length-1;

//       while(start<end){

//           let current = nums[i] + nums[start] + nums[end];
//           if(current == 0){
//               let data = `${nums[i]}${nums[start]}${nums[end]}`
//               if(!set.has(data)){
//                   set.add(data)
//                   result.push([nums[i] ,nums[start] ,nums[end]])
//                   start++;
//                   end--
//                   continue
//               }
//           }

//           if(current > 0){
//              end--
//           }else {
//               start++
//           }

//       }

//   }

//   return result;

// solution without set
//     array.sort((a, b) => a - b)
//   const triples = []
//   for(let i=0; i<array.length-2; i++){
//         if (array[i] > 0) break
//         if (i > 0 && array[i] === array[i - 1]) continue

//     let left = i+1
//     let right = array.length-1
//     while(left < right){
//       const currentSum = array[i] + array[left] + array[right]
//       if(currentSum === 0){
//         triples.push([array[i], array[left], array[right]])
//                 while(array[left] === array[left+1]) left++
//                 while(array[right] === array[right-1]) right--

//         left++
//         right--
//       } else if(currentSum < 0){
//         left++
//       } else if(currentSum > 0){
//         right--
//       }
//     }
//   } return triples

// };

// function longestPalindromicSubstring(string) {
//   const getLongestPalindromeFrom = (string, left, right) => {
//     while (left >= 0 && right < string.length) {
//       if (string[left] !== string[right]) break;
//       left--;
//       right++;
//     }
//     return [left + 1, right];
//   };

//   let currLongest = [0, 1];
//   for (let i = 1; i < string.length; i++) {
//     const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
//     const even = getLongestPalindromeFrom(string, i - 1, i);
//     const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
//     currLongest =
//       currLongest[1] - currLongest[0] > longest[1] - longest[0]
//         ? currLongest
//         : longest;
//   }
//   return string.slice(currLongest[0], currLongest[1]);
// }

// Find min in rotated array
// var findMin = function (nums) {
//   let res = nums[0];
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     if (nums[left] < nums[right]) {
//       res = Math.min(res, nums[left]);
//       break;
//     }

//     let mid = Math.floor((left + right) / 2);
//     res = Math.min(res, nums[mid]);
//     if (nums[mid] >= nums[left]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return res;
// };

// function numIslands(grid) {
//   let count = 0;

//   const explore = (row, col, grid) => {
//     // check boundries and if grid[row][col] is 0 return from that recurisive call
//     if (
//       row < 0 ||
//       col < 0 ||
//       row >= grid.length ||
//       col >= grid[row].length ||
//       grid[row][col] === "0"
//     ) {
//       return;
//     }

//     // set the current spot as visited by making it 0
//     grid[row][col] = "0";

//     // possible moves: right, left, down, up with recursive calls
//     // right
//     explore(row, col + 1, grid);
//     // left
//     explore(row, col - 1, grid);
//     // down
//     explore(row + 1, col, grid);
//     // up
//     explore(row - 1, col, grid);
//   };

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[row].length; col++) {
//       if (grid[row][col] === "1") {
//         count++;
//         explore(row, col, grid);
//       }
//     }
//   }
//   return count;
// }

// var eraseOverlapIntervals = function (intervals) {
//   // sort by earliest finish time
//   //intervals.sort((a, b) => a[1] - b[1]);
//   let prev = intervals[0];
//   let remove = 0;

//   for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] < prev[1]) remove++;
//     else prev = intervals[i];
//   }
//   return remove;
// };

// var cloneGraph = function(node) {
// BFS iterative
//     var start = node
//     if(start === null) return start
//     var stack = [node]
//     var visited = new Map()
//     visited.set(start, new Node(start.val))
//     while(stack.length > 0){
//           var curr = stack.shift()
//           for(let n of curr.neighbors){
//               if(!visited.has(n)){
//                  visited.set(n, new Node(n.val))
//                  stack.push(n)
//             }
//               visited.get(curr).neighbors.push(visited.get(n))
//           }
//     } return visited.get(start)

// DFS recursive
//     var obj = {}
//     const traverse = (node) => {
//         if(node === null) return node
//         if(!obj[node.val]){
//             obj[node.val] = new Node(node.val)
//             obj[node.val].neighbors = node.neighbors.map(n => traverse(n))
//         } return obj[node.val]
//     }

//     return traverse(node)
// };

// Creation of Undorected Graph Node
// class UndirectedGraphNode {
//   constructor(val){
//      this.val = val;
//     this.neighbors = [];   // Array of UndirectedGraphNode
//     }

// }
// Clone Undorected Graph:

// var cloneGraph = function(node) {

// DFS recursive solution using map method with manual assignment instead of push     //method

//     let obj = {}

//     const traverse = (node) => {
//         if(!node) return node
//         if(!obj[node.val]){
//             obj[node.val] = new Node(node.val)
//             obj[node.val].neighbors = node.neighbors.map(traverse)
//         }
//         return obj[node.val]
//     }

//      return traverse(node)

// BFS iterative solution using map
//     let start = node
//     if(start === null) return null

//     const visited = new Map()
//     const stack = [start]
//     visited.set(start, new Node(start.val))

//     while(stack.length > 0){
//         const curr = stack.shift()
//         for(let neighbor of curr.neighbors){
//             if(!visited.has(neighbor)){
//                 visited.set(neighbor, new Node(neighbor.val))
//                 stack.push(neighbor);
//             }
//             visited.get(curr).neighbors.push(visited.get(neighbor));

//         }

//     }
//      return visited.get(start);
// };

// testing Graph
//run a test
// var aNode = new UndirectedGraphNode('0');
// var bNode = new UndirectedGraphNode('1');
// var cNode = new UndirectedGraphNode('2');

// aNode.neighbors.push(bNode, cNode);
// bNode.neighbors.push(cNode);
// cNode.neighbors.push(cNode);

// console.log(aNode);
// console.log(cloneGraph(aNode));

// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.children = [];
//   }
// }

// function dfs(arr = []) {
//   arr.push(aNode.val);

//   for (let child of nodeA.children) {
//     dfs(arr);
//   }
//   return arr;
// }

// // creating each graph nodes
// var aNode = new GraphNode("A");
// var bNode = new GraphNode("B");
// var cNode = new GraphNode("C");
// var dNode = new GraphNode("D");
// var eNode = new GraphNode("E");
// var fNode = new GraphNode("F");
// let gNode = new GraphNode("G");
// var hNode = new GraphNode("H");
// var iNode = new GraphNode("I");
// var jNode = new GraphNode("J");
// var kNode = new GraphNode("K");

// // creating connections/edges of the graph

// aNode.children.push(bNode, cNode, dNode);
// bNode.children.push(eNode, fNode);
// dNode.children.push(gNode, hNode);
// fNode.children.push(iNode, jNode);
// gNode.children.push(kNode);
// dfs();

// var pacificAtlantic = function (heights) {
//   var res = [];
//   var oceanMap = Array(heights.length)
//     .fill()
//     .map(() => Array(heights[0].length))
//     .fill(0);
//   var pTrack = new Set();
//   var aTrack = new Set();

//   const traverse = (row, col, oceanTrack) => {
//     if (oceanTrack.has(`${row}-${col}`)) return;
//     oceanTrack.add(`${row}-${col}`);
//     oceanMap[row][col]++;
//     if (oceanMap[row][col] === 2) res.push([row, col]);
//     console.log(oceanMap);

//     // before traversing and calling recursively, the logic/formula of this task
//     //requires checking for edge cases: boundries and if curr heights[row][col]<= to the
//     // curr condition, which can be: Up, Down, Left or Right

//     // check UP
//     row > 0 &&
//       heights[row][col] <= heights[row - 1][col] &&
//       traverse(row - 1, col, oceanTrack);
//     // check Down
//     row < heights.length - 1 &&
//       heights[row][col] <= heights[row + 1][col] &&
//       traverse(row + 1, col, oceanTrack);
//     // check Left
//     col > 0 &&
//       heights[row][col] <= heights[row][col - 1] &&
//       traverse(row, col - 1, oceanTrack);
//     // check Right
//     col < heights[row].length - 1 &&
//       heights[row][col] <= heights[row][col + 1] &&
//       traverse(row, col + 1, oceanTrack);
//   };

//   for (let i = 0; i < heights[0].length; i++) {
//     traverse(0, i, pTrack);
//     traverse(heights.length - 1, i, aTrack);
//   }

//   for (let i = 1; i < heights.length; i++) {
//     traverse(i, 0, pTrack);
//     traverse(heights.length - 1 - i, heights[i].length - 1, aTrack);
//   }
//   return res;
// };
// console.log(
//   pacificAtlantic([
//     [1, 2, 2, 3, 5],
//     [3, 2, 3, 4, 4],
//     [2, 4, 5, 3, 1],
//     [6, 7, 1, 4, 5],
//     [5, 1, 1, 2, 4],
//   ])
// );

// const uniquePaths = (m, n) => {
//   return helper(m, n, 1, 1);
// };

// const helper = (m, n, row, col) => {
//   if (row === m && col === n) return 1;
//   if (row > m || col > n) return 0;

//   const pathsRight = helper(m, n, row, col + 1);
//   const pathsDown = helper(m, n, row + 1, col);

//   return pathsRight + pathsDown;

// const dp = new Array(n + 1).fill(1);

// for(let row = 0; row < m-1; row++){
//     for(let col = n - 1; col > 0; col--){
//         dp[col] = dp[col] + dp[col + 1];
//     }
// }
// return dp[1];
// };

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let counts = {};

//   for (let char of s) {
//     counts[char] = (counts[char] || 0) + 1;
//   }

//   for (let char of t) {
//     if (!counts[char]) return false;
//     counts[char]--;
//   }
//   return true;
// };
// console.log(isAnagram("eat", "ttia"));

// var groupAnagrams = function (strs) {
//   // using object with sort method

//   var obj = {};

//   for (let word of strs) {
//     var sortedWord = word.split("").sort().join("");
//     obj[sortedWord] ? obj[sortedWord].push(word) : (obj[sortedWord] = [word]);
//   }
//   return Object.values(obj);
// };

// var groupAnagrams = function (strs) {
//   // using object with sort method

//   //   var obj = {}

//   //   for(let word of strs){
//   //       var sortedWord = word.split("").sort().join("")
//   //       obj[sortedWord] ? obj[sortedWord].push(word) : obj[sortedWord] = [word]
//   //   }
//   //     return Object.values(obj)

//   // better time complexity without using sort method
//   var obj = {};
//   for (let word of strs) {
//     var abc = Array(26).fill(0);
//     for (let char of word) abc[char.charCodeAt() - 97]++;
//     var key = abc.join("#");
//     obj[key] ? obj[key].push(word) : (obj[key] = [word]);
//   }
//   return Object.values(obj);
// };

// var topKFrequent = function(nums, k) {
//   const freqMap = new Map();
//   const bucket = [];
//   const result = [];

//   for(let num of nums) {
//       freqMap.set(num, (freqMap.get(num) || 0) + 1);
//   }

//   for(let [num, freq] of freqMap) {
//       bucket[freq] = (bucket[freq] || new Set()).add(num);
//   }

//   for(let i = bucket.length-1; i >= 0; i--) {
//       if(bucket[i]) result.push(...bucket[i]);
//       if(result.length === k) break;
//   }
//   return result;
// };

/*
we create 2 arrays:

1 array with incremental multiplication from left, 1 array with incremental multiplication from right.

at the start index of these arrays, we'll have 1 (as no multiplication prior to it).

left arr = [1, (1)x1, (1x1)x2, (1x1x2)x3] = [1, 1, 2, 6]

right arr = [(1x4x3)x2, (1x4)x3, (1)x4 ,1] = [24, 12, 4, 1]

now, at each index, in left array, we'll have mutiple of left elements prior that index.

In right array, we'll have mutiple of right elements ahead of that index.

So, we'll multiply [1, 1, 2, 6] X  [24, 12, 4, 1] at each index.

Result = [24, 12, 8, 6]

1 array 

*/
// var productExceptSelf = function(nums) {
//   // First, create a prefix array that moves from the left,
//   // gathering the running product of the prefix at each index
//   const prefix = []

//   // Move left in the input array
//   for (let i=0; i<nums.length; i++) {
//       // If i === 0, start with `1`, since there is no prefix
//       if (i===0) {
//           prefix[i] = 1
//       } else {
//           // Otherwise, multiply nums[i-1] times the prefix at position i-1,
//           // and add that to the prefix array at position i
//           prefix[i] = nums[i-1] * prefix[i-1]
//       }
//   }

//   // Then, let's create a suffix array
//   const suffix = []

//   // Move right in the input array
//   for (let i=nums.length - 1; i>=0; i--) {
//       // For the last index, we have no suffix, so just add a 1 to that position
//       if (i===nums.length - 1) {
//           suffix[i] = 1
//       } else {
//           // Otherwise, we multiply nums[i+1] by the suffix at position i+1
//           // and add that to the suffix array at position i
//           suffix[i] = nums[i + 1] * suffix[i + 1]
//       }
//   }

//   // Finally, our result array should be the products of prefix * suffix for each position
//   const result = []

//   for (let i=0; i<nums.length; i++) {
//       result[i] = prefix[i] * suffix[i]
//   }

//   return result
// };
// console.log(productExceptSelf([1,2,3,4]))

// var longestConsecutive = function (nums) {
// brure force with sort method
//     if(nums.length === 0) return 0
//     var res = 1
//     var arr = []
//    nums = nums.sort((a,b) => a-b)
//    for(let i=0; i<nums.length; i++){
//        if(nums[i] === nums[i+1]) continue
//        let nextNum = nums[i]+1
//        if(nums[i+1] === nextNum){
//            res+=1
//        } else {
//            arr.push(res)
//            res = 1
//        }
//    }

//  return Math.max(...arr)

// optimal solution using Set
//   var numSet = new Set(nums);
//   var longest = 0;

//   for (let num of nums) {
//     if (numSet.has(num - 1)) {
//       continue;
//     } else {
//       let length = 0;
//       while (numSet.has(num + length)) {
//         length += 1;
//         longest = Math.max(length, longest);
//       }
//     }
//   }
//   return longest;
// };

// function lengthOfLongestSubstring(s) {
//   // Sliding Window with pointers

//   var seen = new Set();
//   var left = 0;
//   var longest = 0;

//   for (let right = 0; right < s.length; right++) {
//     while (seen.has(s[right])) {
//       seen.delete(s[left]);
//       left++;
//     }
//     seen.add(s[right]);
//     longest = Math.max(longest, right - left + 1);
//   }
//   return longest;
// }

// const characterReplacement = (s, k) => {
//   // Solution with sliding window approach

//   var left = 0;
//   var right = 0;
//   var freq = {};
//   var maxCharCount = 0;

//   while (right < s.length) {
//     freq[s[right]] = (freq[s[right]] || 0) + 1;

//     if (freq[s[right]] > maxCharCount) maxCharCount = freq[s[right]];

//     if (right - left + 1 - maxCharCount > k) {
//       freq[s[left]]--;
//       left++;
//     }

//     right++;
//   }
//   return right - left;
// };

// var combinationSum = function (candidates, target) {
//   // backtracking

//   var res = [];
//   const premutate = (arr = [], sum = 0, idx = 0) => {
//     if (sum > target) return;
//     if (sum === target) res.push(arr);

//     for (let i = idx; i < candidates.length; i++) {
//       premutate([...arr, candidates[i]], sum + candidates[i], i);
//     }
//   };

//   premutate();
//   return res;
// };

//var reorderList = function (head) {
// Solution with stack(shift/pop)
// if (!head) return null;
// var stack = [];
// var node = head;

// while (node) {
//   stack.push(node);
//   node = node.next;
// }

// var len = stack.length;
// node = head;
// for (let i = 0; i < len; i++) {
//   if (i % 2 === 0) {
//     node.next = stack.shift();
//   } else {
//     node.next = stack.pop();
//   }
//   node = node.next;
// }
// node.next = null;

// Solution with pointers
// var slow = head;
// var fast = head;

// while (fast.next && fast.next.next) {
//   slow = slow.next;
//   fast = fast.next.next;
// }

// var curr = slow.next;
// var prev = null;
// while (curr) {
//   let temp = curr.next;
//   curr.next = prev;
//   prev = curr;
//   curr = temp;
// }

// slow.next = null;

// var h1 = head;
// var h2 = prev;

// while (h2) {
//   let temp = h1.next;
//   h1.next = h2;
//   h1 = h2;
//   h2 = temp;
// }
//};

// linked list with defined structure
// class ListNode {
//   constructor(val, next) {
//     this.val = val;
//     this.next = null;
//   }
// }

// var reorderList = function(head) {
//     // find middle
//     // by moving "fast" twice, we'll have "slow" in the middle
//     let slow = head
//     let fast = head
//     while (fast.next && fast.next.next) {
//         slow = slow.next
//         fast = fast.next.next
//     }

//     // reverse second half
//     // with reverse linked list solution
//     let prev = null
//     let cur = slow.next
//     while (cur) {
//         let temp = cur.next
//         cur.next = prev
//         prev = cur
//         cur = temp
//     }

//     slow.next = null

//     // combine two halves
//     let h1 = head
//     let h2 = prev

//     // if even, second half will be smaller
//     while (h2) {
//         let temp = h1.next
//         h1.next = h2
//         h1 = h2
//         h2 = temp
//     }
// };

// var node = new ListNode(1)
// node.next = new ListNode(2)
// node.next.next = new ListNode(3)
// node.next.next.next = new ListNode(4)
// node.next.next.next.next = new ListNode(5)

// reorderList(node)

// var removeNthFromEnd = function (head, n) {
// Solution with stack more space time
// var node = head
// var stack = []
// while(node){
//     stack.push(node)
//     node = node.next
// }
// if(stack.length === 1) return head.next
// node = head
// for(let i=0; i<stack.length; i++){
//      if(stack.length-n-1 === -1){
//           head = head.next
//           node.next = null
//           break
//         }
//     if(i === stack.length-n-1){
//         node.next = node.next.next
//         break
//     }
//     node = node.next
// }
// return head

// Solution with pointers less space time

//   var fast = head;
//   var slow = head;

//   for (let i = 0; i < n; i++) {
//     fast = fast.next;
//   }

//   if (!fast) return head.next;

//   while (fast.next) {
//     fast = fast.next;
//     slow = slow.next;
//   }

//   slow.next = slow.next.next;
//   return head;
// };

// var levelOrder = function (root) {
//   if (!root) return [];

//   const result = [];
//   const queue = [root];

//   while (queue.length) {
//     const len = queue.length;
//     const temp = [];
//     for (let i = 0; i < len; i++) {
//       const curr = queue.shift();
//       temp.push(curr.val);
//       if (curr.left) queue.push(curr.left);
//       if (curr.right) queue.push(curr.right);
//     }
//     result.push(temp);
//   }

//   return result;
// };

function quickSort(array) {
  const swap = (i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  const quickSortHelper = (start, end) => {
    if (start >= end) return;
    var pivot = start;
    var left = start + 1;
    var right = end;

    while (right >= left) {
      if (array[left] > array[pivot] && array[right] < array[pivot]) {
        swap(left, right);
      }
      if (array[left] <= array[pivot]) {
        left++;
      }
      if (array[right] >= array[pivot]) {
        right--;
      }
    }
    swap(pivot, right);
    var leftSubarrayIsSmaller = right - 1 < right + 1;
    if (leftSubarrayIsSmaller) {
      quickSortHelper(start, right - 1);
      quickSortHelper(right + 1, end);
    } else {
      quickSortHelper(right + 1, end);
      quickSortHelper(start, right - 1);
    }
  };

  quickSortHelper(0, array.length - 1);
  return array;
}
