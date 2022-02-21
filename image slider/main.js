const sliderCont = document.querySelector('#sliderCont');
const imagesCont = document.querySelectorAll('.imageCont');

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');

let counter = 0;
const size = imagesCont[0].clientWidth;

nextBtn.addEventListener('click', slideNextPic);
prevBtn.addEventListener('click', slidePrevPic);

console.log(imagesCont.length);
function slideNextPic() {
    if(counter == imagesCont.length-1) {
        counter = -1;
    }
    counter++;
    sliderCont.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function slidePrevPic() {
    if(counter == 0){
        counter = imagesCont.length;
    }
    counter--;
    sliderCont.style.transform = 'translateX(' + (-size * counter) + 'px)';
}