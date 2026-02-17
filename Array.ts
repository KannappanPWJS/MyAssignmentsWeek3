// to compute the intersection of two arrays. Should include elements in both arrays without duplicates.


/* 1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are
arrays of numbers, and returns an array of their intersection.
2. Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and
`arr2`, it should appear only once in the result.
3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is
present in `arr2` and not already included in the result array.
4. Include example calls to the `intersection` function with different arrays to demonstrate the
function’s functionality. Include examples with no common elements, all elements common, and
typical cases. */

function inter(arr1:number[], arr2:number[]) {

    for (let i=0; i<arr1.length; i++) {
    for (let j=0; j<arr2.length; j++) {
        if(arr1[i]===arr2[j]) {
            console.log("The Duplicate Number in the array is " + arr1[i]);
        }
    }
}
}

let array1 = [1,2,3,4,5,6,7,8];
let array2 = [5,10,6,11,1,9,8,12];
inter(array1,array2)