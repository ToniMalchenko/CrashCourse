const IronMan = {
    filmsParts: 3,
    nameHero: "Tony Stark",
    avengers: true
}
console.log('IronMan');
console.log(IronMan);
///////////////////////////////////////////////////////////////////

console.log('DeadPool');
const DeadPool = Object.assign({},IronMan); //Copies new object from IronMan
DeadPool.avengers = false;
DeadPool.nameHero = "Weid Wilson" //Change some properties
console.log(DeadPool);

Object.freeze(DeadPool); //freeze object
DeadPool.filmsParts = 2; //Change some properties
console.log('Change after freeze', DeadPool); 
////////////////////////////////////////////////////////////////////

console.log('Forsage');
const Forsage = Object.create(IronMan); //Create new objects from IronMan
Forsage['filmParts'] = 9;
delete Forsage.avengers;
Forsage.nameHero = ['Dom', 'Bryan', 'Ron'];
Forsage.teamMovie = true;
console.log(Forsage);

if (Forsage.hasOwnProperty('teamMovie')){
    Forsage.teamSize = Forsage.nameHero.length;
}
console.log('Team size: ', Forsage.teamSize);
//////////////////////////////////////////////////////////////////
/* isFrozen */
////////////////////////////////////////////////////////////
if (Object.isFrozen(DeadPool)){
    Forsage.qtyFilmPart = Forsage.filmParts;
    Forsage.nameHeroes = Forsage.nameHero;
    delete Forsage.filmParts, Forsage.nameHero;
    console.log(Forsage);
}
else {
    DeadPool.qtyFilmPart = DeadPool.filmsParts;
    delete DeadPool.filmsParts;
    console.log(DeadPool);
}

/////////////////////////////////////////////////////
console.log ('assign two objects')
const arrayOne = {
    a: 1, b:2, c:3
}
const arrayTwo = {
    d: 4, e: 5, f:6
}

const bigArray = Object.assign(arrayOne, arrayTwo);
   
for (const [key, value] of Object.entries(bigArray)) {
     console.log(`${key}: ${value}`);
}

////////////////////////////////////////////////////////
//            Object.keys
/////////////////////////////////////////////

const Venom = new Object();
Venom.qtyFilmPart = 2;
Venom['studio'] = 'Marvel';

console.log('Venom keys: ', Object.keys(Venom));

