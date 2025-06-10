import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector('input'),
  btnSubmit: document.querySelector('.btnSubmit'),
  form: document.querySelector('.form'),
  btnLoadMore: document.querySelector('.btnLoadMore'),
};
const { input, btnSubmit, form, btnLoadMore } = refs;

export const loadMore = btnLoadMore;
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

let searchQuery = '';
let page = 1;
export const per_page = 15;
let maxPage;
let height2scroll;
function onInput(event) {
  return (searchQuery = event.target.value);
}
input.addEventListener('input', onInput);

async function onFormSubmit(event) {
  clearGallery();
  page = 1;
  event.preventDefault();
  if (!searchQuery.trim()) {
    hideLoader();
    return;
  }
  showLoader();
  btnSubmit.setAttribute('disabled', ' ');
  const { data } = await getImagesByQuery(searchQuery, page);
  try {
    if (!data.hits.length) {
      OnAxiosError();
      return;
    }
    createGallery(data.hits);
    const rect = document.querySelector('a').getBoundingClientRect();
    height2scroll = 2 * rect.height;
    hideLoader();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `❌` + error,
      position: 'topRight',
      maxWidth: 350,
    });
    hideLoader();
  }
  maxPage = Math.ceil(data.totalHits / per_page);
  if (maxPage > page) {
    showLoadMoreButton();
  } else {
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
    });
  }
  form.reset();
  btnSubmit.removeAttribute('disabled');
}
form.addEventListener('submit', onFormSubmit);

async function onBtnLoadMore(event) {
  event.preventDefault();
  page += 1;
  showLoader();
  const { data } = await getImagesByQuery(searchQuery, page);
  try {
    createGallery(data.hits);
    window.scrollBy({ left: 0, top: height2scroll, behavior: 'smooth' });
    hideLoader();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `❌` + error,
      position: 'topRight',
      maxWidth: 350,
    });
    hideLoader();
  }
  if (maxPage === page) {
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
    });
    hideLoader();
    hideLoadMoreButton();
    btnLoadMore.removeEventListener('click', onBtnLoadMore);
  }
  btnSubmit.removeAttribute('disabled');
}
btnLoadMore.addEventListener('click', onBtnLoadMore);

function OnAxiosError() {
  iziToast.error({
    message:
      `Sorry, there are no images matching ` +
      `your search query. Please try again!`,
    position: 'topRight',
    maxWidth: 350,
  });
  hideLoader();
  form.reset();
}
