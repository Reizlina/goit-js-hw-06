function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');

btn.addEventListener('click', () => {
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
});
