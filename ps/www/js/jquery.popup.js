$(function(){

    $('.popup').each(function(){

        new Popup($(this));

    });

});

var Popup = function( obj ){
    this.popup = obj;
    this.btnClose = obj.find( '.popup__close, .popup__cancel' );
    this.wrap = obj.find($('.popup__wrap'));
    this.contents = obj.find('.popup__content');
    this.contentsBlock = this.contents.find('> *');
    this.window = $( window );
    this.scrollConteiner = $( 'html' );
    this.timer = setTimeout( function(){},1 );

    this.init();
};
Popup.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function (){
        var self = this;

        return {
            build: function (){
                self.core.controls();
            },
            centerWrap: function(){
                if ( self.window.height() - 80 - self.wrap.height() > 0 ) {
                    self.wrap.css({top: ( ( self.window.height() -80 )- self.wrap.height())/2});
                } else {
                    self.wrap.css({top: 0});
                }
            },
            controls: function(){
                self.window.on( {
                    resize: function(){
                        self.core.centerWrap();
                    }
                } );
                $('body').on( 'click','.popup__open', function(){
                    var curItem = $( this );

                    self.core.show( curItem.attr( 'data-popup' ) );

                    return false;
                } );
                self.contentsBlock.on( {
                    click: function( event ){
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                } );
                $('body').on({
                    keyup: function (e) {
                        if( self.popup.hasClass('popup_opened') && ( e.keyCode == 27 ) ){
                            self.core.hide();
                        }
                    }
                });
                self.contents.on( {
                    click: function(){
                        self.core.hide();
                        return false;
                    }
                } );
                self.btnClose.on( {
                    click: function(){
                        self.core.hide();
                        return false;
                    }
                } );
            },
            hide: function(){
                var scroll = self.popup.find('.new-order__scroll');
                self.scrollConteiner.css( {
                    paddingRight: 0
                } );
                self.popup.removeClass('popup_opened');
                self.popup.addClass('popup_hide');
                location.hash = '';

                setTimeout( function(){
                    self.popup.removeClass('popup_hide');
                    if(scroll.length){
                        scroll.getNiceScroll().resize();
                    }
                }, 300 );

            },
            show: function( className ){
                var scroll = self.popup.find('.new-order__scroll') ;
                self.core.setPopupContent( className );


                self.popup.addClass('popup_opened');
                self.core.centerWrap();

                if(scroll.length){
                    scroll.getNiceScroll().resize();
                }


            },
            setPopupContent: function( className ){
                var curContent = self.contents.filter( '.popup__' + className );

                self.contents.css( { display: 'none' } );
                curContent.css( { display: 'block' } );
            }

        };
    }
};