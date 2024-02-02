'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const closeModal = () =>  {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};



for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    if(!modal.classList.contains('hidden'))
      closeModal();
  }
});


// for (const btnOpenModalElement of btnOpenModal) {
//   console.log(btnOpenModalElement);
// }

// btnOpenModal.forEach( s=> console.log(s)); // forEach Works for NodeList









