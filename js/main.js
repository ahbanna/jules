(function ($) {
    "use strict";


    // mean-menu (mobile)
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanMenuOpen: "<span></span><span></span><span></span>",
    });


    //    typed
    var typed = new Typed('.test', {
        strings: [
                "Web Designer.",
                "Web Developer.",
                "IOS Developer. ",
                ],
        //        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 20,
        loop: true,
    });


    //    sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 5) {
            sticky.removeClass('sticky-menu');
        } else {
            $('#sticky-header').addClass('sticky-menu')
        }

    });



    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });



    //faq

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }



    //wow
    new WOW().init();


    //pop-up video
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });


    //    Progress-bar

    $('#bar1').barfiller({
        barColor: '#e33324',

    });
    $('#bar2').barfiller({
        barColor: '#e33324',
        duration: 1500,
    });
    $('#bar3').barfiller({
        barColor: '#e33324',
        duration: 1300,
    });
    $('#bar4').barfiller({
        barColor: '#e33324',
        duration: 1100,
    });
    $('#bar5').barfiller({
        barColor: '#e33324',
        duration: 900,
    });
    $('#bar6').barfiller({
        barColor: '#e33324',
    });
    $('#bar7').barfiller({
        barColor: '#e33324',
    });
    $('#bar8').barfiller({
        barColor: '#e33324',
    });
    $('#bar9').barfiller({
        barColor: '#e33324',
    });



    // owl-caroRsel (testimonial)
    $('.testimonial-active').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,

        nav: false,
        dost: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    //    mixitup
    var mixer = mixitup('.my');


    //map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
            }
        ]
    },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "weight": "1.17"
            }
        ]
    },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
            },
                        {
                            "lightness": 45
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#c2a26e"
            },
                        {
                            "visibility": "on"
            }
        ]
    }
]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }


    // scroll
    $('body').materialScrollTop();








})(jQuery);
