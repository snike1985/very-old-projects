$(function(){

    if ($('.content-wrap .online').length) {
        $('.site__content').addClass('site__content_main');
    }

    var niceScroll = $(".news__wrap > div").niceScroll({
        cursorwidth: '2',
        cursorborder: '1px solid #96e2cb',
        cursorcolor: '#007c89',
        background: '#96e2cb',
        cursorborderradius: '0',
        zindex: '5',
        autohidemode: 'false'
    });

    $('.menu a').on({
        'mouseenter': function(){
            var curElem = $(this);

            $('.menu a').addClass('grey');
            curElem.removeClass('grey');
        },
        'mouseleave': function(){
            $('.menu a').removeClass('grey');
        }
    });

    $('.news').on({
        'mouseenter': function(){
            if ($('#ascrail2000').length) {
                $('#ascrail2000').addClass('scroll-hover');
            }
        },
        'mouseleave': function(){
            if ($('#ascrail2000').length) {
                $('#ascrail2000').removeClass('scroll-hover');
            }
        }
    });

    $('.menu__btn').on({
        'click': function(){
            var curElem = $(this),
                curMenu = curElem.parent();

            if (curMenu.hasClass('open')) {
                curMenu.removeClass('open');
            } else {
                curMenu.addClass('open');
            }

        }
    });

    $('.site__header-btn').on({
        'click':function(){
            var curElem = $(this).parent();

            if (curElem.hasClass('open')) {
                curElem.removeClass('open');
            } else {
                curElem.addClass('open');
            }
            return false;
        },
        'mouseenter':function(){
            var curElem = $(this).parent();

            if (!curElem.hasClass('open')) {
                curElem.addClass('open');
            }
        }
    });

});