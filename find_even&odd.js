//Q- Find all the Even and Odd numbers in an given Array.

let arr = [24,35,87,64,26,14,39,45];

//Filter all the even numbers
let even = arr.filter((number)=>{
    return number%2 === 0;
})

//Filter all the odd numbers
let odd = arr.filter((number)=>{
    return number%2 === 1;
})

console.log(`Even numbers are : ${even}`);
console.log(`Odd numbers are : ${odd}`);


