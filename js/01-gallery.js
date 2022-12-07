import { galleryItems } from "./gallery-items.js";
// Change code below this line

const instance = basicLightbox.create(
  `
    <div class="modal">
        <img src="" alt="Large img"/>
    </div>
`,
  {
    closable: true,
  }
);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((element) => {
  const items = document.createElement("div");
  items.classList.add("gallery__item");
  gallery.append(items);
  const links = document.createElement("a");
  links.classList.add("gallery__link");
  links.href = element.original;
  items.append(links);
  const images = document.createElement("img");
  images.classList.add("gallery__image");
  images.src = element.preview;
  images.alt = element.description;
  images.dataset.source = element.original;
  links.append(images);
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedElement = event.target;
  if (clickedElement.nodeName !== "IMG") return;

  const largeURL = clickedElement.dataset.source;

  const modal = instance.element();
  const modalImg = modal.querySelector("img");
  modalImg.src = largeURL;

  const description = clickedElement.alt;
  modalImg.alt = description;

  instance.show();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance.visible()) instance.close();
});

console.log(galleryItems);
