$(function(){

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.site__header-links__glasses').on({
        'click': function(){
            $('.site').addClass('site_vision');
            return false;
        }
    });

    $('.site__header-links__original').on({
        'click': function(){
            $('.site').removeClass('site_vision');
            return false;
        }
    });

    var niceScroll = $(".scroll-wrap");

    $('.site__header-links__glasses').on({
        'click': function() {
            niceScroll.niceScroll({
                zindex: '1',
                autohidemode: 'false',
                railvalign: 'top'
            });
            $('.scroll-wrap').getNiceScroll().resize();
        }
    });

    $('.site__header-links__original').on({
        'click': function() {
            //$('.scroll-wrap').getNiceScroll().hide();
        }
    });

    //niceScroll.niceScroll({
    //    cursorwidth: '2',
    //    cursorborder: '1px solid #96e2cb',
    //    cursorcolor: '#007c89',
    //    background: '#96e2cb',
    //    cursorborderradius: '0',
    //    zindex: '5',
    //    autohidemode: 'false',
    //    horizrailenabled: 'true',
    //    railvalign: 'top'
    //});

} );