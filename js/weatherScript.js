const searchForm = document.querySelector(".search-form");
const cityInput = document.getElementById("city-input");
const weatherContainer = document.querySelector(".weather-content");
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  weatherContainer.innerHTML = "";
});

function getWeather(cityName) {
  const APIKey = "xxxx";
  url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == "404") {
        alert("This location does not exist. Please enter a valid location.");
      } else {
        let temp = `${data.main.temp}&#8451`;
        let weather = data.weather[0].main;
        let minMaxTemp = `Min: ${data.main.temp_min}&#8451 Max: ${data.main.temp_max}&#8451`;
        let windSpeed = (data.wind.speed * 3.6).toFixed(2);
        let windNHumidity = `Humidity: ${data.main.humidity}% Wind: ${windSpeed}km/h`;
        makeCard(temp, weather, cityName, windNHumidity);
      }
    });
}

function makeCard(temp, weather, city, extra) {
  const htmlBody = document.querySelector(".body-dark-mode-active");
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");
  weatherCard.classList.add("dark-mode-card");
  if (htmlBody == null) {
    weatherCard.classList.toggle("dark-mode-card");
  }

  const imgDiv = document.createElement("div");
  const weatherImage = document.createElement("img");
  weatherImage.src = "../img/cloudy2.svg";

  const tempDiv = document.createElement("div");
  tempDiv.classList.add("temp");
  tempDiv.innerHTML = temp;

  const weatherDiv = document.createElement("div");
  weatherDiv.classList.add("weather");
  weatherDiv.innerText = weather;

  const cityNameDiv = document.createElement("div");
  cityNameDiv.classList.add("city-name");
  cityNameDiv.innerText = city;

  const minMaxTemp = document.createElement("div");
  minMaxTemp.classList.add("min-max-temp");
  minMaxTemp.innerText = extra;

  imgDiv.append(weatherImage);
  weatherCard.append(imgDiv);
  weatherCard.append(tempDiv);
  weatherCard.append(weatherDiv);
  weatherCard.append(cityNameDiv);
  weatherCard.append(minMaxTemp);
  weatherContainer.append(weatherCard);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var cityName = cityInput.value;
  getWeather(cityName);
  cityInput.value = "";
});
