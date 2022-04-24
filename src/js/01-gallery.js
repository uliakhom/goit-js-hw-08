// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const imgsMarkup = galleryList(galleryItems);
galleryRef.innerHTML = imgsMarkup;
function galleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

let Gallery = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});
