// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const boxGallery = document.querySelector(".gallery");

function createMarkup() {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
                </a>
            </li>`
    )
    .join("");
}

boxGallery.insertAdjacentHTML("beforeend", createMarkup());

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt'
});