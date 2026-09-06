// Given array from 1 to n find the missing number
const findMissingNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let n = arr.length + 1;
  let naturalSum = (n * (n + 1)) / 2;
  return naturalSum - sum;
};
const num = findMissingNumber([1, 7, 3, 4, 5, 6, 8]);
console.log(num);
