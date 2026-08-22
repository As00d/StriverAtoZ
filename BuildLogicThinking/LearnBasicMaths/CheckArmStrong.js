let number = 153;
let n1 = number,
  n2 = number;
let output = 0;
let c = 0;
while (number) {
  c++;
  number = Math.floor(number / 10);
}

while (n1) {
  let rem = n1 % 10;
  output += Math.pow(rem, c);
  n1 = Math.floor(n1 / 10);
}

if (output === n2) {
  console.log(true);
} else {
  console.log(false);
}
