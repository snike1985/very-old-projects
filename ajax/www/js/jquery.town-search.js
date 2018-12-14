$(function () {
    var townSearch = $('.tab_list li'),
        request = new XMLHttpRequest();

    townSearch.on({
        'click': function () {
            searchFunct($(this).index());
        }
    });

    function searchFunct(text) {
        request.abort();
        request = $.ajax({
            url: 'php/town-search.php',
            data:$('.sortTown').serialize(), // отправляет всю форму
            dataType: 'json',
            type: "POST",
            success: function (msg) {

                $('.tab_content').html(msg.tab[text]);

                console.log(msg.tab[text]);

            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("ERROR!!!");
                }
            }
        });
    }
})
;
