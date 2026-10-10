// 512. Leaders in an Array
class Solution {
  leaders(nums) {
    let maxSoFar = nums[nums.length - 1];
    let output = [];
    output.push(maxSoFar);
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > maxSoFar) {
        maxSoFar = nums[i];
        output.push(nums[i]);
      }
    }
    console.log(output.reverse());
  }
}

const solution = new Solution();
solution.leaders([-3, 4, 5, 1, -4, -5]);
