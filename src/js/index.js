// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const container = document.getElementById('container');
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const menuIconContainer = document.getElementById('menuIconContainer');
const galleryNav = document.getElementById('galleryNav')
const galleryText = document.getElementById('galleryText')
const galleryImage = document.getElementById('galleryImage')
const galleryTitle = document.getElementById('galleryTitle')
const galleryLiveLink = document.getElementById('pageLive')
const galleryCode = document.getElementById('code')

const galleryContent = {
  button1: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mollis risus. Morbi vel auctor metus, at iaculis sapien. Aliquam ornare, neque at gravida hendrerit, massa nunc porta mauris, ac ultrices leo diam vel nisl. Sed porta sit amet mauris eget suscipit. Aenean eleifend gravida lectus in porta. Quisque sit amet magna nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at sagittis tortor. Morbi in dapibus magna. Mauris ac nulla rhoncus, lobortis nisi eget, facilisis felis. Aliquam in neque eu lectus malesuada accumsan sed non nunc. Quisque et elit quam.',
    title: 'PASSWORD GENERATOR.',
    imagesrc: 'assets/images/item-gallery1.png',
    code: '#'
  } ,
  button2: {
    text: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mollis risus. Morbi vel auctor metus, at iaculis sapien. Aliquam ornare, neque at gravida hendrerit, massa nunc porta mauris, ac ultrices leo diam vel nisl. Sed porta sit amet mauris eget suscipit. Aenean eleifend gravida lectus in porta. Quisque sit amet magna nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at sagittis tortor. Morbi in dapibus magna. Mauris ac nulla rhoncus, lobortis nisi eget, facilisis felis. Aliquam in neque eu lectus malesuada accumsan sed non nunc. Quisque et elit quam.',
    title: 'BOOKING WEBSITE.',
    imagesrc: 'assets/images/item-gallery2.png',
    code: ''
  } ,
  button3: {
    text: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mollis risus. Morbi vel auctor metus, at iaculis sapien. Aliquam ornare, neque at gravida hendrerit, massa nunc porta mauris, ac ultrices leo diam vel nisl. Sed porta sit amet mauris eget suscipit. Aenean eleifend gravida lectus in porta. Quisque sit amet magna nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at sagittis tortor. Morbi in dapibus magna. Mauris ac nulla rhoncus, lobortis nisi eget, facilisis felis. Aliquam in neque eu lectus malesuada accumsan sed non nunc. Quisque et elit quam.',
    title: 'ROCK, PAPER, SCISSORS GAME.',
    imagesrc: 'assets/images/item-gallery3.png',
    pageLiveLink: 'https://elisadiazart.github.io/rock-paper-scisssors-game/',
    code: 'https://github.com/elisadiazart/rock-paper-scisssors-game'
  } ,
  button4: {
    text: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mollis risus. Morbi vel auctor metus, at iaculis sapien. Aliquam ornare, neque at gravida hendrerit, massa nunc porta mauris, ac ultrices leo diam vel nisl. Sed porta sit amet mauris eget suscipit. Aenean eleifend gravida lectus in porta. Quisque sit amet magna nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at sagittis tortor. Morbi in dapibus magna. Mauris ac nulla rhoncus, lobortis nisi eget, facilisis felis. Aliquam in neque eu lectus malesuada accumsan sed non nunc. Quisque et elit quam.',
    title: 'WORDLE.',
    imagesrc: 'assets/images/item-gallery4.png',
    code: 'https://github.com/elisadiazart/Wordle-clone'
  },
  button5: {
    text: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mollis risus. Morbi vel auctor metus, at iaculis sapien. Aliquam ornare, neque at gravida hendrerit, massa nunc porta mauris, ac ultrices leo diam vel nisl. Sed porta sit amet mauris eget suscipit. Aenean eleifend gravida lectus in porta. Quisque sit amet magna nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at sagittis tortor. Morbi in dapibus magna. Mauris ac nulla rhoncus, lobortis nisi eget, facilisis felis. Aliquam in neque eu lectus malesuada accumsan sed non nunc. Quisque et elit quam.',
    title: 'QUIZ GAME.',
    imagesrc: 'assets/images/item-gallery5.png',
    code:''
  },
  button6: {
    text: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mollis risus. Morbi vel auctor metus, at iaculis sapien. Aliquam ornare, neque at gravida hendrerit, massa nunc porta mauris, ac ultrices leo diam vel nisl. Sed porta sit amet mauris eget suscipit. Aenean eleifend gravida lectus in porta. Quisque sit amet magna nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at sagittis tortor. Morbi in dapibus magna. Mauris ac nulla rhoncus, lobortis nisi eget, facilisis felis. Aliquam in neque eu lectus malesuada accumsan sed non nunc. Quisque et elit quam.',
    title: 'POKEMON MEMORY CARD GAME.',
    imagesrc: 'assets/images/item-gallery6.png',
    code:'https://github.com/elisadiazart/pokemon-cards-game'
  },
  button7: {
    text: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mollis risus. Morbi vel auctor metus, at iaculis sapien. Aliquam ornare, neque at gravida hendrerit, massa nunc porta mauris, ac ultrices leo diam vel nisl. Sed porta sit amet mauris eget suscipit. Aenean eleifend gravida lectus in porta. Quisque sit amet magna nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at sagittis tortor. Morbi in dapibus magna. Mauris ac nulla rhoncus, lobortis nisi eget, facilisis felis. Aliquam in neque eu lectus malesuada accumsan sed non nunc. Quisque et elit quam.',
    title: 'TO DO LIST APP.',
    imagesrc: 'assets/images/item-gallery7.png',
    code:'https://github.com/elisadiazart/To-do-list-practice'
  },

};

console.log(galleryContent.button1.imagesrc);


menuIconContainer.addEventListener('click', () => {
  menu.classList.toggle('index--active');
  menuIcon.classList.toggle('line--cross');
});



galleryNav.addEventListener('click', e => {
  const buttonSelected = (data)=> `button${data}`
  console.log(e.target);
  if(e.target.classList.contains('gallery__button-link')){
    galleryText.textContent = galleryContent[buttonSelected(e.target.children[0].dataset.number)].text;
    galleryImage.src = galleryContent[buttonSelected(e.target.children[0].dataset.number)].imagesrc
    galleryTitle.textContent = galleryContent[buttonSelected(e.target.children[0].dataset.number)].title
    galleryLiveLink.href = galleryContent[buttonSelected(e.target.children[0].dataset.number)].pageLiveLink
    galleryCode.href = galleryContent[buttonSelected(e.target.children[0].dataset.number)].code
    for (let index = 0; index <= 7; index++) {
      galleryTitle.classList.remove(`project__title--${index}`)
    }
    galleryTitle.classList.add(`project__title--${e.target.children[0].dataset.number}`);
  }
})
