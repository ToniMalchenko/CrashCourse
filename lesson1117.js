// Tasks 1 -  convert array of strings
// from lowercase to uppercase
// const input = ["some string"];
//  function convertToUppercase(array) {
    // const result = [];
    // array.forEach((str, idx) => result[idx] = str.toUpperCase());
    // return result;
//  }
// console.log(convertToUppercase(input))
// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
// function calculateLetters(string, letter) {
    //  const reg = new RegExp(letter,'g');
    //  console.log(reg);
    //  const resul = (string.match(reg)||[]).length;
    //  return resul;
// }
// function calculateLetters(string, letter) {
// const reg = new RegExp(letter, "g");
//   const found = string.match(reg);
//   return found.length;
// }
// console.log(calculateLetters('lettertttt', 't'));
// console.log(calculateLetters('lettertttt', 's'));
// Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
//   function replaceNumbers(string) {
    //   const reg = new RegExp('[0-9]','g');
    //   result = string.replace(reg,' ');
    //   return result;
//   }
//   console.log(replaceNumbers('I9like5JS'));
// Task 4 - sort strings in array
// const input = [11, 2, 101, 3, 4, 5, 1, 6];
// 
//  function sortArray(array) {
    //  return array.sort((a,b) => a - b);
//  }
//  console.log(sortArray(input));
// 
// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
// const array = ["osmos", "uterque", "water", "crop",
        //  "&", "swap", "cat", "brew", "Esmeralda"];
// const index = 1;
// result "start wars"
//  function buildStringUsingIndex(array, index) {
    //  let result ='';
    //  array.forEach(str => {
        // (str.length-1<index) 
        // ? result += ' '
        // : result += str.charAt(index);
    //  });
    //  console.log('=========',result);
    //  return result;
    //  result = array.reduce((acc, str) =>{
        // (str.length-1<index) 
        // ? acc += ' '
        // : acc += str.charAt(index);
        // return acc;
    //  },'');
    //  return result;
//  }
// console.log(buildStringUsingIndex(array, index));
// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
//  function palindromeValidator(str) {
    // let strCh = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    // result = (strCh.split('').reverse().join('') === strCh) 
    // ? 'The string is palindrome'
    // : 'The string is not palindrome';
    // return result;
//  }
//  console.log(palindromeValidator('anna'));
//  console.log(palindromeValidator('saippuakivikauppias'));
//  console.log(palindromeValidator('danna'));