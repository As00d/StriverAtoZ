let number = 10400;
let output = 0;
while (number) {
  let rem = number % 10;
  output = output * 10 + rem;
  number = Math.floor(number / 10);
}
console.log(output);

// Save the remainder each and keep on adding to the output number
