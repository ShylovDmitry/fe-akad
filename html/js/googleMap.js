function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(39.949633, -75.057118),
        zoom: 17
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}