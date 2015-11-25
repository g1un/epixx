//map
$(document).ready(function() {

    $("#owl-example").owlCarousel();

    if (document.querySelector('.map')) {

        var map;

        function initialize() {
            var place = new google.maps.LatLng(35.960144, 38.999318);

            var stylez = [
                {
                    featureType: "all",
                    elementType: "all",
                    stylers: [
                        {saturation: -100}
                    ]
                }
            ];

            var mapOptions = {

                zoom: 10,
                center: place,
                panControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: false,
                streetViewControl: false,
                overviewMapControl: false

            };

            map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var mapType = new google.maps.StyledMapType(stylez, {name: "Grayscale"});
            map.mapTypes.set('tehgrayz', mapType);
            map.setMapTypeId('tehgrayz');

            var myLatLng = {lat: 35.960144, lng: 38.999318};

            //var map = new google.maps.Map(document.getElementById('map'), {
            //    zoom: 10,
            //    center: myLatLng
            //});

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });


            //var image = 'img/marker.png';
            //var beachMarker = new google.maps.Marker({
            //    position: {lat: 59.910772, lng: 30.312318},
            //    map: map,
            //    icon: image
            //});
        }

        google.maps.event.addDomListener(window, 'load', initialize);

    }

});