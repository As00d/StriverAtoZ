/*

1     
2 3    
4 5 6   
7 8 9 10  
11 12 13 14 15 


*/

let output = "";
let x = 1;
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= 4; j++) {
    if (j <= i) {
      output += x + " ";
      x++;
    } else {
      output += " ";
    }
  }
  output += "\n";
}
console.log(output);
