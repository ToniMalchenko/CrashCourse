/*Pre conditions */
let nowDataDayTime = new Date();
let Today = nowDataDayTime.getDay();
let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let playList = ['Start Week', 'Good Mood', 'Bass Boost', 'Electronic Sound', 'Bass Boost + Deep House'];

///////////////////////
/*Arrow function*/
console.log('Long Variant:');
const weekDays = (day) =>{
    console.log('Today is: ', day);
}
weekDays(weekDay[Today]);

/*Short variant*/
console.log('Short Variant:');
const dayReminder = (day) => console.log('Today is: ', day);
dayReminder(weekDay[Today]);

//////////////////////////
/*Function Declaration*/
console.log('Function Declaration')
function selectPlaylist(day){
    day != 'Sunday' && day != 'Saturday'
    ? result = playList[weekDay.indexOf(day)-1]
    : result = 'It\'s Weekends, watch movie and power off laptop';
    return result;
}
console.log('Today Playlist: ', selectPlaylist(weekDay[Today]));

//////////////////////////
/*Function Expression*/
console.log('Function Expression')
const gymDay = function(dayNow){
    weekDay.indexOf(dayNow) != 0 && weekDay.indexOf(dayNow) != 3
    ? console.log('Going to gym at 7PM')
    : console.log('Today evening is free');
}
gymDay(weekDay[Today]);

///////////////////////////
//PreConditions
const areaCircle = (r) => r*r*3.14;
/*Anonymous Function */
console.log('Anonymous Function')
const cilinderVolume = function (a, fn, h){
    return h*fn(a);
}
console.log('Cilinder Volume', cilinderVolume(1,areaCircle,10));

//////////////////////////////////
/*Function + Objects */
/////////////////////////////////
console.log('Function + Object');
const Car = {
    brand: 'Dodge',
    model: 'Ram',
    type: 'PickUp'
};
console.log('Object Car: ', Car);
function changeCar(obj, field, value){
    const newCar = Object.assign({},obj);
    newCar[field] = value;

    return newCar;
}
function addNewField(field, value){
    Car[field] = value;
}
const dodgeRam = changeCar(Car, 'drive', '4x4');
console.log('Object Car after function: ', dodgeRam);

addNewField('year', '2013');
console.log('Object Car after add field: ', Car);

