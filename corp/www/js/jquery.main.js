$(function(){
    $(".header__menu").on({
        'click': function(){
            var curElem = $(this);

            if (curElem.parents('header').hasClass('header-content')) {
                if($('.menu').hasClass('visible')) {
                    $('.site').animate({ left: 0 }, 300);
                    setTimeout(function(){
                        $('.menu').removeClass('visible');
                    },50);
                } else {
                    var winWidth = $(window).width(),
                        contentWidth = $('.site__content > div').width();
                    console.log(winWidth, contentWidth)
                    if (winWidth < contentWidth + 500) {
                        $('.site').animate({ left: 225 }, 300);
                        $('.menu').addClass('visible');
                    } else {
                        $('.menu').addClass('visible');
                    }
                }
            } else {
                if (curElem.hasClass('active')) {
                    $('.site').animate({ left: 0 }, 300);
                    setTimeout(function(){
                        curElem.removeClass('active');
                    },50);
                } else {
                    curElem.addClass('active');
                }
            }
        }
    });

    $(".header__menu a").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $(".menu__close").on({
        'click': function(){

            $('.site').animate({ left: 0 }, 300);
            setTimeout(function(){
                $('.menu').removeClass('visible');
            },50);

        }
    });
} );