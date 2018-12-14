$(function(){

    $(".gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: $(this).parents(".our-work").find(".next"),
            btnPrev: $(this).parents(".our-work").find(".prev"),
            visible: 3
        });
    });

    $(".reviews__gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: $(this).parents(".reviews").find(".next"),
            btnPrev: $(this).parents(".reviews").find(".prev"),
            visible: 1
        });
    });

    $(".lamonacia__gallery").each(function(){
        $(this).jCarouselLite({
            btnNext: $(this).parents(".lamonacia").find(".next"),
            btnPrev: $(this).parents(".lamonacia").find(".prev"),
            visible: 7
        });
    });

    checkTab();
    function checkTab(){
        var activeBlock = $('.calculator dt.active + dd');

        $('.calculator > dd').css( { display: 'none' } );
        activeBlock.css( { display: 'block' } );
    };

    $(".calculator dt").on({
        'click': function(){
            var curElem = $( this );

            $('.calculator dt').removeClass('active');
            curElem.addClass('active');
            checkTab();
        }
    });


    $(".calculate__result input[type='submit']").on({
        'click': function(){
            var curElem = $("div.popup" );

            curElem.fadeIn(300);
            return false;
        }
    });

    $(".popup-send").on({
        'click': function(){
            var curElem = $("div.popup" );

            curElem.fadeOut(300);
        }
    });

    $(".popup__form").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $("div.popup").on({
        'click': function(){
            var curElem = $(this);

            curElem.css( { display: 'none' });

        }
    });

    if ($(".map").length) {
        var myMap;

        ymaps.ready(init);

        function init () {
            myMap = new ymaps.Map('map', {
                center:[55.181051, 61.400463],
                zoom: 15
            });

            myMap.geoObjects.add(new ymaps.Placemark([55.181051, 61.400463]));
        }
    }
    if($('.custom-radio').size()){
        $('input[type=radio].custom-radio').each(function(index, element) {
            var inp=$('input[type=radio].custom-radio[name='+$(element).attr('name')+']');
            $(element).prop('checked') ? className='active' : className='';
            $(element).before('<span class="'+$(element).attr('class')+' '+className+'" />').appendTo($(element).prev('span')).parents('label').addClass(className);
        }).change(function(e) {
            inp=$('input[type=radio].custom-radio[name='+$(this).attr('name')+']');
            if(inp.size()>1){
                var rChecked=false;
                inp.each(function(index, element){
                    if(inp.eq(index).prop('checked')){
                        inp.eq(index).parent().addClass('active').parents('label').addClass('active');
                        rChecked=true;
                    }
                    else{
                        inp.eq(index).parent().removeClass('active').parents('label').removeClass('active');
                    }
                });
            }
            else{
                $(this).parent().toggleClass('active').parents('label').toggleClass('active');
            }
        });
    }
    if ($('.custom-checkbox').size()) {
        $('input[type=checkbox].custom-checkbox').each(function (index, element) {
            $(element).attr('checked') == 'checked' ? className = ' active' : className = '';
            $(element).before('<span class="' + $(element).attr('class') + className + '"/>').appendTo($(element).prev('span.custom-checkbox'));
        }).change(function (e) {
            if($(this).attr('checked') == 'checked'){
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
            }
        });
    }
} );
