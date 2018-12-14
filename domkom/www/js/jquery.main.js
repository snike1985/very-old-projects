$(function(){

    $("body").on(
        'click', '.call-back__form input[type="submit"]', function(){
            alert(1);
            return false;
        });

        jQuery(".gallery").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev"
     });



    $("body").on(
        'click', '.call-back', function(){
            var curElem = $( this );
            curElem.find('.call-back__form').fadeIn(300);
            return false;
        });
    $("body").on(
        'mouseleave', '.call-back', function(){
            var curElem = $( this );
            curElem.find('.call-back__form').fadeOut(300);
            return false;
        });

    $("a.footer__up").click(function(){
        $('body,html').animate({"scrollTop":0},"slow");
        return false;
    });

    var $header = $("header"),
        $clone = $header.before($header.clone().addClass("clone"));

    $(window).on("scroll", function() {
        var fromTop = $(document).scrollTop();
        $("body").toggleClass("down", (fromTop > 1));
    });

} );

