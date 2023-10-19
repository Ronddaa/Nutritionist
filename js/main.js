let sliderLeft = 0;
const sliderLineDiploma = document.querySelector('.slider-line-diploma');


document.querySelector('.slider-diploma-btn-next').addEventListener('click', function () {
    sliderLeft += 248;
    sliderLineDiploma.style.left = sliderLeft + 'px';
});