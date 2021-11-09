/*== Write a JavaScript program to check two given numbers and return true 
if one of the number is 50 or if their sum is 50. ==*/

function checkNum (a, b){
    return (a === 50 || b === 50) || (a + b === 50);
}

console.log('Check num 50: ', checkNum(10,10));
console.log('Check num 50: ', checkNum(50,10));
console.log('Check num 50: ', checkNum(10,50));
console.log('Check num 50: ', checkNum(10,40));
console.log('Check num 50: ', checkNum(10,20));


