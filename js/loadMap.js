
var map;
var bounds;
var select;
var deviceList;

function populateSelection(){

    retriveDevices();
    var index;
    deviceList = ["device1", "device2", "device3"];
    select = document.getElementById("device-select");
    for(index in deviceList) {
        select.options[select.options.length] = new Option(deviceList[index], index);

    }

}

function initMap() {
    populateSelection();
    var markers = [
        [40.671531, -73.963588, 360, 0.4],
        [40.672587, -73.968146, 120, 0.6],
        [40.665588, -73.965336, 200, 0.9]
    ];

    bounds = new google.maps.LatLngBounds();
    var mapOptions = {
         mapTypeId : google.maps.MapTypeId.ROADMAP
   };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(50);

    var icon = createIcon();
    addMarker(markers[0], icon);
    addMarker(markers[1], icon);
    addMarker(markers[2], icon);
}

function addMarker(posInfo, icon) {

        var infoWindowContent =
            '<div class="info-window">' +
                '<div class="info-content">' +
                    '<table class="table">' +
                        '<tbody>' +
                            '<tr>' +
                                // '<th>Date & Time :</th>' +
                                // '<td>' + gpsTime +'</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>Position :</th>' +
                                '<td>' + posInfo[0] + ', ' + posInfo[1] +'</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>Heading :</th>' +
                                '<td>' + posInfo[2] + '</td>'+
                            '</tr>' +
                            '<tr>' +
                                '<th>HDOP :</th>' +
                                '<td>' + posInfo[3] + '</td>'+
                            '</tr>' +
                        '</tbody>' +
                    '</table>' +
                '</div>' +
            // '<script>' +
            //     'document.getElementById("currentTime").innerHTML = Date();' +
            // '</script>' +
            '</div>';

        var position = new google.maps.LatLng(posInfo[0], posInfo[1]);
        var infowindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });

        bounds.extend(position);
        icon.rotation = posInfo[2];

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icon
        });

        // marker.addListener('mouseover', function(){
        //
        //         infowindow.close();
        //
        //     infowindow.open(map, marker);
        // });
        // marker.addListener('mouseout', function(){
        //     infowindow.close();
        // });
        marker.addListener('click', function(){
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(map, 'click', function(){
            infowindow.close();
        })

        map.fitBounds(bounds);
        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
            this.setZoom(14);
            google.maps.event.removeListener(boundsListener);
        });
}

function createIcon() {
    var icon = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 3,
        fillColor: 'yellow',
        fillOpacity: 1,
        anchor: new google.maps.Point(0,0),
    };
    return icon;

}

function retriveDevices() {

}

//
// function snapToRoad() {
//     var api = "https://roads.googleapis.com/v1/snapToRoads?"
//     var path ="path=-35.27801,149.12958|-35.28032,149.12907|-35.28099,149.12929|-35.28144,149.12984|-35.28194,149.13003|-35.28282,149.12956|-35.28302,149.12881|-35.28473,149.12836";
//     var option = "&interpolate=true";
//     var apiKey = "&key=AIzaSyBzdQ2kuc-gSOkz2Un-r3YZ0Tnb2L7PU-c";
//
//     var url = api + path + option + apiKey;
//
//     fetch(url, {
//         method : 'get'
//     })
//         .then(response => response.json())
//         .then(function(data) {
//             console.log('Request succeeded with JSON response', data);
//             if(data.response.errors.length === 0) {
//                     window.location.replace("index.html");
//             }
//             else
//             {
//                 alert("Username or password Incorrect, plz enter correct username or password");
//             }
//         })
//         .catch(function(error) {
//             console.log('Request Failed', error);
//         });
// }


