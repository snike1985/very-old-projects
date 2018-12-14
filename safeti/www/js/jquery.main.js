$(function(){
    if ($('.appts').length) {
        drawBlock($('.appts'));
        roomCoordinats($('.appts > span'));
    }
    if ($('.house').length) {
        drawBlock($('.house'));
        roomCoordinats($('.house > span'));
    }
    if ($('.office').length) {
        drawBlock($('.office'));
        roomCoordinats($('.office > span'));
    }    
} );

function roomCoordinats(curElem){
    $.each(curElem, function(){
        var elemTop = $(this).attr('data-coords').split( ' ' )[ 0 ],
            elemLeft = $(this).attr('data-coords').split( ' ' )[ 1 ];
        $(this).css({
            top: parseInt(elemTop),
            left: parseInt(elemLeft)
        });
    });
};

function drawBlock(curElem){
    var paper = Raphael(curElem[0],curElem.width(), curElem.height()),
        cordsMas = $.parseJSON(curElem.attr('data-attr')),
        arrStr = [];

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
            fill: 'rgba(179,21,27,0.7)',
            stroke: '#db8203',
            "stroke-width": 4,
            opacity: 0,
            "r": "20"
        });
        canvas[i].mouseover(function(){
            $.each(curElem.find('span'), function(){
                var lineLength = ('room' + i).length;
                if (this.className.indexOf('room' + i)>=0 && this.className.length == lineLength) {
                    $(this).css({ display: 'block'});
                }
            });
            this.attr({
                opacity: 1
            });
        });

        canvas[i].mouseout(function(){
            $.each(curElem.find('span'), function(){
                var lineLength = ('room' + i).length;
                if (this.className.indexOf('room' + i)>=0 && this.className.length == lineLength) {
                    $(this).css({ display: 'none'});
                }
            });

            this.attr({
                opacity: 0
            });
        });

        curElem.find('span').on({
            'mouseover':function(){
                if (this.className.indexOf('room' + i)>=0) {
                    curElem.find('.room' + i).css({ display: 'block'});
                    canvas[i].attr({
                        opacity: 1
                    });
                }
            },
            'mouseout':function(){
                curElem.find('.room' + i).css({ display: 'none'});
                canvas[i].attr({
                    opacity: 0
                });
            }
        });

    });
};
