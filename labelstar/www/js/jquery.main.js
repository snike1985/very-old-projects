$(function(){
    $(".call-back, .feedback").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeIn(300);
            return false;
        }
    });
    $(".popup, .popup__close").on({
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

    $('.gallery__item a').on({
        'click':function(){
            $('.lb-dataContainer').prependTo( $('.lightbox') );
            console.log(1)

        }
    });
} );