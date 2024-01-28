"use strict"; // It use to indicate
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log(`I can Drive :D`);

// const interface = "hello";

// function logger() {
//   console.log("My name is yazdan");
// }
// // Calling , Running, invoking function
// logger();
//
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
//
// const appleAndOrange = fruitProcessor(5, 0);
//
// console.log(appleAndOrange);

//Function declaration
// function calcAge1(birthYear){
//   return 2037 - birthYear;
// }
//
// const age1 = calcAge1(1991);
//
// //Function expression
// const calcAge2 = function(birthYear){
//   return 2037 - birthYear;
// }
//
// const age2 = calcAge2(1991);
//
// console.log(age1, age2);
//
// //Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
//
// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //return retirement
//   return `${firstName} retires in ${retirement} years`;
// }
//
// console.log(yearUntilRetirement(1991, "Yazdan"));

// const cutPieces = function(fruit){
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
//
//
// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// };
//
// const yearUntilRetirement = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   //return retirement
//   if (retirement > 0){
//     return `${firstName} retires in ${retirement} years.`;
//   } else{
//     return `${firstName} has already retired 🍕`;
//   }
// };
//
// console.log(yearUntilRetirement(1991, 'Jonas'));
// console.log(yearUntilRetirement(1950, 'Mike'));

// const calcAverage = (score1, score2, score3) =>{
//   return (score1 + score2 + score3) / 3;
// }
// // score 44, 23 and 71. Koalas score 65, 54 and 49
// // Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);
//
// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);
// const checkWinner = function (avgDolphins, avgKoalas){
//   if(avgDolphins >= 2 * avgKoalas)
//     return`Dolphins win 🏆(${avgDolphins} vs ${avgKoalas})`;
//   else if(avgKoalas >= 2 * avgDolphins)
//     return `Koalas win 🏆(${avgKoalas} vs ${avgDolphins})`;
//   else
//     return `No teams win....`;
// }
//
// console.log(checkWinner(avgDolphins1, avgKoalas1));
// console.log(checkWinner(avgDolphins2, avgKoalas2));
// console.log(checkWinner(500, 100));

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";
//
// const friends = ['Michael', 'Steven', 'Peter'];
//
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
//
// console.log(friends.length);
// console.log(friends.length - 1);
//
// friends[2] = 'Jay';
// console.log(friends);
//
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
//
// console.log(jonas);
// console.log(jonas.length);
//
// //Exercise
// const calcAge = function(birthYear){
//   return 2037 - birthYear ;
// }
//
// const years = [1990, 1967, 2002, 2010, 2018];
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// console.log(age1, age2, age3);
//
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];
//
// //Add elements
// const newLength = friends.push('Jay');
// console.log(newLength);
// console.log(friends);
//
// friends.unshift('John');
// console.log(friends);
//
// //Remove element
// const removedElement = friends.pop();
// console.log(removedElement);
// console.log(friends);
//
//
// friends.shift(); // Remove From First
// console.log(friends);
// //Return Index of an element if it's exist
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));
// //Return true and false
// friends.push(23);
// console.log(friends);
// console.log(friends.includes('Steven')); //ES2016
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));
//
// if(friends.includes("Steven"))
//   console.log(('You have a friend called Steven'));

//Challenge#2
// const calcTip = bill => (bill >= 50 && bill <= 300) ?
//   0.15 * bill : 0.2 * bill;
//
//
// console.log(calcTip(100));
// const bills = [125, 555];
// bills.push(44);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//
// const total = [];
// total.push(tips[0] + bills[0]);
// total.push(tips[1] + bills[1]);
// total.push(tips[2] + bills[2]);
// console.log(`bills: ${bills}\ntips: ${tips}\ntotal: ${total}`);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job:  'Teacher',
//   friends: ['Micheal', 'Peter', 'Steve']
// }
//
// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas.lastName);
//
// const nameKey = 'Name';
// console.log(jonas[`first` + nameKey]);
// console.log(jonas['last' + nameKey]);
// const interestedIn = prompt("what do you want to know about Jonas choose between lastName, age, job, friends");
//
// if(jonas[interestedIn])
//   console.log(jonas[interestedIn]);
// else
//   console.log(`Request wrong! choose between lastName, age, job, friends`);
//
// // add element to the Object
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasSchmedtman';
// console.log(jonas);
//
// //Challenge
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job:  'Teacher',
//   friends: ['Micheal', 'Peter', 'Steve'],
//   hasDriversLicense: true,
//
//   calcAge: function(){
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//
//   getSummary: function(){
//     return `${this.firstName} is a ${this.age}-year old teacher, and has ${this.hasDriversLicense ? "a": "No"} driver's license.`
//   }
// }
//
// // const jonas = {
// //   firstName: 'Jonas',
// //   lastName: 'Schmedtmann',
// //   birthYear: 1991,
// //   job:  'Teacher',
// //   friends: ['Micheal', 'Peter', 'Steve'],
// //   hasDriversLicense: true,
// //   calcAge: birthYear => 2037 - birthYear
// // }
//
// console.log(jonas.calcAge());
// console.log(jonas.age);
// // console.log(jonas['calcAge'](jonas.birthYear));
// console.log(jonas['getSummary']());

