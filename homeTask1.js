/*
//////////////////////
Data Types
/////////////////////
*/

const prResult = (str) => {
    console.log ('Data types of ', str, 'is: ', typeof str)
}

// Number
let a = 10;
const b = '10';
prResult(a);

//String
const surName = 'Malchenko'; // lowerCamelCase declaration
prResult(surName);

//Boolean
let bool_example = a===b; // snake declaration
prResult(bool_example);

//Undefinied
let EmptyForUndefinied; // CamelCase declaration
prResult(EmptyForUndefinied);

//Object
const obj = {
    city: 'Drogobych',
    foundYear: 1387
}
prResult(obj);

//Function
console.log('Data types of prResult is: ',typeof prResult);

//Array
const arrNew = [1, 2, 3, 4];
prResult(arrNew);

/*
//////////////////////
Data Types
/////////////////////
*/