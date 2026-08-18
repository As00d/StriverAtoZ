/*
   
1
01
101
0101
10101

*/

let output = "";
let x = 1;
for (let i = 0; i <= 5; i++) {
  if (i % 2 == 0) {
    x = 1;
  } else {
    x = 0;
  }
  for (let j = 0; j <= 5; j++) {
    if (j <= i) {
      output += x;
      if (x == 0) x = 1;
      else x = 0;
    } else {
      output += " ";
    }
  }
  output += "\n";
}
console.log(output);
