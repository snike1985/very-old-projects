$(function(){

    if ($('.slider').length) {
        var slider = new Swiper('.slider .swiper-container', {
            slidesPerView: 1,
            centeredSlides: true,
            paginationClickable: true,
            nextButton: '.slider__next',
            prevButton: '.slider__prev',
            spaceBetween: 0,
            loop: true,
            speed: 600,
            autoplay: 5000
        });
    }

    $('.menu__btn').on({
        'click':function(){
            var curElem = $(this).parent();

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
            } else {
                curElem.addClass('active');
            }

        }
    });

} );
