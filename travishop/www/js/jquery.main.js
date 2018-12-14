$(function(){

    $(".gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: $(this).parents(".slider").find(".next"),
            btnPrev: $(this).parents(".slider").find(".prev"),
            visible: 1
        });
    });

    $('.filter__name-item > a').on({
        'click': function(){
            var curElem = $(this).parent().find('.filter__hidden');
            $('.filter__name-item > a').removeClass('active');
            $(this).addClass('active');
            $('.filter__hidden').fadeOut();
            curElem.fadeIn();
            return false;
        }
    });

    $("body, .filter__hidden-close").on({
        'click': function(){

            $('.filter__hidden').fadeOut();
        }
    });

    $(".filter__hidden").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $(".call-back").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.find('fieldset input').val('');
            curElem.fadeIn(300);
            return false;
        }
    });

    $(".popup-send, .close, .popup").on({
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

    if( $(".phoneMask").length ){
        $(".phoneMask").mask("+7 (999) 999 99 99");
    }

    $('.minus').on({
        'click': function(){
            var  curElem = $(this).parent().find('.kol'),
                kol = parseInt(curElem.val());
            if (kol > 1) {
                kol--;
                curElem.val(kol);
            }
            return false;
        }
    });

    $('.plus').on({
        'click': function(){
            var  curElem = $(this).parent().find('.kol'),
                kol = parseInt(curElem.val());
            kol++;
            curElem.val(kol);
            return false;
        }
    });

    $('.timer-wrap').each(
        function(){
            $(this).countDown({
                targetDate: parseTime( $(this).attr( 'data-time' )),
                omitWeeks: true

            });
        }
    );

    function parseTime( text ){
        var nowDate = new Date();
        var obj = {},
            year = text.split( ' ' )[ 0 ],
            time = text.split( ' ' )[ 1 ];

        obj.day = parseInt(year.split( '-' )[ 0 ]);
        obj.month = parseInt(year.split( '-' )[ 1 ]);
        obj.year = parseInt( year.split( '-' )[ 2 ]);

        obj.hour = parseInt( time.split( ':' )[ 0 ] );
        obj.min = parseInt( time.split( ':' )[ 1 ] );
        obj.sec = parseInt( time.split( ':' )[ 2 ] );


        return obj;
    }

} );