// lets understand the definition of a prime number - A number with 2 factor and one number is itself
let number = 7;
let c = 0;
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    c++;
  }
}
if (c == 2) {
  console.log("Its a prime number");
} else {
  console.log("Its not a prime number");
}
// In previous video where we learnt about how to get all the factors we learnt a better approach that is just loop till the square root of the number so similarly same approach can be used here. So to find wheather a number is prime or not we can find it using O(sqrt) complexity
