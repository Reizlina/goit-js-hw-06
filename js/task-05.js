'use strict';

const inputForm = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputForm.addEventListener('input', event => {
  output.textContent = event.target.value;
});
