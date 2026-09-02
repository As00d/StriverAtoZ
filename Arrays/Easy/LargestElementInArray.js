// Given an array find the largest element
let arr = [8, 10, 5, 7, 9];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Largest element is " + max);
