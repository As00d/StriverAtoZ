let n = 12345;
let c = 0;
while (n) {
  n = Math.floor(n / 10);
  c++;
}
console.log(c);

// Optimal approach
let number = 2012;
let count = Math.trunc(Math.log10(number) + 1);
console.log(count);

// 2 things to note in here -
// We required Math.floor why ? because /10 will give output in fraction to avoid we took the floor
// The complexity of this code -- O(log10N)
