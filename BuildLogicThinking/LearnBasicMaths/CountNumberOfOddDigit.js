// 950. Count number of odd digits in a number
class Solution {
  countOddDigit(n) {
    let c = 0;
    while (n > 0) {
      let digit = n % 10;
      if (digit % 2 !== 0) {
        c++;
      }
      n = Math.floor(n / 10);
    }
    return c;
  }
}
