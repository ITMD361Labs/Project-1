function initMap() {
	//location of orlando
	var el = document.getElementById('map');
	var orlando = { lat: 28.532750418214206, lng: -81.38378947662801};
	//zoomed in onto the city 
	var mapSettings = {
		center: orlando,
	 	zoom: 11,
	};

	var myMap = new google.maps.Map(el, mapSettings);
	var marker = new google.maps.Marker({
	  position: orlando,
	  map: myMap,
	  animation:google.maps.Animation.DROP
	});

	//scale disney image
	var icon = {
		url: "images/disney.jpeg",
		scaledSize: new google.maps.Size(100,50)
	};
	
	//create disney location 
	var disney = {lat:28.384559737896573, lng: -81.56459180702294};
	var marker_two = new google.maps.Marker({
		position: disney,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: icon
	});

	var disneyString = '<h2> Walt Disney World Resort</h2><p>Well-known attraction comprising large resorts, dining, shops & 4 theme parks with rides & shows.</p>' 
	var windowinfo = new google.maps.InfoWindow({
		content: disneyString
	});
	//add event listeners to mouse on and off the icon
	google.maps.event.addListener(marker_two, 'mouseover',function(){
		windowinfo.open(myMap, marker_two);
	});
	google.maps.event.addListener(marker_two, 'mouseout', function(){
		windowinfo.close(myMap,marker_two);
	});

	//create universal location marker
	var universal = {lat: 28.477244468862743, lng:-81.46714627419958};
	
	
}

google.maps.event.addDomListener(window, 'load', init);