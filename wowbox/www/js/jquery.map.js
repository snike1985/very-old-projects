$(function(){

    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map('map', {
                center:[54.746680, 55.992754],
                zoom:12
            });

        $.each($('.map-item'), function(i){
            var curElem = $(this);

            if (curElem.attr('data-coord')) {
                var coord = curElem.attr('data-coord').split(', ');

                myMap.geoObjects.add(new ymaps.Placemark(
                    [coord[0], coord[1]],
                    { iconContent: i+1 }
                ));
            }
        });

        myMap.controls
            .add('zoomControl', { left: 5, top: 5 })
            .add('typeSelector')
            .add('mapTools', { left: 35, top: 5 });
    }

});