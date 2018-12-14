$(function(){
    var slider = $( '.slider-prewiev' );

    new AresSlider1( {
        obj: slider,
        items: slider.find( '.slider-prewiev__item' ),
        btnNext: slider.find( '.slider-prewiev__next' ),
        btnPrev: slider.find('.slider-prewiev__prev')
    } );

});

var AresSlider1 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items,
        prevElem: params.prevElem,
        nextElem: params.nextElem
    };
    this.action = false;
    this.duration = params.duration || 5000;

    this.init();
};
    AresSlider1.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this,
                elems = self.elems;

            return {
                build: function(){
                    var count = elems.items.length,
                        i,
                        points = $( '<ul class="ares-slider__points"></ul>');

                    for( i = 0; i < count; i++ ){
                        var way = elems.items.eq(i).attr('data-attr');
                        points.append( '<li><img src="'+ way +'"></li>' );
                    }
                    self.obj.append( points );

                    elems.points = points.find( 'li' );

                    elems.points.eq( 0 ).addClass( 'active' );
                    elems.items.eq( 0 ).css( { display: 'block' } );

                    self.core.controls();

                    self.core.slideToNext();
                },
                slideToNext: function(){
                    self.timer = setTimeout( function(){
                        elems.btnNext.trigger( 'click' );
                    }, self.duration );
                },
                controls: function(){
                    elems.btnPrev.on( {
                        'click': function(event){
                            event = event || window.event // кросс-браузерно
                            if (event.stopPropagation) {
                                // Вариант стандарта W3C:
                                event.stopPropagation()
                            } else {
                                // Вариант Internet Explorer:
                                event.cancelBubble = true
                            }

                            var index = ( ( elems.points.filter( '.active' ).index() - 1 ) == -1 ) ? (elems.points.length - 1) :( elems.points.filter( '.active' ).index() - 1 );

                            self.slideTo( index );
                        }
                    } );
                    elems.btnNext.on( {
                        'click': function(event){
                            event = event || window.event // кросс-браузерно
                            if (event.stopPropagation) {
                                // Вариант стандарта W3C:
                                event.stopPropagation()
                            } else {
                                // Вариант Internet Explorer:
                                event.cancelBubble = true
                            }
                            var index = ( ( elems.points.filter( '.active' ).index() + 1 ) == elems.points.length )? 0:( elems.points.filter( '.active' ).index() + 1 );

                            self.slideTo( index );
                        }
                    } );
                    elems.points.on( {
                        'click': function(){
                            var curItem = $( this );

                            if( !curItem.hasClass( 'active' ) ){
                                self.slideTo( curItem.index() );
                            }
                        }
                    } );
                    self.obj.on( {
                        'mouseover': function(){
                            clearTimeout( self.timer );
                        },
                        'mouseleave': function(){
                            self.core.slideToNext();
                        }
                    } );
                }
            };
        },
        slideTo: function( index ) {
            var self = this,
                elems = self.elems,
                activeIndex = elems.points.filter( '.active' ).index(),
                direction,
                curW = elems.items.width(),
                activeItem = elems.items.eq( activeIndex ),
                activePoint = elems.points.eq( activeIndex ),
                newItem = elems.items.eq( index),
                newPoint = elems.points.eq( index );

            clearTimeout( self.timer );
            if( !self.action ){
                self.action = true;

                if( activeIndex < index ){
                    direction = 1;
                } else {
                    direction = -1;
                }

                if( activeIndex == 0 && index == ( elems.points.length - 1 ) ){
                    direction = -1;
                } else if ( activeIndex == ( elems.points.length - 1 )  && index == 0 ){
                    direction = 1;
                }

                activePoint.removeClass( 'active' );
                newPoint.addClass( 'active' );

                newItem.css( {
                    display: 'block',
                    left: curW * -direction,
                    opacity: 0
                } );
                activeItem.animate( {
                    left: curW * direction,
                    opacity: 1
                }, 600, function() {
                    $( this ).css( { display: 'none' } );
                    self.action = false;
                    self.core.slideToNext();
                } );
                newItem.animate( {
                    left: 0,
                    opacity: 1
                }, 600 );
            }

        }
    };