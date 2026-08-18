/*
  
E    
DE   
CDE  
BCDE 
ABCDE

*/

let output = "";
let x = 69;
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= 4; j++) {
    if (j <= i) {
      output += String.fromCharCode(x);
    } else {
      output += " ";
    }
    x++;
  }
  x = 68;
  x = x - i;
  output += "\n";
}
console.log(output);
