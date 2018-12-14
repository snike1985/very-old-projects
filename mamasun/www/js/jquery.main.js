$(function(){
    $('.minus').on({
        'click': function(){
            var  curElem = $(this).parent().find('input'),
                kol = parseInt(curElem.val());
            if (kol > 1) {
                kol--;
                curElem.val(kol);
            }
            return false;
        }
    });

    $('.plus').on({
        'click': function(){
            var  curElem = $(this).parent().find('input'),
                kol = parseInt(curElem.val());
            kol++;
            curElem.val(kol);
            return false;
        }
    });

    $('.menu__item').on({
        'mouseenter': function(){
            var curElem = $( this).find('.sub-menu');

            if (curElem.length) {
                if((curElem.offset().left + curElem.width()) > ($('.header').offset().left + $('.header').width())){
                    curElem.addClass('sub-menu__right');
                } else{
                    curElem.addClass('sub-menu__left');
                }
            }
        },
        'mouseleave':function(){
            var curElem = $( this ).find('.sub-menu');
            if (curElem.length) {
                curElem.removeClass('sub-menu__left');
                curElem.removeClass('sub-menu__right');
            }
        }
    });

    $(".header__call-back").on({
        'click': function(){
            var curElem = $('.popup');

            curElem.fadeIn(300);
            return false;
        }
    });

    $('.popup-close, .popup-send, .popup').on({
        'click': function(){
            var curElem = $('.popup');

            curElem.fadeOut(300);
        }
    });

    $('.popup__wrap').on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $('.filter__letter > li > a').on({
        'click': function(){
            var curElem = $(this).parent().find('.filter__hidden');

            $('.filter__letter > li > a').removeClass('active');
            $('.filter__hidden').fadeOut();

            if (curElem.length) {
                $(this).addClass('active');
                curElem.fadeIn();
            }
            return false;
        }
    });

    $("body, .filter__hidden-close").on({
        'click': function(){
            $('.filter__hidden').fadeOut();
            $('.filter__letter > li > a').removeClass('active');
        }
    });

    $(".filter__hidden, .slider__next").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });


    $('.filter dt').on({
        'click':function(){
            var curElem = $(this),
                nextElem = curElem.next();
            if (curElem.hasClass('active')) {
                nextElem.slideUp();
                curElem.removeClass('active');
            } else {
                nextElem.slideDown();
                curElem.addClass('active');
            }
        }
    });

    if ($( ".filter__range").length) {
        $( ".filter__range").each(function(){
            $(this).slider({
                range: true,
                min: parseInt($(this).parent().find('p').attr('min')),
                max: parseInt($(this).parent().find('p').attr('max')),
                values: [ $(this).parent().find(".amount_min").val(), $(this).parent().find(".amount_max").val() ],
                slide: function( event, ui ) {
                    $(this).parent().find(".amount_min").val( ui.values[ 0 ] );
                    $(this).parent().find(".amount_max").val( ui.values[ 1 ] );

                }
            });
        });
        $(".amount_min").change(function(){
            var value1=$(".amount_min").val();
            var value2=$(".amount_max").val();

            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $(".amount_min").val(value1);
            }
            $(".filter__range").slider("values",0,value1);
        });


        $(".amount_max").change(function(){
            var value1 = $(".amount_min").val(),
                value2 = $(".amount_max").val(),
                maxVal = parseInt($(".filter__range").next().attr('max'));

            if (value2 > maxVal) { value2 = maxVal; $(".amount_max").val(maxVal)}

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $(".amount_max").val(value2);
            }
            $(".filter__range").slider("values",1,value2);
        });

    }

    if ($('.tabs dt').length) {
        $('.tabs dt').eq(0).addClass('active');
        $('.tabs dt').eq(0).next().css({ display: 'block' });
        $('.tabs').css({ height: $('.tabs dt').eq(0).next().height() + $('.tabs dt').eq(0).height() + 50 });
    }

    $('.tabs dt').on({
        'click':function(){
            var curElem = $(this),
                nextElem = curElem.next(),
                parentElem = $(this).parent();
            if (!curElem.hasClass('active')) {
                $('.tabs dt').removeClass('active');
                $('.tabs dd').fadeOut();
                nextElem.fadeIn();
                curElem.addClass('active');
                parentElem.animate({ height: nextElem.height() + curElem.height() + 50 })
            }
        }
    });

    if ($( '.cartochka-gallery').length) {

        if ($('.cartochka-gallery li').length > 3) {
            $('.cartochka-gallery li').eq($('.cartochka-gallery li').length-3).addClass('active');
            $('.cartochka__big-pic img').attr('src', $('.cartochka-gallery li.active').attr('data-pic'));
        } else {
            $('.cartochka-gallery li').eq(0).addClass('active');
            $('.cartochka__big-pic img').attr('src', $('.cartochka-gallery li').eq(0).attr('data-pic'));
        }

    }

    $('.cartochka-gallery').on("click", "li", function(){
        var curElem = $(this);

        if (!curElem.hasClass('active')) {
            $('.cartochka-gallery li').removeClass('active');
            curElem.addClass('active');
            $('.cartochka__big-pic img').attr('src', curElem.attr('data-pic'));
        }
    });

} );