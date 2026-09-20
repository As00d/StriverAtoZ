// 1749. Maximum Absolute Sum of Any Subarray
const maxSumSubarray = (arr) => {
  // max subarray and min subarray
  let maxSumSubValue = arr[0],
    minSumSubValue = arr[0],
    currMaxSum = arr[0],
    currMinSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
    if (currMaxSum > maxSumSubValue) {
      maxSumSubValue = currMaxSum;
    }
    currMinSum = Math.min(currMinSum + arr[i], arr[i]);
    if (currMinSum < minSumSubValue) {
      minSumSubValue = currMinSum;
    }
  }

  return Math.max(Math.abs(maxSumSubValue), Math.abs(minSumSubValue));
};

console.log(maxSumSubarray([1, -3, 2, 3, -4]));
