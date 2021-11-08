class Ford {
    //Constructor
    constructor(model, drive, year){
        this.marka = 'Ford';
        this.model = model;
        this.drive = drive;
        this.year = year;
    }
    //Method
    carDesc(){
        return "This is: " + this.marka + "\nModel: " + this.model + "\nDrive: " + this.drive + "\nYear: " + this.year;
    }
}

//F-150
const F150 = new Ford('F-150', '4x4', '2012');
const Mustang = new Ford ('Mustang', '2WD', '1986')
console.log(F150.carDesc());
console.log(Mustang.carDesc());