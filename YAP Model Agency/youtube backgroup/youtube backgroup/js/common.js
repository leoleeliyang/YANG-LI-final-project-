
var ms_ie = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');

if ((old_ie > -1) || (new_ie > -1)) {
    ms_ie = true;
}


/* ================================== */
/* :::::::::: . Loading :::::::::::: */
/* ================================== */


$(".main-header, .main-paragraph").velocity({
    opacity: 0
});
$(".more, .notify-me, .countdown, .subscribe-on-main, .download-app-btn, .price").velocity({
    opacity: 0
});


$(window).on("load", function loadpage() {
    setTimeout(function () {
        $(".loading").css("opacity", "0");;
    }, 300);
    $(".main-header").velocity({
        opacity: 1
    }, {
        duration: 700,
        delay: 1000
    });
    $(".main-paragraph").velocity({
        opacity: 1
    }, {
        duration: 700,
        delay: 1200
    });
    $(".more, .notify-me, .countdown, .subscribe-on-main, .download-app-btn, .price").velocity({
        opacity: 1
    }, {
        duration: 600,
        delay: 1400
    });
});


/* ================================== */
/* :::::::::: . Common Js :::::::::: */
/* ================================== */


$(function () {

    var $checkMoreInfo = $(".more-info");

    if ($checkMoreInfo.length) {
        (function ($) {
            $(window).on("load", function () {
                $(".more-info").mCustomScrollbar({
                    axis: "y",
                    theme: "minimal-dark",
                    scrollInertia: 700,
                    mouseWheel: {
                        scrollAmount: 400
                    }
                });
            });
        })(jQuery);
    }

    $(document).on("ready", function () {
        $(this).scrollTop(0);
    });




    /* ===================================================== */
    /* :::::::: . Background photos and slideshow ::::::::: */
    /* ===================================================== */

 

    function initSlideshow(container) {
        var $reviewSlideshow = $(container);
        if (!$reviewSlideshow.length) return;
        $reviewSlideshow.backstretch([
                        "img/3.jpg",
                        "img/4.jpg"
                    ], {
            duration: 1000,
            fade: 2000
        });
    }

    initSlideshow(".slideshow-background"); // here you define container for slideshow or static image


    var $initYoutubeBackgroung = $(".youtube-background"); // variable with your container for youtube background

    if ($initYoutubeBackgroung.length) {
        $($initYoutubeBackgroung).backstretch("img/youtube.png"); // put the image for youtube background
    }

    


    /* ================================== */
    /* :::::: . Youtube background ::::: */
    /* ================================== */

    var $initYoutubeBackgroung = $(".youtube-background");

    if ($initYoutubeBackgroung.length) {
        $(function playerYoutube() {
            $(".player").mb_YTPlayer();
        });
        $('#play').on("click", function clickplay() {
            $('.player').playYTP(),
                $("#play").addClass("display-none"),
                $("#pause").removeClass("display-none")
        });
        $('#pause').on("click", function clickpause() {
            $('.player').pauseYTP();
            $("#pause").addClass("display-none"),
                $("#play").removeClass("display-none")
        });
        $("#mute").on("click", function clickmute() {
                $('.player').YTPMute(),
                    $("#mute").addClass("display-none"),
                    $("#unmute").removeClass("display-none")
            }),
            $("#unmute").on("click", function clickunmute() {
                $('.player').YTPUnmute(),
                    $("#unmute").addClass("display-none"),
                    $("#mute").removeClass("display-none")
            });
        $("#full-screen").on("click", function clickunmute() {
            $('.player').YTPFullscreen();
        });
    }



              


  


    var $initGoogleMap = $("#google-container");

    if ($initGoogleMap.length) {
        //set your google maps parameters
        var latitude = 40.705311,
            longitude = -74.2581879,
            map_zoom = 10;

        //google map custom marker icon - .png fallback for IE11
        var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        var marker_url = (is_internetExplorer11) ? 'img/location.png' : 'img/location.png';

        //define the basic color of your map, plus a value for saturation and brightness
        var main_color = '#2d313f',
            saturation_value = -20,
            brightness_value = 5;

        //we define here the style of the map
        var style = [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#e9e9e9"},
                        { "lightness": 17 }]
        },
        {   "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5"},
                        { "lightness": 20 }]
        },
        {   "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#ffffff"},
                        { "lightness": 17}]
        },
        {   "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#ffffff"},
                        { "lightness": 29},
                        { "weight": 0.2 }]},
        {   "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{ "color": "#ffffff"},
                        { "lightness": 18 }]
        },
        {   "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{ "color": "#ffffff"},
                        { "lightness": 16 }]
        },
        {   "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5"},
                        { "lightness": 21 }]
        },
        {   "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ "color": "#dedede"},
                        { "lightness": 21 }]
        },
        {   "elementType": "labels.text.stroke",
            "stylers": [{ "visibility": "on" },
                        {"color": "#ffffff"},
                        { "lightness": 16 }]
        },
        {   "elementType": "labels.text.fill",
            "stylers": [{ "saturation": 36},
                        { "color": "#333333"},
                        { "lightness": 40}]
        },
        {   "elementType": "labels.icon",
            "stylers": [{ "visibility": "off"}]
        },
        {   "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{ "color": "#f2f2f2"},
                        { "lightness": 19}]
        },
        {   "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#fefefe"},
                        { "lightness": 20}]
        },
        {   "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#fefefe"},
                        { "lightness": 17 },
                        {"weight": 1.2 }]
        }];

        //set google map options
        var map_options = {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style,
            }
            //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        //add a custom marker to the map


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: 'Melbourne, Australia',
            visible: true,
            icon: marker_url,
        });

        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

        //add custom buttons for the zoom-in/zoom-out on the map
        function CustomZoomControl(controlDiv, map) {
            //grap the zoom elements from the DOM and insert them in the map
            var controlUIzoomIn = document.getElementById('zoom-in'),
                controlUIzoomOut = document.getElementById('zoom-out');
            controlDiv.appendChild(controlUIzoomIn);
            controlDiv.appendChild(controlUIzoomOut);

            // Setup the click event listeners and zoom-in or out according to the clicked element
            google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
                map.setZoom(map.getZoom() + 1)
            });
            google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
                map.setZoom(map.getZoom() - 1)
            });
        }

        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        //insert the zoom div on the top left of the map
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
    }

});
