/*
  
E    
DE   
CDE  
BCDE 
ABCDE

*/

let output = "";
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    if (i <= 4) {
      if (j >= 5 - i && j <= 4 + i) {
        output += " ";
      } else {
        output += "*";
      }
    } else {
      if (j >= i - 4 && j <= 13 - i) {
        output += " ";
      } else {
        output += "*";
      }
    }
  }

  output += "\n";
}
console.log(output);
