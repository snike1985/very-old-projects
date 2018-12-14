$(function(){
    $(".header .call-back").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.find('fieldset input').val('');
            curElem.fadeIn(300);
            return false;
        }
    });

    $(".popup__send, .popup__close, .popup").on({
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

    $('.staff-preview__description button').on({
        'click':function(){
            var curElem = $(this).parent().next();


            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
                curElem.slideUp();
            } else {
                curElem.addClass('active');
                curElem.slideDown();
            }
        }
    });

} );
