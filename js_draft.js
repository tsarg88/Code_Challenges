function stackBoxes(n) {
  return n > 0 ? Math.pow(n, n) : 0;
  //   if (n == 0) {
  //     return 0;
  //   } else {
  //     return Math.pow(n, n);
  //   }
}
console.log(stackBoxes(0));
