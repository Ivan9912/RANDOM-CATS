console.log('Hello, cat lover');
const buttonImage = document.querySelector('#btn');
const img = document.querySelector('img');
buttonImage.addEventListener('click', reloadImage);
const API_URL = 'https://api.thecatapi.com/v1/images/search';
reloadImage();

async function reloadImage () {
    const response = await fetch(API_URL);
    const data = await response.json();
    img.src = data[0].url;
};