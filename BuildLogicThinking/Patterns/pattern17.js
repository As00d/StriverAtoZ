/*
  
   A   
  ABA  
 ABCBA 
ABCDCBA

*/

let output = "";

for (let i = 0; i <= 3; i++) {
  let x = 65;
  for (let j = 0; j <= 6; j++) {
    if (j >= 3 - i && j <= 3 + i) {
      output += String.fromCharCode(x);
      if (j < 3) x++;
      else x--;
    } else {
      output += " ";
    }
  }
  output += "\n";
}
console.log(output);
