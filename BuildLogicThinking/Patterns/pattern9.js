/*
   
   *
  ***
 *****
*******
*******
 *****
  ***
   *

*/

let output = "";
let mid1 = 2,
  mid2 = 3;
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 4; j++) {
    if (i < mid1) {
      if (j >= 2 - i && j <= 2 + i) {
        output += "*";
      } else {
        output += " ";
      }
    } else if (i == mid1 || i == mid2) {
      output += "*";
    } else {
      if (j >= i - 3 && j <= 7 - i) {
        output += "*";
      } else {
        output += " ";
      }
    }
  }
  output += "\n";
}
console.log(output);
