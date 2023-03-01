// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const container = document.getElementById('container');
const menuIcon = document.getElementById('menuIcon')
const menu = document.getElementById('menu')

window.addEventListener('load', () => {
  container.classList.add('container--show');
});


menuIcon.addEventListener('click', () => {
 menu.classList.toggle('index--active')
 menuIcon.classList.toggle('line--cross')
})