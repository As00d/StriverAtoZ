/*
   
*
**
***
****
***
**
*

*/

let output = "";
let mid = 2;
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= 2; j++) {
    if (i <= mid) {
      if (j <= i) output += "*";
      else output += " ";
    } else {
      if (j <= 4 - i) output += "*";
      else output += " ";
    }
  }
  output += "\n";
}
console.log(output);
