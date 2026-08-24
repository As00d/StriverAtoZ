// Program to print N to 1

const fun = (i, n) => {
  if (i === n) {
    return;
  }
  fun(i + 1, n);
  console.log(i);
};

fun(0, 3);
