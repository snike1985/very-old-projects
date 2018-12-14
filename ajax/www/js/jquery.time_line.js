$(function(){


    $('.time_line').css({'display':'none'});

    $('.niceCheck').click( function(){


        if($(this).hasClass('niceChecked')){
            $(this).parent().find('.time_line').css({'display':'inline-block'});
        }
        else{
            $(this).parent().find('.time_line').css({'display':'none'});
        }
    });

    $('.requaired').focusout(function(){
        $(this).next().css({'display':'none'});
        $(this).css({'border':'2px solid #e1dbd6'});
        $(this).removeClass('error_input');

    })

    $('.add_object, .user_reg').submit ( function(){



        var inputCount = $('.requaired'),
            i;

        for( i = 0; i<inputCount.length; i++){

            if (inputCount.eq(i).val()=="") {
                inputCount.eq(i).css({'border':'2px solid #fb5c5c'});
                inputCount.eq(i).next().css({'display':'block'});
                inputCount.eq(i).focus();
                inputCount.eq(i).addClass('error_input');
                return false;
            }


        }



        if(!/^\w+[a-zA-Z0-9_.-]*@{1}\w{1}[a-zA-Z0-9_.-]*\.{1}\w{2,4}$/.test($("#email").val())){
            $("#email").next().css({'display':'block'});
            $("#email").css({'border':'2px solid #fb5c5c'});
            $("#email").focus();
            $("#email").addClass('error_input');
            return false;
        }
    });



});