/*

*
**
***
****
*****

*/
let output = "";
let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j <= i) {
      output += "*";
    }
  }
  output += "\n";
}
console.log(output);
