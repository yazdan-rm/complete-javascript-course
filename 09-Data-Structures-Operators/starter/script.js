'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order receive ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const rest1 = {
//   name: 'Capri',
//   numGuests = 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Ross',
// };

// // Or assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numberGuests ||= 10;
// // rest2.numberGuests ||= 10;

// // nullish assignment operator( null or undefined)
// rest1.numberGuests ??= 10;
// rest2.numberGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
//
// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// //1) Destructuring
//
// // Spread, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
//
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
//
// const [pizza, , resotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, resotto, otherFood);
//
// //Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//
// //2) Functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   // numbers.forEach(s => {
//   //   sum += s;
//   // });
//
//   for (let s of numbers) {
//     sum += s;
//   }
//   console.log(sum);
// };
//
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1);
//
// const x = [23, 5, 7];
// add(...x);
//
// restaurant.orderPizza('mushrooms', 'onion', 'olives');
//
// restaurant.orderPizza('mushrooms');
//
// console.log('----- OR -----');
// // Use Any data type, return any data type,
// // short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
//
// console.log(undefined || 0 || '' || 'hello' || 23 || null);
//
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
//
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
//
// console.log('----- AND -----');
//
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
//
// console.log('hello' && 23 && null && 'jonas');
//
// //
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
//
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);
//
// const newArr = [1, 2, ...arr];
// // console.log(newArr);
//
// const newMenu = [...restaurant.mainMenu, 'Ignacio'];
// // console.log(newMenu);
//
// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
//
// // Join 2 arrays
// const joinTwoArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
//
// // console.log(joinTwoArray);
//
// // Iterable arrays, strings, maps, sets, Not objects
//
// const str = 'John';
// const letters = [...str, ' ', 'S.'];
// // console.log(letters);
//
// // console.log(...str);
// // console.log('j', 'o');
//
// // Real world example
// const ingredients = [
//   prompt("Let's make pasta Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// // console.log(ingredients);
//
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//
// restaurant.orderPasta(...ingredients);
//
// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guise' };
//
// console.log(newRestaurant);
//
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Yazdan';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// console.log(`${...str} Schmedtmann`);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 31',
//   mainIndex: 2,
//   starterIndex: 2,
// });
//
// restaurant.orderDelivery({
//   timeF: '22:30',
//   address: 'via del sole, 31',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
//
// console.log(name, openingHours, categories);
//
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
//
// console.log(restaurantName, hours, tags);
//
// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
//
// // Mutating variable
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
//
// ({ a, b } = obj);
// console.log(a, b);
//
// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x, y, z] = arr;
// console.log(x, y, z);
//
// let [main, , secondary] = restaurant.categories;
//
// console.log(main, secondary);
//
// // Switching variable
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
//
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
//
// // Receive 2 return values from a function
// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);
//
// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
//
// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
// let players1 = game.players[0];
// let players2 = game.players[1];

// console.log(players1);
// console.log(players2);
// const [players1, players2] = game.players;
// // 2)
// const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);
// // 3)
// const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

// // 4)

// let player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final);

// 5)
// const team1 = game.odds['team1'];
// console.log(team1);
// const draw = game.odds['x'];
// console.log(draw);
// const team2 = game.odds['team2'];
// console.log(team2);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, team2, draw);

// 6)
// const printGoals = function (...numbers) {
//   numbers.forEach(element => console.log(element));
// };

// printGoals(
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
// );

// printGoals(...game.scored);
// // 7)
// team1 < team2 && console.log('Team one is more likely to win.');

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(item);

// console.log([...menu.entries()]);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, element] of menu.entries()) {
//   console.log(`${i + 1}: ${element}`);
// }
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist ');
// console.log(restaurant.yazdanMethod?.(0, 1) ?? 'Method does not exist ');

// // Arrays
// const users = [];
// // const users = [{ name: 'Jonas', email: 'hello@jonas' }];
// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// Properties Name
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day} `;
// }

// console.log(openStr);

// // Properties Values
// const values = Object.values(openingHours);

// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close ${close}`);
// }

// 1.
// for (const [key, value] of Object.entries(game.scored)) {
//   console.log(`Goal ${key + 1}: ${value}`);
// }

// let sum = 0,
//   count = 0;
// // 2.
// const odds = Object.values(game.odds);
// for (const odd of odds) {
//   sum += odd;
//   console.log(sum / odds.length);
// }

// // 3.
// for (const [key, value] of Object.entries(game.odds)) {
//   const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
//   console.log(`Odd of  ${teamStr}: ${value}`);
// }
//////////////////////////////////////////
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Yazdan'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet[0]); //It's undefined
// orderSet.clear();
console.log(orderSet);
for (const order of orderSet) console.log(order);

//EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);
console.log(new Set('jjjsssfffsdfffsdfafaefrwae').size);

const rest = new Map();
rest.set('name', 'Classic Italy');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, portugal'));

rest
  .set('categories', ['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'we are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

let time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
// rest.clear();
console.log(rest.size);
console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🏆'],
  [false, 'Try again!'],
]);

console.log(question);
// Convert Object To Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (let [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: {value}`);
}

const answer = 3;
console.log(answer === question.get('correct'));
console.log(question.get(answer === question.get('correct')));

// Converting map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = new Set(gameEvents.values());
console.log([...events]);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
let avgTime = 0;
let sum = 0;
for (let [key, value] of gameEvents) {
  sum += key;
}

avgTime = sum / gameEvents.size - 1;
console.log(avgTime);
console.log(gameEvents.get(avgTime));

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL

// for (let [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[First Half] ${key}: ${value}`);
//   } else {
//     console.log(`[Second Half] ${key}: ${value}`);
//   }
// }

const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1, airline.length));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSet = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSet('11B');
checkMiddleSet('23C');
checkMiddleSet('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // remove space from start and end of it
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// replacing
const priceGB = '200,97@';
const priceUS = priceGB.replace('@', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// boolean
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log(`Part of the new ARirbus family`);
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some food and pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join('------');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (let n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('Jessica ann smith davis');
capitalizeName('jonas schedtmann');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Yazdan'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // make it a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(234534234234234));

// repeat
const message2 = 'Bad weather... all departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textArea = document.querySelector('textarea');
const button = document.querySelector('button');
button.addEventListener('click', function () {
  let textArea_value = textArea.value;
  let [...linedInput] = textArea_value.split('\n');
  console.log(linedInput);
  for (let [i, tempLine] of linedInput.entries()) {
    const [first, second] = tempLine
      .toLowerCase()
      .trim()
      .split('_'); /*********** */
    let temp = first + second[0].toUpperCase() + second.slice(1);
    console.log(`${temp.padEnd(25)}${'✅'.repeat(++i)}`);
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (let flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;

  console.log(output);
}
