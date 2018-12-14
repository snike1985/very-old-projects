window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

$(function(){

    (function step() {
        timer();
        requestAnimationFrame(step);
    })();

    function timer(){
        var now = new Date(),
            milliseconds = now.getMilliseconds()
            seconds = now.getSeconds(),
            minutes = now.getMinutes(),
            hours = now.getHours();

        //if (flag) {
        //    k++
        //}

        //if (seconds == 0) {
        //    if (flag) {
        //        flag = false;
        //        $('.clock__seconds').css({
        //            '-webkit-transition': 'transform 0s ease',
        //            'transition': 'transform 0s ease'
        //        });
        //    } else {
        //        $('.clock__seconds').css({
        //            '-webkit-transition': 'transform 0.3s ease',
        //            'transition': 'transform 0.3s ease'
        //        });
        //    }
        //} else {
        //    flag = true;
        //}

        $('.clock__seconds').css({
            '-webkit-transform': 'rotate(' + seconds*6 + 'deg)',
            'transform': 'rotate(' + seconds*6 + 'deg)'
        });

        $('.clock__minutes').css({
            '-webkit-transform': 'rotate(' + minutes*6 + 'deg)',
            'transform': 'rotate(' + minutes*6 + 'deg)'
        });

        $('.clock__hours').css({
            '-webkit-transform': 'rotate(' + hours*15 + 'deg)',
            'transform': 'rotate(' + hours*15 + 'deg)'
        });
    }

} );
