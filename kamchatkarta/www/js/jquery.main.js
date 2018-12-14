$(function(){

    zoomWin();
    $(window).resize(function(){
        zoomWin();
    });

    function zoomWin() {
        if ($(window).height() > $('.site').height()) {
            $('.site').css({
                position: 'absolute',
                top: ($(window).height()-$('.site').height())/2,
                left: ($(window).width()-$('.site').width())/2
            });
            console.log($(window).height()-$('.site').height());
        } else {
            $('.site').css({
                position: 'relative',
                top: 'auto',
                left: 'auto'
            });
        }
    }
} );