$(function(){
    $('.interior__item img').reflect({height:0.4, opacity:0.35});

    $(window).on({
        'scroll':function() {
            var curElem = $('.choose ul');

            if ($('.choose ul').offset().top + 100 <= $(window).scrollTop()+$(window).height()) {
                curElem.addClass('visible');
            }
            if ($('.choose ul').offset().top > $(window).scrollTop()+$(window).height()){
                curElem.removeClass('visible');
            }
        }
    });

    if ($(".map").length) {

        var myMap,
            coordMas=$(".map").attr('coordinates').split(', ');

        function init () {
            myMap = new ymaps.Map('map', {
                center:[coordMas[0], coordMas[1]],
                zoom: 15
            });
            var myPlacemark = new ymaps.Placemark([coordMas[0], coordMas[1]], {
                balloonContent: '<span><span>улица Ленина</span>' +
                    'Уфа, Республика Башкортостан, Россия</span>'
            });


            myMap.geoObjects.add(myPlacemark);
            myPlacemark.balloon.open();

            myMap.controls.add('zoomControl', { left: 5, top: 5 });
        }

        ymaps.ready(init);
    }

} );