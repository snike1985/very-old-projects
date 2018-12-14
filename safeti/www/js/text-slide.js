$(function(){
    $('.text-slide__arrow').on({
        'click': function(){
            var curElem = $(this).parent().find('.text-slide__wrap');
            if (curElem.hasClass('open')) {
                curElem.animate({ height: 200});
                curElem.removeClass('open');
            } else {
                curElem.addClass('open');
                curElem.css({height: 'auto'});
                var curElemHeight = curElem.height();
                curElem.css({height: 200});
                curElem.removeClass('open');
                curElem.animate({ height: curElemHeight}, function(){
                    curElem.css({height: 'auto'});
                });
                curElem.addClass('open');
            }
        }
    });
} );