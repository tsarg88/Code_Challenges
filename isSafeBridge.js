// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

// Examples:
// isSafeBridge("####") ➞ true
// isSafeBridge("## ####") ➞ false
// isSafeBridge("#") ➞ true

function isSafeBridge(str) {
  return str.includes(" ") ? false : true;
}
console.log(isSafeBridge("### #"));
