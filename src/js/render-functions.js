import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { loadMore } from '../main.js';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  // btnLoadMore: document.querySelector('.btnLoadMore'),
};
const { gallery, loader /*, btnLoadMore*/ } = refs;

const lightbox = new SimpleLightbox('.gallery a', {
  overlay: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 100,
});

export const createGallery = images => {
  const imagesData = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}"/>        
        <ul class="imagesData">
          <li class="liImageData">
            <h3 class="h3ImageData">likes</h3>
            <p class="pImageData">${likes}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">views</h3>
            <p class="pImageData">${views}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">comments</h3>
            <p class="pImageData">${comments}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">downloads</h3>
            <p class="pImageData">${downloads}</p>
          </li>
        </ul>
      </a>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', imagesData);
  lightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  loader.classList.remove('isHidden');
};

export const hideLoader = () => {
  loader.classList.add('isHidden');
};

export const showLoadMoreButton = () => {
  loadMore.classList.remove('isHidden');
};

export const hideLoadMoreButton = () => {
  loadMore.classList.add('isHidden');
};
