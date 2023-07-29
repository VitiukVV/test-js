import { getWeatherDataByCityName } from "./weather-api.js";

const weatherFormEl = document.querySelector(".js-search-form");
const weatherWrapperEl = document.querySelector(".weather-wrapper");

const convertSecondsToHoursAndMinutes = (seconds) => {
  const date = new Date(seconds * 1000);

  return `${`${date.getHours()}`.padStart(
    2,
    0
  )}:${`${date.getMinutes()}`.padStart(2, 0)}`;
};

const handleWeatherFormSubmit = (event) => {
  event.preventDefault();

  const searchQuery = event.target.firstElementChild.value.trim();
  if (!searchQuery) {
    return;
  }
  getWeatherDataByCityName(searchQuery)
    .then((data) => {
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      console.log(data);
      weatherWrapperEl.innerHTML = createWeatherCard(data);
    })
    .catch(console.warn);
};

weatherFormEl.addEventListener("submit", handleWeatherFormSubmit);

function createWeatherCard(data) {
  return `<div class='weather__card'>
  <h2 class='city-name'>${data.name}</h2>
  <ul class='weather-info list'>
    <li class='weather-info-item'>
      <p class='temp'>Температура: ${data.main.temp}<sup>&#176;</sup></p>
    </li>
    <li class='weather-info-item'>
      <p class='feels-like-temp'>Відчувається як:
        ${data.main.feels_like}<sup>&#176;</sup></p>
    </li>
    <li class='weather-info-item'>
      <p class='sunrise-time'>Схід сонця: ${data.sys.sunrise}</p>
    </li>
    <li class='weather-info-item'>
      <p class='sunset-time'>Захід сонця: ${data.sys.sunset}</p>
    </li>
    <li class='weather-info-item'>
      <p class='clouds'>Хмарність: ${data.clouds.all}%</p>
    </li>
  </ul>
</div>`;
}
