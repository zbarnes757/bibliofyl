$(document).ready(function () {
	renderMap();
});

function renderMap () {
	var map = L.mapbox.map('map', 'zbarnes.lp9ob09d', {
			accessToken: 'pk.eyJ1IjoiemJhcm5lcyIsImEiOiJybXo2VGM4In0.DDe08W0GJd_JuJ8Xl995Tg'
		});
	map.addControl(L.mapbox.infoControl().addInfo('Some stuff for me to see.'));
}