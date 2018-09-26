window.onload = () => {
    initMap()
}

function initMap() {
    let map, infoWindow;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.417, lng: -3.703},
      zoom: 9
    });
    infoWindow = new google.maps.InfoWindow;


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        let posLat = position.coords.latitude;
        let posLng = position.coords.longitude;
        

        let minPosLat = posLat + 18;
        let maxLat = 90;

        let maxLng = 90;


       let randomLat = function getRandomLat(min, max) {
            return Math.random() * ((max - min) + min).toFixed(3) * 1;;
        }
        let newPosLat = randomLat(minPosLat, maxLat);
        
        let randomLng = function getRandomLng(min, max) {
            return Math.random() * ((max - min) + min).toFixed(3) * 1;;
        }
        let newPosLng = randomLng(posLng, maxLng);

        let newPos = {
            lat : newPosLat,
            lng : newPosLng
        }

        console.log(newPos);

        infoWindow.setPosition(newPos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
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