$(function(){
    $('.scroll-top').on({
        'click':function(){
            $('html, body').animate({scrollTop: 0}, 600);
        }
    });

    $(window).on({
        'scroll':function(){
            if($(window).scrollTop() > 200){
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        }
    });

    if ($('.spacegallery').length) {
        $('.spacegallery').spacegallery({loadingClass: 'loading'});
    }

    $(".call-back").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeIn(300);
            return false;
        }
    });
    $(".popup, .popup__send, .popup__close").on({
        'click': function(){
            var curElem = $(".popup" );

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
