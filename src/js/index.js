import notyfOptions from '../config/notyf-options.js';
import pixabayServices from './apiService.js';
import cardImg from '../templates/card-img.hbs';
import { Notyf } from 'notyf';
import modalWindow from '../config/modal-window.js';
import '../css/style.css';
import 'notyf/notyf.min.css';
import 'basiclightbox/dist/basicLightbox.min.css';

// --------------------------------------
let instance = '';
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
function toUpPage() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function clickImg(e) {
  // const arrayImg = document.querySelectorAll('.photo-card__img');
  // const arrImgLargeUrl = [];
  // arrayImg.forEach(img => arrImgLargeUrl.push(img.dataset.url));
 
  modalWindow.currentLargeUrl = e.target.dataset.url;
  instance = modalWindow.instance();

  if (e.target.nodeName === 'IMG') {
    instance.show();
  }
  document
    .querySelector('.imgInModalWindow')
    .addEventListener('click',closeModal);
}

function closeModal() {
  document
    .querySelector('.imgInModalWindow')
    .removeEventListener('click',closeModal);
  instance.close();
}
