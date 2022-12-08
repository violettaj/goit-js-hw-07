import { galleryItems } from "./gallery-items.js";
// Change code below this line


const gallery = document.querySelector(".gallery");

galleryItems.forEach((element) => {
  const items = document.createElement("a");
  items.classList.add("gallery__item");
  items.href = element.original;
  gallery.append(items);
  const images = document.createElement("img");
  images.classList.add("gallery__image");
  images.src = element.preview;
  images.alt = element.description;
  items.append(images);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionData: "alt",
});

