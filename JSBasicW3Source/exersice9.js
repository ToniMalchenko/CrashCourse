today = new Date();
let cristmas = new Date (today.getFullYear(), 11, 25); // put day of christmas this year in christmas
if(today.getMonth() == 11 && today.getDay()>25){    //if christmas in this year was already
    cristmas.setFullYear(cristmas.getFullYear()+1);  //change cristmas on the next year
}
let day = 1000*60*60*24;    //set time from miliseconds to day
console.log (Math.ceil((cristmas.getTime()-today.getTime())/day) + ' days left until Christmas ');
