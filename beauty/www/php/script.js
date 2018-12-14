$(function($){
    $('.contacts__form #feedback button').click(function(){

        var form = $(this).parent('form');
        $.ajax({
            url: 'php/form.php',
            type: 'GET',
            dataType: 'json',
            data: ({
                'mess': $(this).parent('form').find('textarea').val(),
                'name': $(this).parent('form').find('input[name=name]').val(),
                'phone': $(this).parent('form').find('input[name=phone]').val(),
                'email': $(this).parent('form').find('input[name=email]').val()                }),
            success: function(response){
                if (response){
                    form.append('<div class="mes-success">Спасибо за ваше сообщение</div>');
                    //alert('Спасибо за ваше сообщение!');
                } else {
                    form.append('<div class="mes-error">Ошибка!</div>');
                    //alert('Ошибка!');
                }
            }
        });
        return false;
    });
     
});
