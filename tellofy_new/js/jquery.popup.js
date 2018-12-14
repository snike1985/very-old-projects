$(function(){

    $.each($('[data-popup]'), function () {
        new OpenPopup($(this));
    });

});

var OpenPopup = function (obj) {

    //private properties
    var _self = this,
        _popup = $('.popup'),
        _popupClose = $('.popup__close');


    //private methods
    var _addEvents = function () {

            obj.on({
                'click':function(){

                    $('.dropdown-nav.header-dropdown').removeClass('active');

                    _popup.filter('.popup-open').css({'opacity':'0'});
                    setTimeout(function(){
                    _popup.filter('.popup-open').removeClass('popup-open');
                    },300);

                    var dataPopup = obj.attr('data-popup'),
                        popup = $('.popup[data-popup-num = ' + dataPopup + ']');
                    setTimeout(function(){
                        popup.addClass('popup-open');
                    },400);

                    setTimeout(function(){
                        popup.css({'opacity':'1'});
                        $('html').css({'overflow-y':'hidden'});
                    },500);

                    return false;
                }
            });
            _popupClose.on({
                'click': function(){
                    _popup.css({'opacity':'0'});
                    setTimeout(function(){
                        _popup.removeClass('popup-open');
                        $('html').css({'overflow-y':'scroll'});
                    },300);
                    return false
                }
            });
            $(document).on(
                "click",
                ".popup__content",
                function( event ){
                    event = event || window.event;

                    if (event.stopPropagation) {
                        event.stopPropagation();
                    } else {
                        event.cancelBubble = true;
                    }
                }
            );
            $(document).on(
                "click",
                "body",
                function(){
                    _popup.css({'opacity':'0'});
                    setTimeout(function(){
                        _popup.removeClass('popup-open');
                        $('html').css({'overflow-y':'scroll'});
                    },300);
                }
            );

        },

        _init = function () {
            _addEvents();

        };

    //public properties

    //public methods


    _init();
};