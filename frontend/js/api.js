function fetchWeather(lat, lon) {
  return fetch(`http://localhost:8080/weather?lat=${lat}&lon=${lon}`)
    .then(res => res.json());
}
