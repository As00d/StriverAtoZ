const leftRotateByOne = (arr) => {
  let val = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = val;

  return arr;
};

console.log(leftRotateByOne([-1, 0, 3, 6]));
