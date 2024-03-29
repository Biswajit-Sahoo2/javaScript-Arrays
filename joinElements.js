//Q- Write a simple JavaScript program to join all elements of the following array into a string.

let myColor = ['Black','White','Blue','Green','Yellow','Red'];

// Using the default join method to concatenate array elements into a string separated by commas
console.log(myColor.join());

// Using the join method with a custom separator ('+') to concatenate array elements into a string
console.log(myColor.join("+"));

// Using the join method with a custom separator ('_') to concatenate array elements into a string
console.log(myColor.join("_"));