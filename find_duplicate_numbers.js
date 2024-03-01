// Q- Find all the duplicate numbers in an array

let arr = [2,5,3,2,8,5,4,12,3,14];

let result = arr.filter((val,idx,arr) => {
    return arr.indexOf(val) !== idx;
});
let res = result.toString();

console.log(res);

