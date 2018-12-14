var masCanvas = [],
    kol = 0,
    curX = 0,
    curY = 0,
    arrStr = [],
    arrPoligon = [],
    poligon = {},
    cordsMas = [],
    msg,
    bname,
    blockNum = 0,
    bnameNum = 0,
    storeyNum = 0;

$(function(){

    if ($(".contacts__map").length) {

        var myMap,
            coordMas=$(".contacts__map").attr('data-coordinates').split(', ')

        function init () {
            myMap = new ymaps.Map('map', {
                center:[coordMas[0], coordMas[1]],
                zoom: 15
            });

            myMap.controls
                .add('zoomControl', { left: 5, top: 50 })
                .add('typeSelector')
                .add('mapTools', { left: 5, top: 5 });

            myMap.geoObjects.add(new ymaps.Placemark([coordMas[0], coordMas[1]]));

            myMap.geoObjects.add(new ymaps.Placemark(
                [coordMas[0], coordMas[1]],
                {
                    balloonContentBody: 'ОФИС',
                    hintContent: "Описание"
                }
            ));

        }

        ymaps.ready(init);
    }

    if($('.tabs').length){

        $('.tabs dd').css({ display: 'none' });

        if($('.tabs dt.active').length){
            $('.tabs dt.active').next().css({ display: 'block' });
        } else{
            $('.tabs dt').eq(0).addClass('active');
            $('.tabs dt').eq(0).next().css({ display: 'block' });
        }

        $(window).on({
            'load':function() {
                checkTab();
            }
        });

    }

    function checkTab(){
        var activeBlock = $('.tabs dt.active + dd');

        $('.tabs dd').css( { display: 'none' } );
        activeBlock.css( { display: 'block' } );
        $('.tabs').css( { height: activeBlock.outerHeight() + 59 } );

    };

    $(".tabs dt").on({
        'click': function(){
            var curElem = $( this );

            $('.tabs dt').removeClass('active')
            curElem.addClass('active')
            checkTab();
        }
    });


    $(".call-back").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.find('fieldset input').val('');
            curElem.fadeIn(300);
            return false;
        }
    });

    $(".popup__send, .popup__close, .popup").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeOut(300);
        }
    });

    $(".popup__wrap").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    if ($('.house').length) {
        $.each($('.house__blocks'), function(){
            cordsMas = $.parseJSON($(this).attr('data-attr'));
            createArr(cordsMas.arr);
            drawBlock($(this));
        })
        $.each($('.house__storey'), function(){
            cordsMas = $.parseJSON($(this).attr('data-attr'));
            createArr(cordsMas.arr);
            drawBlock($(this));
        })
    }

    $('.house__wrap').on({
        'mousemove': function(e){
            curX = e.pageX;
            curY = e.pageY;
        }
    });

    $('.site').on({
        'click': function(){
            var curElem = $(".house__popup" );

            if (curElem.hasClass('open')) {
                curElem.removeClass('open');
                $('.house__select-storey').removeClass('close');

                $('.house__popup svg').remove();

            }
        }
    });

    $(".house__popup").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

} );

function createArr(mas){
    $.each(mas, function(y){
        arrStr[y]='M';
        $.each(this, function(i){
            var curElem = this;
            if (i) {
                arrStr[y]+= 'L';
            }

            arrStr[y]+=(curElem.x + ' ' + curElem.y + ' ');
        });
        arrStr[y]+='Z';
    });
}

