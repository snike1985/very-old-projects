$(function(){

    var slider = $( '.slider' );
    new SnikeSlider( {
        obj: slider,
        btnPrev: slider.find( '.slider__prev' ),
        btnNext: slider.find( '.slider__next' ),
        items: slider.find( '.slider__item' ),
        colElem: slider.find('.slider__item').length,
        colHeight: 5,
        colWidth: 10,
        speed: 1000,
        duration: 3000,
        effects: 'effect4'
    } );

} );

var SnikeSlider = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items
    };
    this.action = false;
    this.active = 0;
    this.duration = params.duration || 6000;
    this.colElem = params.colElem;
    this.itemWidth = params.itemWidth || this.elems.items.eq( 0 ).width();
    this.colHeight = params.colHeight || 1;
    this.colWidth = params.colWidth || 1;
    this.speed = params.speed || 2000;
    this.tempElem = $('.tempElem');
    this.effects = params.effects;

    this.init();
};
SnikeSlider.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
        self.core.fragmentation();
        self.core.controls();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            build: function(){
                elems.items.eq(self.active).addClass('active');
            },
            fragmentation: function(){
                var heightElem = self.obj.height(),
                    widthElem = self.obj.width(),
                    heightMinElem = heightElem/self.colHeight,
                    widthMinElem = widthElem/self.colWidth,
                    topElem = 0,
                    leftElem = 0,
                    picWay = elems.items.eq(self.active).find('img').attr('src');

                for(i = 0; i < self.colHeight; i++){
                    for(j = 0; j < self.colWidth; j++){
                        var newBlock = $('<div class="tempElem"></div>');
                        newBlock.css( {
                            top: topElem,
                            left: leftElem,
                            backgroundPosition: '-' + leftElem +'px -'+ topElem +'px',
                            width: widthMinElem,
                            height: heightMinElem,
                            backgroundImage: 'url('+ picWay +')'
                        } );
                        self.obj.append(newBlock);
                        leftElem = leftElem + widthMinElem;
                    }
                    leftElem = 0;
                    topElem = topElem + heightMinElem;
                }

                self.tempElem = self.obj.find('.tempElem');
            },
            controls: function(){
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
    getRanndomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    slideNext:function(){
        var self = this,
            elems = self.elems,
            curElem = elems.items.eq(self.active);

        self.action = true;
        curElem.removeClass('active');
        if (self.active < (self.colElem - 1)) {
            self.active = self.active +1;
            elems.items.eq(self.active).addClass('active');
        } else {
            self.active = 0;
            elems.items.eq(self.active).addClass('active');
        }
        elems.items.eq(self.active).css({ display: 'none' });

        switch (self.effects) {
            case('effect1'):
                self.effect1();
                break;
            case('effect2'):
                self.effect2();
                break;
            case('effect3'):
                self.effect3();
                break;
            case('effect4'):
                self.effect4();
                break;
        }

        setTimeout(
            function(){
                elems.items.eq(self.active).fadeIn();
                self.tempElem.removeClass('rotating');
                self.action = false;
            },
            self.speed*2
        );
    },
    slidePrev:function(){
        var self = this,
            elems = self.elems,
            curElem = elems.items.eq(self.active);

        self.action = true;
        curElem.removeClass('active');
        if (self.active < 1) {
            self.active = self.colElem -1;
            elems.items.eq(self.active).addClass('active');
        } else {
            self.active = self.active - 1;
            elems.items.eq(self.active).addClass('active');
        }
        elems.items.eq(self.active).css({ display: 'none' });

        switch (self.effects) {
            case('effect1'):
                self.effect1();
                break;
            case('effect2'):
                self.effect2();
                break;
            case('effect3'):
                self.effect3();
                break;
            case('effect4'):
                self.effect4();
                break;
        }
    },
    effect1: function(){
        var self = this,
            elems = self.elems,
            curElem = elems.items.eq(self.active);

        self.tempElem.each(function(i){
            var curElem = $(this);
            var picWay = elems.items.eq(self.active).find('img').attr('src');
            setTimeout(function(){
                curElem.addClass('rotating effect1');
                curElem.css({
                    backgroundImage: 'url('+ picWay +')'
                });
            }, self.speed/(self.colHeight*self.colWidth+1)*i);
        });

        setTimeout(
            function(){
                elems.items.eq(self.active).fadeIn();
                self.tempElem.removeClass('rotating');
                self.tempElem.removeClass('effect1');
                self.action = false;
            },
            self.speed*2
        );
    },
    effect2: function(){
        var self = this,
            elems = self.elems,
            curElem = elems.items.eq(self.active);

        self.tempElem.each(function(i){
            var curElem = $(this);
            var picWay = elems.items.eq(self.active).find('img').attr('src');
            setTimeout(function(){
                curElem.addClass('rotating effect2');
                curElem.css({
                    backgroundImage: 'url('+ picWay +')'
                });
            }, self.speed/(self.colWidth)*(i % self.colWidth));
        });

        setTimeout(
            function(){
                elems.items.eq(self.active).fadeIn();
                self.tempElem.removeClass('rotating');
                self.tempElem.removeClass('effect2');
                self.action = false;
            },
            self.speed*2
        );
    },
    effect3: function(){
        var self = this,
            elems = self.elems,
            curElem = elems.items.eq(self.active);

        self.tempElem.each(function(i){
            var curElem = $(this);
            var picWay = elems.items.eq(self.active).find('img').attr('src');
            setTimeout(function(){
                curElem.addClass('rotating effect3');
                curElem.css({
                    backgroundImage: 'url('+ picWay +')'
                });
            }, self.speed/(self.colHeight*self.colWidth+1)*(i % self.colHeight));
        });

        setTimeout(
            function(){
                elems.items.eq(self.active).fadeIn();
                self.tempElem.removeClass('rotating');
                self.tempElem.removeClass('effect3');
                self.action = false;
            },
            self.speed*2
        );
    },
    effect4: function(){
        var self = this,
            elems = self.elems,
            curElem = elems.items.eq(self.active);

        self.tempElem.each(function(i){
            var curElem = $(this);
            var picWay = elems.items.eq(self.active).find('img').attr('src'),
                topTemp = curElem.offset().top - self.obj.offset().top,
                leftTemp = curElem.offset().left - self.obj.offset().left;

            curElem.addClass('rotating effect4');
            curElem.css({
                backgroundImage: 'url('+ picWay +')',
                left: self.getRanndomInt(0 - self.obj.offset().left, $(window).width() - self.obj.offset().left - curElem.height()),
                top: self.getRanndomInt(0 - self.obj.offset().top, $(window).height() - self.obj.offset().top - curElem.width())
            });

            setTimeout(
                function(){
                    curElem.css({
                        backgroundImage: 'url('+ picWay +')',
                        left: leftTemp,
                        top: topTemp
                    });
                },
                self.speed
            );

        });

        setTimeout(
            function(){
                elems.items.eq(self.active).fadeIn();
                self.tempElem.removeClass('rotating');
                self.tempElem.removeClass('effect4');
                self.action = false;
            },
            self.speed*2
        );
    }
};