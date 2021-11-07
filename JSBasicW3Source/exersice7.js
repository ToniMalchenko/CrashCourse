for( let year = 2014; year<=2050; year++){
    res = new Date(year, 0, 1);
    if (res.getDay()===0){
        console.log('1st January is Sunday in the year: ', year);
    }
}
const g = prompt('fjgk');