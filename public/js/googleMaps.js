function initMap() {
	var latlng = {lat:32.8788033, lng:-117.2381008};

	var map = new google.maps.Map(document.getElementById('map'),
    {
        center:latlng,
            zoom:15
    });

    var marker = new google.maps.Marker({
        position: latlng,
        map:map,
        title:"UCSD"
    });
}