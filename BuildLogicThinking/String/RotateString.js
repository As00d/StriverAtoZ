// 796. Rotate String
var rotateString = function (s, goal) {
  if (s.length != goal.length) {
    return false;
  }
  let newString = s + s;
  if (newString.includes(goal)) {
    return true;
  } else {
    return false;
  }
};

console.log(rotateString("ntunjwoa", "njwoantu"));
