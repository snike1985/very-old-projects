$(function(){
    $(".infrastructure h6").on({
        'click': function(){
            var curElem = $( this ),
                nextcurElem = curElem.next();

            if( nextcurElem.css( 'display' ) == 'block' ){
                nextcurElem.slideUp(300);
                nextcurElem.removeClass('active')
                return false;
            } else {
                nextcurElem.slideDown(300);
                nextcurElem.addClass('active')
                return false;
            }
        }
    });

    var mas = new Array(16);

   newGame();

    Hammer($('.game-wrap')[0]).on('dragend', function(event) {

        var e = event.gesture.direction,
            k = 0, i = 0,
            masTemp1 = new Array(4),
            masTemp2 = new Array(4),
            masTemp3 = new Array(4),
            masTemp4 = new Array(4);

        switch (e) {
            case ('up'):
                k=0;
                for (i=0; i<mas.length; i+=4) {
                    masTemp1[k]=mas[i];
                    masTemp2[k]=mas[i+1];
                    masTemp3[k]=mas[i+2];
                    masTemp4[k]=mas[i+3];
                    k++;
                }
                masSum(masTemp1);
                masSum(masTemp2);
                masSum(masTemp3);
                masSum(masTemp4);
                k=0;
                for (i=0; i<mas.length; i+=4) {
                    mas[i]=masTemp1[k];
                    mas[i+1]=masTemp2[k];
                    mas[i+2]=masTemp3[k];
                    mas[i+3]=masTemp4[k];
                    k++;
                }
                addElem(mas);
                writeMas(mas);
                break;
            case ('down'):
                k=0;
                for (i=15; i>-1; i-=4) {
                    masTemp1[k]=mas[i];
                    masTemp2[k]=mas[i-1];
                    masTemp3[k]=mas[i-2];
                    masTemp4[k]=mas[i-3];
                    k++;
                }
                masSum(masTemp1);
                masSum(masTemp2);
                masSum(masTemp3);
                masSum(masTemp4);
                k=0;
                for (i=15; i>-1; i-=4) {
                    mas[i]=masTemp1[k];
                    mas[i-1]=masTemp2[k];
                    mas[i-2]=masTemp3[k];
                    mas[i-3]=masTemp4[k];
                    k++;
                }
                addElem(mas);
                writeMas(mas);
                break;
            case ('right'):
                k=0;
                for (i=3; i>-1; i--) {
                    masTemp1[k]=mas[i];
                    masTemp2[k]=mas[i+4];
                    masTemp3[k]=mas[i+8];
                    masTemp4[k]=mas[i+12];
                    k++;
                }
                masSum(masTemp1);
                masSum(masTemp2);
                masSum(masTemp3);
                masSum(masTemp4);
                k=0;
                for (i=3; i>-1; i--) {
                    mas[i]=masTemp1[k];
                    mas[i+4]=masTemp2[k];
                    mas[i+8]=masTemp3[k];
                    mas[i+12]=masTemp4[k];
                    k++;
                }
                addElem(mas);
                writeMas(mas);
                break;
            case ('left'):
                k=0;
                for (i=0; i<4; i++) {
                    masTemp1[k]=mas[i];
                    masTemp2[k]=mas[i+4];
                    masTemp3[k]=mas[i+8];
                    masTemp4[k]=mas[i+12];
                    k++;
                }
                masSum(masTemp1);
                masSum(masTemp2);
                masSum(masTemp3);
                masSum(masTemp4);
                k=0;
                for (i=0; i<4; i++) {
                    mas[i]=masTemp1[k];
                    mas[i+4]=masTemp2[k];
                    mas[i+8]=masTemp3[k];
                    mas[i+12]=masTemp4[k];
                    k++;
                }
                addElem(mas);
                writeMas(mas);
                break;
        }

    });

    function masSum(massiv) {

        masClean(massiv);

        for (i=0; i<3; i++) {
            if (massiv[i]==massiv[i+1]) {
                massiv[i]=massiv[i]*2;
                massiv[i+1]=0;
            }
        }

        masClean(massiv);
    }

    function masClean(massiv) {
        var k= 0, buf=0;
        for (i=0; i<massiv.length; i++) {
            if (massiv[i]>0) {
                buf=massiv[i];
                massiv[i]=0;
                massiv[k]=buf;
                k++;
            }
        }
    }

    function writeMas(massiv) {
        for (var i=0; i<massiv.length; i++) {
            $('.game-item').eq(i).animate({
                top: 0,
                opacity: 1
            }, 150 );
            if (massiv[i]==0) {
                $('.game-item').eq(i).text('');
            } else {
                $('.game-item').eq(i).animate({
                    top: 10,
                    opacity: 0.6
                }, 150 ).text(massiv[i]);
            }
        }
    }

    function addElem(massiv) {
        var k = 0,
            step = 0;

        for (var i=0; i<massiv.length; i++) {
            if (massiv[i]==0) {
                step++;
            }
        }

        if (step > 0) {
            while (k < 1) {
                i = getRandomInt(0,15);
                if (massiv[i]==0) {
                    massiv[i]=2;
                    k++;
                }
            }
        } else {
            alert('GAME OVER');
            newGame();
        }
    }

    function newGame() {
        for (var i=0; i<mas.length; i++) {
            mas[i]=0;
        }
        addElem(mas);
        addElem(mas);
        writeMas(mas);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

} );