import notyfOptions from '../config/notyf-options.js';
import '../css/style.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import pixabayServices from './apiService.js';
import cardImg from '../templates/card-img.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
const instance = basicLightbox.create(`
<div><p>sdkgfmdslkvgnjdflvgndl</p></div>

 `);
// --------------------------------------
const notyf = new Notyf(notyfOptions);
const refs = {
  inputSearchImg: document.querySelector('#search-form'),
  btnSearch: document.querySelector('.js-btn'),
  gallary: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.js-btn_load_more'),
  btnScrollToUp: document.querySelector('.btn-up'),
};
refs.btnSearch.addEventListener('click', boo);
refs.btnLoadMore.addEventListener('click', loadmore);
refs.btnScrollToUp.addEventListener('click', toUpPage);
refs.gallary.addEventListener('click', clickImg);
function boo(e) {
  e.preventDefault();
  pixabayServices.page = 1;
  refs.gallary.innerHTML = '';
  refs.btnLoadMore.classList.remove('is-visible');
  const name = refs.inputSearchImg.elements.query.value;
  pixabayServices.searchquery = name;
  pixabayServices.fetchArticles().then(imgArray => {
    crateCards(imgArray);
  });
  refs.btnScrollToUp.classList.add('is-visible');
  refs.inputSearchImg.elements.query.value = '';
}

function crateCards(imgArray) {
  const cards = imgArray.map(itemimg => cardImg(itemimg)).join('');
  refs.gallary.insertAdjacentHTML('beforeend', cards);
  refs.btnLoadMore.classList.add('is-visible');
}

function loadmore() {
  let currentHeight =
    document.body.clientHeight - refs.btnLoadMore.offsetHeight;
  pixabayServices.fetchArticles().then(imgArray => {
    crateCards(imgArray);

    window.scrollTo({
      top: currentHeight,
      behavior: 'smooth',
    });
  });
}
function toUpPage(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function clickImg(e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.nodeName === 'IMG') modalOpen();
}

function modalClose() {
  instance.close();
}
function modalOpen() {
  instance.show();
}
