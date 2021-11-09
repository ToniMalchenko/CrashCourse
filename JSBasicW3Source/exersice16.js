/**== Write a JavaScript program to compute the sum of the two given integers.
 *  If the two values are same, then returns triple their sum == */

function sum(a,b)
{
    return a===b
    ? 3 * (a + b)
    : a + b;
}

console.log('SUM: 10 10', sum(10, 10));
console.log('SUM 10 20', sum(10, 20));