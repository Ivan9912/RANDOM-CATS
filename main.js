console.log('Hello, cat lover')
const buttonImage = document.querySelector('#btn')
const img = document.querySelector('img')
buttonImage.addEventListener('click', refreshImage)
const URL = 'https://api.thecatapi.com/v1/images/search';
img.src = `https://i.imgur.com/ouV024z.jpg`

async function refreshImage () {
    const response = await fetch(URL)
    const data = await response.json()
    img.src = data[0].url
}
