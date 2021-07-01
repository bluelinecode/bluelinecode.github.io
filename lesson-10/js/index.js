const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')}; 

document.querySelector('#theyear').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified;
var d = new Date();
document.getElementById("date").innerHTML = d;

if (d.getDay() == 6) {
    document.querySelector(".pancake").style.display = "block";
}


//Weather box

const cityid = "5604473";
const APPID = "cdc0b1e423f5c1ece1c635b594e5fc76";


const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temperature');
    temperature.textContent = jsObject.main.temp;  

    // const currently = document.querySelector('#currently');
    // currently.textContent = jsObject.weather.description;
    const desc = document.querySelector('#desc'); //considering this instead of 'currently'
    desc.innerHTML = jsObject.weather[0].description;

    const windspeed = document.querySelector('#windspeed');
    windspeed.textContent = jsObject.wind.speed;

    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity;
    console.log(desc[5]); // this shows each letter of what I need.... How to get the whole word?


    // const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // document.getElementById('imagesrc').textContent = imagesrc;
    // document.getElementById('icon').setAttribute('src', imagesrc);
    // document.getElementById('icon').setAttribute('alt', desc.toUPPERCase());
 });



  