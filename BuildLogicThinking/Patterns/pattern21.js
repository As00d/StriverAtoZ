/*
  
****
*  *
*  *
****

*/

let output = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == 0 || i == 3 || j == 0 || j == 3) {
      output += "*";
    } else {
      output += " ";
    }
  }
  output += "\n";
}

console.log(output);
