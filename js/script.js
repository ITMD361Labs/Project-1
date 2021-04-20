function initMap() {
	//location of orlando
	const orlando = { lat: 28.532750418214206, lng: -81.38378947662801};
	//zoomed in onto the city 
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 11,
	  center: orlando,
	});

	
	const marker = new google.maps.Marker({
	  position: orlando,
	  map: map,
	});

	//scale image
	var icon = {
		url: "images/disney.jpeg",
		scaledSize: new google.maps.Size(100,50),
	};
	//create disney location 
	const disney = {lat:28.384559737896573, lng: -81.56459180702294};
	const markertwo = new google.maps.Marker({
		position: disney,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: icon
	});

	var disneyString = '<h2> Walt Disney World Resort</h2><p>Well-known attraction comprising large resorts, dining, shops & 4 theme parks with rides & shows.</p>' 
	var windowinfo = new google.maps.InfoWindow({
		content: disneyString
	});

	google.maps.event.addListener(markertwo, 'mouseover',function(){
		windowinfo.open(map, markertwo);
	});
	google.maps.event.addListener(markertwo, 'mouseout', function(){
		windowinfo.close(map,markertwo);
	});
}

google.maps.event.addDomListener(window, 'load', init);