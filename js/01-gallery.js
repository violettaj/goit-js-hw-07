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

const gallery = document.querySelector("div.gallery");
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

document.addEventListener("keydown", (event)=> {
    if (event.key === "Escape" && instance.visible()) instance.close();
})

console.log(galleryItems);
