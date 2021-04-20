function initMap() {
	//location of orlando
	const orlando = { lat: 28.532750418214206, lng: -81.38378947662801};
	//zoomed in onto the city 
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 11,
	  center: orlando,
	  mapTypeId: google.maps.MapTypeId.SATELLITE,
	  mapTypeControlOptions: {
	  		position: google.maps.ControlPosition.BOTTOM_CENTER
	  }
	});

	const marker = new google.maps.Marker({
	  position: orlando,
	  map: map,
	});

	const disney = {lat:28.384559737896573, lng: -81.56459180702294};
	const markertwo = new google.maps.Marker({

	})
}

google.maps.event.addDomListener(window, 'load', init);