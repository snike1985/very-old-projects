$(function(){

    if($('.your-photos').length){
        randomPic()
    }
    $.each( $( '.editing__options > dt ' ), function(){
        new Acardeon( $( this ) );
    } );
    $.each( $( '.remember-pass a' ), function(){
        new RememberPass( $( this ) );
    } );
    $.each( $( '.openPopup' ), function(){
        new Popup( $( this ) );
    } );
    $.each( $( '.content__popup' ), function(){
        new ContentPopup( $( this ) );
    } );
    $.each( $( '.openTooltip' ), function(){
        new Tooltip( $( this ) );
    } );
    $.each( $( '.ganre-wrap' ), function(){
        new GanreList( $( this ) );
    } );
    if($('.reader__popup').length){
        function position(){
            var positionItem = $('.user__status-reader').offset();
            $('.reader__popup').css({'left':positionItem.left-213});
        }

        function position1(){
            var positionItem1 = $('.links__balance').offset();
            $('.reader__popup').css({'left':positionItem1.left-365});
        }

        $('.user__status-reader a').on('click', function(){
            $('.reader').fadeIn(300);
            position();
            return false;
        });

        $('.links__balance a').on('click', function(){
            $('.reader').fadeIn(300);
            $('.reader__popup').addClass('reader_decor');
            position1();
            return false;
        });

        $(window).resize(function(){
            if($('.reader__popup').hasClass('reader_decor')){
                position1();
            }else{
                position();
            }

        });

        $('.reader__popup-hide').on('click', function(){
            $('.reader').fadeOut(300,function(){
                $('.reader__popup').removeClass('reader_decor');
            });

            return false;
        });

    }

    if($('.enter-form').length){

        function position2(){
            var positionItem2 = $('.registration__registered a').position();
            $('.enter-form').css({'top':positionItem2.top + 270,'left':positionItem2.left });
        }

        $('.registration__registered a').on('click', function(){
            $('.enter-form').fadeIn();
            position2();
            return false;
        });

        $(window).resize(function(){
            position2();
        });
    }


    $('.search-input').on('focus', function(){


        if($(this).val() == "15 фактов"){
            $(this).val("")
        }

    });
    $('.search-input').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("15 фактов")
        }

    });

    $('.add-example').on('focus', function(){


        if($(this).val() == "avtor-knigi.ru/kuleshov"){
            $(this).val("")
        }

    });
    $('.add-example').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("avtor-knigi.ru/kuleshov")
        }

    });

    $('#question').on('focus', function(){


        if($(this).val() == "Введите ответ на вышезаданный вопрос"){
            $(this).val("")
        }

    });
    $('#question').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("Введите ответ на вышезаданный вопрос")
        }

    });

    $('.more-message__search').on('focus', function(){


        if($(this).val() == "Искать сообщение"){
            $(this).val("")
        }

    });
    $('.more-message__search').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("Искать сообщение")
        }

    });

    $('.input-page__search').on('focus', function(){


        if($(this).val() == "Введите номер страницы для перелистывания"){
            $(this).val("")
        }

    });
    $('.input-page__search').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("Введите номер страницы для перелистывания")
        }

    });

    $('.chat__search').on('focus', function(){


        if($(this).val() == "Введите сообщение"){
            $(this).val("")
        }

    });
    $('.chat__search').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("Введите сообщение")
        }

    });

    $('.interview-author__search').on('focus', function(){


        if($(this).val() == "Введите заголовок, либо автора интервью"){
            $(this).val("")
        }

    });
    $('.interview-author__search').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("Введите заголовок, либо автора интервью")
        }

    });

    $('.shelf-control__new-input').on('focus', function(){


        if($(this).val() == "Введите название полки"){
            $(this).val("")
        }

    });
    $('.shelf-control__new-input').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("Введите название полки")
        }

    });

    $('#new-shelf').on('focus', function(){


        if($(this).val() == "Максимум 50 символов"){
            $(this).val("")
        }

    });
    $('#new-shelf').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("Максимум 50 символов")
        }

    });

    $('.search__example a').on('click', function(){

        var exmpelText = $(this).text();

        $('.search input[type="search"]').val(exmpelText);

        return false;
    });

    $('.enter-btn').on('click', function(){
        $('.enter-form').fadeIn();
        return false;
    });

    $('.enter-form__close').on('click', function(){
        $('.enter-form').fadeOut(200,function(){
            $(this).removeAttr('style');
        });
        return false;

    });

   checkTab();

    $(".books-catalog dt").on({
        'click': function(){
            var curElem = $( this );

            $('.books-catalog dt').removeClass('active');
            curElem.addClass('active');
            checkTab();
        }
    });
    $(".profil span:first-child").on({
        'mouseover': function(){
            var curElem = $( this).parent().find('.profil__hidden');
            curElem.css({left: $(this).width()+30});
            curElem.stop(false,true).fadeIn(300);
        }
    });
    $(".profil").on({
        'mouseleave': function(){
            var curElem = $( this).find('.profil__hidden');

            curElem.stop(false,true).fadeOut(300);
        }
    });


    $('.tabs-btn a').on('click', function(){

        $('.tabs-btn a').removeClass('active');
        $(this).addClass('active');

        var _id = $( this).parent().index(),
            _this=$( '.tab-block ' ).eq(_id);

        $( '.tab-block' ).css({ 'display': 'none' });

        _this.fadeIn();



        return false;
    });

    $.each($('.filling-profile'), function (){
        var percent1 = $(this).find('.filling-profile__pouring').width(),
            percent2 = $(this).width(),
            viewPercent = $(this).next().find('.percent-number'),
            totalPercent = Math.round(percent1 / percent2 * 100);
        viewPercent.text(totalPercent);

    });

    if ( $('.editing__options_date #from').length || $('.filter-profile__date').length ){



        if ( $('.filter-profile__date').length ){
            $( "#from" ).datepicker({
                defaultDate: "+1w",
                changeMonth: false,
                numberOfMonths: 1,
                dateFormat: 'dd.mm.y',
                showOtherMonths: true,
                onClose: function( selectedDate ) {
                    $( "#to" ).datepicker( "option", "minDate", selectedDate );
                }
            });
            $( "#to" ).datepicker({
                defaultDate: "+1w",
                changeMonth: false,
                numberOfMonths: 1,
                dateFormat: 'dd.mm.y',
                showOtherMonths: true,
                onClose: function( selectedDate ) {
                    $( "#from" ).datepicker( "option", "maxDate", selectedDate );
                }
            });
        } else {
            $( "#from" ).datepicker({
                defaultDate: "+1w",
                changeMonth: false,
                numberOfMonths: 1,
                dateFormat: 'dd.mm.yy',
                showOtherMonths: true,
                onClose: function( selectedDate ) {
                    $( "#to" ).datepicker( "option", "minDate", selectedDate );
                }
            });
            $( "#to" ).datepicker({
                defaultDate: "+1w",
                changeMonth: false,
                numberOfMonths: 1,
                dateFormat: 'dd.mm.yy',
                showOtherMonths: true,
                onClose: function( selectedDate ) {
                    $( "#from" ).datepicker( "option", "maxDate", selectedDate );
                }
            });
        }


        var dayNamesMin = $( "#from,#to" ).datepicker( "option", "dayNamesMin"),
            monthNamesShort = $( "#from,#to" ).datepicker( "option", "monthNamesShort" );

        $( "#from,#to" ).datepicker( "option", "dayNamesMin", [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"  ] );
        $( "#from,#to" ).datepicker( "option", "monthNamesShort", [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ] );

    }


    $.each( $( '.alphabet-choice' ), function(){
        new Alphabet( $( this ) );
    } );

    $.each( $( '.filter-select' ), function(){
        new FilterSelect( $( this ) );
    } );

    $("#min-page, #max-page").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });

    $('.filter-profile__title').on({
        click: function(){
            if ($(this).hasClass('active')){
                $(this).next().fadeOut(200);
                $(this).removeClass('active');
            }
            else {
                $('.filter-profile__title').removeClass('active');
                $('.filter-profile__title').next().fadeOut(200);
                $(this).addClass('active');
                $(this).next().fadeIn(200);
                if($(this).next().find('.filters__wrapper')){
                    tooltipScroll2.refresh();
                }
                if($(this).next().find('.format__wrapper')){
                    tooltipScroll4.refresh();
                }
            }
        }
    });

    $('.close-filter').on({
        click: function(){
            $(this).parent().parent().fadeOut(200);
            $(this).parents('li').find('.filter-profile__title').removeClass('active');
            return false
        }
    });

    $('.genre-inner_profile').find('a').on({
        click: function(){
            $(this).parents('li').find('div:first').fadeOut(200);
            $(this).parents('li').find('.filter-profile__title').removeClass('active');
            return false
        }
    })

    $('.filter-select__inner').find('a').on({
        click: function(){
            $(this).parents('.filter-profile__formate').find('div:first').fadeOut(200);
            $(this).parents('.filter-profile__formate').find('.filter-profile__title').removeClass('active');
            return false
        }
    });

    $.each($('.shelf-control__list'), function(){
        new ShelfControl( $( this ) );
    });

    $.each($('.shelf-control__new-shelf'), function(){
        new AddExample( $( this ) );
    })

    if ($('.user__name').innerHeight()>30){
        $('.user__name').css({"border-bottom": "none"})
    }

    $('.recharge__method > li').on({

        click: function(e){

            $('.recharge__method > li').removeClass('active');
            $(this).addClass('active');
            $('.recharge__title span').css({ 'display': 'inline-block' });
            var _id = $( this).index(),
                _this=$( '.recharge__input ' ).eq(_id);
            $( '.recharge__input' ).css({ 'display': 'none' });
            $( '.recharge__tip' ).css({ 'display': 'none' });
            _this.fadeIn();
            var link = $(this).find('> a');
            $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top-25
            }, 1000);
            e.preventDefault();

            return false
        }

    })

    $('.recharge__input').find('input:first').on('focus', function(){


        if($(this).val() == "0"){
            $(this).val("")
        }

    });
    $('.recharge__input').find('input:first').on('focusout', function(){

        if($(this).val()==""){
            $(this).val("0")
        }

    });

    $('.interview__full-interview').on({
        click: function(){
            var parent = $(this).closest('.interview__inner'),
                el = parent.find('.interview__text');
            if ( $(this).text() == "полное интервью" ){
                el.css({"height": "auto"});
                $(this).text('свернуть интервью');
            } else {
                el.css({"height": "191px"});
                $(this).text('полное интервью');
            }

            return false
        }
    })

    $('.download-book__save a').on({
        click: function(){
            $('.content-wrap_step1').fadeOut(200);
            $('.content-wrap_step2').fadeIn(200);
            if ($('.content-wrap_step2').find('.chat').length){
                tooltipScroll6.refresh();
            }
            if ( $( '.ares-select__popup').length ){
                $( '.ares-select__popup').css({"opacity": "0"})
            }
            return false
        }
    })

} );

