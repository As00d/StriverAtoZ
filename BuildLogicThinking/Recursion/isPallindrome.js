const pall = (str, n) => {
  if (n == 0) {
    return "";
  }
  let rev = str[n - 1] + pall(str, n - 1);
  if (rev.length == str.length) {
    if (rev === str) {
      return true;
    } else {
      return false;
    }
  }
  return rev;
};

let str = "TAKE U FORWARD";
let reverseString = pall(str, str.length);
console.log(reverseString);
