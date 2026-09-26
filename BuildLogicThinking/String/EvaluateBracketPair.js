// 1807. Evaluate the Bracket Pairs of a String
var evaluate = function (s, knowledge) {
  let myMap = new Map();
  for (let i = 0; i < knowledge.length; i++) {
    myMap.set(knowledge[i][0], knowledge[i][1]);
  }
  let finalStr = "",
    dumStr = "",
    c = false;
  for (let i = 0; i < s.length; i++) {
    dumStr = "";
    if (s[i] == "(") {
      while (s[i] != ")") {
        if (s[i] != ")" && s[i] != "(") {
          dumStr += s[i];
        }
        i++;
      }
      //   console.log(dumStr);
      // Now find the value in array
      const NUM_ROWS = knowledge.length;
      c = false;
      //
      if (myMap.get(dumStr)) {
        finalStr += myMap.get(dumStr);
      } else {
        finalStr += "?";
      }
    } else {
      finalStr += s[i];
    }
  }
  return finalStr;
};
console.log(evaluate("(a)(a)(a)aaa", [["a", "yes"]]));
// The above solution cause TLE we can optimise if we use a hashtable and it helped
