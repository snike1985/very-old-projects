$(function(){

    $('.crazy-button').on({
        'mouseover': function(){
            var crazyB = $(this);
            crazyB.css({
                top: getRandomInt(crazyB.height(),$(window).height())-crazyB.height(),
                left: getRandomInt(crazyB.width(),$(window).width())-crazyB.width()
            });
        }
    });

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('.content-wrap img').on({
        'click': function(){
            var imgElem = $(this),
                drawingCanvas = document.createElement('canvas'),
                ctx = drawingCanvas.getContext('2d');

            drawingCanvas.height=imgElem.height();
            drawingCanvas.width=imgElem.width();
            ctx.drawImage(imgElem[0], 0, 0);

            var Pixel = ctx.getImageData(0,0,imgElem.width(),imgElem.height()),
                PixelGrey = ctx.getImageData(0,0,imgElem.width(),imgElem.height()),
                grey = 0;

            for (var i = 0; i < Pixel.data.length; i+=4) {

                grey = (Pixel.data[i]*0.299+Pixel.data[i+1]*0.587+Pixel.data[i+2]*0.114);
                PixelGrey.data[i]=grey;
                PixelGrey.data[i+1]=grey;
                PixelGrey.data[i+2]=grey;
            }

            ctx.putImageData(PixelGrey,0,0);

            $('.content-wrap').append(drawingCanvas);
        }
    });

} );