function checkTab(){
    var activeBlock = $('.books-catalog dt.active + dd');
    $('.books-catalog dd').css( { display: 'none' } );
    activeBlock.css( { display: 'block' } );
    $('.books-catalog').css( { height: activeBlock.outerHeight() + 39 } );

};


var GanreList = function( obj ){
    this.obj = obj;
    this.listA = $('.ganre-list span a');
    this.yourGanre = $('.your-ganre');
    this.init();
};
GanreList.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.findBtn();
                self.core.controls();
            },
            controls: function(){
                self.obj.on ({
                    click: function(){
                        self.list.slideDown();
                        self.obj.addClass('active')
                    }
                }),
                self.listA.on ({
                    click: function(){
                        var curItem = $(this),
                            curText = curItem.text();
                        self.obj.find('input[type=text]').val(curText);
                        self.obj.removeClass('active');
                        self.list.slideUp();
                        return false
                    }
                })
                self.yourGanre.on ({
                    click: function(){
                        var inText = self.obj.find('input[type=text]');
                        inText.removeAttr('disabled');
                        inText.val('');
                        inText.focus()
                        self.obj.removeClass('active');
                        self.list.slideUp();
                        return false
                    }
                })
            },
            findBtn: function (){
                self.list = self.obj.find('.ganre-list');
            }
        };
    }
};
var Acardeon = function( obj ){
    this.obj = obj;
    this.allDt = $('.editing__options > dt');
    this.DtCut = $('.editing__options > dt .cut-down');
    this.DtExpand = $('.editing__options > dt .expand-all');
    this.activeDt = $('.editing__options > dt.active')
    this.init();
};
Acardeon.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.findBtn();
                self.core.controls();
            },
            controls: function(){
                self.obj.on ({
                    click: function(){
                        if (self.obj.hasClass('active')){
                            self.obj.removeClass('active');
                            self.nextDd.slideUp();
                            self.core.changeCut();

                        } else {
                            self.nextDd.slideDown();
                            self.obj.addClass('active');
                            self.core.changeExpand();
                            if ($(this).children('.filters__wrapper').length != 0 ){
                                tooltipScroll2.refresh();
                            }
                            if ($(this).next().find('.format__wrapper').length){
                                tooltipScroll4.refresh();
                            }
                        }
                    }
                })
            },
            findBtn: function (){
                self.nextDd = self.obj.next();
                self.activeDd = self.activeDt.next()
            },
            changeCut: function (){
                if(self.obj.parent().hasClass('editing__options_comments')){
                    self.obj.find('span').text('Развернуть все')
                }
            },
            changeExpand: function (){
                if(self.obj.parent().hasClass('editing__options_comments')){
                    self.obj.find('span').text('Свернуть все')
                }
            }

        };
    }
};

