// 541. Reverse String II
const reverse = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};
var reverseStr = function (str, k) {
  if (k > str.length) {
    return reverse(str);
  }
  let temp = "",
    c = 0,
    output = "",
    isReverse = true;
  let i = 0;
  for (i = 0; i < str.length; i++) {
    if (c != k) {
      temp += str[i];
      c++;
    }
    if (c == k) {
      if (isReverse) {
        output += reverse(temp);
        isReverse = false;
      } else {
        output += temp;
        isReverse = true;
      }

      c = 0;
      temp = "";
    }
  }
  if (temp.length <= k && isReverse) {
    return (output += reverse(temp));
  } else {
    return output + temp;
  }
};
