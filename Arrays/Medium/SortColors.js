// 75. Sort Colors - Complexity is O(n)
var sortColors = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums[i] = nums[j];
      nums[j] = 0;
      j++;
    }
  }
  for (let i = j; i < nums.length; i++) {
    if (nums[i] == 1) {
      nums[i] = nums[j];
      nums[j] = 1;
      j++;
    }
  }
  return nums;
};
console.log(sortColors([0, 0, 0, 0]));
