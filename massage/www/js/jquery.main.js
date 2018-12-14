$(function(){

    $('.scroll-top').on({
        'click':function(){
            $('html, body').animate({scrollTop: 0}, 600);
        }
    });

    $(window).on({
        'scroll':function(){
            if($(window).scrollTop() > 200){
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
            if($(window).scrollTop() + $(window).height() > $('.site__footer').offset().top + 16) {
                $('.scroll-top').css({ bottom: $(window).scrollTop() + $(window).height() - $('.site__footer').offset().top + 43 });
            } else {
                $('.scroll-top').css({ bottom: '43px' });
            }
        }
    });

    $(".fancybox").fancybox();

} );