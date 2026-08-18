/*

1
12
123
1234
12345

*/
let output = "";
let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j <= i) {
      output += j + 1;
    }
  }
  output += "\n";
}
console.log(output);
