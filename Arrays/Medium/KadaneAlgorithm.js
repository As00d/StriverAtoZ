// The problem statement - Find the maximum sub array sum
// 53. Maximum Subarray
const kadaneAlgorithm = (arr) => {
  let maxSubArraySum = arr[0];
  let currSubArraySum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currSubArraySum = Math.max(currSubArraySum + arr[i], arr[i]);
    if (currSubArraySum > maxSubArraySum) {
      maxSubArraySum = currSubArraySum;
    }
  }
  return maxSubArraySum;
};

console.log(kadaneAlgorithm([1, -3, 2, 3, -4]));
