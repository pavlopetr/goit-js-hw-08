// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const makeGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"/>
  </a>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", makeGallery);

 new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: "250",
    enableKeyboard: "true",
  });