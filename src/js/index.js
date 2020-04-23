import notyfOptions from '../config/notyf-options.js';
import '../css/style.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import pixabayServices from './apiService.js';
import cardImg from '../templates/card-img.hbs';
// --------------------------------------
const notyf = new Notyf(notyfOptions);
const refs = {
  inputSearchImg: document.querySelector('#search-form'),
  btnSearch: document.querySelector('.js-btn'),
  gallary: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.js-btn_load_more'),
};
refs.btnSearch.addEventListener('click', boo);
refs.btnLoadMore.addEventListener('click', loadmore);
function boo(e) {
  e.preventDefault();
  refs.gallary.innerHTML = '';
  pixabayServices.page = 1;
  const name = refs.inputSearchImg.elements.query.value;
  pixabayServices.searchquery = name;
  pixabayServices.fetchArticles().then(imgArray => {
    crateCards(imgArray);
  });
  refs.inputSearchImg.elements.query.value = '';
}

function crateCards(imgArray) {
  const cards = imgArray.map(itemimg => cardImg(itemimg)).join('');
  refs.gallary.insertAdjacentHTML('beforeend', cards);
  refs.btnLoadMore.classList.add('is-visible');
}

function loadmore() {
  let currentHeight = document.body.clientHeight;
  pixabayServices.fetchArticles().then(imgArray => {
    crateCards(imgArray);

    window.scrollTo({
      top: currentHeight - 35,
      behavior: 'smooth',
    });
  });
}
