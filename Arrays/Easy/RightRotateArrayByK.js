const rightRotateArrayByK = (arr, k) => {
  if (k >= arr.length) {
    k = k % arr.length;
  }

  let temp = [];
  for (let i = arr.length - k; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  for (let i = arr.length - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  return arr;
};

console.log(rightRotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3));
