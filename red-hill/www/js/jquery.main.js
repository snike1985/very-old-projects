$(function(){

    $(".call-back").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeIn(300);
            return false;
        }
    });

    $(".popup, .popup__close").on({
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

    if ($('.map').length) {

        var myMap;

        function init () {
            myMap = new ymaps.Map('map', {
                center: $('.map').attr('data-coord').split(', '),
                zoom: 12
            });

            var coord = $('.map').attr('data-coord').split(', ');

            myMap.geoObjects.add(new ymaps.Placemark(
                [coord[0], coord[1]],
                {
                    balloonContentBody: $('.map').attr('data-description'),
                    hintContent: $('.map').attr('data-title')
                }
            ));

        }

        ymaps.ready(init);

    }

    if($('.tabs').length){

        if(!$('.tabs dt.active').length){
            $('.tabs dt').eq(0).addClass('active');
        }
    }

    function checkTab(){
        var activeBlock = $('.tabs dt.active + dd');

        $('.tabs').css( { height: activeBlock.outerHeight() + 59 } );

    };

    $(".tabs dt").on({
        'click': function(){
            var curElem = $( this );

            $('.tabs dt').removeClass('active')
            curElem.addClass('active')
            checkTab();
        }
    });

    $(window).on({
        'load':function(){
            checkTab();
        }
    });

} );
