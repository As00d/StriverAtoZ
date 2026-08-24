// Print 1 to N recursive ( So till now we have understood by taking a global variable but that is not the approach which we will be following going forward)

const fun = (i, n) => {
  console.log(i);
  if (i === n) {
    return;
  }
  fun(i + 1, n);
};
fun(1, 10);
