const fun = (n) => {
  if (n == 1 || n == 0) {
    return 1;
  }
  return n * fun(n - 1);
};

const fact = fun(5);
console.log(fact);
