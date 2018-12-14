$(function(){
    $(".menu > dl > dt").on({
        'click': function(){
            var curElem = $( this ),
                nextcurElem = curElem.next();

            if( nextcurElem.css( 'display' ) == 'block' ){
                nextcurElem.slideUp(300);
                curElem.removeClass('active');
                return false;
            } else {
                nextcurElem.slideDown(300);
                curElem.addClass('active');
                return false;
            }
        }
    });
    $('.menu dd > ul > li').on({
        'mouseenter': function(){
            var curElem = $( this );
            $('.menu dd > ul > li').removeClass('active');
            if(curElem.find('.sub-menu').length){
                curElem.addClass('active');
            }
        },
        'mouseleave':function(){
            var curElem = $( this );
            $('.menu dd > ul > li').removeClass('active');
        }
    });
} );