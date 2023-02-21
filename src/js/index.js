// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { sayHello } from './demo.js';

sayHello();

const container = document.getElementById('container');

window.addEventListener('load', () => {
  container.classList.add('container--show');
});
