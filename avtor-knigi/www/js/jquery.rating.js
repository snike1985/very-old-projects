$(window).on({
    'load':function(){

        var starsWrap = $('.rating');
        $.each(starsWrap, function(){

            var curelem = $(this),
                niceRadio = curelem.find('.nice-radio');

            niceRadio.hover(function() {
                var index = niceRadio.index(jQuery(this));
                for (var i = 0; i <= index; i++) {
                    jQuery(niceRadio[i]).css('background', 'url("img/radio-stars.png") no-repeat');
                }
            }, function(){
                var index = niceRadio.index(jQuery('.rating div.nice-radio_checked'));
                if (index < 0 ) {
                    niceRadio.css({ background: 'url("img/radio-stars.png") no-repeat', backgroundPosition: '-14px 0' });
                } else {
                    for (var i = index+1; i <= niceRadio.length; i++) {
                        jQuery(niceRadio[i]).css({ background: 'url("img/radio-stars.png")', backgroundPosition: '-14px 0' });
                    }
                }
            });

        })

    }} );
