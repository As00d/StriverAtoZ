const secondMostFrequentElement = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!myMap.get(nums[i])) {
      myMap.set(nums[i], 1);
    } else {
      myMap.set(nums[i], myMap.get(nums[i]) + 1);
    }
  }

  let highest = -1,
    secondHighest = -1,
    valueHighest = -1,
    valueSecondHighest = -1;
  for (const [key, value] of myMap) {
    if (value > highest) {
      if (secondHighest < highest) {
        secondHighest = highest;
        valueSecondHighest = valueHighest;
      }
      highest = value;
      valueHighest = key;
    } else if (value > secondHighest && value < highest) {
      secondHighest = value;
      valueSecondHighest = key;
    }
  }
  return valueSecondHighest;
};
console.log(secondMostFrequentElement([10, 9, 7, 7]));