var ContentPopup = function( obj ){
    this.obj = obj;
    this.site = $('.site__content');
    this.body = $('body');
    this.init();
};
ContentPopup.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.findBtn();
                self.core.controls();
            },
            controls:function(){
                self.close.on ({
                    click: function(){
                        self.obj.fadeOut(200)
                    }
                }),
                    self.open.on ({
                        click: function(event){
                            event = event || window.event;
                            if (event.stopPropagation) {
                                event.stopPropagation()
                            } else {
                                event.cancelBubble = true
                            }
                            if(self.open.hasClass('pos-right')){
                                self.obj.css("margin-top",-self.obj.innerHeight()/2)
                            }
                            self.obj.fadeIn(200)
                            return false
                        }
                    }),
                    self.body.on ({
                        click: function(){
                            self.obj.fadeOut(200)
                        }
                    }),
                    self.obj.on({
                        click: function (event){
                            event = event || window.event;
                            if (event.stopPropagation) {
                                event.stopPropagation()
                            } else {
                                event.cancelBubble = true
                            }
                        }
                    })
            },
            findBtn: function (){
                self.close = self.obj.find('.content__popup-close');
                self.open = self.site.find('.content__popup-btn');
            }

        };
    }
};
var Popup = function( obj ){
    this.obj = obj;
    this.site = $('.site__content');
    this.popupWrap = $('.popup__wrap');
    this.body = $('body');
    this.html = $('html');
    this.popup = this.body.find('#'+this.obj.attr("data-id"));
    this.init();
};
Popup.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.findBtn();
                self.core.controls();
            },
            controls:function(){
                self.close.on ({
                    click: function(){
                        self.popup.fadeOut(200);
                        self.html.css({"overflow-y":"visible","padding-right":"0"});
                        self.popup.css("overflow-y","hidden");
                        return false
                    }
                }),
                    self.obj.on ({
                        click: function(){
                            self.popup.fadeIn(200);
                            if (self.popup.hasClass('high-popup')){
                                self.html.css({"overflow-y":"hidden","padding-right":"16px"});
                                self.popup.css("overflow-y","scroll")
                            }
                            return false
                        }
                    }),
                    self.popup.on ({
                        click: function(){
                            self.popup.fadeOut(200);
                            self.html.css({"overflow-y":"visible","padding-right":"0"});
                            self.popup.css("overflow-y","hidden")
                        }
                    }),
                    self.popupWrap.on({
                        click: function (event){
                            event = event || window.event;
                            if (event.stopPropagation) {
                                event.stopPropagation()
                            } else {
                                event.cancelBubble = true
                            }
                        }
                    })
            },
            findBtn: function (){
                self.close = self.popup.find('.close');
            }
        };
    }
};

