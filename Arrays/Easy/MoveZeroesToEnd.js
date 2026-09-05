// Logic is to count 0 in array beforehand, once count is known we can iterate over array and track the k

const moveZeroToEnd = (arr) => {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      c++;
    }
  }
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[k] = arr[i];
      k++;
    }
  }
  for (let i = 0; i < c; i++) {
    arr[arr.length - 1 - i] = 0;
  }
  return arr;
};
moveZeroToEnd([1, 2, 0, 1, 0, 4, 0]);
