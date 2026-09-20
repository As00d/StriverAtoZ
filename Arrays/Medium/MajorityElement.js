// Element in array which has appeared more than half of array element

// Approach 1 - create a map and then store frequency Time complexity = O(N) + O(M) where N is size of array and M is the Unique element in the array
const majorityElement = (arr) => {
  const myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!myMap.get(arr[i])) {
      myMap.set(arr[i], 1);
    } else {
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
    }
  }
  // store highest frequency in some variable
  let maxFrequency = arr[0],
    freq = 0;
  for (const [key, value] of myMap) {
    if (value > freq) {
      maxFrequency = key;
      freq = value;
    }
  }
  return maxFrequency;
};

// Approach 2 - Moore's voting algortihm - the approach is we traverse the array and consider 1st element as the candidate for the majority element

const mooreElement = (arr) => {
  let candidate = arr[0],
    count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == candidate) {
      count++;
    } else {
      if (count == 0) {
        candidate = arr[i];
        count = 1;
      } else {
        count--;
      }
    }
  }
  return candidate;
};
console.log(mooreElement([7, 0, 0, 1, 7, 7, 2, 7, 7]));
console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]));
