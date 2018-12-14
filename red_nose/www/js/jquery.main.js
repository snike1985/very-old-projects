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

    if($('.ban_slide').length) {
        var curElem = $('.ban_slide img'),
            kolElem = $('.ban_slide img').length,
            k = 0;
        curElem.eq(0).addClass('active');

        if(kolElem > 0) {
            setInterval(function(){
                $('.ban_slide img').removeClass('active');
                curElem.eq(k).addClass('active');
                if(k < kolElem - 1) {
                    k++;
                } else {
                    k = 0;
                }
            }, 4000);
        }
    }

    var direction = 0,
        min = 1,
        max = 9,
        curPos = 9,
        isActive = true,
        flag = true;

    (function step() {
        setTimeout(function(){
            if($('.animation').length) {
                render2();
            }
            render();
            requestAnimationFrame(step);
        },30)

    })();

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if($('.animation').length) {

        var animNum = 1;

        animNum = getRandomInt(1,4);

        var direction2 = 1,
            min2 = 1,
            max2 = 9,
            curPos2 = 1,
            isActive2 = true,
            flag2 = true,
            path = 'button';

        if(animNum==1) {
            max2 = 32;
            path = 'ball';
            $('.animation').addClass('ball');
            $('.animation').css({
                width: 564,
                height: 200
            });
        }

        if(animNum==2) {
            max2 = 146;
            path = 'pump';
            $('.animation').addClass('pump');
            $('.animation').css({
                width: 400,
                height: 200
            });
        }

        if(animNum==3) {
            max2 = 23;
            path = 'smash';
            $('.animation').addClass('smash');
            $('.animation').css({
                width: 580,
                height: 200
            });
        }

        if(animNum==4) {
            max2 = 108;
            path = 'yoyo';
            $('.animation').addClass('yoyo');
            $('.animation').css({
                width: 300,
                height: 500
            });
        }

        $('.red-button').css({ display: 'none' });


        function render2(){
            if(isActive2) {
                if(direction2){
                    if(curPos2 < max2) {
                        curPos2++;
                    } else {
                        isActive2 = false;
                    }
                } else {
                    if(curPos2 > min2) {
                        curPos2--;
                    } else {
                        isActive2 = false;
                    }
                }
                $('.animation').css({ background: 'url("img/' + path + '/'+ curPos2 +'.png") no-repeat top right' });
                if(curPos2==max2){
                    $('.animation').css({ display: 'none' });
                    $('.red-button').css({ display: 'block' });

                    if(animNum==1) {
                        $('.animation').removeClass('ball');
                    }

                    if(animNum==2) {
                        $('.animation').removeClass('pump');
                    }

                    if(animNum==3) {
                        $('.animation').removeClass('smash');
                    }

                    if(animNum==4) {
                        $('.animation').removeClass('yoyo');
                    }

                }
            }
        }

    }

    function render(){
        if(isActive) {
            if(direction){
                if(curPos < max) {
                    curPos++;
                } else {
                    isActive = false;
                }
            } else {
                if(curPos > min) {
                    curPos--;
                } else {
                    isActive = false;
                }
            }
            $('.red-button').css({ background: 'url("img/button/'+ curPos +'.png")' });
        }
    }

    setTimeout(function(){
        if(flag){
            isActive = true;
            direction = 1;
        }
    }, 3000);

    $('body').prepend('<nav class="fixed-menu"><div></div></nav>');
    $('.fixed-menu > div').append($('.header__menu a').clone());
    $('.fixed-menu a').eq($('.fixed-menu a').length - 1).addClass('help');

    if ($(window).scrollTop() > 200) {
        $('.fixed-menu').fadeIn(600);
    }

    $(window).on({
        'scroll':function(){
            if ($('.animation').length) {
                if ($('.animation').css('display')=='none') {
                    isActive = true;
                    direction = 1;
                }
            } else {
                    isActive = true;
                    direction = 1;
                }

            if ($(window).scrollTop() > 200) {
                $('.fixed-menu').stop(false,true).fadeIn(600);
            } else {
                $('.fixed-menu').stop(false,true).fadeOut(600);
            }
        }
    });

    $('.red-button').on({
        'mouseover':function(){
            isActive = true;
            direction = 0;
            flag = false;
        },
        'mouseout':function(){
            isActive = true;
            direction = 1;
            flag = true;
        }
    });

    $('.tabs dt').eq(0).addClass('active');
    checkTab();

    function checkTab(){
        var activeBlock = $('.tabs dt.active + dd');

        $('.tabs dd').fadeOut();
        activeBlock.fadeIn();
        $('.tabs').css( { height: activeBlock.outerHeight() + 30 } );

    };

    $(".tabs dt").on({
        'click': function(){
            var curElem = $( this );

            $('.tabs dt').removeClass('active')
            curElem.addClass('active')
            checkTab();
        }
    });

    $('.thanks-list__more').on({
        'click':function(){
            var curElem = $(this);

            if (curElem.hasClass('open')) {
                curElem.removeClass('open');
            } else {
                curElem.addClass('open');
            }

            var curElem = $(this).parent().find('dl');
            if (curElem.hasClass('visible')) {
                curElem.animate({ height: 294});
                curElem.removeClass('visible');
            } else {
                curElem.addClass('visible');
                curElem.css({height: 'auto'});
                var curElemHeight = curElem.height();
                curElem.css({height: 294});
                curElem.removeClass('visible');
                curElem.animate({ height: curElemHeight}, function(){
                    curElem.css({height: 'auto'});
                });
                curElem.addClass('visible');
            }

            return false;
        }
    });

    var player = $('.player audio')[0];

    $(".play").on({
        'click': function(){
            var curElem = $(this);

            if (curElem.hasClass('active')){
                player.pause();
                curElem.removeClass('active');
            } else{
                player.play();
                curElem.addClass('active');
            }
        }
    });

    var kol = 0;

    $(".volume").on({
        'click': function(){
            var curElem = $(this);

            if (player.volume < 1) {
                player.volume = player.volume + 0.25;
                curElem.removeClass('volume-pos' + kol);
                kol++;
                curElem.addClass('volume-pos' + kol);
            } else {
                player.volume = 0;
                curElem.removeClass('volume-pos' + kol);
                kol = 1;
                curElem.addClass('volume-pos' + kol);
            }
        }
    });

    if ($('.player audio').length) {
        player.addEventListener("timeupdate", function() {
            var curElem = $('.progress'),
                curMaxWidth = curElem.parent().width();
            $('.progress').css({ width: curMaxWidth/player.duration*player.currentTime });
            if(player.currentTime == player.duration){
                player.pause();
                $('.play').removeClass('active');
            }
        }, false);
    }

    $(".duration").on({
        'click': function(e){
            var x = e.pageX,
                curElem = $(this),
                curWidth = curElem.width(),
                progressElem = curElem.find('.progress'),
                progress;
            progress = x - curElem.offset().left;
            progressElem.css({ width: progress });
            player.currentTime = player.duration/curWidth*progress;
        }
    });

    var flag = false;

    $(".play-forward").on({
        //'mousedown': function(){
        //    player.playbackRate = 3;
        //},
        //'mouseup': function(){
        //    player.playbackRate = 1;
        //},
        'click': function(){
            player.currentTime = player.currentTime + player.duration/100*10;
        }
    });

    $(".play-back").on({
        'click': function(){
            player.currentTime = player.currentTime - player.duration/100*10;
        }
    });

} );