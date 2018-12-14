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

    if ($('.catalog-slider').length) {
        $.each($('.catalog-slider'), function(){
            var slider2 = new Swiper($(this).find('.swiper-container'), {
                slidesPerView: 4,
                nextButton: $(this).find('.catalog-slider__next'),
                prevButton: $(this).find('.catalog-slider__prev'),
                spaceBetween: 2,
                loop: true,
                speed: 600,
                autoplay: 5000
            });
        });
    }

    if ($('.left-menu-wrap').length) {
        $.each($('.left-menu-wrap > dd'), function(){
            var curElem = $(this);

            curElem.css({ 'display': 'none' });

        });
    }

    $('.left-menu-wrap dt').on({
        'click':function(){
            var curElem = $(this),
                nextElem = curElem.next();

            if(curElem.hasClass('active')){
                curElem.removeClass('active');
                nextElem.slideUp();
            } else {
                curElem.addClass('active');
                nextElem.slideDown();
            }

        }
    });

} );
