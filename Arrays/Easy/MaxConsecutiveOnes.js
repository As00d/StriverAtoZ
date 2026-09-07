var findMaxConsecutiveOnes = function (arr) {
  let c = 1,
    max = 0,
    atleast = 0;
  if (arr.length == 1) {
    if (arr[0] == 1) atleast = 1;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 1 || arr[i + 1]) {
      atleast = 1;
    }
    if (arr[i] == 1 && arr[i + 1] == 1) {
      c++;
      if (c > max) {
        max = c;
      }
    } else {
      c = 1;
    }
  }

  return max > atleast ? max : atleast;
};
