$(function(){

    $(".call-back").on({
        'click': function(){
            var curElem = $(".popup_call-back" );

            curElem.fadeIn(300);
            return false;
        }
    });

    $(".send-request").on({
        'click': function(){
            var curElem = $(".popup_send-request" );

            curElem.fadeIn(300);
            return false;
        }
    });
    $(".popup, .popup__wrap button, .popup__close").on({
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

    $(".certificates__item").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    $('span.site__menu-item').on({
        'click':function(){
            var curElem = $(this),
                nextElem = curElem.next();
        }
    });

    $('.scroll-top').on({
        'click':function(){
            $('html, body').animate({scrollTop: 0}, 600);
        }
    });

    $(window).on({
        'scroll':function(){
            if ($(window).scrollTop() > $(window).height()){
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }

            var heightSlider = $('.site__header .slider').outerHeight();

            if ($(window).scrollTop() > heightSlider) {
                $('.fix-wrap').addClass('active');
            } else {
                $('.fix-wrap').removeClass('active');
            }
        },
        'load':function(){
            if ($('.links__item').length) {
                $.each($('.links__item'), function(){
                    var curElem = $(this),
                        imgElem = curElem.find('img'),
                        drawingCanvas = document.createElement('canvas'),
                        ctx = drawingCanvas.getContext('2d');

                    curElem.append('<div class="links__black"><span class="links__centering"><span></span></span></div>');

                    var elem = curElem.find('.links__black .links__centering span')

                    drawingCanvas.height=imgElem.height();
                    drawingCanvas.width=imgElem.width();

                    ctx.drawImage(imgElem[0], 0, 0);

                    var Pixel = ctx.getImageData(0,0,imgElem.width(),imgElem.height()),
                        PixelGrey = ctx.getImageData(0,0,imgElem.width(),imgElem.height()),
                        grey = 0;

                    for (var i = 0; i < Pixel.data.length; i+=4) {

                        grey = (Pixel.data[i]*0.299+Pixel.data[i+1]*0.587+Pixel.data[i+2]*0.114);
                        PixelGrey.data[i]=grey;
                        PixelGrey.data[i+1]=grey;
                        PixelGrey.data[i+2]=grey;
                    }

                    ctx.putImageData(PixelGrey,0,0);

                    elem.append(drawingCanvas);
                });
            }
        }
    });

    if ($('.site__menu').length) {
        $.each($('.site__menu-item'), function(){
            var curElem = $(this).parent();

            if (!curElem.hasClass('open')) {
                curElem.find('ul').css({ display: 'none' });
            }

        })
    }

    $('.site__menu-item').on({
        'click':function(){
            var curElem = $(this).parent(),
                openElem = $(this).next();

            if (curElem.hasClass('open')) {
                curElem.removeClass('open');
                openElem.slideUp();
            } else {
                curElem.addClass('open');
                openElem.slideDown();
            }
        }
    });

} );