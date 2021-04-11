import images from "/gallery-items.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImg: document.querySelector(".lightbox__image"),
  ligtboxOvrl: document.querySelector(".lightbox__overlay"),
  lightboxCloseBtn: document.querySelector(
    'button[data-action="close-lightbox"]'
  ),
};

const createGallery = images
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      description=${description}
    />
  </a>
</li>`;
  })
  .join("");

refs.galleryList.insertAdjacentHTML("afterbegin", createGallery);
refs.galleryList.addEventListener("click", onModalOpen);
// galleryList.addEventListener("click", galleryListClick);

// function galleryListClick(evt) {
//   if (!evt.target.classlist.contains("gallery__image")) {
//     return;
//   }
//   const swatchImage = evt.currentTarget;
//   const parentImg = swatchImage.closest("gallery__link");
//   console.log(parentImg);
// }

function onModalOpen(evt) { 
    evt.target.


}
