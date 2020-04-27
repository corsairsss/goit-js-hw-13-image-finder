import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import pixabayServices from './apiService.js';
import cardImg from '../templates/card-img.hbs';
import '../css/style.css';

// --------------------------------------
const refs = {
  inputSearchImg: document.querySelector('#search-form'),
  btnSearch: document.querySelector('.js-btn'),
  gallary: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.js-btn_load_more'),
  btnScrollToUp: document.querySelector('.btn-up'),
};
refs.btnSearch.addEventListener('click', renderImg);
refs.btnLoadMore.addEventListener('click', loadmore);
refs.btnScrollToUp.addEventListener('click', toUpPage);
refs.gallary.addEventListener('click', clickImg);

function renderImg(e) {
  e.preventDefault();
  pixabayServices.page = 1;
  refs.gallary.innerHTML = '';
  refs.btnLoadMore.classList.remove('is-visible');
  const nameSearchingImg = refs.inputSearchImg.elements.query.value;
  pixabayServices.searchquery = nameSearchingImg;
  pixabayServices
    .fetchArticles()
    .then(imgArray => {
      crateCards(imgArray);
    })
    .catch(error => console.log(error));

  window.addEventListener('scroll', appearBtnUp);
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
  pixabayServices
    .fetchArticles()
    .then(imgArray => {
      crateCards(imgArray);

      window.scrollTo({
        top: currentHeight,
        behavior: 'smooth',
      });
    })
    .catch(error => console.log(error));
}
function toUpPage() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  refs.btnScrollToUp.classList.remove('is-visible');
  setTimeout(() => window.addEventListener('scroll', appearBtnUp), 3000);
}

function clickImg(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.url}" class="imgInModalWindow"></img>`,
  );
  if (e.target.nodeName === 'IMG') {
    instance.show();
  }
}

function appearBtnUp() {
  if (window.scrollY > 0) refs.btnScrollToUp.classList.add('is-visible');
  window.removeEventListener('scroll', appearBtnUp);
}
