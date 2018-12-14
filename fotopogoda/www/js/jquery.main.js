$(function(){

    timeNow = new Date();

    $(".big__img__wrap img").stop( true, false ).fadeOut(300);

    if (timeNow.getHours()>6 && timeNow.getHours()<12) {
        $(".big__img__wrap img").eq(0).stop( true, false ).fadeIn(300);
    } else
    if (timeNow.getHours()>11 && timeNow.getHours()<18) {
        $(".big__img__wrap img").eq(1).stop( true, false ).fadeIn(300);
    } else {
        $(".big__img__wrap img").eq(2).stop( true, false ).fadeIn(300);
    }


    $(".img__wrap img").on({
        'mouseover': function(){
            var curElem = $( this);
            $(".big__img__wrap img").stop( true, false ).fadeOut(300);
            $(".big__img__wrap img").eq(curElem.parents('li').index()).stop( true, false ).fadeIn(300);
            return false;
        }
    });

} );