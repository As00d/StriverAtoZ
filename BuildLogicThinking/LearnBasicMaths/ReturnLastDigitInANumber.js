// 957. Return the Largest Digit in a Number
class Solution {
  largestDigit(n) {
    let c = 0;
    while (n > 0) {
      let digit = n % 10;
      if (digit > c) {
        c = digit;
      }
      n = Math.floor(n / 10);
    }
    return c;
  }
}
