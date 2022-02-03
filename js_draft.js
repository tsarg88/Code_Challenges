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
function twoNumberSum(array, targetSum) {
  // Write your code here.
  let nums = {};
  for (let num of array) {
    let potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}
console.log(twoNumberSum([4, 6, 1, -3], 3));
