$(function(){
    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map('map', {
            center:[55.76, 37.64],
            zoom:10
        }),
        myPlacemark1 = new ymaps.Placemark([55.76, 37.64], {
            iconContent: '1'
        }, {
            preset: 'twirl#blueIcon'
        }),
        myPlacemark2 = new ymaps.Placemark([55.74, 37.77], {
            iconContent: '2'
        });
            myMap.geoObjects
            .add(myPlacemark1)
            .add(myPlacemark2);

        myMap.controls
            // ������ ��������� ��������.
            .add('zoomControl', { left: 5, top: 5 })
            // ������ ����� �����
            .add('typeSelector')
            // ����������� ����� ������
            .add('mapTools', { left: 35, top: 5 });
    }


});