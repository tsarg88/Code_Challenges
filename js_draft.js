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

const countUnique = (s1, s2) => {
  let chars = s1.split("").concat(...s2);
  return [...new Set(chars)].length;
};
console.log(countUnique("apple", "play"));

const REGEXP = /(?:red|blue) flag/g;
