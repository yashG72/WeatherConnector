
// Ensure the DOM content is loaded before accessing DOM elements
document.addEventListener("DOMContentLoaded", function() {
    // Selecting DOM elements
    const cityNameElement = document.getElementById("cityName");
    const cloudPctElement = document.getElementById("cloud_pct");
    const tempElement = document.getElementById("temp");
    const feelsLikeElement = document.getElementById("feels_like");
    const humidityElement = document.getElementById("humidity");
    const minTempElement = document.getElementById("min_temp");
    const maxTempElement = document.getElementById("max_temp");
    const windSpeedElement = document.getElementById("wind_speed");
    const windDegreesElement = document.getElementById("wind_degrees");
    const sunriseElement = document.getElementById("sunrise");
    const sunsetElement = document.getElementById("sunset");
    const submitButton = document.getElementById("submit");
    const cityInput = document.querySelector("input[type='search']");
    const cityDropdown = document.getElementById("cityDropdown");

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '86a4a6939amshb138d7cb4f343a5p108330jsn129bcd305ff7',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        // Update city name in the UI
        cityNameElement.textContent = city;

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);

                // Update UI with weather data
                cloudPctElement.textContent = response.cloud_pct;
                tempElement.textContent = response.temp;
                feelsLikeElement.textContent = response.feels_like;
                humidityElement.textContent = response.humidity;
                minTempElement.textContent = response.min_temp;
                maxTempElement.textContent = response.max_temp;
                windSpeedElement.textContent = response.wind_speed;
                windDegreesElement.textContent = response.wind_degrees;
                sunriseElement.textContent = response.sunrise;
                sunsetElement.textContent = response.sunset;
            })
            .catch(err => console.log(err));
    };

  
    // Event listener for form submission
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        getWeather(cityInput.value);
    });

    // Fetch weather data for the default city
    getWeather("Delhi");
   
     // Event listener for dropdown selection
     cityDropdown.addEventListener("change", (e) => {
        const selectedCity = e.target.value;
        getWeather(selectedCity);
    });
    
});
