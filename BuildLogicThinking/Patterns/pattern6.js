/*

12345
1234
123
12
1

*/

let output = "";
let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j <= n - i - 1) {
      output += j + 1;
    }
  }
  output += "\n";
}
console.log(output);
