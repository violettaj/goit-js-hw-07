import { galleryItems } from './gallery-items.js';
// Change code below this line
const lightbox = new SimpleLightbox("gallery a", {captionDelay: 250, captionData:"alt"});

const gallery = document.querySelector("ul.gallery");
gallery.addEventListener("click", (event) => {
  event.preventDefault();
 
  const clickedElement = event.target;
  if (clickedElement.nodeName !== "IMG") return;

  const largeURL = clickedElement.dataset.source;
  const description = clickedElement.alt;
  lightbox.open();
});

document.addEventListener("keydown", (event)=> {
    if (event.key === "Escape" && instance.visible()) instance.close();
})




console.log(galleryItems);
