//Using then/catch code

const img = document.querySelector('img');
const searchBar = document.querySelector('input');
const btn = document.querySelector('button');

const loadNewImage = () => {
  if(searchBar.input != '' || searchBar.input !== null){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=fMDEL3pkvdFXbLfoRJAo4I9fuVNXmH1T&s=${searchBar.value}`, {mode: 'cors'})
    .then(response => {
      return response.json();
    })
    .then(response => {
      img.src = response.data.images.original.url;
    })
    .catch(error => {
      console.log('An error occured: ' + error);
    });
  }
}

btn.addEventListener('click', loadNewImage);