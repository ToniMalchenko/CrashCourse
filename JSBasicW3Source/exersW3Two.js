let currentDate = new Date();

let todayDay = currentDate.getDay();
let todayMonth = currentDate.getMonth() + 1;
let todayYear = currentDate.getFullYear();

function plusTwoLetter(a){
    if (a<10){
        a = '0' + a;
        return a; 
    }
    else{
        return a;
    }
}
let dd = plusTwoLetter(todayDay);
let mm = plusTwoLetter(todayMonth);


console.log('Current Date:');
currentDate = mm + '-' + dd + '-' + todayYear;
console.log(currentDate);
currentDate = mm + '/' + dd + '/' + todayYear;
console.log(currentDate);
currentDate = dd + '-' + mm + '-' + todayYear;
console.log(currentDate);
console.log(dd + '/' + mm + '/' + todayYear);





const d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentDay = days[d.getDay()];
let hour = d.toLocaleString('en-US', { hour: 'numeric', hour12: true });
let minuts = d.getMinutes();
let seconds = d.getSeconds();
console.log(`Today is : ${currentDay}.` + `\nCurrent time is : ${hour} : ${minuts} : ${seconds}`);