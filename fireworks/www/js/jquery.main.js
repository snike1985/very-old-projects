$(function(){

    $('.honors img').reflect({height: 75, opacity:0.35});

    function newYearDays(){
        var nowDate = new Date();

        $('.discount__calendar > span').text(parseInt(31 - nowDate.getDate()));
    }
    newYearDays();

    $('.header__price, .old-price__download, .footer__price, .profit__btn').on({
        'click': function(){
            var curElem = $('.popup');

            curElem.fadeIn(300);

            return false;
        }
    });

    $('.popup, .popup__close, .popup__send').on({
        'click': function(){
            var curElem = $('.popup');

            curElem.fadeOut(300);
        }
    });

    $('.popup__wrap').on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $('.purchase-result, .profit-result').append('<span></span>');

    $( ".profit__slide").each(function(){
        var curElem = $(this);
        curElem.slider({
            range: "min",
            value: parseInt(curElem.attr('data-value')),
            min: parseInt(curElem.attr('data-min')),
            max: parseInt(curElem.attr('data-max')),
            slide: function( event, ui ) {
                if(curElem.parent().hasClass('margin')) {
                    curElem.find( '.profit__amount' ).text( ui.value + '%');
                } else {
                    curElem.find( '.profit__amount' ).text( ui.value );
                }
                if(curElem.parent().hasClass('purchase')) {
                    $('.purchase-result span').text( ui.value );
                }
                if(curElem.parent().hasClass('purchase')) {
                    if (ui.value > 99999 && ui.value < 250000) {
                        curElem.find('.purchase__discount').text('5%');
                        $('.purchase-result').css({
                            background: 'url(url(img/purchase-result1.png) no-repeat bottom center'
                        });
                        $('.profit-result').css({
                            background: 'url(img/profit-result2.png) no-repeat bottom center'
                        });
                    }
                    if (ui.value > 249999 && ui.value < 500000) {
                        curElem.find('.purchase__discount').text('10%');
                        $('.purchase-result').css({
                            background: 'url(img/purchase-result1.png) no-repeat bottom center'
                        });
                        $('.profit-result').css({
                            background: 'url(img/profit-result3.png) no-repeat bottom center'
                        });
                    }
                    if (ui.value > 499999 && ui.value < 1000000) {
                        curElem.find('.purchase__discount').text('15%');
                        $('.purchase-result').css({
                            background: 'url(img/purchase-result2.png) no-repeat bottom center'
                        });
                        $('.profit-result').css({
                            background: 'url(img/profit-result4.png) no-repeat bottom center'
                        });
                    }
                    if (ui.value > 999999) {
                        curElem.find('.purchase__discount').text('20%');
                        $('.purchase-result').css({
                            background: 'url(img/purchase-result2.png) no-repeat bottom center'
                        });
                        $('.profit-result').css({
                            background: 'url(img/profit-result5.png) no-repeat bottom center'
                        });
                    }
                    if (ui.value < 100000) {
                        curElem.find('.purchase__discount').text('0%');
                        $('.purchase-result').css({
                            background: 'url(img/purchase-result1.png) no-repeat bottom center'
                        });
                        $('.profit-result').css({
                            background: 'url(img/profit-result1.png) no-repeat bottom center'
                        });
                    }
                }
                var zakupka = parseInt($('.purchase-result > span').text()),
                    discount = parseFloat($('.purchase .purchase__discount').text().replace('%', '').replace('-', ''))/100,
                    nacenka = parseFloat($('.margin .profit__amount').text().replace('%', ''))/100,
                    rashod = parseInt($('.costs .profit__amount').text());

                $('.profit-result > span').text(parseInt(zakupka*discount + zakupka*(nacenka + 1) - zakupka - rashod));
            }
        });
        if(curElem.parent().hasClass('margin')) {
            curElem.find('> span').append('<span class="profit__amount">' + curElem.slider( "value" ) + '%</span>');
        } else {
            curElem.find('> span').append('<span class="profit__amount">' + curElem.slider( "value" ) + '</span>');
        }
        if(curElem.parent().hasClass('purchase')) {
            $('.purchase-result span').text(curElem.slider( "value" ));
        }
        if(curElem.parent().hasClass('purchase')) {
            var val = parseInt(curElem.find('.profit__amount').text());
            if (val > 99999 && val < 250000) {
                curElem.find('> span').append('<span class="purchase__discount">-5%</span>');
                $('.purchase-result').css({
                    background: 'url(img/purchase-result1.png) no-repeat bottom center'
                });
                $('.profit-result').css({
                    background: 'url(img/profit-result2.png) no-repeat bottom center'
                });
            }
            if (val > 249999 && val < 500000) {
                curElem.find('> span').append('<span class="purchase__discount">-10%</span>');
                $('.purchase-result').css({
                    background: 'url(img/purchase-result1.png) no-repeat bottom center'
                });
                $('.profit-result').css({
                    background: 'url(img/profit-result3.png) no-repeat bottom center'
                });
            }
            if (val > 499999 && val < 1000000) {
                curElem.find('> span').append('<span class="purchase__discount">-15%</span>');
                $('.purchase-result').css({
                    background: 'url(img/purchase-result2.png) no-repeat bottom center'
                });
                $('.profit-result').css({
                    background: 'url(img/profit-result4.png) no-repeat bottom center'
                });
            }
            if (val > 999999) {
                curElem.find('> span').append('<span class="purchase__discount">-20%</span>');
                $('.purchase-result').css({
                    background: 'url(img/purchase-result2.png) no-repeat bottom center'
                });
                $('.profit-result').css({
                    background: 'url(img/profit-result5.png) no-repeat bottom center'
                });
            }
            if (val < 100000) {
                curElem.find('> span').append('<span class="purchase__discount">-0%</span>');
                $('.purchase-result').css({
                    background: 'url(img/purchase-result1.png) no-repeat bottom center'
                });
                $('.profit-result').css({
                    background: 'url(img/profit-result1.png) no-repeat bottom center'
                });
            }
        }
    });

    var zakupka = parseInt($('.purchase-result > span').text()),
        discount = parseFloat($('.purchase .purchase__discount').text().replace('%', '').replace('-', ''))/100,
        nacenka = parseFloat($('.margin .profit__amount').text().replace('%', ''))/100,
        rashod = parseInt($('.costs .profit__amount').text());

    $('.profit-result > span').text(parseInt(zakupka*discount + zakupka*(nacenka + 1) - zakupka - rashod));

    if ($(".map").length) {

        var myMap,
            coordMas=$(".map").attr('coordinates').split(', ');

        function init () {
            myMap = new ymaps.Map('map', {
                center:[coordMas[0], coordMas[1]],
                zoom: 15
            }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                //    balloonContentBody:
                //        '<ul class="contacts__title">\
                //            <li class="contacts__address"><b><span>Уфа,</span>ул. Самаркандская, 1/4</b> (во дворе) Офис-склад «Русские фейерверки»</li>\
                //            <li class="contacts__tel">Тел.:\
                //                <span>\
                //                    <a href="tel:+79173456038">+7 917 <b>3456038</b></a>,\
                //                    <a href="tel:+73472741922">+7 347 <b>2741922</b></a>\
                //                </span>\
                //            </li>\
                //            <li class="contacts__time">\
                //                Часы работы: с 10.00 до 20.00,\
                //                <span>в декабре — без выходных</span>\
                //            </li>\
                //        </ul>'
                //}, {
                    iconLayout: 'default#image',
                    iconImageOffset: [-3, -42]
                    //balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
                    //balloonImageOffset: [-385, -245], // смещание балуна, надо подогнать под стрелочку
                    //hideIconOnBalloonOpen: false,
                    //balloonShadow: false
                });
            myMap.controls.add('zoomControl', { left: 5, top: 5 });
            myMap.behaviors.disable('scrollZoom');

            observeEvents(myMap);

            myMap.geoObjects.add(myPlacemark);
            //myPlacemark.balloon.open();
        }

        ymaps.ready(init);


        function observeEvents (map) {
            var mapEventsGroup,
                mapBalloonEventsGroup = map.balloon.events
                    // При открытии балуна начинаем слушать изменение центра карты.
                    .add('open', function (e1) {
                        var placemark = e1.get('target');

                        // Вызываем функцию в двух случаях:
                        mapEventsGroup = map.events.group()
                            // 1) в начале движения (если балун во внешнем контейнере);
                            .add('actiontick', function (e2) {
                                if (placemark.options.get('balloonPane') == 'outerBalloon') {
                                    setBalloonPane(placemark, e2.get('tick'));
                                }
                            })
                            // 2) в конце движения (если балун во внутреннем контейнере).
                            .add('actiontickcomplete', function (e2) {
                                if (placemark.options.get('balloonPane') != 'outerBalloon') {
                                    setBalloonPane(placemark, e2.get('tick'));
                                }
                            });

                        // Вызываем функцию сразу после открытия.
                        setBalloonPane(placemark);
                    })
                    // При закрытии балуна удаляем слушатели.
                    .add('close', function () {
                        mapEventsGroup.removeAll();
                    });
        }

        function setBalloonPane (placemark, mapData) {
            mapData = mapData || {
                globalPixelCenter: myMap.getGlobalPixelCenter(),
                zoom: myMap.getZoom()
            };

            var mapSize = myMap.container.getSize(),
                mapBounds = [
                    [mapData.globalPixelCenter[0] - mapSize[0] / 2, mapData.globalPixelCenter[1] - mapSize[1] / 2],
                    [mapData.globalPixelCenter[0] + mapSize[0] / 2, mapData.globalPixelCenter[1] + mapSize[1] / 2]
                ],
                balloonPosition = placemark.balloon.getPosition(),
            // Используется при изменении зума.
                zoomFactor = Math.pow(2, mapData.zoom - myMap.getZoom()),
            // Определяем, попадает ли точка привязки балуна в видимую область карты.
                pointInBounds = ymaps.util.bounds.contains(mapBounds, [
                    balloonPosition[0] * zoomFactor,
                    balloonPosition[1] * zoomFactor
                ]),
                isInOutersPane = placemark.options.get('balloonPane') == 'outerBalloon';

            // Если точка привязки не попадает в видимую область карты, переносим балун во внутренний контейнер
            if (!pointInBounds && isInOutersPane) {
                placemark.options.set({
                    balloonPane: 'balloon',
                    balloonShadowPane: 'shadows'
                });
                // и наоборот.
            } else if (pointInBounds && !isInOutersPane) {
                placemark.options.set({
                    balloonPane: 'outerBalloon',
                    balloonShadowPane: 'outerBalloon'
                });
            }
        }
    }
} );
