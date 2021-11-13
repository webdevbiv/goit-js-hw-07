import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    galleryRef: document.querySelector('.gallery')
}
console.log('test');
console.log(refs.galleryRef);
refs.galleryRef.addEventListener('click', selectItem)



function selectItem(event) {
    // console.dir(event.target)
    // console.log(event.target);
    if (event.target.nodeName !== 'IMG') {
        console.log('not img');
    }
    event.preventDefault()
    console.dir(event.target)
    console.log(event.target.dataset.source)
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}"> width="800" height="600"
    `)
    instance.show(() => console.log('lightbox now visible'))
    refs.galleryRef.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            instance.close()
        }
    })
}


function createGallery() {
    const newGalleryItem = galleryItems.map(function (newItem) {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${newItem.original}">
                        <img
                            class="gallery__image"
                            src="${newItem.preview}"
                            data-source="${newItem.original}"
                            alt="${newItem.description}"
                        />
                    </a>
                </div> `
    })
    refs.galleryRef.insertAdjacentHTML('afterbegin', newGalleryItem.join(''))
}


// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

createGallery()