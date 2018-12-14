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
            visible: 2
        });
    });

    if ($(".map").length) {

        var myMap,
            coordMas=$(".map").attr('coordinates').split(', ')

        function init () {
            myMap = new ymaps.Map('map', {
                center:[coordMas[0], coordMas[1]],
                zoom: 15
            });
            myMap.controls.add('zoomControl', { left: 5, top: 5 });
            myMap.geoObjects.add(new ymaps.Placemark([coordMas[0], coordMas[1]]));
        }

        ymaps.ready(init);
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

    var nowDate = new Date(),
        nextMonth = new Date(nowDate.getFullYear(), nowDate.getMonth()+1, 1),
        dayCount = new Date(nextMonth-8640000);

    if (nowDate.getDate() < 16) {
        rezult = Math.floor((16-nowDate.getDate()));
    } else {
        rezult = Math.floor((dayCount.getDate()-nowDate.getDate()));
    }

    if (rezult > 0) {
    if (rezult < 10) {
        $('.action-day').text('0' + rezult);
    } else {
        $('.action-day').text(rezult);
    }
    } else {
        $('.action-day').text('00');
    }

} );
