$(function(){
    $('.header__menu div').on({
        'mouseover':function(){
            var curElem = $(this),
                subElem = curElem.find('.header__submenu'),
                parentsElem = curElem.parents('.header__menu');
            if ((curElem.offset().left +subElem.width() - parentsElem.offset().left) > parentsElem.width()) {
                subElem.css({
                    right: 0,
                    left: 'auto'
                });
            }
        }
    });

    checkTab();
    function checkTab(){
        var activeBlock = $('.kartochka dt.active + dd');

        $('.kartochka dd').css( { display: 'none' } );
        activeBlock.css( { display: 'block' } );
        $('.kartochka dl').css( { height: activeBlock.outerHeight() + 35 } );

    };

    $(".kartochka dt").on({
        'click': function(){
            var curElem = $( this );

            $('.kartochka dt').removeClass('active')
            curElem.addClass('active')
            checkTab();
        }
    });

    if ($('.pic__wrapper a').length) {
        $('.pic__wrapper a').fancybox();
    };

    if ($('.licenses a').length) {
        $('.licenses a').fancybox();
    };

    $('.licenses a').on({
        'click':function(){
            if(!$('#fancybox-outer a.print').length) {
                $('#fancybox-outer').append('<a href="javascript:window.print()" class="print">Распечатать</a>');
            }
        }
    });

    //$('.print').on({
    //    'click':function(){
    //        return false;
    //    }
    //});

    $.each( $('.popups'), function(){
        new Popup ( $(this) );
    } );

} );