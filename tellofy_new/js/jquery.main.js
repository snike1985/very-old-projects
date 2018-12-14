(function () {
    'use strict';
    var accordion = null,
        menu = null;

    var Accordion = function () {

        //private properties
        var _self = this,
            _btn = $('.real-time__btn'),
            _discussDt = $('.discussions__accordion dt'),
            _discussDd = $('.discussions__accordion dd');

        //private methods
        var addEvents = function () {
                _btn.on({
                    click: function () {
                        var cutItem = $(this),
                            next = cutItem.next('.real-time__text').find('.real-time__hidden'),
                            span = cutItem.find('span');
                        $('.real-time__btn').removeClass('active');
                        $('.real-time__btn span').html('&#x4c;');
                        if (next.css('display') == 'none') {
                            $('.real-time__text .real-time__hidden').fadeOut(300);
                            next.fadeIn(300);
                            cutItem.addClass('active');
                            span.html('&#x4b;');
                        }
                        else {
                            next.fadeOut(300);
                            cutItem.removeClass('active');
                            span.html('&#x4c;');
                        }
                        return false;
                    }
                });
                _discussDt.on({
                    'click': function(){
                        var curItem = $(this),
                            nextDd = curItem.next('dd');
                        if(!curItem.hasClass('active')){
                            curItem.addClass('active');
                            nextDd.slideDown(300);
                        }
                        else{
                            curItem.removeClass('active');
                            nextDd.slideUp(300);
                        }


                    }
                });
                $(document).on(
                    "click",
                    ".real-time__text",
                    function (event) {
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                );
                $(document).on("click", "body", function () {
                    $('.real-time__text .real-time__hidden').fadeOut(300);
                    $('.real-time__btn').removeClass('active');
                    $('.real-time__btn span').html('&#x4c;');

                });
            },
            init = function () {
                addEvents();
            };

        init();
    };

    var WriteReview = function (obj) {

        //private properties
        var _self = this,
            _writeReview = $('.write-review'),
            _writeReviewPos = _writeReview.offset().top,
            _btn = obj;

        //private methods
        var addEvents = function () {
                _btn.on({
                    click: function () {

                        $("html, body").stop(false,true);
                        $("html, body").animate({scrollTop:_writeReviewPos},300);

                        return false;
                    }
                });
            },
            init = function () {
                addEvents();
            };

        init();
    };

    var Video = function (obj) {

        this.popup = obj;
        this.btn1 = $('.real-time__play');
        this.btn2 = $('.take-tour a');
        this.btn3 = $('.tellofy-works a');
        this.closeVideo = obj.find('.mediafilm__close');

        this.videoFilm = document.getElementById("movie");

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {
                _self.btn1.on({
                    click: function () {
                        _self.popup.fadeIn(300);
                        return false;
                    }
                });
                _self.btn2.on({
                    click: function () {
                        _self.popup.fadeIn(300);
                        return false;
                    }
                });
                _self.btn3.on({
                    click: function () {
                        _self.popup.fadeIn(300);
                        return false;
                    }
                });
                _self.closeVideo.on({
                    click: function () {
                        _self.videoFilm.pause();
                        _self.popup.fadeOut(300);

                    }
                });
                $(document).on(
                    "click",
                    ".mediafilm video",
                    function (event) {
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                );
                $(document).on("click", "body", function () {
                    _self.videoFilm.pause();
                    $('.mediafilm').fadeOut(300);

                });
            },
            init = function () {
                addEvents();
            };

        init();
    };

    var Tabs = function (obj) {

        this.tabs = obj;
        this.dt = obj.find('dt');
        this.dd = obj.find('dd');

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {
                $(window).on({
                    'load': function(){
                        var ddHeight = _self.dt.filter('.active').next('dd').innerHeight();
                        _self.tabs.css({'min-height': ddHeight+2+_self.dt.filter('.active').next('dd').position().top});
                    }
                });
                $(window).on({
                    'resize': function(){
                        var ddHeight = _self.dt.filter('.active').next('dd').innerHeight();
                        _self.tabs.css({'min-height': ddHeight+2+_self.dt.filter('.active').next('dd').position().top});
                    }
                });
                _self.dt.on({
                    'click': function(){
                        var curItem = $(this),
                            curItemsNext = curItem.next(),
                            curItemsNextHeight = curItemsNext.innerHeight();
                        if(!curItem.hasClass('active')){
                            _self.dt.removeClass('active');
                            _self.dd.css('display','none');
                            curItem.addClass('active');
                            curItemsNext.fadeIn(300);
                            _self.tabs.animate({
                                    'min-height': curItemsNextHeight+2+_self.dt.filter('.active').next('dd').position().top
                                }, 300);
                        }

                    }
                })
            },
            startView = function(){
                _self.dt.filter('.active').next('dd').css('display','block');

            },
            init = function () {
                startView();
                addEvents();
            };

        init();
    };
    var SiteMenu = function (obj) {
        this.obj = obj;
        this.window = $(window);
        this.body = this.obj.parents("body");
        this.site = this.body.find(".site");
        this.siteHeader = this.body.find(".site__header-new");
        this.siteFooter = this.body.find(".site__footer");
        this.menuBtn = this.body.find(".btn-aside_left");
        this.menuWrap = this.obj.parent(".site__menu-wrap");

        this.site__wrap = this.body.find(".site__wrap");
        this.submenuBtn = this.obj.find(".submenu");

        this.init();
    };
    SiteMenu.prototype = {
        init: function () {
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function () {
            var self = this;

            return {
                addEvents: function () {

                    $(window).on({
                        load: function () {
                            self.core.heightCalculation();
                            self.core.addScroll();
                        },

                        resize: function(){
                            self.core.heightCalculation();
                            self.core.addScroll();
                        }

                    });

                    self.menuBtn.on({
                        click: function(){
                            self.core.removeScroll();

                            self.site.toggleClass("site_opened-menu");
                            if(!$(self.site).hasClass('site_opened-menu')){
                                self.submenuBtn.next('ul').parent('li').removeClass('active');
                                self.submenuBtn.next('ul').slideUp(300);
                            }

                                $(window).trigger('resize');

                            return false;
                        }
                    });

                    self.submenuBtn.on({
                        click: function(){
                            self.core.removeScroll();
                            if($(self.site).hasClass('site_opened-menu'))
                                {
                                    var curItem = $(this),
                                        nextItemMenu = curItem.next('ul');

                                    if (curItem.parent('li').hasClass('active')) {
                                        curItem.parent('li').removeClass('active');
                                        nextItemMenu.slideUp(300);
                                    } else {
                                        curItem.parent('li').addClass('active');
                                        nextItemMenu.slideDown(300);
                                    }

                                    self.core.heightCalculation();
                                    self.core.addScroll();
                                    return false;
                                }
                        }
                    });

                },

                heightCalculation: function(){
                    var heightLogo = self.siteHeader.innerHeight(),
                        heightfooter = self.siteFooter.innerHeight(),
                        heightWindow = self.window.height()-heightLogo-heightfooter,
                        site__wrap_height = self.site__wrap.innerHeight(),
                        heightMenu = 0;
                    if(site__wrap_height>heightWindow){
                        heightMenu='auto';
                    }else{
                        heightMenu = heightWindow;
                    }

                    self.menuWrap.css({
                        "height": heightMenu
                    });


                },

                removeScroll: function(){
                    self.obj.getNiceScroll().remove();
                },

                addScroll: function(){
                    self.obj.niceScroll({
                        cursorcolor:"transparent",
                        cursoropacitymin: "0",
                        cursorborderradius: "5px",
                        cursorborder: "none",
                        cursorwidth: "5px"
                    });
                },

                build: function () {
                    self.core.addEvents();
                }
            };
        }
    };
    var PopupMap = function (obj) {

        this.btn = obj;
        this.popupMap = $('.popup-map');
        this.popupMapContainer = $('.popup-map__wrap');

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {
                $(window).on({
                    'load': function(){

                    }
                });
                _self.popupMap.on( {
                    click: function(){
                        _self.popupMap.fadeOut(300);
                        $('html').css({'overflow-y': 'scroll'});
                    }
                } );
                _self.popupMapContainer.on( {
                    click: function( event ){
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                } );
                _self.btn.on({
                    'click': function(){
                        if(!_self.popupMap.hasClass('opened')){
                            _self.popupMap.fadeIn(300);
                            $('html').css({overflow: 'hidden'});

                        }else{
                            _self.popupMap.fadeOut(300);
                            $('html').css({'overflow-y': 'scroll'});
                        }

                    }
                });
            },
            init = function () {
                addEvents();
            };

        init();
    };

    var Tooltip = function (obj) {

        this.btn = obj.find('.brand-box__btn');

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {
                _self.btn.on({
                    click: function () {
                        var curItem = $(this),
                            curItemParent = curItem.parent();
                        curItemParent.toggleClass('active');
                        return false;
                    }
                });
                $('.brand-box__tooltip').on( {
                    click: function( event ){
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                });
                $('body').on({
                    click: function () {
                        $('.brand-box__business').removeClass('active');
                    }
                });
            },
            init = function () {
                addEvents();
            };

        init();
    };

    var HideGraph = function (obj) {

        this.graph = $('.brand-review__graph');

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {
                obj.on({
                    click: function () {
                        var curItem = $(this);

                        if(curItem.hasClass('active')){
                            curItem.text('show graph');
                            curItem.removeClass('active');
                            _self.graph.slideUp(300);
                        }else{
                            curItem.text('hide graph');
                            curItem.addClass('active');
                            _self.graph.slideDown(300);
                        }
                        return false;
                    }
                });
            },
            init = function () {
                addEvents();
            };

        init();
    };

    var Menu = function () {

        //private properties
        var _self = this,
            _btn = $('.site__header__menu-btn'),
            _dropdown = $('.menu-dropdown'),
            _dropdownLinks = $('.menu-dropdown a'),
            _submenu = $('.menu-dropdown__submenu'),
            _submenuBtn = $('.menu-dropdown__submenu span');

        //private methods
        var addEvents = function () {
                _btn.on({
                    click: function () {
                        var cutItem = $(this);
                        if (cutItem.parent().hasClass('active')) {
                            _dropdown.fadeOut(300);
                            cutItem.parent().removeClass('active');
                        }
                        else {
                            _dropdown.fadeIn(300);
                            cutItem.parent().addClass('active');
                        }
                        return false;
                    }
                });
                _dropdownLinks.on({
                    click: function () {
                        _dropdown.fadeOut(300);
                    }
                });
                _submenuBtn.on({
                    click: function () {
                        var cutItem = $(this),
                            ul = cutItem.next('ul');
                        if (cutItem.hasClass('active')) {
                            ul.slideUp(300);
                            cutItem.removeClass('active');
                        }
                        else {
                            ul.slideDown(300);
                            cutItem.addClass('active');
                        }
                        return false;
                    }
                });
                $(document).on(
                    "click",
                    ".menu-dropdown",
                    function (event) {
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                );
                $(document).on("click", "body", function () {
                    $('.menu-dropdown').fadeOut(300);
                    _btn.removeClass('active');

                });
                $(window).on({
                    'resize': function () {
                        posHeader();
                    }
                });
            },
            posHeader = function () {
                var headerHeight = $('.site__header').innerHeight();
                _dropdown.css({top: headerHeight})
            },
            init = function () {
                posHeader();
                addEvents();
            };

        init();
    };

    var AddRow = function (obj) {

        this.obj = obj;
        this.addButton = this.obj.find(".popup__record-add");

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {

                $(window).on({
                    load: function () {
                        findSelect();
                    }
                });

                _self.addButton.on({
                    click: function () {
                        var row = _self.obj.find(".popup__record-time").eq(0),
                            index = _self.obj.find(".popup__record-time").length + 1,
                            newRow = $('<div class="popup__record-time"/>');
                        newRow.append(row.html());
                        _self.obj.append(newRow);

                        newRow.find('.ui-timepicker-input').each(function (i) {
                            var curINPUT = $(this);
                            curINPUT.removeAttr('autocomplete');
                            curINPUT.attr({
                                'id': 'stepExample_' + index + '_' + (i + 1),
                                'name': 'stepExample_' + index + '_' + (i + 1)
                            });
                            curINPUT.timepicker({'step': 30});
                        });
                        $(".popup__record-days").removeClass("popup__record-days_opened");
                        findSelect();
                        return false;
                    }
                });

                $(document).click(function (event) {
                    if ($(event.target).closest(".popup__record-days").length)
                        return;
                    $(".popup__record-days").removeClass("popup__record-days_opened");
                    event.stopPropagation();
                });

            },

            findSelect = function () {
                var fieldNew = _self.obj.find(".popup__record-time").eq(-1),
                    index = _self.obj.find(".popup__record-time").index(fieldNew) + 1,
                    selectNew = fieldNew.find(".popup__record-days"),
                    fieldTxt = selectNew.find(".popup__record-days-txt"),
                    tooltipNew = fieldNew.find(".popup__record-days-tooltip"),
                    inputNew = tooltipNew.find("input");
                fieldTxt.html("");
                inputNew.attr("checked", false);
                new ComboSelect(selectNew, index);
            },

            init = function () {
                addEvents();
            };
        init();
    };

    var ComboSelect = function (obj, i) {

        this.obj = obj;
        this.field = this.obj.find(".popup__record-days-txt");
        this.parentWrap = null;
        this.tooltipNew = this.obj.find(".popup__record-days-tooltip");
        this.tooltipRow = this.tooltipNew.find(">div");
        this.index = i;
        this.inputs = this.obj.find("input");

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {

                _self.inputs.on("change", function () {

                    _self.labelTxt = $(this).next("label");
                    _self.text = _self.labelTxt.text();
                    _self.parentWrap = $(this).closest(".popup__record-days");
                    _self.fieldText = _self.parentWrap.find(".popup__record-days-txt");
                    _self.oldTxt = _self.field.text();

                    if ($(this).attr('checked')) {
                        $(this).attr("checked", false);
                        var pos = _self.oldTxt.indexOf(_self.text);
                        if (pos == 0) {
                            if (_self.text.length == _self.oldTxt.length) {
                                var a = _self.text.length,
                                    b = _self.oldTxt.length + 1,
                                    newTxt = _self.oldTxt.substring(a, b);
                                _self.fieldText.text(newTxt);
                            } else {
                                var a = _self.text.length + 2,
                                    b = _self.oldTxt.length + 1,
                                    newTxt = _self.oldTxt.substring(a, b);
                                _self.field.text(newTxt);
                            }

                        } else {
                            var a = _self.text.length - 2,
                                b = _self.oldTxt.length + 1,
                                newTxt1 = _self.oldTxt.substring(0, pos - 2),
                                newText2 = _self.oldTxt.substring(pos + _self.text.length, b);
                            _self.fieldText.text(newTxt1 + newText2);
                        }
                    } else {
                        $(this).attr("checked", true);
                        if (_self.oldTxt == "") {
                            _self.field.text(_self.text);
                        } else {
                            _self.field.text(_self.oldTxt + ", " + _self.text);
                        }
                    }
                });

                _self.field.on('click', function () {
                    var parent = $(this).parents(".popup__record-days");
                    if (!parent.hasClass("popup__record-days_opened")) {
                        $(".popup__record-days").removeClass("popup__record-days_opened");
                        parent.addClass("popup__record-days_opened");
                    } else {
                        $(".popup__record-days").removeClass("popup__record-days_opened");
                    }
                });

            },

            addAttributes = function () {
                var i;
                for (i = 0; i < _self.tooltipRow.length; i++) {
                    var id = 'WD_' + _self.index + '_' + (i + 1);
                    _self.tooltipRow.eq(i).find("input").attr({
                        "id": id,
                        "name": id
                    });
                    _self.tooltipRow.eq(i).find("label").attr("for", id);
                }
            },

            init = function () {
                addAttributes();
                addEvents();
            };
        init();
    };

    var AddEmailField = function (obj) {

        this.obj = obj;
        this.btn = this.obj.find(".popup__record-addition");
        this.inputs = this.obj.find("input");

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {

                _self.btn.on({
                    click: function () {
                        var index = _self.obj.find("input").length + 1,
                            newInput = $('<input type="text" id="email_' + index + '" name="email_' + index + '"/>');
                        _self.obj.append(newInput);
                        return false;
                    }
                });

            },

            init = function () {
                addEvents();
            };
        init();
    };

    var AddPhoneField = function (obj) {

        this.obj = obj;
        this.btn = this.obj.find(".popup__record-addition");
        this.inputs = this.obj.find("input");

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {

                _self.btn.on({
                    click: function () {
                        var index = _self.obj.find("input").length + 1,
                            newInput = $('<input type="text" id="phone_' + index + '" name="phone_' + index + '"/>');
                        _self.obj.append(newInput);
                        return false;
                    }
                });

            },

            init = function () {
                addEvents();
            };
        init();
    };

    var SearchMap = function (obj) {

        this.obj = obj;
        this.mapWrap = this.obj.find("#map-canvas");

        //private properties
        var _self = this;
        var marker = [];
        var infowindow = [];
        var data = JSON.parse(_self.mapWrap.attr('data-map')).marks;
        var zoom = JSON.parse(_self.mapWrap.attr('data-map')).zoom;
        var activeIcon = {
            url: 'img/search-map__marker_active.png',
            size: new google.maps.Size(33, 40),
            origin: new google.maps.Point(-2, 0),
            anchor: new google.maps.Point(0, 40)
        };

        //private methods
        var addEvents = function () {

                google.maps.event.addDomListener(window, 'load', initialize);

            },

            initialize = function () {

                var mapOptions = {
                        zoom: zoom||12,
                        center: !obj.hasClass('map') ? new google.maps.LatLng(data[0].poi_latitude, data[0].poi_longitude) : new google.maps.LatLng(data[1].poi_latitude, data[1].poi_longitude) ,
                        scrollwheel: false
                    };

                var map = new google.maps.Map(_self.mapWrap[0], mapOptions);

                if (!obj.hasClass('map')) {
                    setMarkers(map);
                }else{
                    setMarkers2(map)
                }

            },

            setMarkers = function (map) {
                var image = {
                    url: 'img/search-map__marker.png',
                    size: new google.maps.Size(33, 40),
                    origin: new google.maps.Point(-2, 0),
                    anchor: new google.maps.Point(0, 40)
                };

                $.each(data, function (i) {
                    var curLatLng = new google.maps.LatLng(this.poi_latitude, this.poi_longitude);

                    marker[ i ] = new google.maps.Marker({
                        position: curLatLng,
                        map: map,
                        icon: image
                    });

                    infowindow[i] = new google.maps.InfoWindow({
                        content: this.poi_text
                    });

                    setInfoWindow(i, map);
                });

            },

            setMarkers2 = function (map) {
                var image = {

                    url: 'img/map.png'

                };

                $.each(data, function (i) {
                    var curLatLng = new google.maps.LatLng(this.poi_latitude, this.poi_longitude);

                    marker[ i ] = new google.maps.Marker({
                        position: curLatLng,
                        map: map,
                        icon: image
                    });
                });

            },

            setInfoWindow = function (index, map) {

                google.maps.event.addListener(marker[index], 'click', function () {
                    infowindow[index].open(map, marker[index]);
                    return false;
                });

            },

            init = function () {
                addEvents();
            };
        init();
    };

    var SearchTooltipMap = function (obj) {

        this.obj = obj;
        this.mapWrap = this.obj.find(".preview-info");

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {},

            mapAddition = function(){
                $.each(_self.mapWrap, function(){
                    new AddMap($(this));
                });
            },

            init = function () {
                addEvents();
                mapAddition();
            };
        init();
    };

    var SearchTooltipMap_2 = function (obj) {

        this.obj = obj;
        this.mapWrap = this.obj.find(".recently-viewed__item");

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {},

            mapAddition = function(){
                $.each(_self.mapWrap, function(){
                    new AddMap($(this));
                });
            },

            init = function () {
                addEvents();
                mapAddition();
            };
        init();
    };

    var SearchTooltipMap_3 = function (obj) {

        this.obj = obj;
        this.mapWrap = this.obj.find(".search-map");

        //private properties
        var _self = this;

        //private methods
        var addEvents = function () {},

            mapAddition = function(){
                $.each(_self.mapWrap, function(){
                    new AddMap1($(this));
                });
            },

            init = function () {
                addEvents();
                mapAddition();
            };
        init();
    };

    var AddMap = function(obj){

        this.obj = obj;
        this.mapInner = this.obj.find(".preview-info__map-wrap");
        var marker = [];
        var map;
        var data = JSON.parse(this.mapInner.attr('data-map')).marks;

        //private properties
        var _self = this;

        //private methods
        var addEvents = function (){
                google.maps.event.addDomListener(window, 'load', initialize);

                _self.obj.on({
                    mouseenter: function(){
                        google.maps.event.trigger(map, 'resize');
                    }
                });

            },

            initialize = function () {
                var mapOptions = {
                    zoom: 12,
                    center: new google.maps.LatLng(data[0].poi_latitude, data[0].poi_longitude)
                };
                map = new google.maps.Map(_self.mapInner[0], mapOptions);
                setMarkers(map);
            },

            setMarkers = function (map) {
                var image = {
                    url: 'img/search-map__marker.png',
                    size: new google.maps.Size(33, 40),
                    origin: new google.maps.Point(-2, 0),
                    anchor: new google.maps.Point(0, 40)
                };

                $.each(data, function (i) {
                    var curLatLng = new google.maps.LatLng(this.poi_latitude, this.poi_longitude);
                    marker[ i ] = new google.maps.Marker({
                        position: map.getCenter(),
                        map: map,
                        icon: image
                    });

                });
            },

            init = function () {
                addEvents();
            };

        init();

    };

    var AddMap1 = function(obj){

        this.obj = obj;
        this.mapInner = this.obj.find(".preview-info__map-wrap");
        var marker = [];
        var map;
        var data = JSON.parse(this.mapInner.attr('data-map')).marks;

        //private properties
        var _self = this;

        //private methods
        var addEvents = function (){
                google.maps.event.addDomListener(window, 'load', initialize);

                $('.brand-box__map').on({
                    click: function(){
                        google.maps.event.trigger(map, 'resize');
                    }
                });

            },

            initialize = function () {
                var mapOptions = {
                    zoom: 12,
                    center: new google.maps.LatLng(data[0].poi_latitude, data[0].poi_longitude)
                };
                map = new google.maps.Map(_self.mapInner[0], mapOptions);
                setMarkers(map);
            },

            setMarkers = function (map) {
                var image = {
                    url: 'img/search-map__marker.png',
                    size: new google.maps.Size(33, 40),
                    origin: new google.maps.Point(-2, 0),
                    anchor: new google.maps.Point(0, 40)
                };

                $.each(data, function (i) {
                    var curLatLng = new google.maps.LatLng(this.poi_latitude, this.poi_longitude);
                    marker[ i ] = new google.maps.Marker({
                        position: map.getCenter(),
                        map: map,
                        icon: image
                    });

                });
            },

            init = function () {
                addEvents();
            };

        init();

    };

    var NewHeaderDropdown = function (obj) {

        this.obj = obj;


        //private properties
        var _self = this,
            _dropDownBtn = obj.find('.dropdown-show'),
            _dropdown = obj.find('.header-dropdown');

        //private methods
        var addEvents = function () {

                _dropDownBtn.on({
                    click: function () {
                        var curElem = _dropDownBtn.nextAll('.header-dropdown');

                        if ($('.header-dropdown.active').length && !curElem.hasClass('active')) {
                            $('.header-dropdown').removeClass('active')
                        }
                        curElem.toggleClass('active')
                    }
                });
                $(document).on(
                    "click",
                    ".dropdown-main",
                    function (event) {
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                );
                $(document).on("click", "body", function () {
                    _dropdown.removeClass('active')
                });

            },

            init = function () {
                addEvents();

            };
        init();
    };

    var BusinessSearcher = function (obj) {
        this.obj = obj;
        this.btn = obj.find('.btn-collapse');

        this.init();
    };
    BusinessSearcher.prototype = {
        init: function () {
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function () {
            var self = this;

            return {
                addEvents: function () {
                    self.btn.on({
                        'click': function(){
                            if(self.btn.hasClass('active')){
                                self.obj.removeClass('active');
                                self.btn.removeClass('active');
                            }else{
                                self.obj.addClass('active');
                                self.btn.addClass('active');
                            }
                            setTimeout(function(){
                                $(window).trigger('resize');
                            },300);
                            return false;
                        }
                    });
                },

                build: function () {
                    self.core.addEvents();
                }
            };
        }
    };

    var subTabl = function () {

        //private properties
        var _self = this,
            _btn = $('.ico-more');

        //private methods
        var addEvents = function () {
                _btn.on({
                    click: function () {
                        var cutItem = $(this);
                        if (cutItem.parent().parent().hasClass('active')) {
                            cutItem.parent().parent().removeClass('active');
                            cutItem.parent().parent().next('.sub-tabl').slideUp(300);
                        }
                        else {
                            cutItem.parent().parent().addClass('active');
                            cutItem.parent().parent().next('.sub-tabl').slideDown(300);
                        }
                        setTimeout(function(){
                            $(window).trigger('resize');
                        },300);

                        return false;
                    }
                });

            },
            posHeader = function () {
                var headerHeight = $('.business-resolutions__row').innerHeight();
            },
            init = function () {
                posHeader();
                addEvents();
            };

        init();
    };

    var DropDown = function (obj) {

        //private properties
        var _self = this,
            _obj = obj,
            _elem = _obj.find('.careers__title'),
            _nextElem = _elem.next();

        //private methods
        var _addEvents = function () {
                _elem.on({
                    'click':function(){
                        var curElem = $(this);

                        if (curElem.hasClass('active')) {
                            _hide(curElem);
                        } else {
                            _show(curElem);
                        }

                    }
                })
            },
            _checkInit = function(){
                $.each(_elem, function(){
                    var curElem = $(this),
                        curElemNext = curElem.next();

                    if (!curElem.hasClass('active')) {
                        curElemNext.css({ display: 'none' });
                    }
                })
            },
            _init = function () {
                obj[0].shablon = self;
                _addEvents();
                _checkInit();

            },
            _hide = function(elem){
                elem.removeClass('active');
                elem.next().slideUp();
            },
            _show = function(elem){
                _elem.removeClass('active');
                _nextElem.slideUp();
                elem.addClass('active');
                elem.next().slideDown();
            };

        _init();
    };

    var SiteAccord = function (obj) {

        var _self = this,
            _obj = obj,
            _item = _obj.find(">li"),
            _header = _item.find("h2");

        var _addEvents = function () {

                _header.on({
                    click: function(e){
                        var parentBlock = $(this).closest('li');
                        parentBlock.find('>div').slideUp(300);
                        parentBlock.removeClass('active');
                        if( $(this).next().css('display') == 'none'){
                            $(this).next().slideDown(300);
                            parentBlock.addClass('active');
                            $('html, body').stop().animate({
                                scrollTop: $(this).offset().top-25
                            }, 500);
                            e.preventDefault();
                        }
                        else{$(this).next().slideUp(300);
                            $(this).removeClass('active');}
                    }
                })

            },
            _init = function () {
                _addEvents();
            };

        _init();
    };


    $(function () {
        accordion = new Accordion();
        menu = new Menu();

        if($( ".datepicker").length){
            $( ".datepicker" ).datepicker({
                dateFormat: "dd/mm/yy",
                dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
            });

            $('.datepicker-wrap').on({
                'click': function(){
                    $(this).find('.datepicker').datepicker('show');
                }
            });

            $(window).on({
                'resize':function(){
                    $( ".datepicker" ).datepicker('hide');
                }
            });

        }

        if ($('.careers').length) {
            $('.careers').each( function(){
                new DropDown( $(this) );
            } );
        }

        if ($('.press-media').length) {
            var msg,
                elemCol = $('.press-media__item').length - 1,
                activeId,
                way = $('.press-media').attr('data-action');

            var sendAjax = function(){
                $.ajax({
                    url: way,
                    data: {
                        id: activeId
                    },
                    dataType: 'json',
                    type: "get",
                    success: function (m) {
                        msg = m;

                        $('.popup__press .press-media__description').remove();

                        $('.popup__press .press-media').prepend(msg.items);

                    },
                    error: function (XMLHttpRequest) {
                        if (XMLHttpRequest.statusText != "abort") {
                            alert("ERROR!!!");
                        }
                    }
                });
            }

            $('.press-media__item').on({
                'click':function(){
                    $('.press-media__item').removeClass('active');
                    $(this).addClass('active');
                    activeId = $(this).attr('data-id');
                    sendAjax();
                }
            });

            $('.popup__nav a').on({
                'click': function(){
                    var curElem = $(this),
                        activeElem = $('.press-media').find('.active'),
                        parentElem = activeElem.parent();

                    $('.press-media__item').removeClass('active');


                    if (curElem.hasClass('btn-prev')) {
                        if (activeElem.prev().length) {
                            activeElem.prev().addClass('active');
                        } else {
                            if (parentElem.prev().length) {
                                parentElem.prev().find('.press-media__item').eq(-1).addClass('active');
                            } else {
                                $('.press-media__wrap').eq(-1).find('.press-media__item').eq(-1).addClass('active');
                            }
                        }
                    } else {
                        if (activeElem.next().length) {
                            activeElem.next().addClass('active');
                        } else {
                            if (parentElem.next().length) {
                                parentElem.next().find('.press-media__item').eq(0).addClass('active');
                            } else {
                                $('.press-media__wrap').eq(0).find('.press-media__item').eq(0).addClass('active');
                            }
                        }
                    }

                    activeId = $('.press-media').find('.active').attr('data-id');

                    sendAjax();

                    return false;
                }
            });
        }

        if($( ".spinner").length){
            $( ".spinner" ).spinner();
        }

        $('.dropdown-main').each(function () {
            new NewHeaderDropdown($(this));
        });

        $('.mediafilm').each(function () {
            new Video($(this));
        });

        $('.tabs').each(function(){
            new Tabs($(this));
        });

        $('.brand-box__business').each(function () {
            new Tooltip($(this));
        });

        $('.popup__record-timeField').each(function () {
            new AddRow($(this));
        });

        $('.business-searcher,.search__block').each(function() {
            new BusinessSearcher ($(this))
        });

        $('.business-resolutions').each(function() {
            new subTabl ($(this))
        });

        if ($('.swiper-container').length) {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                centeredSlides: false,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });
        }

        if ($('.team-members').length) {

            var slider = $('.team-members .swiper-wrapper'),
                sliderPreview = $('.team-members__preview .row');

            $.each(slider.find('.team-members__info-wrap'), function(){
                var curElem = $(this);

                curElem.clone().addClass('col-xs-6 col-sm-4 col-md-3 col-lg-2').appendTo(sliderPreview);

            });

            $('.team-members__preview .team-members__info-wrap:first-child').addClass('active');

            var teamSlider = new Swiper('.team-members__slider-container', {
                pagination: '.team-members__pagination',
                nextButton: '.team-members__next',
                prevButton: '.team-members__prev',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                loop: true
            });

            $('.team-members__info-wrap').on('click', function(){
                var curElem = $(this),
                    curInd = curElem.index();

                $('.team-members__info-wrap').removeClass('active');
                curElem.addClass('active');

                $('.swiper-pagination-bullet').eq(curInd).trigger('click');

                return false;
            })
        }

        if ($(".popup__record-clock").length) {
            $('#stepExample1').timepicker({'step': 30});
            $('#stepExample2').timepicker({'step': 30});
        }

        $('.search-map').each(function () {
            new SearchMap($(this));
        });

        $('.brand-box__map').each(function () {
            new PopupMap($(this));
        });

        $('.popup__record-emailField').each(function () {
            new AddEmailField($(this));
        });

        $('.popup__record-phoneField').each(function () {
            new AddPhoneField($(this));
        });

        $.each( $(".search__rate"), function(){
            $('.search__rate-hover').rating({
                fx: 'full',
                image: 'img/rate-cell.png',

                loader:'img/rate-cell.png',
                callback: function (responce) {

                    this.vote_success.fadeOut(2000);
                }
            });
        } );

        $('.search').each(function () {
            new SearchTooltipMap($(this));
        });

        $('.recently-viewed').each(function () {
            new SearchTooltipMap_2($(this));
        });

        $('.popup-map').each(function () {
            new SearchTooltipMap_3($(this));
        });

        $('.brand-review__hide-graph').each(function () {
            new HideGraph($(this));
        });

        $('.brand-box__rating .site__btn').each(function () {
            new WriteReview($(this));
        });

        $.each( $(".show-rating"), function(){
            var filling = $(this).find(".show-rating__wrap > div"),
                vol = $(this).find("span").text(),
                volTotal = 100/5*vol;
            filling.css({
                "height": volTotal+"%"
            });
        } );

        $('.site__accord').each(function () {
            new SiteAccord($(this));
        });

    });

    $('.map-close').on({
        'click': function(){
            var curElem = $(this),
                map = $('.search-map');

            if(curElem.hasClass('active')) {
                curElem.removeClass('active');
                map.removeClass('close');
            } else {
                curElem.addClass('active');
                map.addClass('close');
            }
        }
    });

    $.each( $('.site__menu'), function(){
        new SiteMenu ( $(this) )
    } );
    $.each($('[data-toggle="tooltip"]'), function () {
        $(this).tooltip();
    });

})();






