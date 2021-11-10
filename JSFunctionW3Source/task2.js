/*====== Write a JavaScript function that checks whether a passed string is palindrome or not? ======*/

function checkPalindrom(str){
    let strCh = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');

    return strCh.split('').reverse().join('') === strCh;

}
console.log(checkPalindrom('madam'));
console.log(checkPalindrom('nurses run'));
console.log(checkPalindrom('34mad-3a+m'));
console.log(checkPalindrom('a'));
