$(function(){
    $('.lenta').on({
        'click':function(){
            $(this).css({ cursor: 'default' });
            $('.scissors').addClass('action');
            $('.incision').addClass('action');
            setTimeout(function(){
                $('.scissors').removeClass('action');
                $('.scissors').css({ display: 'none' });
                $('.lenta-left, .lenta-right').addClass('action');
                $('.lenta-wrap').fadeOut(1500);
            }, 3000);
        }
    });
} );
