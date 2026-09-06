const unionOfTwoSortedArray = (arr, brr) => {
  let output = [];
  let i = 0,
    j = 0;
  while (i != arr.length && j != brr.length) {
    if (arr[i] === brr[j]) {
      if (output[output.length - 1] != arr[i]) {
        output.push(arr[i]);
      }
      i++;
      j++;
    } else if (arr[i] < brr[j]) {
      if (output[output.length - 1] != arr[i]) {
        output.push(arr[i]);
      }
      i++;
    } else {
      if (output[output.length - 1] != brr[j]) {
        output.push(brr[j]);
      }
      j++;
    }
  }
  if (i != arr.length) {
    for (let k = i; k < arr.length; k++) {
      output.push(arr[k]);
    }
  }
  if (j != brr.length) {
    for (let k = j; k < brr.length; k++) {
      output.push(brr[k]);
    }
  }
  return output;
};

const union = unionOfTwoSortedArray(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [2, 3, 4, 4, 5, 11, 12]
);
console.log(union);
