$(function(){
    if ($(".map").length) {

        var myMap,
            coordMas=$(".map").attr('coordinates').split(', ')

        function init () {
            myMap = new ymaps.Map('map', {
                center:[coordMas[0], coordMas[1]],
                zoom: 15
            }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    balloonContentBody:
                        '<div class="contacts">\
                        <dl class="contacts__address">\
                        <dt>Адрес:</dt>\
                        <dd>121467 Россия г. Москва, ул.Молодогвардейская, д. 13, ком. 212</dd>\
                        </dl>\
                            <dl class="contacts__tel">\
                                <dt>Телефон:</dt>\
                                <dd>\
                                    <span>+7 (495) 630-33-89</span>\
                                    <span>+7 (495) 630-35-50</span>\
                                    <span>+7 (495) 630-31-50</span>\
                                </dd>\
                            </dl>\
                            <dl class="contacts__email">\
                                <dt>E-mail:</dt>\
                                <dd>info@aclo_dutyfree.ru</dd>\
                            </dl>\
                            <dl class="contacts__icq">\
                                <dt>ICQ:</dt>\
                                <dd>426147823</dd>\
                            </dl>\
                            <dl class="contacts__skype">\
                                <dt>Skype:</dt>\
                                <dd>aclo_dutyfree</dd>\
                            </dl>\
                            <dl class="contacts__work-time">\
                                <dt>Режим работы:</dt>\
                                <dd>\
                                    <span>13 <sup>00</sup> - 23 <sup>00</sup></span>\
                                    <span>БЕЗ ВЫХОДНЫХ</span>\
                                </dd>\
                            </dl>\
                    </div>'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/label.png',
                    iconImageSize: [87, 115],
                    iconImageOffset: [-3, -42],
                    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
                    balloonImageOffset: [-367, -65], // смещание балуна, надо подогнать под стрелочку
                    hideIconOnBalloonOpen: false,
                    balloonShadow: false
                });
            myMap.controls.add('zoomControl', { left: 5, top: 5 });
            myMap.geoObjects.add(myPlacemark);
            myPlacemark.balloon.open();
        }

        ymaps.ready(init);
    }
} );