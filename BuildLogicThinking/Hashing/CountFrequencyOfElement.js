// Count frequencies of element of array
// [ 1, 2, 2, 4, 3, 4 ]
// 1 -> 1
// 2 -> 2
// 3 -> 1
// 4 -> 2

const myMap = new Map();
let arr = [1, 2, 2, 4, 3, 4];
for (let i = 0; i < arr.length; i++) {
  if (myMap.get(arr[i]) === undefined) {
    myMap.set(arr[i], 1);
  } else {
    myMap.set(arr[i], myMap.get(arr[i]) + 1);
  }
}
for (const [_, value] of myMap) {
  console.log(value);
}
