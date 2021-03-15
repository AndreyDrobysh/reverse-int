module.exports = function reverse (n) {
  let x = n;
  if (n < 0) {
    x = n * -1
  }
  let newStr = "";
  let str = String(x);
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
