const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=fMDEL3pkvdFXbLfoRJAo4I9fuVNXmH1T&s=valorant', {mode: 'cors'})
  .then(response => {
    return response.json();
  })
  .then(response => {
    img.src = response.data.images.original.url;
  });