var Tooltip = function( obj ){
    this.obj = obj;
    this.site = $('.site__content');
    this.popupWrap = $('.tooltip .popup__wrap');
    this.popupWrap2 = $('#onOption2 .popup__wrap ');
    this.popupWrap3 = $('#video-lessons .popup__wrap ');
    this.popupWrap4 = $('#ganre .popup__wrap ');
    this.popupWrap5 = $('#addBook .popup__wrap');
    this.popupWrap6 = $('#onOption3 .popup__wrap');
    this.popupWrap7 = $('#onOption2 .response_complain');
    this.popupWrap8 = $('#onOption4 .popup__wrap');
    this.popupWrap9 = $('#onOption5 .popup__wrap');
    this.popupWrap10 = $('#onOption6 .popup__wrap');
    this.popupWrap11 = $('#onPhoto-add .popup__wrap');
    this.popupWrap12 = $('#onPhoto-all .popup__wrap');
    this.popupWrap13 = $('#onPercent .popup__wrap');
    this.popupWrap14 = $('.popup__wrap_thank');
    this.popupWrap15 = $('#onCloud .popup__wrap');
    this.popupWrap16 = $('#onButton .popup__wrap');
    this.popupWrap17 = $('#open-lnk .popup__wrap');
    this.popupWrap18 = $('#cancel-lnk .popup__wrap');
    this.popupWrap19 = $('#show-statistic .popup__wrap');
    this.popupWrap20 = $('#onAmount .popup__wrap');
    this.popupWrap21 = $('#activate .popup__wrap');
    this.popupWrap22 = $('#complete-description .popup__wrap');
    this.popupWrap23 = $('#messageHistory .popup__wrap');
    this.popupWrap24 = $('#howIt .popup__wrap');
    this.popupWrap25 = $('#whoIn .popup__wrap');
    this.popupWrap26 = $('#addFriend .popup__wrap');
    this.popupWrap27 = $('#interview .popup__wrap');
    this.body = $('body');
    this.html = $('html');
    this.popup = this.body.find('#'+this.obj.attr("data-id"));
    this.init();
};
Tooltip.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.findBtn();
                self.core.controls();
            },
            controls:function(){
                self.close.on ({
                    click: function(){
                        self.popup.fadeOut(200);
                        self.html.css({"overflow-y":"visible","padding-right":"0"});
                        self.popup.css("overflow-y","hidden");

                        return false
                    }
                }),
                    self.obj.on ({
                        click: function(){
                            self.popup.fadeIn(200);
                            if (self.obj.offset().left -self.popupWrap.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap.innerHeight()-20,
                                    "left":10 });
                            }else{
                                self.popupWrap.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap.innerHeight()-20,
                                    "left":self.obj.offset().left -self.popupWrap.innerWidth()/2+self.obj.innerWidth()/2 });
                            }
                            self.popupWrap2.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap2.innerHeight()-20,
                            "left":self.obj.offset().left -self.popupWrap2.innerWidth()/2+self.obj.innerWidth()/2 });
                            if(self.obj.offset().top-$(window).scrollTop() -self.popupWrap3.innerHeight()/2<0){
                                self.popupWrap3.css({"top":10,
                                    "left":self.obj.offset().left -self.popupWrap3.innerWidth()-82 });
                            }else{self.popupWrap3.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap3.innerHeight()/2,
                                "left":self.obj.offset().left -self.popupWrap3.innerWidth()-82 });
                            }
                            self.popupWrap4.css({"top":self.obj.offset().top-$(window).scrollTop() - self.popupWrap4.innerHeight() -15,
                                "left":self.obj.offset().left -self.popupWrap4.innerWidth()/2+self.obj.innerWidth()/2 });
                            self.html.css({"overflow-y":"hidden","padding-right":"16px"});
                            self.popup.css("overflow-y","visible");

                            if (self.obj.offset().left -self.popupWrap5.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap5.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap5.innerHeight()-20,
                                    "left":10 });
                            }else{
                                self.popupWrap5.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap5.innerHeight()-20,
                                    "left":self.obj.offset().left -self.popupWrap5.innerWidth()/2+self.obj.innerWidth()/2 });
                            }
                            if (self.obj.offset().left -self.popupWrap6.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap6.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap6.innerHeight()-10,
                                    "left":10 });
                            }else {
                                self.popupWrap6.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap6.innerHeight()-10,
                                    "left":self.obj.offset().left -self.popupWrap6.innerWidth()/2+self.obj.innerWidth()/2 });
                            }
                            if (self.obj.offset().left -self.popupWrap7.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap7.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap7.innerHeight()-20,
                                    "left":10 });
                            }else {
                                self.popupWrap7.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap7.innerHeight()-20,
                                    "left":self.obj.offset().left -self.popupWrap7.innerWidth()/2+self.obj.innerWidth()/2 - 13});
                            }
                            if (self.obj.offset().left -self.popupWrap8.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap8.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap8.innerHeight()-20,
                                    "left":10 });
                            }else {
                                self.popupWrap8.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap8.innerHeight()-20,
                                    "left":self.obj.offset().left -self.popupWrap8.innerWidth()/2+self.obj.innerWidth()/2 - 268});
                            }
                            if (self.obj.offset().left -self.popupWrap9.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap9.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap9.innerHeight()-20,
                                    "left":10 });
                            }else {
                                self.popupWrap9.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap9.innerHeight()+40,
                                    "left":self.obj.offset().left -self.popupWrap9.innerWidth() - 20});
                            }

                            self.popupWrap10.css({"top":self.obj.offset().top - 79,
                                "left":self.obj.offset().left -self.popupWrap10.innerWidth()/2+self.obj.innerWidth()/2 - 261});

                            if (self.obj.offset().left -self.popupWrap11.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap11.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap11.innerHeight()-20,
                                    "left":10 });
                            }else {
                                self.popupWrap11.css({"top":self.obj.offset().top - (self.popupWrap11.innerHeight())/2 ,
                                    "left":self.obj.offset().left - self.popupWrap11.innerWidth() - 20});
                            }
                            if (self.obj.offset().left -self.popupWrap12.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap12.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap12.innerHeight()-20,
                                    "left":10 });
                            }else {
                                self.popupWrap12.css({"top":self.obj.offset().top - (self.popupWrap12.innerHeight())/2 ,
                                    "left":self.obj.offset().left - self.popupWrap12.innerWidth() - 20});
                            }
                            if (self.obj.offset().left -self.popupWrap13.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                self.popupWrap13.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap13.innerHeight()-20,
                                    "left":10 });
                            }else {
                                self.popupWrap13.css({"top":self.obj.offset().top-$(window).scrollTop() - (self.popupWrap13.innerHeight())/2 ,
                                    "left":self.obj.offset().left - self.popupWrap13.innerWidth() - 20});
                            }
                            if (self.obj.hasClass('bring-link')){
                                if ( self.popup.find('> span').length ){
                                    var elem = self.popup.find('> span');
                                    elem.remove();
                                }
                                if (self.popup.parents('.site').length){
                                    var elTop = self.obj.offset().top
                                } else {
                                    var elTop = self.obj.offset().top - $(window).scrollTop()
                                }
                                if (self.popup.parents('.content').length){
                                    var elTop = self.obj.offset().top - $(window).scrollTop()
                                }
                                var elLeft = self.obj.offset().left - $(window).scrollLeft(),
                                    elText = self.obj.text();
                                var el = $('<span>' + elText + '</span>').css({top: elTop, left: elLeft, position: 'absolute' });
                                el.insertAfter(self.popup.find('> .popup__wrap'));
                            }
                            if (self.obj.hasClass('all-thanks')){


                                if (self.obj.offset().left -self.popupWrap14.innerWidth()/2+self.obj.innerWidth()/2 < 0){
                                    self.popupWrap14.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap14.innerHeight()-20,
                                        "left":10 });
                                }
                                if (self.obj.offset().left -self.popupWrap14.innerWidth()/2+self.obj.innerWidth()/2 >= 0){
                                    self.popupWrap14.css({"top":self.obj.offset().top - self.popupWrap14.innerHeight()-20,
                                        "left":self.obj.offset().left -self.popupWrap14.innerWidth()/2+self.obj.innerWidth()/2 - 268});

                                }

                            }
                            if (self.obj.hasClass('show-scroll') || self.obj.hasClass('all-thanks') || self.obj.hasClass('add-photo_profile') || self.obj.hasClass('personal-data-update') || self.obj.hasClass('statistic-lnk__open-lnk') || self.obj.hasClass('statistic-lnk__cancel-lnk') || self.obj.hasClass('statistic__detail-lnk') ){

                                self.html.css({
                                    "overflow-y" : "scroll",
                                    "padding-right" : "0"
                                })

                            }

                            self.popupWrap15.css({"top":self.obj.offset().top-$(window).scrollTop() -self.popupWrap15.innerHeight()-20,
                                "left":self.obj.offset().left - self.popupWrap15.innerWidth()/2 + self.obj.innerWidth()/2 });

                            self.popupWrap16.css({"top":self.obj.offset().top - $(window).scrollTop() - self.popupWrap16.innerHeight() + 51,
                                "left":self.obj.offset().left + self.obj.innerWidth() + 9 });

                            self.popupWrap17.css({"top":self.obj.offset().top - 32,
                                "left":self.obj.offset().left - self.popupWrap17.innerWidth() - 43});

                            self.popupWrap18.css({"top":self.obj.offset().top - 40,
                                "left":self.obj.offset().left - self.popupWrap18.innerWidth() - 43});

                            self.popupWrap19.css({"top":$(window).scrollTop() + 30,
                                "left":self.obj.offset().left - self.popupWrap19.innerWidth() + 203});

                            self.popupWrap20.css({"top":self.obj.offset().top - self.popupWrap20.innerHeight() - 20,
                                "left":self.obj.offset().left - self.popupWrap20.innerWidth()/2 + self.obj.innerWidth()/2 });

                            self.popupWrap21.css({"top":self.obj.offset().top - self.popupWrap21.innerHeight() - 20,
                                "left":self.obj.offset().left - self.popupWrap21.innerWidth()/2 + self.obj.innerWidth()/2 });

                            self.popupWrap22.css({"top":self.obj.offset().top - 40,
                                "left":self.obj.offset().left + self.obj.innerWidth() + 20 });

                            if ( $(this).hasClass('complete-description') ){
                                var el = $(this).parent().find('p'),
                                    elText = el.text(),
                                    init = self.popupWrap22.find('p');
                                init.text(elText);
                            }

                            self.popupWrap23.css({"top":self.obj.offset().top - self.popupWrap23.innerHeight() + 38 ,
                                "left":self.obj.offset().left - self.popupWrap23.width() - 44 });

                            self.popupWrap24.css({"top":self.obj.offset().top - self.popupWrap24.innerHeight() - 20 ,
                                "left":self.obj.offset().left - self.popupWrap24.innerWidth()/2 + self.obj.innerWidth()/2 });

                            self.popupWrap25.css({"top":self.obj.offset().top - self.popupWrap25.innerHeight() + 35 ,
                                "left":self.obj.offset().left - self.popupWrap25.innerWidth() - 16 });

                            self.popupWrap26.css({"top":self.obj.offset().top - 35 ,
                                "left":self.obj.offset().left - self.popupWrap26.innerWidth() - 18 });

                            self.popupWrap27.css({"top":self.obj.offset().top - 24 ,
                                "left":self.obj.offset().left - self.popupWrap27.innerWidth() + 8 });

                            console.log(self.popupWrap27.innerWidth())

                            return false
                        }

                    }),
                    self.readClose.on ({
                        click: function(){
                            if(self.obj.parents('.licensed').find('.niceCheck').hasClass('niceChecked')){
                                self.popup.fadeOut(200);
                                self.html.css({"overflow-y":"visible","padding-right":"0"});
                                self.popup.css("overflow-y","hidden");
                            } else{
                                self.obj.parents('.licensed').find('input[type=checkbox]').trigger("click");
                                self.popup.fadeOut(200);
                                self.html.css({"overflow-y":"visible","padding-right":"0"});
                                self.popup.css("overflow-y","hidden");
                            }
                            return false
                        }
                    }),
                    self.popup.on ({
                        click: function(){
                            self.popup.fadeOut(200);
                            self.html.css({"overflow-y":"visible","padding-right":"0"});
                            self.popup.css("overflow-y","hidden");
                        }
                    }),
                    self.popupWrap.on({
                        click: function (event){
                            event = event || window.event;
                            if (event.stopPropagation) {
                                event.stopPropagation()
                            } else {
                                event.cancelBubble = true
                            }
                        }
                    })
            },
            findBtn: function (){
                self.close = self.popup.find('.close');
                self.readClose = self.popup.find('.read-close');
            }
        };
    }
};
function randomPic(){
    var a = $('.photos__wrap').attr("data-src"),
    b = a.split(',');
    function compareRandom() {
        return Math.random() - 0.5;
    }
    b.sort(compareRandom);
    $('.photo1').attr('src',b[0])
    $('.photo2').attr('src',b[1])
    $('.photo3').attr('src',b[2])
}
var RememberPass = function( obj ){
    this.obj = obj;
    this.init();
};
RememberPass.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.findBtn();
                self.core.controls();
            },
            controls: function(){
                self.obj.on ({
                    click: function(){
                        if (self.obj.hasClass('active')){
                            self.obj.removeClass('active');
                            self.form.slideUp();
                        } else {
                            self.form.slideDown();
                            self.obj.addClass('active')
                        }
                        return false;
                    }
                })
            },
            findBtn: function (){
                self.form = self.obj.next();
            }
        };
    }
};

