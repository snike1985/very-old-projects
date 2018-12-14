$(function(){
    $.each( $('.popups'), function(){
        new Popup ( $(this) );
    } );

    $('.popup__content dt').eq(0).addClass('active');

    checkTab();
    function checkTab(){
        var activeBlock = $('.popup__content dt.active + dd');

        $('.popup__content dd').css( { display: 'none' } );
        activeBlock.css( { display: 'block' } );

    };

    $(".popup__content dt").on({
        'click': function(){
            var curElem = $( this );

            $('.popup__content dt').removeClass('active');
            curElem.addClass('active');
            checkTab();
        }
    });
} );