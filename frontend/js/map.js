const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

let currentMarker = null;

map.on('click', function (e) {
  const lat = e.latlng.lat.toFixed(5);
  const lon = e.latlng.lng.toFixed(5);

  if (currentMarker) map.removeLayer(currentMarker);
  currentMarker = L.marker([lat, lon]).addTo(map)
    .bindPopup(`Lat: ${lat}<br>Lon: ${lon}`)
    .openPopup();

  updateInfo(`Latitud: ${lat}, Longitud: ${lon}`);
});