// 792. LCM of two numbers

const lcm = (n1, n2) => {
  let large = n1 > n2 ? n1 : n2;
  for (let i = large; i <= n1 * n2; i++) {
    if (i % n1 == 0 && i % n2 == 0) {
      return i;
    }
  }
};
console.log(lcm(4, 4));
