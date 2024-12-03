// *** LIGHTBOX ***
const lightbox = document.querySelector('#lightbox');
const imageAnimaux = document.querySelectorAll('#lightbox > img');


document.addEventListener('click', (evt) {
  if(evt.target.matches(img[data-full-img])) {
    const fullImgUrl = evt.target.data-full-img;
    lightboxAnimaux.src = fullImgUrl;
    lightbox.showModal();
}});