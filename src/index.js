import './sass/main.scss';
// import mylogo from './assets/flaticon-code-lapetop.png';

// const mainImage = document.getElementById("mainImage")
// mainImage.src = mylogo

const hello = require('./js/hello');

// бургер меню 

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .header__burger-span').toggleClass('active');
        $('body').toggleClass('block');
    });
});

// кінець бургер меню 