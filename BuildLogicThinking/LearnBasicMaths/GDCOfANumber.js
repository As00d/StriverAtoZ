let number1 = 20,
  number2 = 40;
let loopNumber = number1 < number2 ? number1 : number2;
for (let i = loopNumber; i >= 1; i--) {
  if (number2 % i == 0 && number1 % i == 0) {
    console.log(i);
    return;
  }
}
