$(function(){
    $('.site__menu-btn').on({
        'click':function(){
            var curElem = $(this).parent();

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
            } else {
                curElem.addClass('active');
            }

        }
    });

    $('.contacts__map').each(function () {
        var myMap,
            masCoord = $('.contacts__map').attr('data-coord').split(', ');

        function init() {
            myMap = new ymaps.Map('map', {
                center: masCoord,
                zoom: 17
            }),
            myPlacemark = new ymaps.Placemark(masCoord, {
                balloonContent: "Строительная компания «Абсолют»",
                hintContent: '«Абсолют»'
            },{
                preset: "twirl#redIcon"
            });

            myMap.geoObjects.add(myPlacemark);

            myMap.controls
                .add('zoomControl', {left: 5, top: 5})
                .add('typeSelector')
                .add('mapTools', {left: 35, top: 5});
        }

        ymaps.ready(init);
    });

    var curElem = $('.guarantees__item'),
        curHeight = curElem.parent().height();

    if (curElem.offset().top + curHeight/2 <= $(window).scrollTop()+$(window).height()) {
        curElem.addClass('visible');
    }

    $(window).on({
        'scroll':function() {
            var curElem = $('.guarantees__item'),
                curHeight = curElem.parent().height();

            if (curElem.offset().top + curHeight/2 <= $(window).scrollTop()+$(window).height()) {
                curElem.addClass('visible');
            }
        }
    });


    $(".projects__gallery a:first-child").on({
        'click':function(){
            $(this).next().trigger('click');
            return false;
        }
    });

    $(".projects__gallery a").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    $(".pdf").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        autoSize: true,
        type: 'iframe',
        'overlayShow': false,
        helpers: {
            overlay: {
                locked: false
            }
        },
        iframe: {
            preload: false
        }
    });

    $('.site__menu a[href*=#], .site__footer a[href*=#].logo').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 40
        }, 1000);
        e.preventDefault();
        return false
    });

    $('.popup').each(function(){
        popup = new Popup($(this));
    });


    $('.callback-popup, .application-popup, .application__form').on({
        'submit':function(){
            var curElem = $(this);

            if (curElem.hasClass('callback-popup')) {
                $.ajax( {
                    url: 'php/callback.php',
                    dataType: 'html',
                    timeout: 20000,
                    type: "GET",
                    data: {name:curElem.find('.form-name').val(), phone:curElem.find('.form-tel').val(),
                        time:$('.form-time').val()},
                    success: function( msg ){
                        //popup.core.show('thanks');
                        //setTimeout( function(){
                        //    popup.core.hide('thanks')
                        //}, 3000 );
                    },
                    error: function( XMLHttpRequest ){
                        if( XMLHttpRequest.statusText != "abort" ){
                            alert( XMLHttpRequest.statusText );
                        }
                    }
                } );
            }

            if (curElem.hasClass('application__form')||curElem.hasClass('application-popup')) {
                $.ajax( {
                    url: 'php/application.php',
                    dataType: 'html',
                    timeout: 20000,
                    type: "GET",
                    data: {name:curElem.find('.form-name').val(), phone:curElem.find('.form-tel').val()},
                    success: function( msg ){
                        //popup._showPopup('thanks');
                        //setTimeout( function(){
                        //    popup.core.hide('thanks')
                        //}, 3000 );

                    },
                    error: function( XMLHttpRequest ){
                        if( XMLHttpRequest.statusText != "abort" ){
                            alert( XMLHttpRequest.statusText );
                        }
                    }
                } );
            }
        }

    });


} );

var Popup = function (obj) {

    var _self = this,
        _popup = obj,
        _popupWrap = _popup.find( '.popup__wrap'),
        _frame = _popup.find( '.popup__frame'),
        _popupContent = _popup.find( '.popup__content'),
        _btnShow =  $('.popup__open'),
        _btnClose = _popup.find( '.popup__close'),
        _btnClose2 = _popup.find( '.popup__close_2'),
        _html = $("html");

    var _addEvents = function () {

            _btnShow.on( {
                click: function(){
                    var dataClass = $(this).attr('data-popup'),
                        curPopup = _popup.find(".popup__"+ dataClass);
                    _showPopup(curPopup);
                    return false;
                }
            } );
            _btnClose.on( {
                click: function(){
                    var curPopup = $(this).parents(".popup");
                    _hidePopup(curPopup);
                    return false;
                }
            } );
            _btnClose2.on( {
                click: function(){
                    var curPopup = $(this).parents(".popup");
                    _hidePopup(curPopup);
                    return false;
                }
            } );
            _popup.click( function(){
                var curPopup = _popup;
                if ( _self._noClosePopup ){
                    _self._noClosePopup = false;
                    return false;
                }
                _hidePopup(curPopup);
            });
            _popupContent.on({
                click: function(event){
                    event = event || window.event;
                    event.stopPropagation();
                }
            });

        },
        _build = function(){
            _self._noClosePopup = false;
        },
        _showPopup = function(curPopup){
            _popup.addClass("popup_opened");
            _popupContent.removeClass("active");
            curPopup.addClass("active");
            _html.css({
                "overflow": "hidden"
            });
        },
        _hidePopup = function(curPopup){
            curPopup.removeClass("popup_opened");
            _popupContent.removeClass("active");
            _html.css({
                "overflow": ""
            });
        },
        _init = function () {
            _build();
            _addEvents();
        };

    _init();
};