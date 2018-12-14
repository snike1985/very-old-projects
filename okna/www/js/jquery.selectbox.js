$(function(){

    $(".gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: $(this).parents(".our-work").find(".next"),
            btnPrev: $(this).parents(".our-work").find(".prev"),
            visible: 3
        });
    });

    $(".reviews__gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: $(this).parents(".reviews").find(".next"),
            btnPrev: $(this).parents(".reviews").find(".prev"),
            visible: 1
        });
    });


    if ($(".map").length) {
        var myMap;

        ymaps.ready(init);

        function init () {
            myMap = new ymaps.Map('map', {
                center:[55.181051, 61.400463],
                zoom: 15
            });

            myMap.geoObjects.add(new ymaps.Placemark([55.181051, 61.400463]));
        }
    }


} );
