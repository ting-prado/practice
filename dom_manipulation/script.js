const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redPara = document.createElement('p');
content.classList.add('red-text');
redPara.textContent = "Hey I'm red!";
redPara.style.color = 'red';
container.appendChild(redPara);

const blueH = document.createElement('h3');
blueH.setAttribute('id', 'hBlue');
blueH.textContent = "I'm a blue h3!";
blueH.style.color = 'blue';
container.appendChild(blueH);

const div = document.createElement('div');
div.setAttribute('id', 'another-div');
div.setAttribute('style', 'border: 1px solid black; background: pink');
container.appendChild(div);

const divH = document.createElement('h1');
divH.textContent = "I'm in a div";
div.appendChild(divH);

const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";
divPara.setAttribute('style', 'display: inline-block; width: auto; margin: 0');
divPara.addEventListener('mouseover', () => {
    alert('Ouch!');
});
div.appendChild(divPara);

const anotherDivPara = document.createElement('p');
anotherDivPara.textContent = "We're all in a div!";
anotherDivPara.setAttribute('style', 'color: purple; font-family: arial; font-style: italic');
div.appendChild(anotherDivPara);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
