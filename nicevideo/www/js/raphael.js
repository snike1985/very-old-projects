$(function(){
    $(".order-form__wrap input[type='text']").focusin(function() {
        $(this).next().fadeIn(500);
        $(this).removeClass('error');
    });

    $(".order-form__wrap input[type='text']").focusout(function() {
        $(this).next().fadeOut(500);
    });
    $("#text4").mask("+7 (999) 999-99-99");

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function isEmpty(str) {
        return (!str || 0 === str.length);
    }

    $("#myForm .submit").click(function() {

        var parent = $(this).closest('#myForm ');

        var form_error = false;

        $(parent).find('.valid').each(function() {
            if ( isEmpty( $(this).val() ) ) {
                $(this).addClass('error');
                form_error = true;
            }
        });

        $(parent).find('.valid_email').each(function() {
            if ( !IsEmail( $(this).val() ) ) {
                $(this).addClass('error');
                form_error = true;
            }
        });

        if (!form_error){
            parent.find('.error').removeClass('error');
        }else{
            return false;
        }

    });

    $(".header__order, .how__lnk").click(function(){
        $('body,html').animate({"scrollTop":$('.site').height()},1000);
        return false;
    });

    $('.order-form__wrap form').on( { 'submit': function() {
        $.ajax({
            url: ("php/feedback.php"),
            data: $(this).serialize(),
            dataType: 'html',
            type: "post",
            success: function (msg) {
//                console.log(msg);
//                $('.popup').fadeOut();
                alert('Ваше сообщение успешно отправлено!');
            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("ERROR!!!");
                }
            }
        });
        $(this).trigger('reset');
        return false;
    }});

} );