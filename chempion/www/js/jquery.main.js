$(function(){
    $('.ban__close').on({
        'click':function(){
            var curElem = $(this);

            curElem.parent().slideUp();

            return false;
        }
    });

    $(".header-tel__info").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.addClass('popup_open');
            return false;
        }
    });
    $(".popup, .popup__send, .popup__close").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.removeClass('popup_open');
        }
    });

    $(".popup__wrap, .about__map-label").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $('.menu dt').on({
        'click':function(){
            var curElem = $(this);

            if ($('.site').width() > 1023) {
                if (curElem.hasClass('active')) {
                    curElem.removeClass('active');
                    curElem.next().slideUp();
                } else {
                    $('.menu dt').removeClass('active');
                    $('.menu dd').css({ display: 'none' });
                    curElem.addClass('active');
                    curElem.next().slideDown();
                }
                return false;
            }

        }
    });

    $('body').on({
        'click':function(){
            var curElem = $(this);

            if (curElem.hasClass('nowerflow')) {
                $('.all-menu').removeClass('active');
                curElem.removeClass('nowerflow');
            }
            if ($('.about__map').length) {
                $('.about__map-label').removeClass('active');
            }
        }
    });

    $(".all-menu__wrap").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $('.menu-btn').on({
        'click':function(){
            var curElem = $('.all-menu');

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
                $('body').removeClass('nowerflow');
            } else {
                curElem.addClass('active');
                $('body').addClass('nowerflow');
            }
            return false;
        }
    });

    $(window).on({
        'resize':function(){
            $('body').removeClass('nowerflow');
            $('.all-menu').removeClass('active');
            if ($(window).width() > 1008) {
                $('.list__filter').addClass('open');
                $('.list__filter > div').slideDown();
            } else {
                $('.list__filter').removeClass('open');
                $('.list__filter > div').slideUp();
            }

            checkTab();

            $('.popup-gallery').remove();
            $('.about__gallery li').removeClass('active');
        }
    });

    $('.list__filter dt').on({
        'click':function(){
            var curElem = $(this),
                nextElem = curElem.next();

            if (curElem.hasClass('open')) {
                curElem.removeClass('open');
                nextElem.stop(true, false).slideUp();
            } else {
                curElem.addClass('open');
                nextElem.stop(true, false).slideDown();
            }
        }
    });

    $('.list__filter dt').each(
        function(){
            var curElem = $(this),
                nextElem = curElem.next();

            if (curElem.hasClass('open')) {
                nextElem.css({ display: 'block' });
            }
        }
    );

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

    $('.list__filter h2').on({
        'click':function(){
            var curElem = $(this),
                parentElem = curElem.parent();

            if ($(window).width() < 1008) {
                if (parentElem.hasClass('open')){
                    parentElem.removeClass('open');
                    curElem.next().slideUp();
                } else {
                    parentElem.addClass('open');
                    curElem.next().slideDown();
                }
            }
        }
    });

    if ($('.gallery__pic').length) {
        $('.gallery__preview li').eq(0).addClass('active');
        $('.gallery__pic .gallery__centering div').append('<img src="'+ $('.gallery__preview li').eq(0).attr('data-src') +'" alt="">');
    }

    $('.gallery__preview img').on({
        'click':function(){
            var  curElem = $(this).parents('li'),
                way = curElem.attr('data-src'),
                curPic = curElem.parents('.gallery').find('.gallery__pic img');

            if (!curElem.hasClass('active')) {
                $('.gallery__preview li').removeClass('active');
                curElem.addClass('active');
                curPic.attr('src', way);
            }
        }
    });

    if ($('.tabs').length) {
        $('.tabs dt').eq(0).addClass('active');

        checkTab();
    }

    function checkTab(){
        var activeBlock = $('.tabs dt.active + dd');

        $('.tabs dd').css( { display: 'none' } );
        activeBlock.css( { display: 'block' } );
        $('.tabs').css( { height: activeBlock.outerHeight() + 54 } );

    };

    $(".tabs dt").on({
        'click': function(){
            var curElem = $( this );

            $('.tabs dt').removeClass('active')
            curElem.addClass('active');
            checkTab();
        }
    });

    $('.minus').on({
        'click': function(){
            var  curElem = $(this).parent().find('input'),
                kol = parseInt(curElem.val());
            if (kol > 0) {
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

    if ($('.item__price').length){
        $('.plus, .minus').on({
            'click':function(){
                totalSum($(this));
            }
        });
        $('.plus-minus input').on({
            'blur':function(){
                totalSum($(this));
            }
        });
        $('.item__close').on({
            'click':function(){
                var curElem = $(this).parents('tr'),kolSum = 0, totalSum = 0,
                    parentElem = $(this).parents('.item__price');

                curElem.fadeOut(300);
                setTimeout(function(){
                    curElem.remove();

                    $('.plus-minus input').each(function(){
                        var curElem = $(this),
                            curElemVal = parseInt(curElem.val());
                        if (!curElem.parents('tr').hasClass('item__none')) {
                            kolSum = kolSum + curElemVal;
                        }
                    });
                    parentElem.find('.item__kol').text(kolSum);

                    $('.item__sum span').each(function(){
                        var curElem = $(this),
                            curElemVal = parseInt(curElem.text());
                        if (!curElem.parents('tr').hasClass('item__none')) {
                            totalSum = totalSum + curElemVal;
                        }
                    });
                    parentElem.find('.item__total-sum').text(totalSum);
                }, 600);
            }
        });
    }

    $('.item__add').on({
        'click':function(){
            if ($(this).hasClass('item__add_disable')) {
                return false;
            }
        }
    });

    if($('.item__view').length) {
        $('.item__view a').eq(0).addClass('active');
    }

    $('.item__view a').on({
        'click':function(){
            var curElem = $(this);

            if (!curElem.hasClass('active')) {
                $('.item__view a').removeClass('active');
                curElem.addClass('active');

                if(curElem.hasClass('item__view-list')) {
                    curElem.parents('.item__price').find('.item__pic').fadeOut();
                } else {
                    curElem.parents('.item__price').find('.item__pic').fadeIn();
                }
            }

            return false;

        }
    });

    if ($('.about__map').length) {
        $.each($('.about__map-label'), function(){
            var elemTop = $(this).attr('data-attr').split( ' ' )[ 0 ],
                elemLeft = $(this).attr('data-attr').split( ' ' )[ 1 ];
            $(this).css({
                top: parseFloat(elemTop) + '%',
                left: parseFloat(elemLeft) + '%'
            });
        });
    }

    $('.about__map-label').on({
        'click':function(){
            var curElem = $(this);

            if (!curElem.hasClass('active')) {
                $('.about__map-label').removeClass('active');
                curElem.addClass('active');
            }
        }
    });

    $('.about__gallery li').on({
        'click':function(){
            var curElem = $(this);

            curElem.addClass('active');

            $('body').append('<div class="popup-gallery">' +
                                '<div class="popup-gallery__wrap">' +
                                    '<div class="popup-gallery__pic">' +
                                        '<img src="' + curElem.attr('data-src') + '" alt="">' +
                                        '<span>' + curElem.attr('data-title') + '</span>' +
                                        '<div class="popup-gallery__close"></div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="popup-gallery__prev"></div>' +
                                '<div class="popup-gallery__next"></div>' +
                            '</div>');

            $('.popup-gallery__wrap').css({ 'opacity':0 });

            $('.popup-gallery__wrap img').bind("load",function(){
                $('.popup-gallery__pic').css({
                    'width' : $('.popup-gallery__wrap img').width(),
                    'height' : $('.popup-gallery__wrap img').height()
                });
                popupGalleryResize($('.popup-gallery__wrap'));
                $('.popup-gallery__pic').css({
                    'width' : 'auto',
                    'height' : 'auto'
                });
            })

        }
    });

    $('body').on('click', '.popup-gallery', function(){
        $('.popup-gallery').remove();
        $('.about__gallery li').removeClass('active');
    });

    $('body').on('click', '.popup-gallery__close', function(){
        $('.popup-gallery').remove();
        $('.about__gallery li').removeClass('active');
    });

    $('body').on('click', '.popup-gallery__pic', function(event){
        event = event || window.event

        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    });

    $('body').on('click', '.popup-gallery__prev', function(event){
        event = event || window.event

        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    });

    $('body').on('click', '.popup-gallery__next', function(event){
        event = event || window.event

        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    });

    $('body').on('click', '.popup-gallery__next', function(){
        galleryBtnClick(1);
    });

    $('body').on('click', '.popup-gallery__prev', function(){
        galleryBtnClick(-1);
    });

    if ($( ".datepicker" ).length) {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
        $( ".datepicker" ).datepicker();
    }

} );
function totalSum(elem){
    var cost = parseInt(elem.parents('tr').find('.item__cost span').text()),
        kol = parseInt(elem.parent().find('input').val()),
        sumElem = elem.parents('tr').find('.item__sum span'),
        kolSum = 0, totalSum = 0,
        parentElem = elem.parents('.item__price');

    sumElem.text(kol*cost);

    $('.plus-minus input').each(function(){
        var curElem = $(this),
            curElemVal = parseInt(curElem.val());
        if (!curElem.parents('tr').hasClass('item__none')) {
            kolSum = kolSum + curElemVal;
        }
    });
    parentElem.find('.item__kol').text(kolSum);

    $('.item__sum span').each(function(){
        var curElem = $(this),
            curElemVal = parseInt(curElem.text());
        if (!curElem.parents('tr').hasClass('item__none')) {
            totalSum = totalSum + curElemVal;
        }
    });
    parentElem.find('.item__total-sum').text(totalSum);
}

function galleryBtnClick(i){
    var kol = $('.about__gallery li').length-1,
        curIndex = $('.about__gallery li.active').index();

    $('.about__gallery li').removeClass('active');

    if (i > 0) {
        if (curIndex < kol) {
            $('.about__gallery li').eq(curIndex + i).addClass('active');
        } else {
            $('.about__gallery li').eq(0).addClass('active');
        }
    } else {
        if (curIndex > 0) {
            $('.about__gallery li').eq(curIndex + i).addClass('active');
        } else {
            $('.about__gallery li').eq(kol).addClass('active');
        }
    }

    $('.popup-gallery__wrap img').css({ 'width' : 'auto' });
    $('.popup-gallery__wrap').css({
        'width' : 'auto',
        'height' : 'auto'
    });

    $('.popup-gallery__wrap img').attr('src', $('.about__gallery li.active').attr('data-src'));
    $('.popup-gallery__wrap img').css({ 'width' : 'auto' });

    $('.popup-gallery__wrap span').text($('.about__gallery li.active').attr('data-title'));

    $('.popup-gallery__wrap').css({ 'opacity':0 })

    $('.popup-gallery__wrap img').bind("load",function(){
        popupGalleryResize($('.popup-gallery__wrap'));
    })

}

function popupGalleryResize(pic){
    var windowWidth = $('.popup-gallery').width()*0.8,
        windowHeight = $('.popup-gallery').height()*0.8,
        picWidth = pic.outerWidth(),
        picHeight = pic.outerHeight(),
        tempKoef = 1;

    if (windowWidth/picWidth < windowHeight/picHeight) {
        tempKoef = parseFloat(windowWidth/picWidth);
    } else {
        tempKoef = parseFloat(windowHeight/picHeight);
    }

    if (tempKoef > 1) {
        tempKoef = 1;
    }

    pic.css({
        'width' : parseInt(picWidth*tempKoef),
        'height': parseInt(picHeight*tempKoef),
        'margin-top' : -parseInt(picHeight*tempKoef/2),
        'margin-left' : -parseInt(picWidth*tempKoef/2)
    });

    pic.animate({'opacity' : 1});

    pic.find('img').css({
        'width' : '100%'
    });

}