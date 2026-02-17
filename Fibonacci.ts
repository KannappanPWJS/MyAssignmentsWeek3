// To compute the Fibonacci sequence using iterative methods.

/* 1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative
integer, and returns the nth Fibonacci number.
2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two
Fibonacci numbers and update these iteratively up to `n`.
3. Provide example calls to the `fibonacci` function with different integers to demonstrate the
function’s functionality. */

function fibonacci (n:number):number {
let a = 0;
let b = 1;
let nextNum;
if(n===0) {
    return 0;
} else if(n===1) {
    return 1;    
} else {
    for(let i=2; i<=n; i++) {
        nextNum = a+b;
        a = b;
        b = nextNum;
    }
    return b;
}
}
console.log("Fibonacci sequence is " + fibonacci (10));