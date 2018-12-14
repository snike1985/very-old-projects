$(function(){

    var hasWebRTC = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    if (hasWebRTC) {

        var widthMap = '100%',
            heightMap = '100%';

    } else {

        var widthMap = '100%',
            heightMap = $('#map').width() * 883/694;

        $(window).on({
            'resize':function(){

                heightMap = $('#map').width() * 883/694;

                $('svg').css({'height': heightMap});
            }
        });
    }

    var r = Raphael('map', widthMap, heightMap),
        attributes = {
            'stroke': '#fff',
            'stroke-width': 3,
            'stroke-linejoin': 'round',
            'cursor': 'pointer'
        },
        arr = new Array(),
        anim = new Array();

    $('svg').each(function () { $(this)[0].setAttribute('viewBox', '10 10 1020 1230') });

    for (var country in paths) {

        var obj = r.path(paths[country].path);

        obj.attr(attributes);
        obj.attr('fill', paths[country].fill);

        arr[obj.id] = country;

        obj
            .hover(function(){
                this.animate({
                    fill: paths[arr[this.id]].fillHover
                }, 0);
            }, function(){
                this.animate({
                    fill: paths[arr[this.id]].fill
                }, 0);
            })
            .click(function(){
                location.replace(paths[arr[this.id]].href)
            });

    }

    $('svg path').each(function (i) {
        var t = r.text(),
            circleElem = r.circle();

        if (paths[arr[i]].x) {
            t.attr({
                'x': parseFloat(paths[arr[i]].x),
                'y': parseFloat(paths[arr[i]].y),
                'text': paths[arr[i]].name,
                'cursor': 'pointer'
            });

            circleElem.attr({
                'cx': parseFloat(paths[arr[i]].x),
                'cy': parseFloat(paths[arr[i]].y) - 10,
                'stroke': '#fff',
                'stroke-width': 0,
                'r': 5,
                'fill': '#05f209',
                'cursor': 'pointer'
            });

        } else {

            t.attr({
                'x': parseFloat(this.getBBox().x + this.getBBox().width/2),
                'y': parseFloat(this.getBBox().y + this.getBBox().height/2) + 5,
                'text': paths[arr[i]].name,
                'cursor': 'pointer'
            });

            circleElem.attr({
                'cx': parseFloat(this.getBBox().x + this.getBBox().width/2),
                'cy': parseFloat(this.getBBox().y + this.getBBox().height/2) - 5,
                'stroke': '#fff',
                'stroke-width': 0,
                'r': 5,
                'fill': '#05f209',
                'cursor': 'pointer'
            });

        }

        if (paths['area' + (i+1)].type == 'on') {
            //circleElem.attr({
            //    'fill': '#05f209'
            //});
            anim[i] = 'no anim';
        } else {
            //circleElem.attr({
            //    'fill': '#05f209'
            //});
            anim[i] = 'anim';
        }

        $(this).attr('class', function(){
            return 'area' + (i+1);
        })

    });

    $('svg text').each(function(i){
        var curElem = $(this);

        curElem.attr('class', function(){
            return 'area' + (i+1);
        });

    });

    $('svg text').on({
        'mouseover': function(){
            var curClass = $(this).attr('class');

            $('path.' + curClass).css({
                fill: paths[curClass].fillHover
            });
        },
        'mouseout': function(){
            var curClass = $(this).attr('class');

            $('path.' + curClass).css({
                fill: ''
            });
        },
        'click': function(){
            var curClass = $(this).attr('class');

            location.replace(paths[curClass].href)
        }
    });

    $('svg circle').each(function(i){
        var curElem = $(this);

        curElem.attr('class', function(){
            return 'area' + (i+1);
        });

    });

    var flag = true;

    setInterval(function(){

        if (flag) {
            flag = false;
        } else {
            flag = true;
        }

        $('svg circle').each(function(i){
            var curElem = $(this);

            if (anim[i] == 'anim') {
                if (flag) {
                    curElem.attr({
                        'fill': '#05f209'
                    });
                } else {
                    curElem.attr({
                        fill: '#1147d9'
                    });
                }
            }

        });

    }, 300);

    $('svg circle').on({
        'mouseover': function(){
            var curClass = $(this).attr('class');

            $('path.' + curClass).css({
                fill: paths[curClass].fillHover
            });
        },
        'mouseout': function(){
            var curClass = $(this).attr('class');

            $('path.' + curClass).css({
                fill: ''
            });
        },
        'click': function(){
            var curClass = $(this).attr('class');

            location.replace(paths[curClass].href)
        }
    });

});
