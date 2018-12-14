$(function(){
    $('.site__menu dt').on({
        'click':function(){
            var curElem = $(this);

            if (curElem.hasClass('active')){
                curElem.removeClass('active');
                curElem.next().slideUp();
            } else {
                curElem.addClass('active');
                curElem.next().slideDown();
            }

        }
    });

    if ($('.news__pic').length) {
        $('.news__pic').fancybox();
    };

    if ($('.multi-slider__item').length) {
        $('.multi-slider__item a').fancybox();
    };

} );