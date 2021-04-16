import images from "../gallery-items.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImg: document.querySelector(".lightbox__image"),
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

const galleryMarkUp = createGallery;
refs.galleryList.insertAdjacentHTML("afterbegin", createGallery);
refs.galleryList.addEventListener("click", onModalOpen);
refs.lightboxCloseBtn.addEventListener("click", onModalClose);

function onModalOpen(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const sourceImg = e.target.dataset.source;
  refs.lightboxImg.setAttribute("src", sourceImg);
  refs.lightbox.classList.add("is-open");
  e.preventDefault();
}

function onModalClose() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImg.setAttribute("src", "");
}
