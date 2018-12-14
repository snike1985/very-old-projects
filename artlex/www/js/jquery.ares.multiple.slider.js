$( window ).load(function(){
    var slider = $( '.ares-slider'),
        kolElem = 4,
        kolTmp = 0;

    if ($( '.ares-slider__item').length) {
        $( '.ares-slider__item').each(function(){
            kolTmp = kolTmp + 1;
        });
    }

    if (kolTmp < kolElem) {
        kolElem = kolTmp
    }

    new AresSlider2( {
        obj: slider,
        btnPrev: slider.find( '.ares-slider__prev' ),
        btnNext: slider.find( '.ares-slider__next' ),
        items: slider.find( '.ares-slider__item' ),
        visibleCount: kolElem,
        indent: 0.0111607142857143
    } );
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
    this.speed = params.speed || 300;

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
                        //if( i == ( self.active + self.visibleCount ) - 1 ){
                        //    elems.btnNext.css( { left: tempLeft + itemW } );
                        //}
                        tempLeft += self.step;
                    }
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

    }
};