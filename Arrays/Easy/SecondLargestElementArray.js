// Given an array find the second largest element in it

let arr = [1, 2, 4, 7, 7, 5];

let max = Number.NEGATIVE_INFINITY;
let sMax = Number.NEGATIVE_INFINITY;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max && arr[i] > sMax) {
    sMax = max;
    max = arr[i];
  }

  if (arr[i] < max && arr[i] > sMax) {
    sMax = arr[i];
  }
}

console.log("Second largest element is " + sMax);
