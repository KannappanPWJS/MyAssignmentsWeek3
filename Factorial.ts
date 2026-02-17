// To compute the factorial of a non-negative integer using iterative methods

/* 1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer,
and returns its factorial.
2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative
number is passed, the function should throw an error.
3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer
from 2 up to `n`.
4. Include example calls to the `factorial` function with different integers to demonstrate the
function’s functionality. Include at least one example where an error is thrown due to a negative
input. */

function factorial (n:number) {
let fact = 1;
    if (n<0) {
        console.log("Factorial cannot be computed for negative numbers");
    } else {
        for (let i=fact; i<=n; i++) {
        fact *= i;
    }
    console.log("Factorial of the number is " + fact);
    }       
}
factorial (8)
