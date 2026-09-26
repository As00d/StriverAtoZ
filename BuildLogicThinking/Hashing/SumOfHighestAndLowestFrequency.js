class Solution {
  sumHighestAndLowestFrequency(nums) {
    // find the min and max
    let myMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (!myMap.get(nums[i])) {
        myMap.set(nums[i], 1);
      } else {
        myMap.set(nums[i], myMap.get(nums[i]) + 1);
      }
    }
    console.log(myMap);
    let max = -1,
      min = 10001;
    for (let [_, value] of myMap) {
      if (value > max) {
        max = value;
      }
      if (value < min) {
        min = value;
      }
    }
    return max + min;
  }
}
