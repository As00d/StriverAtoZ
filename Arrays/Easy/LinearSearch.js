// Given an element find if its present in array or not
const linearSearch = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      return true;
    }
  }
  return false;
};

linearSearch([1, 2, 3, 4, 7], 8);
