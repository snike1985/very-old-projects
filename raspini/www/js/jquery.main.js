$(function(){

    if ($('.contacts__map').length) {
        var map;
        function initialize() {
            var myLatlng = new google.maps.LatLng(44.904743, 7.435035);
            var mapOptions = {
                zoom: 15,
                center: myLatlng,
                scrollwheel: false
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Raspini'
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);

    }

    $('.product a.google').attr('href', 'https://plus.google.com/share?url=' + window.location.href);
    $('.product a.facebook').on('click', function(){
        Share.facebook(window.location.href, $('title').text(), window.location.host +'/img/logo.png','#');
        return false;
    });
    $('.product a.twitter').on('click', function(){
        Share.twitter(window.location.href, $('title').text());
        return false;
    });

    Share = {
        facebook: function(purl, ptitle, pimg, text) {
            url  = 'http://www.facebook.com/sharer.php?s=100';
            url += '&p[title]='     + encodeURIComponent(ptitle);
            url += '&p[url]='       + encodeURIComponent(purl);
            url += '&p[images][0]=' + encodeURIComponent(pimg);
            Share.popup(url);
        },
        twitter: function(purl, ptitle) {
            url  = 'http://twitter.com/share?';
            url += 'text='      + encodeURIComponent(ptitle);
            url += '&url='      + encodeURIComponent(purl);
            url += '&counturl=' + encodeURIComponent(purl);
            Share.popup(url);
        },

        popup: function(url) {
            window.open(url,'','toolbar=0,status=0,width=626,height=436');
        }
    };

    $('.click-btn').parent().next().css({ display: 'none' });

    $('.click-btn').on({
        'click':function(){
            var curElem = $(this);

            if(curElem.hasClass('active')) {
                curElem.removeClass('active');
                curElem.parent().next().slideUp();
            } else {
                curElem.addClass('active');
                curElem.parent().next().slideDown();
            }
            return false;
        }
    });

    $('ul.navbar-nav > li > a').on({
        'click': function(){
            if ($(window).width() < 768) {
                var curElem = $(this).parent(),
                    thisElem = $(this);
                if(!curElem.hasClass('social') && thisElem.next().hasClass('sub-menu')) {
                    if(curElem.hasClass('active')) {
                        $('.navbar-nav > li').removeClass('active');
                        curElem.find('.sub-menu').slideUp();
                    } else {
                        $('.navbar-nav > li.active').find('.sub-menu').slideUp();
                        $('.navbar-nav > li').removeClass('active');
                        curElem.addClass('active');
                        curElem.find('.sub-menu').slideDown();
                    }
                    return false;
                }
            }
        }
    });

    $('.navbar-nav > li').on({
        'mouseenter': function(){
            if ($(window).width() > 767) {
                var curElem = $(this);
                $('.navbar-nav > li').removeClass('active');
                curElem.addClass('active');
                curElem.find('.sub-menu').stop(true,false).slideDown();
            }

        },
        'mouseleave': function(){
            if ($(window).width() > 767) {
                var curElem = $(this);
                $('.navbar-nav > li').removeClass('active');
                curElem.find('.sub-menu').slideUp(1);
            }
        }
    });

    $('.navbar-nav dt').on({
        'click': function(){
            if ($(window).width() < 768) {
                var curElem = $(this);
                if(curElem.hasClass('active')) {
                    curElem.removeClass('active');
                    $('.navbar-nav dt').removeClass('active');
                    curElem.next().slideUp();
                } else {
                    $('.navbar-nav dt').next().slideUp();
                    $('.navbar-nav dt').removeClass('active');
                    curElem.addClass('active');
                    curElem.next().slideDown();
                }
                return false;
            }
        }
    });

    $.each( $('.popups'), function(){
        new Popup ( $(this) );
    } );

} );