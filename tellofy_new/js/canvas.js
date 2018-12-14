$(window).load(function(){

    var img = $('.trusted img');
    var imgWrap;

    img.each(function(){
        var el = $(this);
        el.css({"position":"absolute", "top": "0", "left": "0"}).wrap("<div class='img_wrapper' style='display: inline-block; position: relative'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
            var el = $(this);
            el.parent().css({"width":this.width,"height":this.height});
            el.dequeue();
        });
        this.src = grayscale(this.src);
        imgWrap = $('.img_wrapper');
    });

    imgWrap.on ({
        mouseover: function(){
            $(this).parent().find('img:first').stop().animate({opacity:1}, 200);
        }
    });

    $('.img_grayscale').mouseout(function(){
        $(this).stop().animate({opacity:0}, 200);
    });


});

function grayscale(src){
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imgObj = new Image();
    imgObj.src = src;
    canvas.width = imgObj.width;
    canvas.height = imgObj.height;
    ctx.drawImage(imgObj, 0, 0);
    var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = 160;
            imgPixels.data[i] = 178;
            imgPixels.data[i + 1] = 190;
            imgPixels.data[i + 2] = 197;
        }
    }
    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}