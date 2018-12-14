$(function(){
    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        });
    }

    $(".gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 3
        });
    });

    $(".all_products").on({
        'click': function(){
            $("body,html").css( { overflowY: 'hidden' });
            $(".assortment" ).fadeIn(300);
            return false;
        }
    });

    $(".order").on({
        'click': function(){
            $(".request__wrap" ).fadeIn(300);
            return false;
        }
    });

    $(".close").on({
        'click': function(){
            $("body,html").css( { overflowY: 'auto' });
            $(".request__wrap").fadeOut(300);
            $(".assortment").fadeOut(300);
        }
    });

    $(".assortment__wrap").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $(".request").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $(".assortment").on({
        'click': function(){
            $("body,html").css( { overflowY: 'auto' });
            $(this).fadeOut(300);

        }
    });

    $(".request__wrap").on({
        'click': function(){
            $("body,html").css( { overflowY: 'auto' });
            $(this).fadeOut(300);

        }
    });

} );
$(document).ready(function() {
    $(function(){
        $('#countdown_dashboard_1').each(
            function(){
                $(this).countDown({
                    targetDate: parseTime( $(this).attr( 'data-time' ) )
                });
            }
        );
        $('#countdown_dashboard_2').each(
            function(){
                $(this).countDown({
                    targetDate: parseTime( $(this).attr( 'data-time' ) )
                });
            }
        );
        $('#countdown_dashboard_3').each(
            function(){
                $(this).countDown({
                    targetDate: parseTime( $(this).attr( 'data-time' ) )
                });
            }
        );
        $('#countdown_dashboard_4').each(
            function(){
                $(this).countDown({
                    targetDate: parseTime( $(this).attr( 'data-time' ) )
                });
            }
        );


        function parseTime( text ){
            var obj = {},
                year = text.split( ' ' )[ 0 ],
                time = text.split( ' ' )[ 1 ];

            obj.day = parseInt( year.split( '-' )[ 0 ] );
            obj.month = parseInt( year.split( '-' )[ 1 ] );
            obj.year = parseInt( year.split( '-' )[ 2 ] );

            obj.hour = parseInt( time.split( ':' )[ 0 ] );
            obj.min = parseInt( time.split( ':' )[ 1 ] );
            obj.sec = parseInt( time.split( ':' )[ 2 ] );

            console.log( obj )

            return obj;
        }
    } );

});