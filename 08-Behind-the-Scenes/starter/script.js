'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//
//     if (birthYear >= 1918 && birthYear <= 1996) {
//       var millennial = true;
//       // Creating NEW variable with same name as other
//       // scope's variable
//
//       const firstName = 'Steven';
//       output = 'NEW OUTPUT';
//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(output);
//     // console.log(str);
//     console.log(millennial);
//   }
//   // add(21, 3);
//   printAge();
//   return age;
// }
//
// const firstName = 'Jonas'; // Global variable
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// Variables
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Functions
// console.log(add(1, 3));
// console.log(addExpr(1, 3));
// console.log(addArrow(1, 3));
// function add(a, b) {
//   return a + b;
// }
//
// const addExpr = function (a, b) {
//   return a + b;
// };
//
// const addArrow = (a, b) => a + b;
//
// // Example
// console.log(undefined);
// if (!numOfProducts) deleteAllProducts();
//
// var numOfProducts = 10;
// function deleteAllProducts() {
//   console.log('delete all products ...');
// }
// var x = 1;
// let y = 12;
// const z = 14;
//
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
//
// console.log(this);
//
// function calcAge(birthYear) {
//   console.log(2035 - birthYear);
//   console.log(this);
// }
//
// calcAge(1991);
//
// const calcAgeArrow = birthYear => {
//   console.log(2035 - birthYear);
//   console.log(this);
// };
//
// calcAgeArrow(1991);
//
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };
//
// jonas.calcAge();
//
// const matilda = {
//   year: 1999,
// };
//
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();
//
// const f = jonas.calcAge();
// f();

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  console.log(arguments[0]);
  return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 4);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 3);
addArrow(2, 3, 4);
