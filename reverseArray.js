// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
// There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it.
// Example:
// const sentence = ['sense.','make', 'all', 'will', 'This'];
// reverseArray(sentence);
// Should return ['This', 'will', 'all', 'make', 'sense.'];

const reverseArray = (arr) => {
  let main = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    main.push(arr[i]);
  }
  return main;
};
const sentence = ["sense.", "make", "all", "will", "This"];
console.log(reverseArray(sentence));
