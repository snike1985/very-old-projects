$(function(){
    $(".accordion dd").css({ display: 'none'});
    $(".accordion dt").on({
        'click': function(){
            var curElem = $( this ),
                nextcurElem = curElem.next();

            $(".accordion dd").slideUp(300);

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

    if ($('.slider').length) {
        $('.slider > a').fancybox({
            'transitionIn'		: 'none',
            'transitionOut'		: 'none',
            'titlePosition' 	: 'over',
            'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
                return '<span id="fancybox-title-over">Фото ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
            }
        });
    }

    $('.filter__type a').on({
        'click':function(){
            var curElem = $(this);

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
            } else {
                curElem.addClass('active');
            }

            return false;
        }
    });

} );