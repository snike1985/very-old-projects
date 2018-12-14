$(function(){

    $(".site__header-callback a").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.find('fieldset input').val('');
            curElem.find('fieldset textarea').val('');

            curElem.fadeIn(300);
            return false;
        }
    });

    $(".popup, .popup__close").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeOut(300, function(){
                curElem.find('fieldset input').val('');
                curElem.find('fieldset textarea').val('');
                $('.popup__wrap').fadeIn();
                $('.popup__hidden').fadeOut();
            });

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

    $('.popup').on( { 'submit': function() {
        $.ajax({
            url: ("php/callback.php"),
            data: $(this).serialize(),
            dataType: 'html',
            type: "post",
            success: function (msg) {
                $('.popup__wrap').fadeOut();
                $('.popup__hidden').fadeIn();
            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("ERROR!!!");
                }
            }
        });
        return false;
    }});

    if ($('.kartochka').length){

        $('.kartochka__gallery-pic span').append('<img alt="">');

        if ($('.kartochka__gallery-preview > div.active').length) {
            $.each($('.kartochka__gallery-preview > div'), function(){
                var curElem = $(this),
                    curAttr = curElem.attr('data-pic'),
                    curPic = curElem.parents('.kartochka__gallery').find('.kartochka__gallery-pic img');

                if (curElem.hasClass('active')) {
                    curPic.attr('src', curAttr);
                }

            });

        } else {
            $('.kartochka__gallery-preview > div').eq(0).addClass('active');
            $('.kartochka__gallery-pic img').attr('src', $('.kartochka__gallery-preview > div').eq(0).attr('data-pic'));
        }
    }

    $('.kartochka__gallery-preview > div').on({
        'click': function(){
            var curElem = $(this);

            if (!curElem.hasClass('active')) {
                $('.kartochka__gallery-preview > div').removeClass('active');
                curElem.addClass('active');
                curElem.parents('.kartochka__gallery').find('.kartochka__gallery-pic img').attr('src', curElem.attr('data-pic'));
            }
        }
    });

} );
