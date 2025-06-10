import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector('input'),
  button: document.querySelector('button'),
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};
const { input, button, form, gallery } = refs;

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

let searchQuery = '';
function onInput(event) {
  return (searchQuery = event.target.value);
}
input.addEventListener('input', onInput);

function onFormSubmit(event) {
  clearGallery();
  event.preventDefault();
  if (!searchQuery.trim()) {
    hideLoader();
    return;
  }
  showLoader();
  button.setAttribute('disabled', ' ');
  const axiosImagesData = getImagesByQuery(searchQuery)
    .then(imagesData => {
      if (!imagesData.length) {
        OnAxiosError();
      }
      createGallery(imagesData);
      hideLoader();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `❌` + error,
        position: 'topRight',
        maxWidth: 350,
      });
      hideLoader();
    })
    .finally(() => {
      form.reset();
      button.removeAttribute('disabled');
    });
}
form.addEventListener('submit', onFormSubmit);

function OnAxiosError() {
  iziToast.error({
    message:
      `Sorry, there are no images matching ` +
      `your search query. Please try again!`,
    position: 'topRight',
    maxWidth: 350,
  });
}
