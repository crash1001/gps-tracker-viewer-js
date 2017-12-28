
function initMap() {

    var latitude = 27.642423;
    var longitude = 85.340586;
    var gpsLatLong = latitude + ', ' + longitude;
    var gpsTime = Date();
    
    var gpsHeading = 180;
    var gpsHDOP = 0.5;
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

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var icon = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 3,
        fillColor: 'black',
        fillOpacity: 1,
        anchor: new google.maps.Point(0,0),
        rotation : 0
};
    icon.rotation = gpsHeading;
    var marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: false,
            icon: icon,
            flat: true
        });

        var contentString =
            '<div class="info-window">' +
                '<div class="info-content">' +
                    '<table class="table">' +
                        '<tbody>' +
                            '<tr>' +
                                '<th>Date & Time :</th>' +
                                '<td>' + gpsTime +'</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>Position :</th>' +
                                '<td>' + gpsLatLong +'</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>Heading :</th>' +
                                '<td>' + gpsHeading + '</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>HDOP :</th>' +
                                '<td>' + gpsHDOP + '</td>'+
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



}

