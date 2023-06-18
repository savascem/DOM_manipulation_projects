'use strict';

// select elements
const modal = document.querySelector('.modal');
const opensModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// this is the remove function that will be working when the user wants to open a hidden window
const removeHiddenClass = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// this is the add fuction that will be working when the user want to close the window
const addHiddenClass = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// loop for opening to hidden window when the user selects a random button
for (let i = 0; i < opensModal.length; i++) {
  opensModal[i].addEventListener('click', removeHiddenClass);
}

// that will work when the user clicks to close
closeModal.addEventListener('click', addHiddenClass);

// that will work when the user clicks on a random area except the opened window
overlay.addEventListener('click', addHiddenClass);

// that will work when the user clicks esc button
document.addEventListener('keydown', function (e) {
  const pass = e.key;
  if (pass === 'Escape' && !modal.classList.contains('hidden')) {
    addHiddenClass();
  }
});
