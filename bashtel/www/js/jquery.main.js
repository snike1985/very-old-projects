$(function(){

    var flag = false;

    if ($('.tariffs-menu').hasClass('active')){
        $('.tariffs-menu__navigation span').each(function(){
            var curElem = $(this);

            if (curElem.hasClass('active')) {
                flag = true;
                curElem.trigger('click');

                if ($('.tariffs-menu__content div').eq(curElem.index()).hasClass('active')) {
                } else {
                    $('.tariffs-menu__content div').eq(curElem.index()).addClass('active');
                }

            }
        });
    } else {
        $('.tariffs-menu__navigation span').removeClass('active');
    }

    $('.tariffs-menu__navigation span').on({
        'click':function(){
            var  curElem = $(this),
                parentElem = curElem.parents('.tariffs-menu'),
                curIndex = curElem.index();

            if (!parentElem.hasClass('active')){
                parentElem.addClass('active');
                parentElem.next().slideDown();
            }

            if (!curElem.hasClass('active')){
                $('.tariffs-menu__navigation span').removeClass('active');
                curElem.addClass('active');
                $('.tariffs-menu__content div').removeClass('active');
                $('.tariffs-menu__content div').eq(curIndex).addClass('active');
            }

        }
    });

    $('.tariffs-menu__content dd').css({ 'display': 'none' });

    $('.tariffs-menu__content dt').each(function(){
        var curElem = $(this);
        if (curElem.hasClass('active')) {
            curElem.next().css({ 'display': 'block' });
        }

    });

    $('.tariffs-menu__content dt').on({
        'click':function(){
            var  curElem = $(this);

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
                curElem.next().slideUp();
            } else {
                curElem.addClass('active');
                curElem.next().slideDown();
            }

        }
    });

} );