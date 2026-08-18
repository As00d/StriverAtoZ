/*
   
1      1
12    21
123  321
12344321


*/

let output = "";
let x = 1,
  y = 1;
for (let i = 0; i <= 3; i++) {
  let x = 1,
    y = i + 1;
  for (let j = 0; j <= 7; j++) {
    if (j <= 3) {
      if (j <= i) {
        output += x;
        x++;
      } else {
        output += " ";
      }
    } else {
      if (j >= 7 - i) {
        output += y;
        y--;
      } else {
        output += " ";
      }
    }
  }
  output += "\n";
}
console.log(output);
