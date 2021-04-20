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

	/*Create first marker on the Orlando Downtown
	 *Add event listener with an info window
	 */
	var marker = new google.maps.Marker({
	  position: orlando,
	  map: myMap,
	  animation:google.maps.Animation.DROP
	});

	var orlandoString = 
		"<h2> Top 10 Places to go to in Orlando</h2><ol> <li>Wizarding World of Harry Potter</li><li>Universal Island of Adventure</li><li>Disney's Animal Kingdom</li><li> Universal Studios Florida</li><li>Discovery Cove</li><li>Disney Springs</li><li>Magic Kingdom Park</li><Lake Rianhard</li><li>Epcot</li><li>Fun Spot America</li>"; 
	var infoWindow = new google.maps.InfoWindow({
		content: orlandoString
	});
	//add event listeners to mouse on and off the icon
	google.maps.event.addListener(marker, 'click',function(){
		infoWindow.open(myMap, marker);
	});
	
	/* Add disney location
	 * Resize icon
	 * Add event listeners to provide info window for the universal resort
	 */
	//create disney location 
	//scale disney image
	var icon = {
		url: "images/disney.jpeg",
		scaledSize: new google.maps.Size(100,50)
	};

	var disney = {lat:28.384559737896573, lng: -81.56459180702294};

	var marker_two = new google.maps.Marker({
		position: disney,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: icon
	});
	marker_two.addListener('click',toggleBounce);

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

	/* Add universal location
	 * Create a togglebounce function to bounce only when the mouse is over the icon
	 * Resize icon
	 * Add event listeners to provide info window for the universal resort
	 */

	//make the markers drop not all at once
	function toggleBounce(){ 
   		if (marker_three.getAnimation() !== null) {
    		marker_three.setAnimation(null);
 		} else {
   		marker_three.setAnimation(google.maps.Animation.BOUNCE);
   		}   		 		
 	}
 	var icon_two = {
 		url: "images/universal.jpeg",
		scaledSize: new google.maps.Size(100,60)
 	}
	//create universal location marker
	var universal = {lat: 28.477244468862743, lng:-81.46714627419958};
	var marker_three =  new google.maps.Marker({
		position: universal,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: icon_two
	});
	marker_three.addListener('mouseover',toggleBounce);
	marker_three.addListener('mouseout',toggleBounce);
	
	var uniString = '<h2> Universal Studios Florida</h2><p>Famous, sprawling amusement park featuring movie-themed rides, attractions & entertainment.</p>' 
	var windowinfo_two = new google.maps.InfoWindow({
		content: uniString
	});
	//add event listeners to mouse on and off the icon
	google.maps.event.addListener(marker_three, 'mouseover',function(){
		windowinfo_two.open(myMap, marker_three);
	});
	google.maps.event.addListener(marker_three, 'mouseout', function(){
		windowinfo_two.close(myMap,marker_three);
	});
	
}

google.maps.event.addDomListener(window, 'load', init);