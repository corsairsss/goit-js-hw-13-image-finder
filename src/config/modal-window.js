import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
export default {
  largeUrl: '',
  instance() {
    return basicLightbox.create(
      `<div class="modal-container siema">
      <img src="${this.largeUrl}" class="imgInModalWindow"></img>
      </div>
     
      `,
    );
  },

  get currentLargeUrl() {
    return this.largeUrl;
  },

  set currentLargeUrl(str) {
    this.largeUrl = str;
  },
};
