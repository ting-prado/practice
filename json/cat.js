let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
  const catObj = JSON.parse(catString);
  for(let i=0; i<catObj.length; i++) {
    if(i==2) {
        motherInfo = motherInfo + 'and ' + catObj[i]['name'] + '.';
    }
    else {
        motherInfo = motherInfo + catObj[i]['name'] + ', ';
    }
    for(let j=0; j<catObj[i]['kittens'].length; j++) {
        total++;
        if(catObj[i]['kittens'][j]['gender'] == 'm'){
            male++;
        }
    }
  }
    kittenInfo = `The total number of kittens is: ${total}.\nThere are ${male} males and ${total-male} females.`;

// Don't edit the code below here!

  console.log(motherInfo);
  console.log(kittenInfo);
}