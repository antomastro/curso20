const apiKey = 'a231411aa094b0eea59d58c78a68b39a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

function buscarClima() {
  const ciudad = document.getElementById('ciudad').value;
  const url = `${apiUrl}${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('resultado').textContent = `En ${data.name},hay ${data.weather[0].description} con posibles lluvias de ${data.rain ? data.rain['3h'] : 0} mm,nieve de ${data.snow ? data.snow['3h'] : 0} mm. La temperatura actual es de ${data.main.temp}°C. La temperatura maxima es de ${data.main.temp_max}°C y la temperatura minima es de ${data.main.temp_min}°C. Hay una humedad de ${data.main.humidity}% y una velocidad de viento de ${data.wind.speed} m/s.`;
    })
    .catch(error => {
      console.error(error);
      document.getElementById('resultado').textContent = 'No pude encontrar el clima, por favor intenta de nuevo.';
    });
}