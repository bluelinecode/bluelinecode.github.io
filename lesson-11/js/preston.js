const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cdc0b1e423f5c1ece1c635b594e5fc76&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject)
        document.querySelector("#desc").textContent = jsObject.weather[0].main;
        document.querySelector("#temperature").textContent = Math.round(jsObject.main.temp);
        document.querySelector("#humidity").textContent = jsObject.main.humidity + '%';
        document.querySelector("#windspeed").textContent = jsObject.wind.speed;
    });

//Five Day Forecast
let appid = 'cdc0b1e423f5c1ece1c635b594e5fc76';
let url = 'https://api.openweathermap.org/data/2.5/';
let method = 'forecast';
let units = 'imperial';
let cityid = '5604473';

const forecastURL = url + method + '?' + 'id=' + cityid + '&appid=' + appid + '&units=' + units;

let daysofweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

fetch(forecastURL)
    .then((response) => response.json())
    .then((response) => {
        let x = 0;
        let temp = document.querySelectorAll('.forecastDay .temp');
        let day = document.querySelectorAll('.forecastDay .day');
        let pic = document.querySelectorAll('.forecastDay .fivedayimg');
        let list = response.list;

        for (item of list) {
            if (item.dt_txt.includes('18:00:00')) {
                let date = new Date(item.dt * 1000);

                temp[x].innerHTML = item.main.temp;
                day[x].innerHTML = daysofweek[date.getDay()];

                let img = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
                pic [x].setAttribute('src', img);
                pic[x].setAttribute('alt', 'Weather Image');
                x++;
            }
        }
    })