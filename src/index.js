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

new Swiper('.image-slider', {
    // arrows 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // навігація
    pagination: {
        el: '.swiper-pagination',
        // буллети
        clickable: true,
        // буллети динамічні
        dynamicBullets: true,
        // буллети кастомні
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        // // фракція
        // type: 'fraction',
        // // фракція кастомна
        // renderFraction: function(currentClass, totalClass) {
        // return ' Фото <span class="' + currentClass + '"></span>' +
        //     ' з ' +
        //     '<span class="' + totalClass + '"></span>';
        // // прогресбар
        // type: 'progresbar', 
        },
    // кількість відображення картинок на одному слайді
    slidesPerView: 3,
    // // скролбар
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true
    // },
    // курсор перетаскування
    grabCursor: true,
    // відступ між слайдами
    spaceBetween: 20,
    // слайд мишкою
    // mousewheel: {
    //     sensitivity: 1,
    // },
    // // відступ між слайдами
    // spaceBetween: 30,
    // // кількість пролистуюмих слайдів
    // slidePerGroup: 1,
    // // активний слайд по центру
    // centeredSlides: true,
});


// ініціалізація слайдера 