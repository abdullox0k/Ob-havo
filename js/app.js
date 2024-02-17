const elWeatherDay = document.querySelector('.weather-card__title');
const elWeatherDate = document.querySelector('.weather-card__date');
const elWeatherCity = document.querySelector('.weather-card__city');
const elWeatherTemp = document.querySelector('.weather-card__temp');


const date = new Date()

elWeatherDay.textContent = date.getDay()
elWeatherDate.textContent = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

fetch('https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c')
    .then((res) => res.json())
    .then((data) => getData(data))

function getData(item) {
    console.log(item);
    elWeatherCity.textContent = item.name
    elWeatherTemp.textContent = item.main.temp
}