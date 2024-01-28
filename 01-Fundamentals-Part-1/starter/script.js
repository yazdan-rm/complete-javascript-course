// let js = "amazing ";
// console.log(40 + 12 + 34);

// let firstName = "Yazdan ";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// // alert("Hello yazdan To the world of programming ");

// let lastName = "RafieeManesh";
// console.log(lastName);

// let age = 30;
// age = 31;
// const birthday = 1991;
// birthday = 13;

// //Math Operators
// const now = 2037;
// const ageYazdan = now - 1999;
// const ageSarah = now - 2018;
// console.log(ageYazdan, ageSarah);

// console.log(ageYazdan * 2, ageSarah / 2, 2 ** 3);
// //2 ** 3 means 2  to the power of 3
// const firstName = "Yazdan";
// const lastName = "rafieeManesh";
// console.log(firstName + " " + lastName);

// //Assignment Operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10;
// x *= 4; //x = x * 4;
// x++; // x = x +1
// x--;
// x--;
// console.log(x);
//Comparison Operators
// console.log(ageYazdan > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 < now - 2010);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// let yazdan = 12;
// let hossien = 10;
// const averageAge = yazdan + hossien / 2;
// const firstName = "Yazdan";
// const job = "Backend development";
// const birthday = 1991;
// const year = 2037;
// const yazdan =
//   "I'm " +
//   firstName +
//   ", a " +
//   (year - birthday) +
//   " years old " +
//   " job " +
//   job;
// console.log(yazdan);

// const jonasNew = `I'm ${firstName} , a ${
//   year - birthday
// } year and job is ${job}`;
// console.log(jonasNew);
// console.log(`string
// multilines
// break.`);
// console.log("String \n multilines \n break.");
// let a = 12;
// let b = 23;
// console.log(a + b);
// console.log(typeof `yazdan`);
// console.log(typeof false);

// let countryPopulation = 8000000;

// console.log(countryPopulation / 2);
// console.log(countryPopulation++);
// const findLand = 6000000;
// console.log(countryPopulation > findLand);
// console.log(countryPopulation > 33000000);
// const description = `Iran is in Aea, and is's ${countryPopulation} million people speak persian in there.`;

// console.log(description);

// const age = 18;

// const isOldEnough = age >= 18;

// const yearLeft = 18 - age;

// if (isOldEnough) console.log(`sara can start driving license 🚗`);
// else console.log(`Sara is too young. wait another ${yearLeft} year :)`);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIJohn < BMIMark)
//   console.log(
//     `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn}) !`
//   );
// else
//   console.log(
//     `Mark's BMI (${BMIMark}) is lower than John's BMI (${BMIJohn}) !`
//   );

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);
// console.log(Number("johnas"));
// console.log(String(23), 23);

// //Type coercion
// console.log("I'm " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// let a = "1" + 1;
// a = a - 1;
// console.log(a);

// const age = 18;

// if (age === 18) console.log("You just became an adult :D");

// const favourite = prompt("What is your favourite number?");

// console.log(favourite);
// if (favourite === String(23)) console.log("Cool! 23 is a good number");
// else if (Number(favourite) === 7) console.log("7 is a good number too");
// else {
//   console.log(`${favourite} is a bad number`);
// }

// if (favourite !== String(23)) console.log("why not 23");

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired)
//   console.log("sara is able to drive!");
// else console.log("Someone else should drive...");

// const DOLPHINS_First = 97;
// const DOLPHINS_SECOND = 112;
// const DOLPHINS_THIRD = 101;

// const KOALAS_FIRST = 109;
// const KOALAS_SECOND = 95;
// const KOALAS_THIRD = 106;

// let avgDolphins = (DOLPHINS_First + DOLPHINS_SECOND + DOLPHINS_THIRD) / 3;

// let avgKoalas = (KOALAS_FIRST + KOALAS_SECOND + KOALAS_THIRD) / 3;

// console.log(`average Dolphins: ${avgDolphins}
// average Koalas: ${avgKoalas}`);
// const greaterThat100 = avgDolphins >= 100 && avgKoalas >= 100;
// if (greaterThat100 && avgDolphins > avgKoalas)
//   console.log(`Dolphins Wins the game :)`);
// else if (greaterThat100 && avgDolphins < avgKoalas)
//   console.log(`Koalas wins the game :)`);
// else if (greaterThat100 && avgDolphins === avgKoalas)
//   console.log(`They are draw !`);
// else console.log(`No team wins the trophy`);

// const day = `monday`;

// switch (
//   day // day === 'monday'
// ) {
//   case `monday`:
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case `tuesday`:
//     console.log(`Prepare theory videos`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`Write code examples`);
//     break;
//   case `friday`:
//     console.log(`Record videos`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`Enjoy the weekend :D`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
// }

// if (day === `monday`) {
//   console.log(`Plan course structure`);
//   console.log(`Go to coding meetup`);
// } else if (day === "tuesday") {
//   console.log(`Prepare theory videos`);
// } else if (day === `wednesday` || day === `thursday`) {
//   console.log(`Write code examples`);
// } else if (day === `friday`) {
//   console.log(`Record videos`);
// } else if (day === `saturday` || day === `sunday`) {
//   console.log(`Enjoy the weekend :D`);
// } else {
//   console.log(`Not a valid day!`);
// }
// const age = 12;
// const drink = age > 18 ? `Wine 🍷` : `Water 💧`;
// console.log(drink);
// console.log(`I like to drink ${age > 18 ? `Wine 🍷` : `Water 💧`}`);

const bill = 400;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and  the total value ${tip + bill}`
);
