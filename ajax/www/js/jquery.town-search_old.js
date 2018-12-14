$(function () {
    var townSearch = $('.townSearch'),
        request = new XMLHttpRequest(),
        popupSearch = $('.resulSearch'),
        allTowns = $('.townDrop');


    popupSearch.mouseleave( function(){
        $(this).slideUp();
    });

    allTowns.on({
        'click': function () {
            request.abort();
            request = $.ajax({
                url: townSearch.attr('data-php'),
                data: {'searchText': 'all'}, // отправляет всю форму
                dataType: 'html',
                timeout: 20000,
                type: "POST",
                success: function (msg) {
                    console.log(msg);
                    var answer = $(msg),
                        popupSearchList = popupSearch.find('ul');

                    if (answer.length) {
                        popupSearch.css({'display': 'block'});
                        popupSearchList.html('');
                        popupSearchList.append(answer);
                    }
                    else {
                        popupSearch.css({'display': 'none'});
                    }
                },
                error: function (XMLHttpRequest) {
                    if (XMLHttpRequest.statusText != "abort") {
                        alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                    }
                }
            });
            return false;

        }
    });


    townSearch.on({
        'keyup': function () {
            searchFunct($(this).val());

        }
    });

    popupSearch.on('click', 'li', function () {
        $(this).find('span').remove();
        var textElem = $(this).text();
        $(this).parents('.sortTown').find('.townSearch').val(textElem);
        $('.resulSearch').css({'display': 'none'});
    });

    $('body').on({
        'keypress': function (event) {
            if (popupSearch.css('display') == 'block') {
                var items = popupSearch.find('li');

                if (event.keyCode == 40) {
                    if (items.filter('.active').index() != items.length - 1) {

                    }
                }
                else if (event.keyCode == 38) {
                    if (event.keyCode == 40) {
                        if (items.filter('.active').index() != 0) {

                        }
                    }
                }
                else if (event.keyCode == 13) {
                    items.filter('.active').trigger('click');
                }
            }
        }
    })


    function searchFunct(text) {
        request.abort();
        request = $.ajax({
            url: townSearch.attr('data-php'),
            data:$('.sortTown').serialize(), // отправляет всю форму
            dataType: 'html',
            timeout: 20000,
            type: "POST",
            success: function (msg) {

                console.log(msg);
                var answer = $(msg),
                    popupSearchList = popupSearch.find('ul');

                if (answer.length) {
                    popupSearch.css({'display': 'block'});
                    popupSearchList.html('');
                    popupSearchList.append(answer);
                }
                else {
                    popupSearch.css({'display': 'none'});
                }
            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                }
            }
        });
    }
})
;
