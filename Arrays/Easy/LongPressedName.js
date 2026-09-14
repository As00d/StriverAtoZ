// 925. Long Pressed Name - good question with good handling
var isLongPressedName = function (name, typed) {
  let i = 0,
    j = 0;
  let lastVisited = "";

  while (i != name.length && j != typed.length) {
    if (name[i] == typed[j]) {
      lastVisited = name[i];
      i++;
      j++;
    } else if (lastVisited != typed[j]) {
      return false;
    } else if (lastVisited == typed[j]) {
      j++;
    }
  }
  if (i == name.length && j == typed.length) {
    return true;
  } else if (i == name.length && j != typed.length) {
    while (j != typed.length) {
      if (typed[j] != name[name.length - 1]) {
        return false;
      }
      j++;
    }
    return true;
  } else {
    return false;
  }
};
console.log(isLongPressedName("aab", "bb"));
