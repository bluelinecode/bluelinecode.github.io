const cityid = "5604473";
const APPID = "cdc0b1e423f5c1ece1c635b594e5fc76";


const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temperature');
    temperature.textContent = jsObject.main.temp;
    const currently = document.querySelector('#currently');
    const desc = jsObject.weather[0].description;
    currently.innerHTML = `<strong>${desc}</strong>`;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
 });
