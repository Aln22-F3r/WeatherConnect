document.getElementById('getWeatherBtn').addEventListener('click', async function () {
  if (!currentMarker) {
    alert("Selecciona un punto en el mapa");
    return;
  }

  const lat = currentMarker.getLatLng().lat.toFixed(5);
  const lon = currentMarker.getLatLng().lng.toFixed(5);

  const data = await fetchWeather(lat, lon);

  updateInfo(
    `Latitud: ${lat}, Longitud: ${lon}<br>
     Temperatura: ${data.temp}°C<br>
     Humedad: ${data.humidity}%<br>
     Clima: ${data.description}`
  );
});

function updateInfo(text) {
  document.getElementById('info').innerHTML = text;
}
