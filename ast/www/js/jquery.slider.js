$(function(){
    var slider = $( '.ares-slider');

    slider.each(function(){
        new AresSlider1( {
            obj: $(this),
            items: $(this).find( '> .ares-slider__item' ),
            btnNext: $(this).find( '.ares-slider__next' ),
            btnPrev: $(this).find('.ares-slider__prev')
        } );
    });
});

var AresSlider1 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items
    };
    this.action = false;
    this.duration = params.duration || 3000;

    this.init();
};
    AresSlider1.prototype = {
        init: function(){
            var self = this;
            self.core = self.core();
            self.core.build();
            if (self.elems.items.length < 2) {
                self.elems.btnPrev.css({display:'none'});
                self.elems.btnNext.css({display:'none'});
            }
        },
        core: function(){
            var self = this,
                elems = self.elems;

            return {
                build: function(){
                    var count = elems.items.length,
                        i,
                        points = $( '<ul class="ares-slider__points"></ul>' );

                    if (count > 1) {
                        if (self.obj.parent().hasClass('slider')) {
                            for( i = 0; i < count; i++ ){
                                var way = elems.items.eq(i).attr('attr-name'),
                                    textElem = elems.items.eq(i).find('h2').text();
                                points.append( '<li>'+ way +'</li>' );
                            }
                        } else {
                            for( i = 0; i < count; i++ ){
                                points.append( '<li></li>' );
                            }
                        }
                    }

                    self.obj.append( points );

                    elems.points = points.find( 'li' );

                    elems.points.eq( 0 ).addClass( 'active' );
                    elems.items.eq( 0 ).css( { display: 'block' } );

                    self.core.controls();

                    self.core.slideToNext();
                },
                slideToNext: function(){
                    if (elems.items.length > 1) {
                        self.timer = setTimeout( function(){
                            elems.btnNext.trigger( 'click' );
                        }, self.duration );
                    }
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
                curW = 100,
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

//                newItem.css( {
//                    display: 'block',
//                    left: curW * -direction,
//                    opacity: 0
//                } );
//                activeItem.animate( {
//                    left: curW * direction,
//                    opacity: 0
//                }, 300, function() {
//                    $( this ).css( { display: 'none' } );
//                    self.action = false;
//                    self.core.slideToNext();
//                } );
//                newItem.animate( {
//                    left: 0,
//                    opacity: 1
//                }, 300 );

//                newItem.css( {
//                    display: 'block',
//                    opacity: 0
//                } );
//                newItem.animate( {
//                    opacity: 1
//                }, 300, function() {
//                    activeItem.animate( {opacity: 0});
//                    self.action = false;
//                    self.core.slideToNext();
//                } );
                newItem.fadeIn();
                activeItem.fadeOut();
                self.action = false;
                self.core.slideToNext();
            }

        }
    };