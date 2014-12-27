if( navigator.geolocation ) {
     navigator.geolocation.getCurrentPosition( function( position ) {
         var location = new google.maps.LatLng( position.coords.latitude, position.coords.longitude )
	 console.log( location )
     } )
 }
