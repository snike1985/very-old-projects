$(function(){
    $('.header__menu li').on({
        'mouseover': function(){
            $(this).find('.header__submenu').stop(true,false).fadeIn();
        },
        'mouseleave': function(){
            $(this).find('.header__submenu').css({ display: 'none'});
        }
    });

    $(".our-work > .gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: $(this).parents(".our-work").find(".next"),
            btnPrev: $(this).parents(".our-work").find(".prev"),
            visible: 4
        });
    });

    $(".reviews > .gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: $(this).parents(".reviews").find(".next"),
            btnPrev: $(this).parents(".reviews").find(".prev"),
            visible: 1
        });
    });

} );

$(document).ready(function() {
    $(function(){
        $('#countdown_dashboard').each(
            function(){
                $(this).countDown({
                    targetDate: parseTime( $(this).attr( 'data-time' ) )
                });
            }
        );
        function parseTime( text ){
            var nowDate = new Date();
            var obj = {},
                year = text.split( ' ' )[ 0 ],
                time = text.split( ' ' )[ 1 ];


            var nowDate = new Date(),
                nextMonth = new Date(nowDate.getFullYear(), nowDate.getMonth()+1, 1),
                dayCount = new Date(nextMonth-8640000);

            obj.day = parseInt( dayCount.getDate());
            obj.month = parseInt( nowDate.getMonth()+1 );
            obj.year = parseInt( nowDate.getFullYear());

            obj.hour = parseInt( time.split( ':' )[ 0 ] );
            obj.min = parseInt( time.split( ':' )[ 1 ] );
            obj.sec = parseInt( time.split( ':' )[ 2 ] );

            return obj;
        }
    } );

});