// Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing
// the total cost. Return the tip, as a number, based on the following:
// ‘bad’ should return a 5% tip
// ‘ok’ should return a 15% tip
// ‘good’ should return a 20% tip
// ‘excellent’ should return a 30% tip
// all other inputs should default to 18%
// Example:
// tipCalculator('good', 100) // Should return 20

// Write your function here:
const tipCalculator = (quality, total) => {
  if (quality == "bad") {
    return (total * 5) / 100;
  } else if (quality == "ok") {
    return (total * 15) / 100;
  } else if (quality == "good") {
    return (total * 20) / 100;
  } else if (quality == "excellent") {
    return (total * 30) / 100;
  } else {
    return (total * 18) / 100;
  }
};
// console.log(tipCalculator('bad', 100))
console.log(tipCalculator("good", 100)); //should return 20
