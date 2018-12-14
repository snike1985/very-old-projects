$( window ).load(function(){
    var points1 = $( '.novelty .points-slider'),
        points2 = $( '.hits .points-slider'),
        slider = $( '.catalog-slider'),
        cartochkaslider = $( '.cartochka-gallery');

    points1.each(function(){
        new AresSlider2( {
            obj: points1,
            items: points1.find( 'li' ),
            btnNext: points1.find( '.points__next' ),
            btnPrev: points1.find('.points__prev'),
            visibleCount: 5,
            indent: 0.0111607142857143
        } );
    });

    points2.each(function(){
        new AresSlider2( {
            obj: points2,
            items: points2.find( 'li' ),
            btnNext: points2.find( '.points__next' ),
            btnPrev: points2.find('.points__prev'),
            visibleCount: 5,
            indent: 0.0111607142857143
        } );
    });

    slider.each(function(){
        new AresSlider2( {
            obj: slider,
            items: slider.find( '.catalog-slider__item' ),
            btnNext: slider.find( '.catalog-slider__next' ),
            btnPrev: slider.find('.catalog-slider__prev'),
            visibleCount: 4,
            indent: 0.0111607142857143
        } );
    });

    if (cartochkaslider.find( 'li' ).length == 4){
        cartochkaslider.find( 'ul' ).append(cartochkaslider.find( 'li' ).eq(0).clone());
        cartochkaslider.find( 'ul' ).append(cartochkaslider.find( 'li' ).eq(1).clone());
        cartochkaslider.find( 'ul' ).append(cartochkaslider.find( 'li' ).eq(2).clone());
        cartochkaslider.find( 'ul' ).append(cartochkaslider.find( 'li' ).eq(3).clone());
    }

    cartochkaslider.each(function(){
        new AresSlider2( {
            obj: cartochkaslider,
            items: cartochkaslider.find( 'li' ),
            btnNext: cartochkaslider.find( '.cartochka-gallery__next' ),
            btnPrev: cartochkaslider.find('.cartochka-gallery__prev'),
            visibleCount: 3,
            indent: 0.0111607142857143,
            duration: 6000
        } );
    });

} );

var AresSlider2 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items
    };
    this.action = false;
    this.duration = params.duration || 3000;
    this.visibleCount = params.visibleCount || 3;
    this.indent = params.indent || 20;
    this.active = 4;
    this.speed = params.speed || 600;

    this.init();
};
AresSlider2.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.normalWiew();
        self.core.controls();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            normalWiew: function(){
                var curWidth = self.obj.width(),
                    countItems = elems.items.length,
                    itemW,
                    curIndex,
                    tempLeft = 0,
                    i;

                if( self.indent < 1 ){
                    self.indent = ( Math.floor( curWidth * self.indent ) < 1)?self.indent = 1: Math.floor( curWidth * self.indent );
                }

                itemW = Math.floor( ( curWidth - ( self.indent * ( self.visibleCount - 1 ) ) ) / self.visibleCount );

                self.step = itemW + self.indent;

                elems.items.width( itemW );

                self.maxHeight = 0;
                elems.items.css( { display: 'block' } );
                elems.items.each( function(){
                    var curItem = $( this );

                    if( curItem.height() > self.maxHeight ){
                        self.maxHeight = curItem.height()
                    }
                } );
                self.obj.height( self.maxHeight );

                if( countItems <= self.visibleCount){
                    elems.items.each( function(){
                        $( this ).css( { left: tempLeft } );
                        tempLeft += self.step;
                    } );
                    elems.btnNext.css( { display: 'none' } );
                    elems.btnPrev.css( { display: 'none' } );
                } else {
                    for( i = self.active; i < ( self.active + self.visibleCount ); i++ ) {
                        curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

                        elems.items.eq( curIndex ).css( {
                            left: tempLeft
                        } );

                        if( i == ( self.active + self.visibleCount ) - 1 ){
                            //if (!self.obj.hasClass('catalog-slider') && !self.obj.hasClass('cartochka-gallery')) {
                            //    elems.btnNext.css( { left: tempLeft + itemW } );
                            //}

                        }
                        tempLeft += self.step;
                    }
                }

                self.core.slideToNext();
            },
            slideToNext: function(){
                if (self.obj.hasClass('cartochka-gallery')) {
                    clearTimeout( self.timer );
                    self.timer = setTimeout( function(){

                        if (elems.items.length > 3) {
                            elems.btnNext.trigger( 'click' );
                        } else {
                            self.core.slideToNext();
                        }

                        var curElem = self.obj.find('.active');
                        elems.items.removeClass('active');
                        if (curElem.next().length) {
                            curElem.next().addClass('active');
                        } else {
                            elems.items.eq(0).addClass('active');
                        }

                        curElem = self.obj.find('.active');

                        $('.cartochka__big-pic img').attr('src', curElem.attr('data-pic'));

                    }, self.duration );

                }
            },
            controls: function(){
                $( window ).on( {
                    'resize': function(){
                        self.core.normalWiew();
                    }
                } );
                elems.btnPrev.on( {
                    'click': function(){
                        if( !self.action ){
                            self.slidePrev();
                        }
                    }
                } );
                elems.btnNext.on( {
                    'click': function(){
                        if( !self.action ){
                            self.slideNext();
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
    slideNext: function() {
        var self = this,
            elems = self.elems,
            tempLeft = -self.step,
            i;

        self.action = true;

        for( i = self.active; i < ( self.active + self.visibleCount + 1 ); i++ ) {
            curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

            if( i == self.active + self.visibleCount ) {
                elems.items.eq( curIndex ).css( { left: self.visibleCount * self.step } );
            }
            elems.items.eq( curIndex ).animate( {
                left: tempLeft
            }, self.speed );

            tempLeft += self.step;
        }
        setTimeout( function(){
            self.action = false;
            self.active = ( self.active + 1 == elems.items.length )?0 : self.active + 1;

        }, self.speed );
        self.core.slideToNext();
    },
    slidePrev: function() {
        var self = this,
            elems = self.elems,
            tempLeft = 0,
            i;

        self.action = true;

        for( i = self.active - 1; i < ( self.active + self.visibleCount ); i++ ) {
            curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

            if( i == self.active - 1 ) {
                elems.items.eq( curIndex ).css( { left: -self.step } );
            }
            elems.items.eq( curIndex ).animate( {
                left: tempLeft
            }, self.speed );

            tempLeft += self.step;
        }
        setTimeout( function(){
            self.action = false;
            self.active = ( self.active - 1 == -1 )?elems.items.length-1 : self.active - 1;

        }, self.speed );
        self.core.slideToNext();

    }
};