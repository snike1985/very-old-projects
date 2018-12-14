$(function(){

    $('.close_back').click( function(){
        $('.pop_back, .pop_back2, .fead_back').fadeOut();
    });

    $('.enter_but').click( function(){
        $('.pop_back').fadeIn();
        return false;
    });

    $('.close_pop').click( function(){
       $('.pop_back, .pop_back2, .fead_back').fadeOut();
    });

    $('.choose_town').click( function(){
        $('.pop_back2').fadeIn();
        return false;
    });

    $('.close_object').click( function(){
       $(this).parent().fadeOut();
    });

    $('.day_container a').click( function(){
        $('.day_container a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

} );