/*== Write a JavaScript program to check from two given integers, whether one is positive and another one is negative ==*/

function posNeg(a,b){
    return (a < 0 && b > 0) || (a > 0 && b < 0);
}

console.log ('Positive Negative -1 2 ', posNeg(-1,2));
console.log ('Positive Negative 2 3 ', posNeg(2,3));
console.log ('Positive Negative 5 -8 ', posNeg(5,-8));
console.log ('Positive Negative -1 -9 ', posNeg(-1,-9));
