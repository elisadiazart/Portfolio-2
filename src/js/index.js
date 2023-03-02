// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const container = document.getElementById('container');
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const menuIconContainer = document.getElementById('menuIconContainer');

window.addEventListener('load', () => {
  container.classList.add('container--show');
});

menuIconContainer.addEventListener('click', () => {
  menu.classList.toggle('index--active');
  menuIcon.classList.toggle('line--cross');
});
