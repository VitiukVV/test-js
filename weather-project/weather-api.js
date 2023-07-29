const API_KEY = "b092c2c2ad1cccfb15cd9c66278b76d2";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherDataByCityName = (cityName) =>
  fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=ua&units=metric`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
