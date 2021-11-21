class priceAuto {
    constructor(marka, model, year, type)
    {
        this.marka = marka;
        this.model = model;
        this.year = year;
        this.type = type;
    }
    getFullInfo() {
        return this;
    }
}

class VW extends priceAuto {
    constructor(marka, model, year, type){
        super(marka, model, year, type);
        this.dillerPrice = 1000;
    }
    price (){
        return this.year * this.dillerPrice;
    }
}

class Ford extends priceAuto {
    constructor(marka, model, year, type){
        super(marka, model, year, type);
        this.dillerPrice = 100;
    }
    price (){
        return this.year * this.dillerPrice * 0.5;
    }
}

const Passat = new VW('VW', 'Passat', 2000, 'sedan');
const Mustang = new Ford('Ford', 'Mustang', 2010, 'muscleCar');
const PassatInfo = {...Passat.getFullInfo(), price: Passat.price()}
const MustangInfo = {...Mustang.getFullInfo(), price: Mustang.price()}
/* ========================== */
console.log('Full info about Car');
console.log(PassatInfo, MustangInfo);

console.log('============================');
/* Classes wit function */

function CorporateAuto (marka, model, year, type) {
    this.marka = marka;
    this.model = model;
    this.year = year;
    this.type = type;
}
CorporateAuto.prototype.price = function(diller,year){
    const fullPrice = year > 2010
    ? year * 100
    : year * diller;
    return fullPrice;
}
const VWCrafter = new CorporateAuto ('VW', 'Crafter', '2020', 'Van');
const MercedesSprinter = new CorporateAuto ('Mercedes', 'Sprinter', '2000', 'Van')

console.log({...VWCrafter, fullPrice: VWCrafter.price(1000,VWCrafter.year)});
console.log({...MercedesSprinter, fullPrice: MercedesSprinter.price(1000,MercedesSprinter.year)});







