$(function(){

    if($('.swiper-container').length){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            centeredSlides: true,
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0,
            loop: true,
            speed: 600,
            autoplay: 5000
        });
    }

    $(".site__header-call").on({
        'click': function(){
            var curElem = $('.popup');

            curElem.fadeIn(300);
            return false;
        }
    });

    $('.popup, .popup-close').on({
        'click': function(){
            var curElem = $('.popup');

            curElem.fadeOut(300);
        }
    });

    $(".popup__wrap").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

} );