var Alphabet = function( obj ){
    this.obj = obj;
    this.site = $('.site__content');
    this.body = $('body');
    this.html = $('html');
    this.popup = this.body.find('#'+this.obj.attr("data-id"));
    this.init();
};
Alphabet.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.findBtn();
                self.core.closePopup();
                self.core.stopClose();
                self.core.controls();
            },
            controls:function(){
                self.close.on ({
                    click: function(){
                        console.log(102)
                        self.popup.fadeOut(200);
                        return false
                    }
                });
                    self.obj.on ({
                        click: function(){
                            if (self.popup.hasClass('popup-smiles')){
                                if (self.obj.hasClass('active')){
                                    self.popup.fadeOut(200);
                                    self.obj.removeClass('active');
                                    return false
                                }
                                else {
                                    self.popup.fadeIn(200);
                                    self.obj.addClass('active');
                                    if (self.obj.offset().left -self.popup.innerWidth() < 0){
                                        self.popup.css({"top":self.obj.offset().top-$(window).scrollTop() + self.popup.innerHeight() + 77,
                                            "left":74 });
                                    }else{
                                        self.popup.css({"top":self.obj.offset().top + 35,
                                            "left":self.obj.offset().left - self.popup.innerWidth() + 42});
                                    }
                                }
                                if (self.popup.find('.popup-smiles__wrapper').length){
                                    tooltipScroll5.refresh();
                                }

                            }
                            if (self.popup.hasClass('popup-alphabet')){
                                self.popup.fadeIn(200);
                                if (self.obj.offset().left -self.popup.innerWidth() < 0){
                                    self.popup.css({"top":self.obj.offset().top-$(window).scrollTop() + self.popup.innerHeight() + 20,
                                        "left":10 });
                                }else{
                                    self.popup.css({"top":self.obj.offset().top -22,
                                        "left":self.obj.offset().left - self.popup.innerWidth() - 21});
                                }
                            }
                            if (self.popup.find('.alphabet__wrapper').length){
                                tooltipScroll3.refresh();
                            }
                            return false
                        }

                    })
            },
            findBtn: function (){
                self.close = self.popup.find('.close');

            },
            closePopup: function(){

                self.body.on({
                    click: function(){
                        self.popup.fadeOut(200);
                        self.obj.removeClass('active');
                    }
                })

            },
            stopClose: function(){
                $('#comment, #smiles').on({
                    click: function(event){
                        event.stopPropagation()
                    }
                })
            }
        };
    }
};

