/*

*****
*****
*****
*****
*****

*/
let n = 5;
let output = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);

/*
The default behaviour of console.log is that it prints everything in new line so we need an extra variable just to store the output.
In case if we are running the application in node js or browser then there is a way
In node - process.stdout.write()
In browser - we can use the above string method
*/
