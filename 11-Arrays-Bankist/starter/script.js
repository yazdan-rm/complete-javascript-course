'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const account5 = {
  owner: 'Yazdan Rafiee Manesh',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sorted = false) {
  containerMovements.innerHTML = '';

  const mvos = sorted ? movements.slice().sort((a, b) => a - b) : movements;

  mvos.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${1 + i} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function(acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', e => {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (amount && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    currentAccount?.pin === +inputClosePin.value &&
    currentAccount?.username === inputCloseUsername.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // deleting account
    accounts.splice(index, 1);

    // change welcome message
    labelWelcome.textContent = `Log in to get started`;

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Slice ( do not mutate the main array)
// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
//
// //Splice ( mutate the main array)
// // arr.splice(-1);
// //console.log(arr);
// // arr.splice(1, 2);
// // console.log(arr);
// arr.splice(2, 1);
// console.log(arr);
// arr.splice(3, 1);
// console.log(arr);
//
// // Reverse ( mutate the main array)
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
//
// // Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
//
// // JOIN
// console.log(letters.join(' - '));
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
//
// // getting the last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
//
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }
//
// console.log('----- FOREACH -----');
// movements.forEach(function (movement, index, array) {
//   if (movement > 0)
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   console.log(array);
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// assignment 1

// const checkDogs = (dogsJulia, dogsKate) => {
//   let pureDogsJulia = dogsJulia;
//   pureDogsJulia.splice(0, 1);
//   console.log(dogsJulia);
//   pureDogsJulia.splice(-2, 2);
//   console.log(dogsJulia);
//   const allDogsAge = [...dogsJulia, ...dogsKate];
//   allDogsAge.forEach((age, i) => {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1}
//       is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);
//
// const movementsDescriptions = movements.map(
//   (mov, i, _) => `Movement ${i + 1}, You ${mov > 0 ? 'deposit' : 'withdrawal'}`,
// );
//
// console.log(movementsDescriptions);

// FILTER
// const deposit = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposit);
//
// const depositFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositFor.push(mov);
// }
//
// console.log(depositFor);
//
// const withdrawal = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log(withdrawal);
//
// const withdrawalFor = [];
// for (const mov of movements) {
//   if (mov < 0) withdrawalFor.push(mov);
// }
//
// console.log(withdrawalFor);

// -------- REDUCE ----------
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);
//
// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
//
// console.log(balance2);
//
// // Maximum Value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// });
//
// console.log(max);
//
// // challenge 2

// const calcAverageHumanAge = (...ages) => {
//   let humanAge = ages
//     .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
//     .filter((a, i, arr) => {
//       console.log(arr);
//       return a >= 18;
//     })
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//   console.log(humanAge);
// };

// calcAverageHumanAge(5, 2, 4, 1, 15, 8, 3);

// const eurToUsd = 1.1;
// // PIPELINE
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositUSD);

// FIND Method

// const firstWithdrawal = movements.find(mov => mov < 0);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(movements);
// console.log(movements.includes(-130));
//
// console.log(movements.some(mov => mov === -130));
//
// const anyDeposit = movements.some(mov => mov > 0);
// console.log(anyDeposit);
//
// // Every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));
//
// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
//
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));
//
// // flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);
//
// // flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// String
// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// console.log(owners);
// console.log(owners.sort());
//
// // Number
// console.log(movements);
// // return < 0 , A, B
// // return > 0, B, A
// // Ascending
// console.log(movements.sort((a, b) => a - b));
//
// // Descending
// console.log(movements.sort((a, b) => b - a));

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));
// x.fill(1);
// console.log(x);
// x.fill(1, 3);
// x.fill(1, 3, 5);
// console.log(x);
//
// // Array.from
// const y = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(y);
//
// // Assignment
// const z = Array.from({ length: 100 }, () => Math.floor(Math.random() * 6 + 1));
// console.log(z);
//
// labelBalance.addEventListener('click', function() {
//   const movementUI = document.querySelectorAll('.movements__value');
//   console.log(movementUI[0].textContent);
//   const arrayLikeMovementUI = Array.from(movementUI,cur => {
//     return cur.textContent.replace('€', '');
//   });
//   console.log(arrayLikeMovementUI);
// });

// // 1.
// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0);
// console.log(bankDepositSum);
//
// // 2.
// const numberOfDePosits1000 = accounts.flatMap(acc => acc.movements
// ).filter(mov => mov>1000).length;
// console.log(numberOfDePosits1000);
//
// // 3.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur)=>cur>1000?count+1:count,0);
// console.log(numDeposits1000);
//
// // 4.
// const {deposits, withdrawals} = accounts
//   .flatMap(acc=>acc.movements)
//   .reduce((sums, cur)=>{
//     // cur>0 ? (sums.deposits+=cur):(sums.withdrawals+=cur)
//     // return sums;
//     sums[cur > 0? 'deposits':'withdrawals'] = cur;
//     return sums
//   },{deposits: 0, withdrawals: 0});
//
// console.log(deposits,withdrawals);
//
// // 4.
// // this is nice title -> This Is a Nice Title
// const convertTitle = function(title){
//   const capitalize = word => word[0].toUpperCase() + word.slice(1)
//
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => {
//       return exceptions.includes(word) ? word : capitalize(word) ;
//     }).join(' ');
//   return capitalize(titleCase)
// }
//
// console.log(convertTitle('this is a nice title'));
// console.log(convertTitle('this is a LONG title'));
// console.log(convertTitle('and here is another title with an EXAMPLE'));

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
  dogs.forEach(el => el.recommendedFood = Math.trunc(el.weight ** 0.75 * 28));

console.log(dogs);
// current > (recommended * 0.90) && current < (recommended * 1.10)
// 2.
dogs.forEach(el => {
  if (el.owners.includes('Sarah')) {
    if (el.curFood <= (el.recommendedFood * 0.90)) console.log('Eating too low');
    if (el.curFood >= (el.recommendedFood * 1.10)) console.log('Eating too much');
  }
});

const dogSarah = dogs.find(el=> el.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recommendedFood ? 'too much': 'too low'}`);
// 3.
const ownersEatTooMuch = dogs.filter(dog=>dog.curFood > dog.recommendedFood).flatMap(dog=>dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog=>dog.curFood < dog.recommendedFood).flatMap(dog=>dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
const lstOfOwnersEatTooMuch = ownersEatTooMuch
  .map(owner=>owner.replace(owner[0], owner[0].toUpperCase())).join(' and ');
console.log(`${lstOfOwnersEatTooMuch}'s dogs eat too much!`);

const lstOfOwnersEatTooLittle = ownersEatTooLittle
  .map(owner=>owner.replace(owner[0], owner[0].toUpperCase())).join(' and ');
console.log(`${lstOfOwnersEatTooMuch}'s dogs eat too little!`);

// 5.
const flag = dogs.some(dog => dog.curFood === dog.recommendedFood)
console.log(flag);

const checkEatingOky = dog=>{
  return dog.curFood > dog.recommendedFood*0.9 && dog.curFood < dog.recommendedFood *1.1;
}

// 6.
console.log(dogs.some(checkEatingOky));

// 7.
const dogsEatingOky = dogs.filter(checkEatingOky);
console.log(dogsEatingOky);

//8.
const dogsCopy = dogs.slice().sort((a,b)=>a.recommendedFood - b.recommendedFood)
console.log(dogsCopy);