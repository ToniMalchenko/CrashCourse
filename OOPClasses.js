// function Car(model) {
    // this.model = model;
    // 
    // this.getModel = () => this.model;
    // this.drive = () => console.log('Driving....');
//   }
//   
//   const BMW = new Car('BMW');
//   const Volvo = new Car('Volvo');
//   
//   BMW.drive(); // Driving...
//   Volvo.drive(); // Driving...
//   
//   console.log(typeof BMW);
//   console.log(BMW instanceof Car);

// class Animal {
    // constructor(name) {
        // this.name = name;
    // }
    // sound() { console.log('I cannot speak'); }
    // toString() {
        // return Object.getPrototypeOf(this).constructor.name;
    // }
// }
//  
// class Cat extends Animal {
    // constructor(name) {
        // super(name);
    // }
//  
    // sound() {
        // console.log( 'Meow!');
    // }
// }
//  
// class Dog extends Animal {
    // constructor(name) {
        // super(name);
    // }
//  
    // sound() {
        // console.log( 'Woof!');
    // }
// }
//  
// const Tom = new Cat('Tom');
// Tom.sound(); // Meow!
// const Rex = new Dog('Rex');
// Rex.sound(); // Woof!
// 
// const animal1 = new Animal ('Deno');
// animal1.sound();

// class Cat {
    // constructor(name, color) {
        // this.name = name;
        // this.color = color;
    // }
//  
    // run() {
        // console.log(this.name +  " is running");
    // }
//  
    // sound() {
        // console.log("Meow! Meow!");
    // }
    // getColor() {
        // return this.color;
    // }
// }
//  
// class LazyCat extends Cat {
    // constructor(name, color){
        // super(name, color);
    // }
// 
    // run() {
        // console.log(this.name + ' is too lazy to run');
    // }
// }
// const Felix = new Cat("Felix", "white");
// 
// Felix.run();
// console.log(Felix.getColor());
// 
// const Garfield = new LazyCat('Garfield', 'red');
// Garfield.run();
// console.log(Garfield.getColor());


function Cat(name, color) {
    this.name = name;
    this.color = color;
  }
   
  Cat.prototype.run = function () {
      console.log("I’m running");
  };

  Cat.prototype.sound = function () {
      console.log("Meow! Meow!");
  };
   
  const Tom = new Cat("Tom", "grey");
  const Simon = new Cat("Simon", "red");
  