$(function(){
    $(".call-back").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeIn(300);
            return false;
        }
    });
    $(".popup, .popup__send, .popup__close").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeOut(300);
        }
    });

    $(".popup__wrap").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    if ($( ".filter__range").length) {
        $( ".filter__range").each(function(){
            $(this).slider({
                range: true,
                min: parseInt($(this).parent().find('p').attr('min')),
                max: parseInt($(this).parent().find('p').attr('max')),
                values: [ $(this).parent().find(".amount_min").val(), $(this).parent().find(".amount_max").val() ],
                slide: function( event, ui ) {
                    $(this).parent().find(".amount_min").val( ui.values[ 0 ] );
                    $(this).parent().find(".amount_max").val( ui.values[ 1 ] );

                }
            });
        });
        $(".amount_min").change(function(){
            var value1=$(".amount_min").val();
            var value2=$(".amount_max").val();

            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $(".amount_min").val(value1);
            }
            $(".filter__range").slider("values",0,value1);
        });


        $(".amount_max").change(function(){
            var value1 = $(".amount_min").val(),
                value2 = $(".amount_max").val(),
                maxVal = parseInt($(".filter__range").next().attr('max'));

            if (value2 > maxVal) { value2 = maxVal; $(".amount_max").val(maxVal)}

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $(".amount_max").val(value2);
            }
            $(".filter__range").slider("values",1,value2);
        });

    }

    $('.plus-minus__minus').on({
        'click': function(){
            var  curElem = $(this).parent().find('.plus-minus__kol'),
                kol = parseInt(curElem.val());
            if (kol > 1) {
                kol--;
                curElem.val(kol);
            }
            return false;
        }
    });

    $('.plus-minus__plus').on({
        'click': function(){
            var  curElem = $(this).parent().find('.plus-minus__kol'),
                kol = parseInt(curElem.val());
            kol++;
            curElem.val(kol);
            return false;
        }
    });

} );