$(function(){

    var slider = $( '.slider'),
        novelty = $( '.novelty'),
        hits = $( '.hits');

    slider.each(function(){
        new AresSlider1( {
            obj: slider,
            items: slider.find( '.slider__item' ),
            btnNext: slider.find( '.slider__next' ),
            btnPrev: slider.find('.slider__prev'),
            duration: 5000
        } );
    });

    novelty.each(function(){
        new AresSlider1( {
            obj: novelty,
            items: novelty.find( '.multi-slider__item' ),
            btnNext: novelty.find( '.multi-slider__next' ),
            btnPrev: novelty.find('.multi-slider__prev'),
            duration: 6000
        } );
    });

    hits.each(function(){
        new AresSlider1( {
            obj: hits,
            items: hits.find( '.multi-slider__item' ),
            btnNext: hits.find( '.multi-slider__next' ),
            btnPrev: hits.find('.multi-slider__prev'),
            duration: 6000
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
                        i;


                    if (self.obj.hasClass('slider')) {
                        var points = $( '<ul class="slider__points"></ul>');
                        for( i = 0; i < count; i++ ){
                            points.append( '<li></li>' );
                        }
                    }
                    if (self.obj.hasClass('novelty') || self.obj.hasClass('hits')) {
                        var points = $( '<div class="points-slider">' +
                            '<ul class="multi-slider__points"></ul>' +
                            '<div class="points__prev"></div>' +
                            '<div class="points__next"></div>' +
                            '</div>');

                        for( i = 0; i < count; i++ ){
                            var text = elems.items.eq(i).attr('data-title');
                            points.find('.multi-slider__points').append( '<li>' + text + '</li>' );
                        }
                    }

                    self.obj.append( points );

                    elems.points = points.find( 'li' );

                    elems.points.eq( 0 ).addClass( 'active' );
                    if (self.obj.hasClass('novelty') || self.obj.hasClass('hits') ) {
                        elems.points.eq( -1 ).addClass( 'black' );
                        elems.points.eq( 1 ).addClass( 'black' );
                    }
                    elems.items.eq( 0 ).css( { display: 'block' } );

                    self.core.controls();

                    self.core.slideToNext();
                },
                slideToNext: function(){
                    if (self.obj.hasClass('slider')) {
                        self.timer = setTimeout( function(){
                            elems.btnNext.trigger( 'click' );
                        }, self.duration );
                    }
                },
                controls: function(){
                    elems.btnPrev.on( {
                        'click': function(){
                            var index = ( ( elems.points.filter( '.active' ).index() - 1 ) == -1 ) ? (elems.points.length - 1) :( elems.points.filter( '.active' ).index() - 1 );

                            self.slideTo( index );
                            if (self.obj.hasClass('novelty') || self.obj.hasClass('hits') ) {
                                self.obj.find('.points__prev').trigger( 'click' );
                            }
                        }
                    } );
                    elems.btnNext.on( {
                        'click': function(){
                            var index = ( ( elems.points.filter( '.active' ).index() + 1 ) == elems.points.length )? 0:( elems.points.filter( '.active' ).index() + 1 );

                            self.slideTo( index );
                            if (self.obj.hasClass('novelty') || self.obj.hasClass('hits') ) {
                                self.obj.find('.points__next').trigger( 'click' );
                            }
                        }
                    } );
                    elems.points.on( {
                        'click': function(){
                            var curItem = $( this),
                                temp = curItem.index() - self.elems.points.filter( '.active' ).index();

                            if( !self.action ) {
                                if (self.obj.hasClass('novelty') || self.obj.hasClass('hits')) {
                                    self.action = false;
                                    if (temp == -(self.elems.points.length - 1) || temp == 1) {
                                        self.slideTo(curItem.index());
                                        self.obj.find('.points__next').trigger('click');
                                    }
                                    if (temp == -(self.elems.points.length - 2) || temp == 2) {
                                        self.slideTo(curItem.index() - 1);
                                        self.obj.find('.points__next').trigger('click');
                                        setTimeout(function () {
                                            self.slideTo(curItem.index());
                                            self.obj.find('.points__next').trigger('click');
                                        }, 605);
                                    }
                                    if (temp == (self.elems.points.length - 1) || temp == -1) {
                                        self.slideTo(curItem.index());
                                        self.obj.find('.points__prev').trigger('click');
                                    }
                                    if (temp == (self.elems.points.length - 2) || temp == -2) {
                                        self.slideTo(curItem.index() + 1);
                                        self.obj.find('.points__prev').trigger('click');
                                        setTimeout(function () {
                                            self.slideTo(curItem.index());
                                            self.obj.find('.points__prev').trigger('click');
                                        }, 605);
                                    }
                                } else {
                                    if (!curItem.hasClass('active')) {
                                        self.slideTo(curItem.index());
                                    }
                                }
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
                curW = self.obj.width(),
                activeItem = elems.items.eq( activeIndex ),
                activePoint = elems.points.eq( activeIndex ),
                newItem = elems.items.eq( index),
                newPoint = elems.points.eq( index );

            if (self.obj.hasClass('novelty') || self.obj.hasClass('hits') ) {
                curW = 0;
            }

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

                if (self.obj.hasClass('novelty') || self.obj.hasClass('hits') ) {
                    self.elems.points.removeClass( 'black' );
                    activePoint.addClass( 'black' );
                }

                if (direction > 0) {
                    if (index == ( elems.points.length - 1 )) {
                        self.elems.points.eq(0).addClass( 'black' );
                    } else {
                        self.elems.points.eq(index + 1).addClass( 'black' );
                    }
                } else {
                    self.elems.points.eq(index - 1).addClass( 'black' );
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
                    opacity: 0
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