//Q- Find minimum and maximum number in an Array

let arrNumber = [22, 13, 65, 34, 20, 38, 2, 88];

const findMaximum = (arr) => {
    let maxNumber = arr.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    })
    return maxNumber;
}

const findMinimum = (arr) => {
    let minNumber = arr.reduce((prev, curr) => {
        return prev < curr ? prev : curr;
    })
    return minNumber;
}

console.log(`Maximunm number is : ${findMaximum(arrNumber)}`);
console.log(`Minimunm number is : ${findMinimum(arrNumber)}`);