var FilterSelect = function( obj ){
    this.obj = obj;
    this.input = this.obj.find('input');
    this.lnk = this.obj.find('.filter-select__inner dt a:first-child, .filter-select__inner dd a, .filter-select__inner li a');
    this.init();
};
FilterSelect.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.controls();
            },
            controls:function(){
                self.lnk.on({
                    click: function (){
                        var text = $(this).text();
                        self.input.val(text);
                        return false
                    }
                })
            }

        };
    }
};

$(window).on('load',function(){
    var tooltipScroll;
    if($('.tooltip-wrapper').length){
        tooltipScroll = new IScroll('.tooltip-wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true
        });
    }

    $('.scroll-top').on('click',function(){
        if($(this).parent().hasClass('tooltip_scroll-wrap')){
            var newY = tooltipScroll.y + 58 ;
            tooltipScroll.scrollTo(0, newY,500);
            return false
        }
    });
    $('.scroll-bottom').on('click',function(){
        if($(this).parent().hasClass('tooltip_scroll-wrap')){
            var newY = tooltipScroll.y - 58 ;
            tooltipScroll.scrollTo(0, newY,500);
            return false
        }
    });
    $('.openTooltip').on('click',function(){
        if ( $('.tooltip-wrapper').length ) {
            tooltipScroll.refresh();
        };

    });

    if($('.filters__wrapper').length){
        tooltipScroll2 = new IScroll('.filters__wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true
        });
    }

    $('.scroll-top').on('click',function(){
        if($(this).parent().hasClass('filters__scroll-wrap')){
            var newY = tooltipScroll2.y + 58 ;
            tooltipScroll2.scrollTo(0, newY,500);
            return false
        }
    });
    $('.scroll-bottom').on('click',function(){
        if($(this).parent().hasClass('filters__scroll-wrap')){
            var newY = tooltipScroll2.y - 58 ;
            tooltipScroll2.scrollTo(0, newY,500);
            return false
        }
    });

    if($('.alphabet__wrapper').length){
        tooltipScroll3 = new IScroll('.alphabet__wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true
        });
    }

    $('.scroll-top').on('click',function(){
        if($(this).parent().hasClass('alphabet__scroll-wrap')){
            var newY = tooltipScroll3.y + 58 ;
            tooltipScroll3.scrollTo(0, newY,500);
            return false
        }
    });
    $('.scroll-bottom').on('click',function(){
        if($(this).parent().hasClass('alphabet__scroll-wrap')){
            var newY = tooltipScroll3.y - 58 ;
            tooltipScroll3.scrollTo(0, newY,500);
            return false
        }
    });

    if($('.format__wrapper').length){
        tooltipScroll4 = new IScroll('.format__wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true
        });
    }

    $('.scroll-top').on('click',function(){
        if($(this).parent().hasClass('format__scroll-wrap')){
            var newY = tooltipScroll4.y + 58 ;
            tooltipScroll4.scrollTo(0, newY,500);
            return false
        }
    });
    $('.scroll-bottom').on('click',function(){
        if($(this).parent().hasClass('format__scroll-wrap')){
            var newY = tooltipScroll4.y - 58 ;
            tooltipScroll4.scrollTo(0, newY,500);
            return false
        }
    });

    if($('.popup-smiles__wrapper').length){
        tooltipScroll5 = new IScroll('.popup-smiles__wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true
        });
    }

    $('.scroll-top').on('click',function(){
        if($(this).parent().hasClass('popup-smiles__scroll-wrap')){
            var newY = tooltipScroll5.y + 58 ;
            tooltipScroll5.scrollTo(0, newY,500);
            return false
        }
    });
    $('.scroll-bottom').on('click',function(){
        if($(this).parent().hasClass('popup-smiles__scroll-wrap')){
            var newY = tooltipScroll5.y - 58 ;
            tooltipScroll5.scrollTo(0, newY,500);
            return false
        }
    });

    if($('.chat__wrapper').length){
        tooltipScroll6 = new IScroll('.chat__wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true
        });
    }

    $('.scroll-top').on('click',function(){
        if($(this).parent().hasClass('chat__wrapper')){
            var newY = tooltipScroll6.y + 58 ;
            tooltipScroll6.scrollTo(0, newY,500);
            return false
        }
    });
    $('.scroll-bottom').on('click',function(){
        if($(this).parent().hasClass('chat__wrapper')){
            var newY = tooltipScroll6.y - 58 ;
            tooltipScroll6.scrollTo(0, newY,500);
            return false
        }
    });

    if ( $('.tabs-btn a').length ){
        var _id = $('.tabs-btn a.active').parent().index(),
            _this=$( '.tab-block ' ).eq(_id);
        _this.css({"display": "block"});
    }

});

