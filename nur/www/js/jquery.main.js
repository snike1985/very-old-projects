$(function(){
    $(".header__call-back").on({
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

    $('.sertificate__item').on({
        'click':function(){
            $('.sertificate__print').remove();
            $('.lb-dataContainer').prependTo( $('.lightbox') );
            $('.lb-container').append('<a class="sertificate__print" href="#">распечатать</a>');
        }
    });

    $('.lb-outerContainer').on("click", ".sertificate__print", function(){
        window.open($(this).parents('.lb-container').find('.lb-image').attr('src'));
        return false;
    });
} );