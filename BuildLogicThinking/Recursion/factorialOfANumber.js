const fun = (n) => {
  if (n == 1 || n == 0) {
    return 1;
  }
  let fnm1 = fun(n - 1);
  let f = n * fnm1;

  return f;
};

const fact = fun(5);
console.log(fact);