var ShelfControl = function( obj ){
    this.obj = obj;
    this.renameBtn = this.obj.find($('.shelf-control__rename'));
    this.lnkName = this.obj.find($('.shelf-control__name'));
    this.wrap = this.obj.find($('.shelf-control__input-wrap'));
    this.wrapBox = this.wrap.find($('.shelf-control__input'));
    this.wrapBtn = this.wrap.find($('.shelf-control__submit'));

    this.init();
};
ShelfControl.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.controls();
            },
            controls: function(){
                self.renameBtn.on({
                    click: function(){

                        var curelem = $(this);
                        if ( !curelem.hasClass('active') ){

                            self.core.newItems($(this));
                            $('.shelf-control__input-wrap').css({display: "none"});
                            $('.shelf-control__name').css({display: "inline-block"});
                            self.lnkName.css({display: "none"});
                            self.wrap.css({display: "block"});
                            self.wrapBox.focus();
                            $(this).addClass('active');

                        }

                        return false
                    }
                });


                $('body').on({
                    click: function(){
                        self.lnkName.css({display: "inline-block"});
                        self.wrap.css({display: "none"});
                        self.renameBtn.removeClass('active');
                    }
                });

                $('.shelf-control__input-wrap, .shelf-control__submit').on({
                    click: function(event){
                        event = event || window.event;
                        if (event.stopPropagation) {
                            event.stopPropagation()
                        } else {
                            event.cancelBubble = true
                        }
                    }
                });

                self.wrapBtn.on({
                    click: function(){
                        var newtxt = self.wrapBox.val();
                        self.lnkName.css({display: "inline-block"});
                        self.lnkName.text(newtxt);
                        self.wrap.css({display: "none"});
                        self.renameBtn.removeClass('active');
                        return false
                    }
                });

            },
            newItems: function(link){
                self.wrap = link.parents('li').find('.shelf-control__input-wrap');
                self.lnkName = link.parents('li').find('.shelf-control__name');
                self.wrapBox = self.wrap.find('.shelf-control__input');
                self.wrapBtn = self.wrap.find('.shelf-control__submit');
                var txt = self.lnkName.text();
                self.wrapBox.val('');
            }

        };
    }
};

var AddExample = function( obj ){
    this.obj = obj;
    this.renameBtn = this.obj.find($('.shelf-control__example a'));
    this.wrapBox = this.obj.find($('.shelf-control__new-input'));

    this.init();
};
AddExample.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.controls();
            },
            controls: function(){
                self.renameBtn.on({
                    click: function(){
                        var txt = self.renameBtn.text();
                        self.wrapBox.val(txt);
                        return false
                    }
                });

            }

        };
    }
};