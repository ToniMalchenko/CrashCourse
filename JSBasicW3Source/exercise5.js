let string = 'w3resource';
console.log('Primary string', string);

let i =0;
let str1 = string;
console.log('Changing process:')
while(i<string.length){
    str1 = str1.charAt(str1.length-1) + str1.slice(0, str1.length-1);
    console.log(str1);
i++;
}