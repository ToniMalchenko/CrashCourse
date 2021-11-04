/*
////////////////
Conditions
///////////////
*/

/* Sum, Else If, > <*/
let a = 2;
let b = 1;
let c=a+b;
console.log('Result of sum',c);

if(a>=c){
    console.log('First Variant');
    console.log(`${a} > ${c}: ${a>c}`)
}
else if (b>=c){
    console.log('Second Variant');
    console.log(`${b} > ${c}: ${b>c}`);
}    
else {
    console.log('Last Variant:');
    console.log(`${a} > ${c}: ${a>c}`);
    console.log(`${b} < ${c}: ${b<c}`);
    console.log(`${c} > ${a}: ${c>a}`);
}

// Ternary
console.log('Ternary');
const first = 2;
const second = '2';
let third = 3;

first == second ? third *= first : third += first;
console.log(third);

first === second ? third -= first : third **= first;
console.log(third);

//Switch Case
console.log('Switch, Case');
switch (first){
    case 1: third -= first;
    break;
    case 2: third /= first;
    break;
    default: third=first;
}
console.log(third);

//Logical operator

const string = 'Some text less than 100 symbols';

// operator && AND
string.length <= 100 && string.length > 0 
    ? console.log('All right')
    : console.log('Invalid string');

//operator || OR
string.length > 100 || string.length < 0
    ? console.log('String lenght is invalid')
    : console.log('String lenght is valid');

//operator != NOT
let string1;
string1 != undefined 
    ? console.log(string1)
    : console.log('String is undefinied');
/*
///////////
//////////
*/