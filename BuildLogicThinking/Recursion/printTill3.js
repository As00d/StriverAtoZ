count = 0;

const fun = () => {
  console.log(count);
  if (count === 3) {
    return;
  }
  count++;
  fun();
};

fun();
