// The problem statement - Print the maximum sub array sum
const kadaneAlgorithm = (arr) => {
  let maxSubArraySum = arr[0],
    currSubArraySum = arr[0],
    tempInitialIndex = 0,
    tempFinalIndex = 0,
    finalInitialIndex = 0,
    finalFinalIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (currSubArraySum + arr[i] > arr[i]) {
      currSubArraySum = currSubArraySum + arr[i];
      tempFinalIndex = i;
    } else {
      currSubArraySum = arr[i];
      tempInitialIndex = i;
      tempFinalIndex = i;
    }

    if (currSubArraySum > maxSubArraySum) {
      maxSubArraySum = currSubArraySum;
      finalFinalIndex = tempFinalIndex;
      finalInitialIndex = tempInitialIndex;
    }
  }
  let output = [];
  for (let i = finalInitialIndex; i <= finalFinalIndex; i++) {
    output.push(arr[i]);
  }
  return output;
};

console.log(kadaneAlgorithm([2, 3, 5, -2, 7, -4]));
