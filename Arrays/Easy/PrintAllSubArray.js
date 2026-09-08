const printSubArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let sub = "";
    while (j != arr.length) {
      for (let k = i; k <= j; k++) {
        sub += arr[k] + ", ";
      }
      j++;
      sub += "\n";
    }
    console.log(sub);
  }
};

printSubArray([10, 5, 2, 7, 1, 9]);
