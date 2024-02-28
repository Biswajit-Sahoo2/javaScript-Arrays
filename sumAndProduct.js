//Q- Write a JavaScript program to compute the sum and product of an array of integers.

let arr =[2,6,4,20,14,24];

let sum =0;
let product = 1;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
}

console.log("Sum :"+sum);
console.log("Product :"+product);
