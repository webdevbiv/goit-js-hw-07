import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    galleryRef: document.querySelector('.gallery')
}

createLightGallery()
function createLightGallery() {
    const gallery = document.createElement('div')
    gallery.classList.add('gallery')
    console.log(gallery);
    refs.galleryRef.append(gallery)
}

console.dir(refs.galleryRef);
const lightGalleryRef = refs.galleryRef.querySelector('.gallery')
console.log(lightGalleryRef);

createGalleryItems()
function createGalleryItems() {
    const newGalleryItem = galleryItems.map(function (newItem) {
        return `<a class="gallery__item" href="${newItem.original}">
                    <img class="gallery__image" src="${newItem.preview}" alt="${newItem.description}" />
                </a>`
    })
    lightGalleryRef.insertAdjacentHTML('afterbegin', newGalleryItem.join(''))
}

var lightbox = new SimpleLightbox('.gallery a', {
    overlay: true,
    animationSpeed: 150,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
});

// console.log(lightGalleryRef);
// lightGalleryRef.addEventListener('click', clickHandler)

// function clickHandler(event) {
//     if (event.target.nodeName !== 'IMG') {
//         console.log('not img');
//     }
//     event.preventDefault()
//     var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
// }
