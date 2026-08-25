// You are given two numbers x,n you have to calculate recursively x raised to power n
let pow = (x, y) => {
  if (y == 0) {
    return 1;
  }
  let m = pow(x, y - 1);
  let r = x * m;
  return r;
};

const out = pow(2, 5);
console.log(out);
