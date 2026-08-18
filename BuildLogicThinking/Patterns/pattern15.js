/*
  
ABCDE
ABCD 
ABC
AB
A

*/

let output = "";
for (let i = 0; i <= 4; i++) {
  let x = 65;
  for (let j = 0; j <= 4; j++) {
    if (j <= 4 - i) {
      output += String.fromCharCode(x);
      x++;
    } else {
      output += " ";
    }
  }
  output += "\n";
}
console.log(output);
