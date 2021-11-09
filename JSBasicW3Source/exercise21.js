/*== Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then return the original string. ==*/

function strPy (str){
    return (str === null || str === undefined || str.substr(0,2) === 'Py')
    ? str
    : 'Py' + str;
}

console.log('Return String', strPy('ton'));
console.log('Return String', strPy('tonPy'));
console.log('Return String', strPy('Py sd Samton'));
console.log('Return String', strPy('Pyton'));
console.log('Return String', strPy());










