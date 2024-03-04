//Q- Find missing elements in an given Array

let arr = [1, 2, 4, 6, 8, 9, 10];


const findMissingElements = (arr) => {
    let missingElement = [];
    //Find minimum & maximum value
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    //Start loop from minimum value to maximum value & check whether all the values are present in the Array
    for (let i = minValue; i < maxValue; i++) {
        if (arr.indexOf(i) < 0) {
            //If the indexOf of i is less than 0, It means that value is not present in array & push that value to the missingElement array
            missingElement.push(i);
        }
    }
    return missingElement;
}

console.log("Missing Elements are : " + findMissingElements(arr));

