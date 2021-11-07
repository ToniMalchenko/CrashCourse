let nowDataDayTime = new Date();
let Today = nowDataDayTime.getDate();
let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log('Today is: ', weekDay[Today]);

let hour = nowDataDayTime.getHours();
let minute = nowDataDayTime.getMinutes();
let seconds = nowDataDayTime.getSeconds();


let dayPart = hour <= 12 ? "AM":"PM";

if (hour>=12){
    hour-=12;
}


console.log ('Current Time: ', hour, dayPart, ':', minute, ':', seconds );