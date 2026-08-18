/*
  
*         *
**       **
***     ***
****   ****
***********
****   ****
***     ***
**       **
*         *

*/

let output = "";
for (let i = 0; i <= 8; i++) {
  for (let j = 0; j <= 10; j++) {
    if (i < 4) {
      if (j >= 1 + i && j <= 9 - i) {
        output += " ";
      } else {
        output += "*";
      }
    } else if (i == 4) {
      output += "*";
    } else {
      if (j >= 9 - i && j <= i + 1) {
        output += " ";
      } else {
        output += "*";
      }
    }
  }

  output += "\n";
}
console.log(output);
