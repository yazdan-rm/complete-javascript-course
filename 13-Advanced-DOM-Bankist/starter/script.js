'use strict';


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const dotContainer = document.querySelector('.dots');
///////////////////////////////////////
// Modal window
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

// Button scrolling
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
/////////////////////////////////////////////////
// Page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});

//   })
// });
// 1. Add event listener to common parent element

// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  // Matching strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});

// Tabbed component

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if(!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`).classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {

  console.log(this);
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
//
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);
//
//   if(window.scrollY > initialCoords.top){
//     nav.classList.add('sticky');
//   }else{
//     nav.classList.remove('sticky');
//   }
// });

// Sticky navigation: Intersection Observer API
// const obsCallback = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
//
// const obsOptions = {
//   root: null,
//   threshold: [0, 1, 0.2],
// };
//
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


const stickyNav = function(entries){
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold:0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection,{
  root: null,
  threshold: [0.15, 0.2, 0.5],
});

allSections.forEach(section =>{
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy Loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')});

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg,{
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function(){
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  let curSlide = 0;
  const maxSlide = slides.length;

// Functions
  const createDots = function(){
    slides.forEach(function(_, i){
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  }

  const activateDot = function(slide){
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }


  const goToSlide = function(slide){
    slides.forEach((s, i) =>
      s.style.transform = `translateX(${100 * (i - slide)}%)`);
  }

// Next Slide

  const nextSlide = function(){
    if(curSlide === maxSlide - 1){
      curSlide = 0;
    }else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  }
// PrevSlide

  const prevSlide = function(){
    if(curSlide === 0){
      curSlide = maxSlide - 1;
    }else{
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  }
  const init = function(){
    goToSlide(0);
    createDots();
    activateDot(0);
  }

  init();

// Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

// Event delegation
  dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

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




// const h1 = document.querySelector('h1');
//
// const alterH1 = ()=> {
//   alert('addEventListener: Great! You are reading the heading :D');
// }
//
//
// h1.addEventListener('mouseenter', alterH1);
//
// setTimeout(()=>{
//   h1.removeEventListener('mouseenter', alterH1);
// }, 3000);


// h1.onmouseenter = function(e){
//   alert("Yazdan RafieeManesh")
// };


// const randInt = (min, max)=> Math.floor(Math.random() * (max - min + 1) + min);
//
// const randomColor= ()=>{
//   return `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
// }
//
// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//
//   // Stop Propagation
//   // e.stopPropagation();
// });
//
// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
//
// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

//
// const h1 = document.querySelector('h1');
// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
//
// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
//
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
//
// // Going sideways: Siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
//
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el =>{
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// })

document.addEventListener('DOMContentLoaded', function(e){
  console.log('HTML parsed and DOM tree built!', e );
});

window.addEventListener('load', function(e){
  console.log('Page fully loaded', e);
})

window.addEventListener('beforeunload', function(e){
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});

// regular HEAD(parsing html + fetch script + execution + finish paring html)
//         BODY END(parsing html + fetch script + execution)
// async HEAD( parsing html || fetch script + execution + finish parsing html)
//       ASYNC(
// defer HEAD(parsing html || fetch script + execution)

























