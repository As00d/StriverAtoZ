const checkIfSorted = (arr) => {
  // approach to check ->
  // iterate over the array if next element is less than return false in every other situation return true
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

checkIfSorted([3, 4, 5, 1, 2]);

// Case where is sorted and rotated also - When tracked for few cases noticed arr[0] <= arr[arr.length -1] (given that values could be equal also)

var check = function (arr) {
  let isSorted = true;
  // condition where array is fully sorted
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
    }
  }
  if (isSorted) {
    return true;
  }
  // Rotated scenario
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      c++;
    }
  }

  if (arr[arr.length - 1] <= arr[0] && c <= 1) {
    return true;
  } else {
    return false;
  }
};

check([6, 10, 6]);
