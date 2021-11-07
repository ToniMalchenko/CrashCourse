function year (actualYear){
    return actualYear % 100 === 0 
    ? actualYear % 400 === 0
    : actualYear % 4 === 0;
}
let text = 'year is Leap year';
let yearArr = [1992, 2000, 1900, 1600, 1700];
for(let i = 0; i<yearArr.length; i++){
    console.log (`${yearArr[i]} ${text} ${year(yearArr[i])}`);
}