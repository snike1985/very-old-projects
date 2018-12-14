$(function() {
    $(".solutions dl dt").click(function() {
        $(".solutions dl dt").removeClass("active");
        $(this).toggleClass("active");
        var newHeight = $(this).next().height();
        $(".solutions dl").height(newHeight + 100);
    })
});