function drawBlock(curElem){
    var paper = Raphael(curElem[0],curElem.width(), curElem.height());

    var curFill = 'rgba(255,222,122,0.45)';

    if(curElem.hasClass('house__blocks')) {
        curFill = 'rgba(255,222,122,0.4)';
        poligon = cordsMas;
    }

    if(curElem.hasClass('house__popup-storey')) {
        curFill = 'rgba(231,231,199,0.5)';
        poligon = cordsMas;
    }

    if(curElem.hasClass('house__popup-blocks')) {
        curFill = 'rgba(231,231,199,0.5)';
        poligon = cordsMas;
    }

    kol = 0;

    var canvas = [];
    $.each(arrStr, function(i){
        canvas[i] = paper.path(this);
        canvas[i].idItem = i;
        canvas[i].attr({
            fill: curFill,
            stroke: '#db8203',
            "stroke-width": 0,
            opacity: 0,
            "r": "20",
            cursor: 'pointer'
        });


        if(!curElem.hasClass('house__blocks')) {

            canvas[i].mouseover(function(){

                //-----------------------------------
                if (i==9) {
                    return false;
                    //    кликая по 11-ому этажу ничего не делаем
                }
                //-----------------------------------

                this.attr({
                    opacity: 1
                });

                if (curElem.hasClass('house__storey')) {
                    $(window).on({
                        'mousemove':function(){
                            proverka(curX, curY);
                        }
                    });
                }

            });

            canvas[i].mouseout(function(){

                this.attr({
                    opacity: 0
                });

                if (curElem.hasClass('house__storey')) {
                    $(window).on({
                        'mousemove':function(){
                            $.each($('.house__blocks path'), function(){

                                $(this).css({ 'opacity': 0 });

                            });
                        }
                    });
                }

            });

            if (curElem.hasClass('house__popup-blocks')) {
                canvas[i].click(function(){

                    bname = $(this).parents('.house__blocks').attr('data-name');

                    blockClick(i);

                });

            }

            if (curElem.hasClass('house__popup-storey')) {
                canvas[i].click(function(){

                   flatClick(i);

                });

            }

            if (curElem.hasClass('house__storey')) {

                canvas[i].click(function(){

                    //-----------------------------------
                    if (i==9) {
                        return false;
                    //    кликая по 11-ому этажу ничего не делаем
                    }
                    //-----------------------------------

                    $.each($('.house__blocks path'), function(y){

                        if ($(this).css('opacity') > 0) {
                            bname = $(this).parents('.house__blocks').attr('data-name');
                            bnameNum = y;
                        }

                    });

                    setTimeout(function(){
                        $('.spinner').addClass('open');
                        $('.house__popup').addClass('open');
                        $('.house__select-storey').addClass('close');
                    }, 10);

                    storeyNum = i + 2;

                    $.ajax({
                        url: $('.house').attr('data-action'),
                        data: {
                            storey: storeyNum
                        },
                        dataType: 'json',
                        type: "get",
                        success: function (m) {
                            msg = m;

                            //createFlats(msg, bname);
                            blockClick(bnameNum);
                            $('.spinner').removeClass('open');

                        },
                        error: function (XMLHttpRequest) {
                            if (XMLHttpRequest.statusText != "abort") {
                                alert("ERROR!!!");
                            }
                        }
                    });

                });
            }

        }


        if(curElem.hasClass('house__popup-storey')) {
            masCanvas[kol] = canvas[i];

            ++kol;

            if (msg.blocks[blockNum].flats[i].flat_saled == 'true') {
                canvas[i].attr({
                    opacity: 1,
                    fill: 'rgba(247,89,89,0.5)'
                });

                canvas[i].mouseout(function(){

                    this.attr({
                        opacity: 1
                    });


                });
            }

        }



    });

    cordsMas = [];
    arrStr = [];

};

function flatClick(i) {

    $.each($('.house__popup-storey path'), function(){

        $(this).attr('class', '');

    });
    $('.house__popup-storey path').eq(i).attr('class', function(){
        return 'active';
    });

    $('.house__popup-flat img').attr('src', '');
    $('.house__popup-flat img').attr('src', msg.blocks[blockNum].flats[i].flat_image);


    if (msg.blocks[blockNum].flats[i].flat_saled == 'true') {
        $('.house__popup-saled dd').addClass('red');
        $('.house__popup-saled dd').text('ПРОДАНА');
    } else {
        $('.house__popup-saled dd').removeClass('red');
        $('.house__popup-saled dd').text('СВОБОДНА');
    }

    $('.house__popup-price dd span').text(msg.blocks[blockNum].flats[i].flat_price);

    $('.house__popup-title strong').text(msg.blocks[blockNum].flats[i].flat_name);
    $('.house__popup-squareAll dd span').text(msg.blocks[blockNum].flats[i].flat_square_all);
    $('.house__popup-squareLive dd span').text(msg.blocks[blockNum].flats[i].flat_square_live);
}

function blockClick(i){

    $('.house__popup-storey img').attr('src', msg.blocks[i].storey_image);
    $('.house__popup-numBlock').text($('.house__blocks').eq(i).attr('data-name'));
    blockNum = i;

    masCanvas = [];

    createFlats(msg, msg.blocks[blockNum].block_name);

    $('.house__popup-numStorey').text(storeyNum);


    $('.house__popup-blocks path').eq(blockNum).attr('class', function(){
        return 'active';
    });

    //masCanvas[0].attr({
    //    opacity: 1
    //});

    flatClick(0);

}

function createFlats(jsonElem, blockName){

    $('.house__popup svg').remove();

    $('.house__popup img').attr('src', '');

    $('.house__popup-blocks img').attr('src', jsonElem.blocks_image);
    var mas = [],
        masFlats =[];
    $.each(jsonElem.blocks, function(i){
        var curElem = this;
        mas[i] = jsonElem.blocks[i].coordinates;

        if (curElem.block_name == blockName) {
            //определяем активный блок

            $('.house__popup-storey img').attr('src', jsonElem.blocks[i].storey_image);

            $.each(jsonElem.blocks[i].flats, function(y){
                var curElem = this;

                masFlats[y] = jsonElem.blocks[i].flats[y].coordinates;


            });

        }

    });

    createArr(mas);
    drawBlock($('.house__popup-blocks'));

    createArr(masFlats);
    drawBlock($('.house__popup-storey'));

}

function proverka(x, y){

    $.each($('.house__blocks path'), function(){

        var curLeft = $(this).offset().left,
            curRight = curLeft + this.getBBox().width;

        if ((curX > (curLeft - 10))&&(curX < curRight)) {
            $(this).css({ 'opacity': 1 });
        } else {
            $(this).css({ 'opacity': 0 });
        }

    });
};

