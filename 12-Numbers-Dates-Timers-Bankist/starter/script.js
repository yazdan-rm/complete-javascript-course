'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2024-06-13T10:53:44.141Z',
    '2024-06-12T10:53:44.141Z',
    '2024-06-06T10:53:44.141Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z'
  ],
  currency: 'IRR',
  locale: 'fa-IR' // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2024-06-13T10:53:44.141Z',
    '2024-06-12T10:53:44.141Z',
    '2024-06-06T10:53:44.141Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z'
  ],
  currency: 'USD',
  locale: 'en-US'
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date, locale) {
  const calcDaysPassed = (date1, date2) => Math.abs(Math.round((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, '0');
  // const month = `${date.getMonth() + 1}`.padStart(2, '0');
  // const year = date.getFullYear();
  //
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

console.log(new Date().toISOString());


const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
};


const displayMovements = function(acc, sort = false) {
  containerMovements.innerHTML = '';


  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;


  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovement = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });


};


const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = `${formattedMov}`;
};


const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const incomesFormatted = formatCur(incomes, acc.locale, acc.currency);
  labelSumIn.textContent = `${incomesFormatted}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outFormatted = formatCur(Math.abs(out), acc.locale, acc.currency);
  labelSumOut.textContent = `${outFormatted}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  const interestFormatted = formatCur(interest, acc.locale, acc.currency);
  labelSumInterest.textContent = `${interestFormatted}`;
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
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = () => {

  const tick = function() {

    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');

    // In each call print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;


    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease time
    time--;
  };
  // Set time to 5 minutes
  let time = 120;

  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;


btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      weekday: 'long'
    };

    const locale = navigator.language;

    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
    console.log('=========>>' + new Intl.DateTimeFormat('fa-IR', options).format(now));
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if(timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});


btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
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
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Restart Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});


btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = +Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function() {
      // Add movement
      currentAccount.movements.push(amount);
      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);

      // Restart Timer
      clearInterval(timer);
      timer = startLogOutTimer();

    }, 2500);
  }
  inputLoanAmount.value = '';
});


btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});


let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23 === 23.0);
// // Base 10 - 0 to 9. 1.10 = 0.1. 3 / 10 = 3.3333333
// // Binary base 2 - 0 1
// console.log(3/10);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);
//
// // Conversion
// console.log(Number('23'));
// console.log(+'23');
//
// // Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));
//
// console.log(Number.parseInt(' 2.5rem '));
// console.log(Number.parseFloat(' 2.5rem '));
//
// console.log(parseFloat('  2.5rem '));
//
// console.log('====>> '+Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20x'));
// console.log(Number.isNaN(23 / 0));
//
// console.log(`===> ${Number.isFinite(20)}`);
// console.log(Number.isFinite(20/0));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite('20x'));
//
// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.0));
// console.log(Number.isInteger(20/ 0));
// console.log(Math.sqrt(25));
// console.log(25**(1/2));
// console.log(2**(1/3));
//
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2));
//
// console.log(Math.min(5, 10, 23, 11, 2));
// console.log(Math.PI * Number.parseInt('10px') ** 2);
//
// console.log(Math.trunc(Math.random() * 6) + 1);
//
// const randomInt = (min, max) => Math.trunc(Math.random()*(max - min) + 1) + min;
//
// console.log(randomInt(10, 20));
//
// // Rounding integers
// console.log(Math.trunc(23.3));
//
// console.log(Math.round(23));
// console.log(Math.round(23.9));
//
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));
//
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));
//
// console.log(Math.floor(-23.3));
// console.log(Math.trunc(-23.3));
//
// //Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// console.log(5 % 2);
// console.log( 5 / 2);
//
// console.log(8 % 3);
// console.log(8 / 3);
//
// console.log(6 % 2);
// console.log(6 / 2);
//
// console.log( 7 % 2);
// console.log( 7 / 2);
//
// const isEven  = n => n %2 === 0;
// console.log(isEven(8));
// console.log(isEven(9));
// console.log(isEven(10));
// console.log(isEven(3));
// let flag = false;
// labelBalance.addEventListener('click', function(){
//   if(!flag){
//     [...document.querySelectorAll('.movements__row')].forEach(function(row, i){
//       if( i % 2 === 0) row.style.backgroundColor = 'orangered'
//     });
//
//   }else{
//     [...document.querySelectorAll('.movements__row')].forEach(function(row, i){
//       if( i % 2 === 0) row.style.backgroundColor = ''
//     });
//   }
//   flag = !flag;
// })

// const diameter = 287_460_000_000;
// console.log(diameter);
//
// const priceCents = 2_343_526_262_456;
// console.log(priceCents);
//
// const transferFee1 = 15_00;
// const transferFee2 = 13_00;
//
// console.log(2**53 -1);
// console.log(Number.MAX_SAFE_INTEGER);
//
// // n at the end of a big integer make it possible to use it
// console.log(234555555555555555555555555555552323n);
//
// // Operation
// console.log(BigInt(100000000000));
// console.log(3452252364522322455245n + 34523452352525n);
//
// const huge = 23423452345252545252435n;
// const num = 23;
//
// console.log(huge * BigInt(num));
//
// // Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == 20);
//
// console.log(huge + ' is really big!!');
//
// // Division
// console.log(11n / 3n);
// console.log(11 / 3);

// Create a date
// const now = new Date();
// console.log(now);
//
// console.log(new Date('Aug 02 2020 18:05:41'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));
//
// console.log(new Date(2034, 10, 19, 15, 23, 5));
//
// console.log(new Date(0)); // initial unix date
// console.log(new Date(3*24*60*60*1000));

// working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
//
// // ***************
// console.log(future.getTime()); // get millisecond time since 1970(timestamp)
// // output: 2142244380000
// console.log(new Date(2142244380000)); // convert it to Date obj
// console.log(Date.now()); // create timestamp without making object of date
// console.log(new Date());
// // ***************
//
// future.setFullYear(1231);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);
//
// console.log(+future);
//
//
//
// const days1 = calcDaysPassed(
//   new Date(2037, 3, 14),
//   new Date(2037, 3, 24)
// );
// console.log(days1);

// const num = 388474.23;
// const option = {
//   style: "currency",
//   unit: 'celsius',
//   currency:'IRR',
//   // useGrouping:false
// }
//
// console.log(new Intl.NumberFormat('en-US', option).format(num));
// console.log(new Intl.NumberFormat('fa-IR', option).format(num));
// console.log(new Intl.NumberFormat('de-DE', option).format(num));
// console.log(new Intl.NumberFormat(navigator.language, option).format(num));


// const ingredients =['Olives', 'cheese']
// const pizzaTimer = setTimeout((ing1, ing2)=>
//   console.log(`I Love Pizza ${ing1} and ${ing2}🍕🍕🍕🍕`),
//   3000,
//   ...ingredients
//   );
//
// if(ingredients.includes('cheese')){clearTimeout(pizzaTimer)}

// setInterval
setInterval(() => {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);