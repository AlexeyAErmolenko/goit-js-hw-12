import axios from 'axios';
import { per_page } from '../main.js';

export const getImagesByQuery = (query, page) => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const API_KEY = '50578368-dd70245762fcec5298974d7f8';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query,
    page: page,
    per_page: per_page,
  });
  return axios.get(`?${searchParams}`);
};
