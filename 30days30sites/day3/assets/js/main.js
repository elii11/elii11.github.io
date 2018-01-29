$(document).ready(function() {

  window.sr = ScrollReveal();

  sr.reveal('.border', {
    duration: 1500,
    origin: 'top'
  });

  sr.reveal('.img-thumbnail:nth-child(1)', {
    duration: 1500,
    origin: 'bottom',
    distance: '300px'
  });

});


$(function() {
  function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(18.0616, 120.5215),
        zoom: 18
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', myMap);
});
