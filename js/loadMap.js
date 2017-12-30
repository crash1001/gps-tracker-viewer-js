var icon;
var marker;
var map;
var bounds;

function initMap() {
    var latitude = 27.642423;
    var longitude = 85.340586;
    var location = new google.maps.LatLng(latitude, longitude);
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
       center : location,
       zoom : 16,
       panControl : false,
       scrollwheel : true,
       fullscreenControl : true,
       mapTypeId : google.maps.MapTypeId.ROADMAP

   };
    map = new google.maps.Map(mapCanvas, mapOptions);
    createIcon('black');
    bounds = new google.maps.LatLngBounds();
    addMarkers(27.642324, 86.340587, 120, 1);
    createIcon('red');
    addMarkers(27.642325, 86.340588, 120, 1);
    //
     map.fitBounds(bounds);
     map.panToBounds(bounds);
}

function addMarkers(latitude, longitude, heading, HDOP) {
    var LatLong = latitude + ', ' + longitude;
    icon.rotation = heading;

    createMarkers(new google.maps.LatLng(latitude, longitude));
    var contentString =
            '<div class="info-window">' +
                '<div class="info-content">' +
                    '<table class="table">' +
                        '<tbody>' +
                            '<tr>' +
                                '<th>Date & Time :</th>' +
                                '<td>' + time +'</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>Position :</th>' +
                                '<td>' + LatLong +'</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>Heading :</th>' +
                                '<td>' + heading + '</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>HDOP :</th>' +
                                '<td>' + HDOP + '</td>'+
                            '</tr>' +
                        '</tbody>' +
                    '</table>' +
                '</div>' +
                // '<script>' +
                //     'document.getElementById("currentTime").innerHTML = Date();' +
                // '</script>' +
             '</div>';


        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 1000
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    marker.setMap(map);
    var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
    bounds.extend(loc);

}

function createIcon(color) {
    icon = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 3,
        fillColor: color,
        fillOpacity: 1,
        anchor: new google.maps.Point(0,0),
        rotation : 0
    };
}

function createMarkers(location) {
     marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: false,
        icon: icon,
        flat: true
    });
}

function centerMap(latitude, longitude) {
    var location = new google.maps.LatLng(latitude, longitude);
    map.center = location;
}
