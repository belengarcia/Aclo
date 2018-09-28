window.onload = () => {
    initMap()
}

function initMap() {
    let map, infoWindow, geocoder;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.417, lng: -3.703},
      zoom: 9
    });
    geocoder = new google.maps.Geocoder;
    infoWindow = new google.maps.InfoWindow;


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        let posLat = position.coords.latitude;
        let posLng = position.coords.longitude;
        
        // let minPosLat = posLat + 18;
        // let maxLat = 90;
        // let maxLng = 90;
        // let newPosLat = randomLat(minPosLat, maxLat);
        // let newPosLng = randomLng(posLng, maxLng);


       let randomLat = function getRandomLat(min, max) {
            return (Math.random() * (max - min) + min).toFixed(3) * 1;;
        }
        let randomLng = function getRandomLng(min, max) {
            return (Math.random() * (max - min) + min).toFixed(3) * 1;;
        }

        let newPosLat = randomLat(-90, 90)
        let newPosLng = randomLng(-180, 180)

        let newPos = {
            lat : newPosLat,
            lng : newPosLng
        }

        console.log(newPos);

        geocodeLatLng(geocoder, map, infoWindow, newPos)

        // infoWindow.setPosition(newPos);
        // infoWindow.setContent('Location found.');
        // infoWindow.open(map);
        map.setCenter(newPos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

function handleLocationError(browserHasGeolocation, infoWindow, newPos) {
  infoWindow.setPosition(newPos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function geocodeLatLng(geocoder, map, infowindow, pos) {
  console.log('llamada')
  geocoder.geocode({'location': pos}, function(results, status) {
    if(status === 'ZERO_RESULTS') {
      initMap()
    } else if (status === 'OK') {
        if (results[0] && results[0].formatted_address !== 'Antártida') {
          console.log(results[0])
          map.setZoom(11);
          var marker = new google.maps.Marker({
            position: pos,
            map: map
          });
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else if (results[0].formatted_address === 'Antártida'){
          initMap()
        } else {
          window.alert('No results found');
        }
    } else if (status === 'OVER_QUERY_LIMIT') {
        map.setZoom(11);
        var marker = new google.maps.Marker({
          position: {
            lat: -41.298431,
            lng: 174.763628
          },
          map: map
        });
        infowindow.setContent('New Zeland');
        infowindow.open(map, marker);
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  })

}

    //https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse

    /*
Para el pais (para los vuelos)
results[0].address_components[2].long_name
*/