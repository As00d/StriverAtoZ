const sum = (n) => {
  if (n == 0) {
    return 0;
  }
  let sumn = sum(n - 1);
  let res = n + sumn;

  return res;
};
let out = sum(30);
console.log(out);
