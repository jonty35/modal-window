'use strict';

const display = document.querySelector('.display');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.cancel');
const btnsOpenModal = document.querySelectorAll('.start-button');

const openModal = function () {
  display.classList.remove('modal');
  overlay.classList.remove('modal');
};

const closeModal = function () {
  display.classList.add('modal');
  overlay.classList.add('modal');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  

  if (e.key === 'Escape' && !display.classList.contains('modal')) {
    closeModal();
  }
});