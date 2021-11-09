/*== Write a JavaScript program to create a new string from a given string 
with the first character of the given string added at the front and back ==*/

function strCh (str){
    return str.charAt(0) + str + str.charAt(0);
}

console.log (strCh('Bobby'));
console.log(strCh('ab'));