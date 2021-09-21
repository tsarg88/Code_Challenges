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
//   const result = Array.from(String(n), Number);
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

function coolFeature(a, b, queries) {
  let res = [];
  let count = 0;
  let count2 = 0;
  let firstCompValue = queries[0][1];
  let secondCompValue = queries[2][1];

  // for(let i=0; i<)
  let arrLong = a.length > b.length ? a : b;

  for (let i = 0; i < arrLong.length; i++) {
    for (let j = 0; j < arrLong.length; j++) {
      if (a[i] + b[j] == firstCompValue) {
        count2++;
      }
    }
  }
  changeValue = queries[2];
  b.splice(0, 1, queries[1][2]);

  for (let i = 0; i < arrLong.length; i++) {
    for (let j = 0; j < arrLong.length; j++) {
      if (a[i] + b[j] == secondCompValue) {
        count++;
      }
    }
  }
  res.push(count, count2);
  return res;
}
console.log(
  coolFeature(
    [1, 2, 3],
    [3, 4],
    [
      [1, 5],
      [0, 0, 1],
      [1, 5],
    ]
  )
);
