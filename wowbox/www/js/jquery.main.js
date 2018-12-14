$(function(){
    //if(Math.round($(window).width()/2*10)/10 > 0) {
    //    $('.site').css({width: $(window).width()-1 });
    //}
    //$(window).on({
    //    'resize':function(){
    //        if(Math.round($(window).width()/2*10)/10 > 0) {
    //            $('.site').css({width: $(window).width()-1 });
    //        }
    //    }
    //});

    //$('.tabs dt:first-child').addClass('active');

    $('.tabs dt').on({
        'click':function(){
            var curElem = $(this),
                curParent = curElem.parent();

            if (!curElem.hasClass('active')) {
                curParent.find('dt').removeClass('active');
                curElem.addClass('active');
                curElem.parent().css({ height: curElem.next().innerHeight() + 50 });
            }
        }
    });

    $.each($('.tabs dt:first-child'), function(){
        var curElem = $(this);

        curElem.trigger('click');

    });

    $('.link__pic').each(function(){
        var curElem = $(this);
        curElem.find('img').eq(0).addClass('visible');
    });

    $('.link').on({
        'mouseenter':function(){
            var curElem = $(this);

            curElem.find('.visible').removeClass('stop');
            pictureChange(curElem);
        },
        'mouseleave':function(){
            var curElem = $(this);

            curElem.find('.visible').addClass('stop');
        }
    });

    function pictureChange(activeElem){
        var curImg = activeElem.find('.visible');
        setTimeout(function(){
            if (!curImg.hasClass('stop')) {
                if (curImg.next().length) {
                    curImg.removeClass('visible');
                    curImg = curImg.next();
                    curImg.addClass('visible');
                } else {
                    curImg.removeClass('visible');
                    curImg = activeElem.find('img').eq(0);
                    curImg.addClass('visible');
                }
                pictureChange(activeElem);
            }
        }, 3000);
    }

    $('.popup__open').on({
        'click': function(){
            var curElem = $(this);

            if (curElem.attr('data-popup', 'gallery')) {
                $('.slider__item').removeClass('active');
                $('.popup .slider__item').eq(curElem.attr('data-number')-1).addClass('active');
                $('.slider .active').find('.tabs').css({ height: $('.slider .active').find('.tabs dt.active').next().innerHeight() + 50 });
            }
        }
    });

    $('.photo-gallery__preview a').on({
        'click': function(){
            var curElem = $(this),
                curParent = curElem.parents('.photo-gallery'),
                curText = curElem.find('.photo-gallery__title-hidden').text(),
                curPic = curElem.parents('.photo-gallery').find('.photo-gallery__pic');

            if (!curElem.hasClass('active')) {
                curParent.find('.photo-gallery__preview a').removeClass('active');
                curElem.addClass('active');
                curPic.css({ 'background-image': "url(" + curElem.attr('href') + ")" });
                curParent.find('.photo-gallery__title > div').text(curText);
            }

            return false;

        }
    });

    $.each($('.photo-gallery__preview'), function(){
        var curElem = $(this).find('a').eq(0);

        curElem.trigger('click');

    });


    $.each($('.photo-gallery__preview a'), function(){
        var curElem = $(this);

        if (curElem.hasClass('active')) {
            curElem.trigger('click');
        }

    });

    $('.photo-gallery__prev').on({
        'click': function(){
            var curIndex = $('.photo-gallery__preview a.active').index(),
                curParent = $(this).parents('.photo-gallery');

            if (curIndex > 0) {
                curParent.find('.photo-gallery__preview a').eq(curIndex - 1).trigger('click');
            } else {
                curParent.find('.photo-gallery__preview a').eq(curParent.find('.photo-gallery__preview a').length - 1).trigger('click');
            }

        }
    });

    $('.photo-gallery__next').on({
        'click': function(){
            var curIndex = $('.photo-gallery__preview a.active').index(),
                curParent = $(this).parents('.photo-gallery');

            if (curIndex < (curParent.find('.photo-gallery__preview a').length - 1)) {
                curParent.find('.photo-gallery__preview a').eq(curIndex + 1).trigger('click');
            } else {
                curParent.find('.photo-gallery__preview a').eq(0).trigger('click');
            }

        }
    });

    $('.slider__item').eq(0).addClass('active');

    $('.slider__btn').on({
        'click': function(){
            var curElem = $(this),
                curIndex = $('.slider .slider__item.active').index(),
                curParent = $(this).parent();

            if (curElem.hasClass('slider__btn_prev')) {
                if (curIndex > 0) {
                    curParent.find('.slider__item').removeClass('active');
                    curParent.find('.slider__item').eq(curIndex - 1).addClass('active');
                } else {
                    curParent.find('.slider__item').removeClass('active');
                    curParent.find('.slider__item').eq(curParent.find('.slider__item').length - 1).addClass('active');
                }
            } else {
                if (curIndex < (curParent.find('.slider__item').length - 1)) {
                    curParent.find('.slider__item').removeClass('active');
                    curParent.find('.slider__item').eq(curIndex + 1).addClass('active');
                } else {
                    curParent.find('.slider__item').removeClass('active');
                    curParent.find('.slider__item').eq(0).addClass('active');
                }
            }

            $('.slider .active').find('.tabs').css({ height: $('.slider .active').find('.tabs dt.active').next().innerHeight() + 50 });

        }
    });

    function checkBoxChecked(){
        var kolAll = 0,
            kolChecked =0;

        $.each($('.wowbox-item__checkbox input[type=checkbox]'), function(){
            var  curElem = $(this);
            kolAll++;
            if (curElem.prop("checked")) {
                kolChecked++
            }
        });

        $('.checkbox-result').text('Выбрано ' + kolChecked + ' из ' + kolAll);
    }

    if($('.checkbox-result').length) {

        checkBoxChecked();

    }

    $('.wowbox-item__checkbox input').on({
        'click': function(){
            checkBoxChecked();
        }
    });

} );
