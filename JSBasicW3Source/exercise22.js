/*== Write a JavaScript program to remove a character at the specified position of a given string and return the new string. ==*/
function remChar (str, a) {
    return str.substr(0, a) + str.substr(a+1, str.length);
}

console.log('Remove character 1', remChar('JavaScript', 0));
console.log('Remove character 2', remChar('JavaScript', 1));
console.log('Remove character 5', remChar('JavaScript', 5));