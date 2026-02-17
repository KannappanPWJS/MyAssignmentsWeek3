// Count the occurrences of a specific element in an array using JavaScript

const num = [2,4,5,2,1,2];
const k = 2;
let count =0;
for (let i=0; i<num.length; i++) {
    if (num[i]===k) {
        count++;
    }
}
console.log("Total No of Occurance " + count);