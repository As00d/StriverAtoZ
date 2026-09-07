// Each element in the array appear twice only 1 appear single time, find that element and return
const singleElement = (arr) => {
  let xor;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  return xor;
};

let value = singleElement([4, 1, 2, 1, 2]);
console.log(value);
