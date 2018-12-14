var flag = false;
$( window ).load(function(){
    var slider = $( '.slider-wrap');

    if (slider.find( '.slider__item' ).length == 3){
        slider.find( 'ul' ).append(slider.find( '.slider__item' ).eq(0).clone());
        slider.find( '.slider__item' ).eq(3).addClass('clone');
        slider.find( 'ul' ).append(slider.find( '.slider__item' ).eq(1).clone());
        slider.find( '.slider__item' ).eq(4).addClass('clone');
        slider.find( 'ul' ).append(slider.find( '.slider__item' ).eq(2).clone());
        slider.find( '.slider__item' ).eq(5).addClass('clone');
        flag = true;
    }

    var t = new AresSlider2( {
        obj: slider,
        btnPrev: slider.find( '.slider__prev' ),
        btnNext: slider.find( '.slider__next' ),
        items: slider.find( '.slider__item' ),
        wrapper: slider.find( 'ul' ),
        visible: 3,
        indent: 0
    } );

    t.speed = 0;

    $('.slider__prev').trigger('click');

    t.speed = 600;

} );

var AresSlider2 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items,
        wrapper: params.wrapper
    };
    this.action = false;
    this.duration = params.duration || 6000;
    this.itemWidth = params.itemWidth || this.elems.items.eq( 0 ).width();
    this.indent = params.indent || 0;
    this.active = 0;
    this.speed = params.speed || 600;
    this.visible = params.visible || 3;

    this.init();
};
AresSlider2.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.normalWiew();
        self.core.controls();
        self.core.slideToNext();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            normalWiew: function(){
                var countItems = elems.items.length,
                    curIndex,
                    tempLeft = 0,
                    i,
                    points2 = $( '<ul class="slider__points"></ul>');

                if (flag) {
                    //for( i = 0; i < countItems; i++ ){
                    //    var way = elems.items.eq(i).attr('data-attr');
                    //    points2.append( '<li><img src="'+ way +'"></li>' );
                    //}
                    self.obj.append( points2 );
                    $('.slider__points li').eq(i-3).addClass('hide');
                    $('.slider__points li').eq(i-2).addClass('hide');
                    $('.slider__points li').eq(i-1).addClass('hide');
                } else{
                    //for( i = 0; i < countItems; i++ ){
                    //    var way = elems.items.eq(i).attr('data-attr');
                    //    points2.append( '<li><img src="'+ way +'"></li>' );
                    //}
                    self.obj.append( points2 );
                }



                elems.points = points2.find( 'li' );

                elems.points.eq( self.active+1 ).addClass( 'active' );

                self.step = self.itemWidth + self.indent;

                elems.items.width( self.itemWidth );
                elems.wrapper.width( ( self.itemWidth * self.visible ) + ( self.indent * ( self.visible - 1 ) ) );

                elems.wrapper.css({ left: '50%', marginLeft: - elems.wrapper.width()/2 });

                self.maxHeight = 0;
                elems.items.each( function(){
                    var curItem = $( this );

                    if( curItem.height() > self.maxHeight ){
                        self.maxHeight = curItem.height()
                    }
                } );
                //elems.wrapper.height( self.maxHeight );

                if( countItems <= self.visible){
                    elems.items.each( function(){
                        $( this ).css( { left: tempLeft } );
                        tempLeft += self.step;
                    } );
                    elems.btnNext.css( { display: 'none' } );
                    elems.btnPrev.css( { display: 'none' } );
                } else {
                    for( i = self.active; i < ( self.active + self.visible ); i++ ) {
                        curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

                        elems.items.eq( curIndex ).css( {
                            left: tempLeft
                        } );

                        tempLeft += self.step;

                    }
                }

                elems.items.eq( curIndex).removeClass('active');
                elems.items.eq( self.active+1).addClass('active');

            },
            slideToNext: function(){
                self.timer = setTimeout( function(){
                    elems.btnNext.trigger( 'click' );
                }, self.duration );
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
                elems.points.on( {
                    'click': function(){
                        var curItem = $( this),
                            countItems = elems.items.length,
                            activeIndex;

                        if( !curItem.hasClass( 'active' ) ){

                            $(elems.items).each(function(){
                               var thisElem = $(this);
                                if (thisElem.hasClass('active')) {
                                    activeIndex = thisElem.index()
                                }
                            });

                            if (curItem.index() > activeIndex) {
                                for( var i = 0; i < (curItem.index() - activeIndex); i++ ) {
                                    timeoutNext(i);
                                }
                            } else {
                                for( var i = 0; i < (activeIndex - curItem.index()); i++ ) {
                                    timeoutPrev(i);
                                }
                            }
                        }

                        function timeoutNext(y){
                            setTimeout( function(){
                                elems.btnNext.trigger( 'click' );
                            }, (self.speed+50)*y );
                        }
                        function timeoutPrev(y){
                            setTimeout( function(){
                                elems.btnPrev.trigger( 'click' );
                            }, (self.speed+50)*y );
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

        clearTimeout( self.timer );
        for( i = self.active; i < ( self.active + self.visible + 1 ); i++ ) {
            curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

            if( i == self.active + self.visible ) {
                elems.items.eq( curIndex ).css( { left: self.visible * self.step } );
            }
            elems.items.eq( curIndex ).animate( {
                left: tempLeft
            }, self.speed );

            tempLeft += self.step;


            elems.items.eq( curIndex).removeClass('active');
            elems.points.removeClass('active');

            if (elems.items.eq( self.active+2).length > 0) {
                elems.items.eq( self.active+2).addClass('active');
                elems.points.eq( self.active+2).addClass('active');
                if (elems.points.eq( self.active+2).hasClass('hide')){
                    elems.points.removeClass('active');
                    elems.points.eq( self.active-1).addClass('active');
                }
            } else {
                if (elems.items.eq(self.active+1).length > 0) {
                    elems.items.eq(0).addClass('active');
                    elems.points.eq(0).addClass('active');
                    if (elems.points.eq( 0).hasClass('hide')){
                        elems.points.removeClass('active');
                        elems.points.eq( 1).addClass('active');
                    }
                } else {
                    elems.items.eq(1).addClass('active');
                    elems.points.eq(1).addClass('active');
                    if (elems.points.eq(1).hasClass('hide')){
                        elems.points.removeClass('active');
                        elems.points.eq( 2).addClass('active');
                    }
                }
            }
        }
        setTimeout( function(){
            self.action = false;
            self.active = ( self.active + 1 == elems.items.length )?0 : self.active + 1;
            self.core.slideToNext();

        }, self.speed );

    },
    slidePrev: function() {
        var self = this,
            elems = self.elems,
            tempLeft = 0,
            i;

        self.action = true;
        clearTimeout( self.timer );
        for( i = self.active - 1; i < ( self.active + self.visible ); i++ ) {
            curIndex = ( i >= elems.items.length )? i - elems.items.length : i;

            if( i == self.active - 1 ) {
                elems.items.eq( curIndex ).css( { left: -self.step } );
            }
            elems.items.eq( curIndex ).animate( {
                left: tempLeft
            }, self.speed );

            tempLeft += self.step;


            elems.items.eq( curIndex).removeClass('active');
            elems.points.removeClass('active');

            elems.items.eq( self.active).addClass('active');
            elems.points.eq( self.active).addClass('active');
            if (elems.points.eq( self.active).hasClass('hide')){
                elems.points.removeClass('active');
                elems.points.eq( self.active-3).addClass('active');
            }


        }
        setTimeout( function(){
            self.action = false;
            self.active = ( self.active - 1 == -1 )?elems.items.length-1 : self.active - 1;
            self.core.slideToNext();
        }, self.speed );

    }
}
