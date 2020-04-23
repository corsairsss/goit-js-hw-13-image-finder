'use strict';
const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  API_KEY: '16160220-46340b64af859daa6e885b5af',

  fetchArticles() {
    const requestParam = `?q=${this.query}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12&key=${this.API_KEY}`;

    return fetch(baseUrl + requestParam)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  },

  get searchquery() {
    return this.query;
  },

  set searchquery(str) {
    this.query = str;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
// setTimeout(() => {
//   window.scrollTo({
//     top: currentHeight,
//     behavior: 'smooth',
//   });
// }, 500);
