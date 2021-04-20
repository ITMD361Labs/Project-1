function init(){
	//alert('it works');
	var map;
	map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 11,
  });
  
}

//google.maps.event.addDomListener(window, 'load', init);