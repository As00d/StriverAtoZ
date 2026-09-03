var removeDuplicates = function (arr) {
  let k = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[k] = arr[i];
      k++;
    }
  }
  // for last element
  if (arr[k] != arr[arr.length - 1]) {
    arr[k] = arr[arr.length - 1];
  }
  console.log(arr);
  return k + 1;
};

removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]);
