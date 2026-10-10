class Solution {
  intersectionArray(nums1, nums2) {
    let i = 0,
      j = 0,
      output = [];
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        i++;
      } else if (nums1[i] > nums2[j]) {
        j++;
      } else {
        output.push(nums1[i]);
        i++;
        j++;
      }
    }
    return output;
  }
}
const solution = new Solution();
solution.intersectionArray([1, 2, 2, 3, 5], [1, 2, 7]);
