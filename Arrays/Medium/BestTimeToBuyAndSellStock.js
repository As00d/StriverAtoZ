// 121. Best Time to Buy and Sell Stock
// Brute force - O(N^2) - time complexity
var maxProfit = function (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > max) {
        max = arr[j] - arr[i];
      }
    }
  }
  return max;
};
// Another appraoch intuition lies on the basis is best time to sell will be the leftmost smallest element for any given number

var bestTime = (arr) => {
  let minSoFar = arr[0],
    maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minSoFar) {
      minSoFar = arr[i];
    }
    if (arr[i] - minSoFar > maxProfit) {
      maxProfit = arr[i] - minSoFar;
    }
  }
  return maxProfit;
};
console.log(maxProfit([7, 6, 4, 3, 1]));
