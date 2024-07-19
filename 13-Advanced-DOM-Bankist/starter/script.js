'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');



const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};


const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn =>
  btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);



document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Selecting an element
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
const allButton = document.getElementsByTagName('button');
console.log(allButton);

console.log(document.getElementsByClassName('btn'));

// Creating and Inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookies">got it!</button>';


// header.prepend(message);
header.append(message);

// header.before(message);
// header.after(message);

// Deleting elements
document
  .querySelector('.btn--close-cookies')
  // .addEventListener('click', ()=> message.remove());
  .addEventListener('click', (e)=>{
    message.parentElement.removeChild(message);
  });