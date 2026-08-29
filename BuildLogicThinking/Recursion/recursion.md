So what is recursion -
Recursion is nothing but a function which calls itself until a specific condition is met.

say we have a fun to print 1

const fn =()=> {
console.log(1);
fn();
}

so above is a recursive function but without a base case, here above this will be called for infinite times until stack overflow condition is not met.

Backtracking is when we do action while the function is returning back

Recursion problem that we have written so far can be - paramterised or functional

1. Parameter when a parameter is passed to recursive function
2. When we do not pass any parameter and function itself is responsible for providing the output
