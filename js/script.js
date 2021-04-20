function init(){
	alert('it works');
	var el = document.getElementById('map');
	var myLoc = new google.maps.LatLng(28.552493075299854, -81.35807994280118);
    var mapOptions = {
    	center: myLoc,
    	zoom: 18,
    	mapTypeId: google.maps.MapTypeId.SATELLITE,
    	mapTypeControlOptions:{
    		position: google.maps.ControlPosition.BOTTOM_CENTER
    	}
    };
}
  


google.maps.event.addDomListener(window, 'load', init);