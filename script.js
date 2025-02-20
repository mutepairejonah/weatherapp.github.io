//Titancode
document.getElementById('searchButton').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'api key here'; // Replace with your OpenWeatherMap API key
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherData = document.getElementById('weatherData');
      const name = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;


      weatherData.innerHTML =
      '<h2>' + name + '</h2><p>' + temperature + '°C, ' + description + humidity + windSpeed +'</p>';
    })
    .catch(error => console.log(error));
});

// function for redirect you on my whatsapp channel
function whats() {
   location = 'https://whatsapp.com/channel/0029Va86w5nJpe8gI5YQdQ0V';
}

