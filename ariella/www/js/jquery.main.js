$(function(){

    $(window).scroll(function () {
        var paralaxElem1 = $(".paralax_1");
        if ($(window).scrollTop()>500) {
            paralaxElem1.fadeOut(300);
        } else {
            paralaxElem1.fadeIn(300);
        };
        paralaxElem1.css({top: paralaxElem1.offsetY + $(window).scrollTop()/30, left: paralaxElem1.offsetX + $(window).scrollTop()/20});
        console.log($(window).scrollTop());
    });

    $(".call-back").on({
        'click': function(){
            var curElem = $("div.popup" );

            curElem.fadeIn(300);
            return false;
        }
    });

    $(".popup-close").on({
        'click': function(){
            var curElem = $("div.popup" );

            curElem.fadeOut(300);
        }
    });

    $(".popup-send").on({
        'click': function(){
            var curElem = $("div.popup" );

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

    $("div.popup").on({
        'click': function(){
            var curElem = $(this);

            curElem.css( { display: 'none' });

        }
    });

    $(".site__menu dt").on({
        'click': function(){
            var curElem = $( this ),
                nextcurElem = curElem.next();

            if( nextcurElem.css( 'display' ) == 'block' ){
                nextcurElem.slideUp(300);
                curElem.removeClass('active')
                return false;
            } else {
                nextcurElem.slideDown(300);
                curElem.addClass('active')
                return false;
            }
        }
    });
} );