// Challenge #3
// const mark = {
//   fullName: 'Mark',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     return this.mass / this.height ** 2;
//   }
// }
//
// const jonas = {
//   fullName: 'Jonas',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//     return this.mass / this.height ** 2;
//   }
// }
//
// console.log(`${jonas.fullName}'s BMI(${jonas.calcBMI()}) is ${jonas.calcBMI() > mark.calcBMI() ? 'higher':'lower'} than ${mark.fullName}'s(${mark.calcBMI()})!`);

// for (let q = 1; q <= 10; q++) {
//   console.log(`Lifting weights repetition ${q} 🏋️`);
// }

// const jonas = [
//   'Jonas',
//   'Schemdtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ]
// const types =[];
//
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
//
// console.log(types);
//
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
//
// for(let i = 0; i < years.length; i++){
//   ages.push(2037 - years[i])
// }
//
// console.log(ages);
//
// console.log('-----ONLY STRINGS-----');
// for (let i = 0; i < jonas.length; i++) {
//    if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
//
// console.log('-----BREAK WITH NUMBER-----');
// for (let i = 0; i < jonas.length; i++) {
//   if(typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   'Jonas',
//   'Schemdtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];
//
// for(let i = jonas.length - 1; i >= 0; i--){
//   console.log(i, jonas[i]);
// }
//
// for (let i = 1; i < 4; i++) {
//   console.log(`------- Starting exercise ${i}`);
//
//   for (let j = 1; j < 6; j++) {
//     console.log(` Exercise ${i}: Lifting weight repetition ${j} 🏋️`);
//   }
// }

//While Loop
let q = 1;
// while (q <= 10){
//   console.log(`While: Lifting weights repetition ${q} 🏋️`);
//   q++;
// }
//
// let dice = Math.trunc(Math.random() * 6) + 1;
// dice = Math.trunc(Math.random() * 6) + 1;
// if(dice === 6) console.log(`Loop is about to end...`);
// while(dice !== 6){
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6) console.log(`Loop is about to end...`);
// }

//Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//
// const tips = [];
// const totals = [];
//
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
//
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
//
// console.log(bills, tips, totals);
//
// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
//
// console.log(calcAverage(totals));

// const calcTempAmplitude = function (temps){
//   let max = temps[0];
//   let min = temps[0];
//   for(let i = 0; i < temps.length; i++) {
//     if(typeof temps[i] !== 'number') continue;
//     if(temps[i] < min) min = temps[i];
//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// }
//
// const amplitude = calcTempAmplitude([3, 7, 4]);
// console.log(amplitude);

// const measureKelvin = function (){
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius: '))
//   };
//
//   console.table(measurement);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   return measurement.value + 273;
// }
//
// console.log(measureKelvin());


// const calcTempAmplitude = function (temps){
//   let max = temps[0];
//   let min = temps[0];
//   for(let i = 0; i < temps.length; i++) {
//     if(typeof temps[i] !== 'number') continue;
//     if(temps[i] < min) min = temps[i];
//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// }
//
// const amplitude = calcTempAmplitude([3, 7, 4]);
// console.log(amplitude);

// const temps1 = [17, 21, 23];
// const temps2 = [12, 5, -5, 0, 4];
// const printForecast = temps => {
//   let out = '';
//   for (let i = 0; i < temps.length; i++) {
//     out += `...${temps[i]}°C in ${i + 1} days `
//   }
//   console.log(out);
// }
//
// printForecast(temps1);
// printForecast(temps2);












