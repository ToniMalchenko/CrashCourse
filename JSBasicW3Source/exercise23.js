/*== Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
 The string length must be greater than or equal to 1 ==*/
 function newStr (str){
     if (str.length <=1){
         return str;
     }
    return str.charAt(str.length-1) + str.slice(1, str.length-1) + str.charAt(0);
     
 }
console.log(newStr('Bobby'));
console.log(newStr('abc'));
console.log(newStr('ab'));
console.log(newStr('a'));

 /*
 str1 = 'Bobby';
 console.log(str1.charAt(str1.length-1));//last symbol
 console.log(str1.slice(0, str1.length-1));//str without 1st symbol
  console.log(str1.substr(0,1));//1st symbol
 */
