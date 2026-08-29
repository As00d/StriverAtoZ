const rev = (arr, size) => {
  if (size == 0) {
    return [];
  }
  let reverseS = rev(arr, size - 1);
  let fArr = [arr[size - 1], ...reverseS];
  return fArr;
};

rev([1, 2, 3, 4, 5], 5);
