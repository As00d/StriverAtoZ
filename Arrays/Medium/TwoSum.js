// 1. Two Sum
var twoSum = function (nums, target) {
  let arr = [...nums];
  let value1 = 0,
    value2 = 0,
    idx1 = -1,
    idx2 = -1;
  nums.sort((a, b) => a - b);
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] < target) {
      i++;
    } else if (nums[i] + nums[j] > target) {
      j--;
    } else if (nums[i] + nums[j] == target) {
      value1 = nums[i];
      value2 = nums[j];
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value1) {
      idx1 = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value2 && idx1 != i) {
      idx2 = i;
    }
  }
  return [idx1, idx2];
};
console.log(twoSum([3, 2, 4], 6));
