/*== Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple their absolute difference if the specified number is greater than 19. ==*/
function absDifference(a){
    return a <= 19
    ? Math.abs(a - 19)
    : Math.abs(a - 19) * 3;
}
console.log ('Absolute difference: ', absDifference(10));
console.log ('Absolute difference: ', absDifference(19));
console.log ('Absolute difference: ', absDifference(22));