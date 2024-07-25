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
/*
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
// header.append(message);

// header.before(message);
header.after(message);

// Deleting elements
document
  .querySelector('.btn--close-cookies')
  // .addEventListener('click', ()=> message.remove());
  .addEventListener('click', (e)=>{
    message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).backgroundColor);
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 20 +'px';

console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'red');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// non-standard
console.log(logo.designer);
// this is a way to get non-standard attribute value
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'new_Yazdan');
console.log(logo.getAttribute('company'));

const link = document.querySelector('.twitter-link');
console.log(link.href);

const hashLink = document.querySelector('.nav__link--btn');
console.log(hashLink.href);

// Data attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log("Current scroll (X/Y): " + window.scrollX + ", "+window.scrollY);

  console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);
/*    window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth'
  });*/

  section1.scrollIntoView({behavior:'smooth'});
});


const h1 = document.querySelector('h1');

const alterH1 = ()=> {
  alert('addEventListener: Great! You are reading the heading :D');
}


h1.addEventListener('mouseenter', alterH1);

setTimeout(()=>{
  h1.removeEventListener('mouseenter', alterH1);
}, 3000);


// h1.onmouseenter = function(e){
//   alert("Yazdan RafieeManesh")
// };





