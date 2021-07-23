const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation'); //ham button

document.querySelector('#theyear').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified; //last modified on footer

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// let apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.4555&lon=-109.5287&exclude=hourly,daily&appid=cdc0b1e423f5c1ece1c635b594e5fc76&units=imperial';

// fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         //console.log(jsObject)
//         document.querySelector("#desc").textContent = jsObject.temp[0].main;
//         document.querySelector("#temperature").textContent = Math.round(jsObject.main.temp);
//         document.querySelector("#humidity").textContent = jsObject.main.humidity + '%';
//     });

// //three day forecast
// let appid = 'cdc0b1e423f5c1ece1c635b594e5fc76';
// let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.4555&lon=-109.5287&exclude=hourly,daily&appid=cdc0b1e423f5c1ece1c635b594e5fc76';
// let method = 'forecast';
// let units = 'imperial';
// let cityid = '5784154';

// const forecastURL = url + method + '?' + 'id=' + cityid + '&appid=' + appid + '&units=' + units;

// let daysofweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// fetch(forecastURL)
//     .then((response) => response.json())
//     .then((response) => {
//         console.log(forecastURL);
//         let x = 0;
//         let temp = document.querySelectorAll('.forecastDay .temp');
//         let day = document.querySelectorAll('.forecastDay .day');
//         let pic = document.querySelectorAll('.forecastDay .threedayimg');
//         let list = response.list;

//         for (item of list) {
//             if (item.dt_txt.includes('18:00:00')) {
//                 let date = new Date(item.dt * 1000);

//                 temp[x].innerHTML = item.main.temp;
//                 day[x].innerHTML = daysofweek[date.getDay()];

//                 let img = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
//                 pic [x].setAttribute('src', img);
//                 pic[x].setAttribute('alt', 'Weather Image');
//                 x++;
//             }
//         }
//     });