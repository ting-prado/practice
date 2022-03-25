'use strict'

const samplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task success!');
  }, 800);

  setTimeout(() => {
    reject('Uh oh');
  }, 1000);
});

samplePromise.then((res) => {
  console.log(res);
})

.catch((err) => {
  console.log(err);
});