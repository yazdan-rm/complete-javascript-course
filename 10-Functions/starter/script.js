'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 200 * numPassengers,
// ) {
// ES5
// numPassengers = numPassengers || 12;
// price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('lh123');
// createBooking('lh123', 2, 800);
// createBooking('lh123', 2);
// createBooking('lh123', 5);

// createBooking('lh123', undefined, 1000);

// const flight = 'LH123';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 12342354253,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 12342354253) alert('Checked in');
//   else alert('Wrong passenger');
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing ...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
//
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   console.log(others);
//   return [first.toUpperCase(), ...others].join(' ');
// };
//
// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
//
// transformer(`Javascript is the best`, upperFirstWord);
// transformer(`Javascript is the best`, oneWord);
//
// // JS uses callback all the time
// const high5 = function () {
//   console.log("👋👋 (❁´◡`❁) (●'◡'●) ╰(*°▽°*)╯ (^///^)");
// };
//
// document.body.addEventListener('click', high5);
//
// ['Jonas', 'Martha', 'Yazdan'].forEach(high5);
//
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };
//
// const greet = greeting => name => console.log(`${greeting} ${name}`);
//
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
//
// greet('hello')('jonas');
//
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH23',
//   bookings: [],
//   // book = function(){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     console.log(this.bookings);
//   },
// };
//
// lufthansa.book(233, 'Yazdan RafieeManesh');
// lufthansa.book(21, 'Jonas sh');
// console.log(lufthansa);
//
// const euroWings = {
//   airline: 'EuroWings',
//   iataCode: 'EW',
//   bookings: [],
// };
//
// const book = lufthansa.book;
//
// //Does Not Work
// // book(213, 'Lufthansa');
//
// // Call Method
// book.call(lufthansa, 123, 'sarah william');
// console.log(lufthansa);
//
// book.call(euroWings, 123, 'sarah william');
// console.log(euroWings);
//
// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'SW',
//   bookings: [],
// };
//
// book.call(swiss, 123, 'Yazdan :))))');
//
// // Apply Method
// const flightData = [123, 'RafieeManesh'];
// book.apply(swiss, flightData);
//
// book.call(swiss, ...flightData);
//
// // Bind Method
// // book.call(lufthansa, 123, 'sarah william');
// const bookLuth = book.bind(lufthansa);
// bookLuth(123, 'again is Yazdan :)');
//
// const bookLuth123 = book.bind(lufthansa, 123);
// bookLuth123('ha ha ha');
//
// // With Event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
//
// lufthansa.buyPlane();
//
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//
// // Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
//
// const addVAT = addTax.bind(null, 0.23);
// //addVAT = value => value + value * 0.23
//
// console.log(addVAT(100));
//
// // Challenge using nested function
// const addTaxArr = rate => value => value + value * rate;
// console.log(addTaxArr(0.1)(200));
// const addVATArr = addTaxArr(0.23);
//
// console.log(addVATArr(100));
// console.log(addVATArr(23));

// // Assignment-1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'], // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let userInput;
//     while (true) {
//       userInput = +prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`,
//       );
//       if (userInput >= 0 && userInput <= 3) break;
//     }
//     this.answers[userInput]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type.toLowerCase().trim() === 'string')
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     else if (type.toLowerCase().trim() === 'array') console.log(this.answers);
//   },
// };
//
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string  ');
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const runOnce = function () {
//   console.log('This will never run again');
// };
//
// runOnce();
//
// // IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
//
// // console.log(isPrivate);
//
// (() => console.log('This will ALSO never run again'))();
//
// {
//   const isPrivate = 23;
//   var notPrivate = 34;
// }
//
// console.log(notPrivate);

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
//
// const booker = secureBooking();
// booker();
//
// console.dir(booker);

// 1 Example
let f;

const g = function () {
  const a = 32;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const a = 12;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);
// Re-assigning f function
h();
f();
console.dir(f);

// 2 Example
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait);
};

const perGroup = 1000;
boardPassengers(12, 1000);
