//c/5 = (f-32)/9
// c = (f-32)*5/9
// f = c*9/5 + 39
function toCelcium(farenheit){
    let celcium = (farenheit - 32)*5/9;
    console.log (`${farenheit} \xB0F is equal that ${celcium} \xB0C`); 
}
function toFarenheit(celc){
    let faren = celc * 9 / 5 + 32;
    console.log(`${celc} \xB0C is equal that ${faren} \xB0F`);
}

toCelcium(45);
toFarenheit(60);
















