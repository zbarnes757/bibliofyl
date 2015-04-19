$(document).ready(function () {
	renderMap();
});


function renderMap () {
	L.mapbox.accessToken = 'pk.eyJ1IjoiemJhcm5lcyIsImEiOiJybXo2VGM4In0.DDe08W0GJd_JuJ8Xl995Tg';
	var map = L.mapbox.map('map', 'mapbox.pirates');
	map.setView([38.911, -77.034], 14);

	var myLayer = L.mapbox.featureLayer().addTo(map);
	myLayer.setGeoJSON(geoData);

	myLayer.on('click', displayInfo );

}


function displayInfo (event) {
	event.layer.closePopup();
	var $info = $('#info');
	var feature = event.layer.feature;
	var content = '<h3>' + feature.properties.title + '</h3>' +
								'<p>' + feature.properties.description + '</p>';

	$info.html(content);
}