// In this question there is a catch each element will have different frequencies
let arr = [1, 2, 2, 2, 3, 3, 3, 3, 1, 1, 6, 4, 3, 2];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.get(arr[i]) === undefined) {
    map.set(arr[i], 1);
  } else {
    map.set(arr[i], map.get(arr[i]) + 1);
  }
}
// We will iterate over the map and search for maximum value
let max = 0,
  v = 0;
for (const [key, val] of map) {
  if (val > max) {
    max = val;
    v = key;
  }
}
console.log(`The highest frequency element ${v} with ${max} occurence`);
