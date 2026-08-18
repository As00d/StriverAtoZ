/*
  
4444444
4333334
4322234
4321234
4322234
4333334
4444444

*/

let output = "";
let mid = 3;
for (let i = 0; i <= 6; i++) {
  for (let j = 0; j <= 6; j++) {
    if (i == mid && j == mid) {
      output += "1";
    } else if (
      (i == mid + 1 || i == mid - 1 || i == mid) &&
      (j == mid + 1 || j == mid - 1 || j == mid)
    ) {
      output += "2";
    } else if (
      (i == mid + 2 ||
        i == mid - 2 ||
        i == mid ||
        i == mid + 1 ||
        i == mid - 1) &&
      (j == mid + 2 || j == mid - 2 || j == mid || j == mid + 1 || j == mid - 1)
    ) {
      output += "3";
    } else {
      output += "4";
    }
  }
  output += "\n";
}

console.log(output);
