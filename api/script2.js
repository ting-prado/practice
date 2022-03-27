//Using async/await

const img = document.querySelector('img');
const searchBar = document.querySelector('input');
const btn = document.querySelector('button');

const loadNewImage = async () => {
  try {
    if(searchBar.value != '' || searchBar.value !== null) {
      let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=fMDEL3pkvdFXbLfoRJAo4I9fuVNXmH1T&s=${searchBar.value}`, {mode: 'cors'})
      let gifData = await response.json();
      img.src = gifData.data.images.original.url;
    }
  }
  catch (error) {
    console.log('An error occured: ' + error);
  }
}

btn.addEventListener('click', loadNewImage);