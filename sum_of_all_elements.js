//Q- Find the sum of all elements in the Array.

let arr = [22,44,12,56,87,45];

calculateSum = (arr) => {
    let sum = arr.reduce((prev, curr) => {
        return prev + curr;
    })
    return sum;
}

console.log(`Sum = ${calculateSum(arr)}`);
