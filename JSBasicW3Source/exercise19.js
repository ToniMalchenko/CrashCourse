/*== Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. ==*/

function destin (a){
    return (Math.abs(a-100)<=20) || (Math.abs(a-400)<=20);
}

console.log('Destination less than 20 points: ', destin(80));
console.log('Destination less than 20 points: ', destin(110));
console.log('Destination less than 20 points: ', destin(81));

console.log('Destination less than 20 points: ', destin(380));
console.log('Destination less than 20 points: ', destin(379));
console.log('Destination less than 20 points: ', destin(419));