/*
   
   *
  ***
 *****
*******

*/

let output = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 8; j++) {
    if (j <= 4 + i && j >= 4 - i) {
      output += "*";
    } else {
      output += " ";
    }
  }
  output += "\n";
}
console.log(output);
