function initMap() {
// The location of Uluru
	const orlando = { lat: 28.532750418214206, lng: -81.38378947662801, };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 11,
  center: orlando,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
  position: orlando,
  map: map,
});
}

google.maps.event.addDomListener(window, 'load', init);