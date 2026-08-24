// We want to do the printing of name 5 times + we do not want to have a global variable so we can pass it in the function itself TC - O(N), stack complexity - O(N)

const fun = (i, n) => {
  if (i > n) {
    return;
  }
  console.log("anki");
  fun(i + 1, n);
};

fun(1, 5);
