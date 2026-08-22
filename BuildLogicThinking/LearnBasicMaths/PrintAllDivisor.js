let number = 36;

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
// The above method that we have learnt we can basically see the complexity is O(n) but if we observe the pattern here if we get any number like 1 then 36, 2 then 18 simply by n/i so we do not have to go till the very end meaning till n iteration
let divisor = [];
for (let i = 0; i * i <= number; i++) {
  if (number % i === 0) {
    if (i != number / i) {
      divisor.push(i);
      divisor.push(number / i);
    } else {
      divisor.push(i);
    }
  }
}

console.log(divisor);
// With this small change the time complexity reduced to O(sqrt(N)) now here also since sqrt is a mathematical function so we can write this as  i*i <= number - meaning squaring both sides which will reduce the complexity further. There could be a case where the output expected to be in sorted fashion so what we can do is further sort this array
