$(function(){

    if ($('.site-menu').length) {
        $('.site-menu dd').css({display: 'none'});
        $('.site-menu dt.active + dd').css({display: 'block'});
    }

    $('.site-menu dt').on({
        'click': function(){
            var curElem = $(this),
                nextElem = curElem.next();

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
                nextElem.slideUp();
            } else {
                curElem.addClass('active');
                nextElem.slideDown();
            }
        }
    });

} );
