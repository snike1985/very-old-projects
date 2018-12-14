$(function(){
    $(function(){
        if ($('.menu').length) {
            drawBlock($('.menu'));
        }
    } );

    function drawBlock(curElem){
        var paper = Raphael(curElem[0],curElem.width(), curElem.height()),
            cordsMas = $.parseJSON(curElem.attr('data-attr')),
            hrefMas = $.parseJSON(curElem.attr('data-href')),
            arrStr = [],
            backgroundElem = 'url("img/menu.png")',
            activeElem = curElem.attr('data-active');

        if (activeElem > 0){
            backgroundElem = 'url("img/menu' + parseInt(curElem.attr('data-active')) +'.png")';
            $('.menu').css({ 'background-image': backgroundElem });
        }

        $.each(cordsMas.arr, function(y){
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

        var canvas = [];
        $.each(arrStr, function(i){
            canvas[i] = paper.path(this);
            canvas[i].idItem = i;
            canvas[i].attr({
                fill: 'rgba(255,255,255,0)',
                stroke: 'rgba(255,255,255,0)',
                "stroke-width": 4,
                opacity: 0,
                "cursor": "pointer",
                "r": "20"
            });
            canvas[i].mouseover(function(){
                if ((activeElem == (i+1)) || (activeElem == 0) || (!activeElem)) {
                    $('.menu').css({ 'background-image': 'url("img/menu' + (i+1) +'.png")' });
                } else {
                    if (activeElem > (i+1)) {
                        $('.menu').css({ 'background-image': 'url("img/menu' + (i+1) + '_' + activeElem +'.png")' });
                    } else {
                        $('.menu').css({ 'background-image': 'url("img/menu' + activeElem + '_' + (i+1) +'.png")' });
                    }
                }
            });

            canvas[i].mouseout(function(){
                $('.menu').css({ 'background-image': backgroundElem });
            });

            canvas[i].click(function(){
                if (i > 4) {
                    window.open(hrefMas.arr[i]);
                } else {
                    location.replace(hrefMas.arr[i]);
                }
            });

        });

    };

} );
