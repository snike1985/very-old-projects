$(function(){

    $('.menu a[href*=#], .btn_link[href*=#]').bind("click", function(e){
        var anchor = $(this);

        if (anchor.parents('.popup').length) {
            $(".popup").fadeOut();
        }
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 61
        }, 1000);
        e.preventDefault();
        return false;
    });

    $('.partners__item').on({
        'click':function(){
            var curElem = $(this),
                curText = curElem.find('.partners__title').text(),
                parentElem = curElem.parents('.partners'),
                descElem = parentElem.find('.partners__description');

            if (!curElem.hasClass('active')) {
                $('.partners__item').removeClass('active');
                curElem.addClass('active');
                descElem.text(curText);
            }

        }
    });

    $('.popup').fadeIn();

    $(".popup, .popup__close").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeOut();
        }
    });

} );
