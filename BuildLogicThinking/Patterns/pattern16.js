/*
  
A    
BB   
CCC 
DDDD
EEEEE

*/

let output = "";
let x = 65;
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= 4; j++) {
    if (j <= i) {
      output += String.fromCharCode(x);
    } else {
      output += " ";
    }
  }
  x++;
  output += "\n";
}
console.log(output);
