const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '37603582-92143e20137f7c1d3caa92753';

export const getImages = ( searchText) => {
  fetch(`${BASE_URL}/?key=${API_KEY}&q=${searchText}`)
    .then((response) => response.json())
    .then((images) => console.log('images :>>', images));
};
