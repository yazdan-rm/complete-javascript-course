'use strict';

// const Person = function(firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//
//   // Never do this
//   // this.calcAge = function(){
//   // console.log(2037 - this.birthYear)
//   // };
//
// };
//
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
//
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}
//
// const matilda = new Person('Matilda', 2000);
// const jack = new Person('Jack', 2000);
// console.log(matilda, jack);
//
// Person.hey = function () {
//   console.log('Hey there 💗');
//   console.log(this);
// }
//
// Person.hey();
//
// console.log(jonas instanceof Person);
// console.log(jonas instanceof Array);
//
// // Prototypes
// console.log(Person.prototype);
//
// Person.prototype.calcAge = function() {
//   console.log(2024 - this.birthYear);
// };
//
// jonas.calcAge();
// matilda.calcAge();
//
// console.log(jonas.__proto__);
// console.log(matilda.__proto__ === Person.prototype);
//
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// // .prototypeOfLinkedObjects
//
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);
//
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
//
// console.log(jonas.__proto__);
// // below call points to Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
//
// console.dir(Person.prototype.constructor);
//
// const arr = [3, 6, 4, 6, 6, 7, 9, 3]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
//
// console.log(arr.__proto__.__proto__);
//
// // add more functionality to Array of js with prototype
// Array.prototype.unique = function() {
//   return [...new Set(this)];
// };
//
// // is not a good idea to add function into built in classes in JS
// console.log(arr.unique());
//
// const h1 = document.querySelector('h1');
//
// console.dir(x => x + 1);
//
// // Coding Challenge #1 answer
//
//1.
// const Car = function(make, speed){
//   this.speed = speed;
//   this.make = make;
// }
//
// //2.
// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(this.speed);
// }
//
// //3.
// Car.prototype.brake = function() {
//   this.speed -= 5;
//   console.log(this.speed);
// }
//
// //4.
// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// car1.accelerate();
// car2.accelerate();
// car1.brake();
// car2.brake();


// class expression
// const PersonCl = class{}

// class declaration
// class PersonCl{
//
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//
//   // Instance Methods
//   // Methods will be added to .prototype property
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }
//
//    greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//
//   get age(){
//     return 2037 - this.birthYear;
//   }
//
//   set fullName(name){
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`)
//   }
//
//   get fullName(){
//     return this._fullName;
//   }
//
//   // Static method
//   static hey(){
//     console.log('Hey there 💗');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
//
// console.log(jessica.__proto__ === PersonCl.prototype);
//
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // }
//
// jessica.greet();
//
// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mode
//
// const walter = new PersonCl('Walter white', 1996);
// console.log(walter);
//
// PersonCl.hey();
//
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],
//
//   get latest(){
//     return this.movements.slice(-1).pop();
//   },
//
//   set latest(mov){
//     this.movements.push(mov);
//   }
// };
//
// console.log(account.latest);
//
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   },
//
//   init(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }
//
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
//
// console.log(steven.__proto__ === PersonProto);
//
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2000);
// sarah.calcAge();
//
// // Coding Challenge #2 Answer
// class Car {
//
//   constructor(make, speed) {
//     this.speed = speed;
//     this.make = make;
//   }
//
//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }
//
//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
//
//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
//
//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }
//
//  const car1 = new Car('Ford', 120);
// car1.accelerate();
// car1.brake();
// console.log(car1.speedUS);
// car1.speedUs = 5;
// console.log(car1.speedUS);
////////////////////////////////////////
// Inheritance Between "Classes" : Constructor Functions
//
// const Person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
//
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//
// const Student = function(firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
//
// // Linking Prototypes
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
//
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
//
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
//
// mike.calcAge();
//
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
//
// console.dir(Student.prototype.constructor)
//////////////////////////////////
// Coding Challenge #3

// const Car = function(make, speed) {
//   this.speed = speed;
//   this.make = make;
// };
//
// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(`Tesla going at ${this.speed} Km/h`);
// };
//
// Car.prototype.brake = function() {
//   this.speed -= 5;
//   console.log(`Tesla going at ${this.speed} Km/h`);
// };
//
// const EV = function(make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
//
// // Linking Prototypes
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
//
// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
// };
//
// EV.prototype.accelerate = function() {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`Tesla going at ${this.speed} Km/h, with a charge of ${this.charge}%`);
// };
//
// const car1 = new EV('Tesla', 120, 23);
// car1.accelerate();
// console.dir(car1);
// car1.brake();
// console.dir(car1);
// car1.chargeBattery(90);
// console.dir(car1);

////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

// class PersonCl{
//
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//
//   // Instance Methods
//   // Methods will be added to .prototype property
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }
//
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//
//   get age(){
//     return 2037 - this.birthYear;
//   }
//
//   set fullName(name){
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`)
//   }
//
//   get fullName(){
//     return this._fullName;
//   }
//
//   // Static method
//   static hey(){
//     console.log('Hey there 💗');
//     console.log(this);
//   }
// }
//
// class StudentCl extends PersonCl{
//
//   constructor(fullName, birthYear, course){
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }
//
//   introduce(){
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//
//   calcAge() {
//     console.log(`I'm ${2037 - this.birthYear} years old, but as student I feel like ${2037 - this.birthYear + 10}`);
//   }
// }
//
// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

///////////////////////////////////////////
// Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.birthYear = birthYear;
//     this.firstName = firstName;
//   }
// };
//
// const steven = Object.create(PersonProto);
//
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
//
// StudentProto.introduce = function(){
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
//
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// class Account{
//   // 1) Public Fields (instances)
//   locale = navigator.language;
//
//   // 2) Private Fields
//   #movements = [];
//   #pin;
//   // static fields
//   static numSubjects = 10;
//
//   constructor(owner, currency, pin){
//     this.owner = owner;
//     this.currency = currency;
//     // Protected Property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//
//   // 3) Public Methods
//   // Public interface
//   getMovements(){
//     return this.#movements;
//   }
//
//   deposit(val){
//     this.#movements.push(val);
//     return this;
//   }
//
//   withdraw(val){
//     this.deposit(-val);
//     return this;
//   }
//
//   requestLoan(val){
//     if(this._approveLoan(val)){
//       this.deposit(val);
//       console.log(`Loan Approved`);
//       return this;
//     }
//   }
//
//   // 4) Private Methods
//   // #approveLoan(val){
//   _approveLoan(val){
//     return true;
//   }
//
//   static helper(){
//     console.log("test");
//   }
//
// }
//
// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
//
// // acc1._movements.push(250);
// // acc1._movements.push(-140);
//
// acc1.getMovements();
// acc1.deposit(250);
// acc1.withdraw(250);
// acc1.requestLoan(250);
// console.log(acc1);
// Account.helper();
//
// // console.log(acc1.#movements);
// // console.log(acc1.#approveLoan(100));
//
// // Methods Chaining
// acc1.deposit(300).deposit(500).withdraw(35)
//   .requestLoan(25000).withdraw(4000);
///////////////////////////////////////////////////////////
// Coding Challenge #4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);


















