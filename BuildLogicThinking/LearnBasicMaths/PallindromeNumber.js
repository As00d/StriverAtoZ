let number = 7789;
let reverseNumber = 0;
let copyOriginalNumber = number;

while (number) {
  let rem = number % 10;
  reverseNumber = reverseNumber * 10 + rem;
  number = Math.floor(number / 10);
}

if (copyOriginalNumber === reverseNumber) {
  console.log("The number is a pallindrome");
} else {
  console.log("The number is not pallindrome");
}
