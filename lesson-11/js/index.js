const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let img = document.createElement('img');        


        h2.innerHTML = towns[6].name;
        h3.innerHTML = towns[6].motto;
        year.textContent = 'Year Founded: ' + towns[6].yearFounded;
        population.textContent = 'Population: ' +towns[6].currentPopulation;
        rain.textContent = 'Annual Rain Fall: ' + towns[6].averageRainfall;
        img.setAttribute('src', 'images/' +towns[6].photo);
        img.setAttribute('alt', 'Preston');
        img.setAttribute('class', 'picture');

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(year);
        card.appendChild(population);
        card.appendChild(rain);
        card.appendChild(img);

        document.querySelector('div.cards').append(card);
    });

// Fish Haven
//const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

        let card1 = document.createElement('section');
        let h21 = document.createElement('h2');
        let h31 = document.createElement('h3');
        let year1 = document.createElement('p');
        let population1 = document.createElement('p');
        let rain1 = document.createElement('p');
        let img1 = document.createElement('img');        


        h21.innerHTML = towns[2].name;
        h31.innerHTML = towns[2].motto;
        year1.textContent = 'Year Founded: ' + towns[2].yearFounded;
        population1.textContent = 'Population: ' +towns[2].currentPopulation;
        rain1.textContent = 'Annual Rain Fall: ' + towns[2].averageRainfall;
        img1.setAttribute('src', 'images/' +towns[2].photo);
        img1.setAttribute('alt', 'Fish Haven');
        img1.setAttribute('class', 'picture');

        card1.appendChild(h21);
        card1.appendChild(h31);
        card1.appendChild(year1);
        card1.appendChild(population1);
        card1.appendChild(rain1);
        card1.appendChild(img1);

        document.querySelector('div.cards').append(card1);
    });   

// Soda Springs

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

        let card2 = document.createElement('section');
        let h22 = document.createElement('h2');
        let h32 = document.createElement('h3');
        let year2 = document.createElement('p');
        let population2 = document.createElement('p');
        let rain2 = document.createElement('p');
        let img2 = document.createElement('img');        


        h22.innerHTML = towns[0].name;
        h32.innerHTML = towns[0].motto;
        year2.textContent = 'Year Founded: ' + towns[0].yearFounded;
        population2.textContent = 'Population: ' +towns[0].currentPopulation;
        rain2.textContent = 'Annual Rain Fall: ' + towns[0].averageRainfall;
        img2.setAttribute('src', 'images/' +towns[0].photo);
        img2.setAttribute('alt', 'Soda Springs');
        img2.setAttribute('class', 'picture');

        card2.appendChild(h22);
        card2.appendChild(h32);
        card2.appendChild(year2);
        card2.appendChild(population2);
        card2.appendChild(rain2);
        card2.appendChild(img2);

        document.querySelector('div.cards').append(card2);
    });

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')}; 

document.querySelector('#theyear').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified;
var d = new Date();
document.getElementById("date").innerHTML = d;

//Gallery 

const mainnav = document.querySelector('.navigation');

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')}; 

document.querySelector('#theyear').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified;
var d = new Date();
document.getElementById("date").innerHTML = d;

// Attempting to lazy load here

const imagesLoad = document.querySelectorAll("img[data-src]");

const loadImages = (Image) => {
    Image.setAttribute("src", Image.getAttribute("data-src"));
    Image.onload = () => {
        Image.removeAttribute("data-src");
    };
};
 const imgOptions = {
    threshold: 1, 
    rootMargin: "0px 0px -250px 0px"
 };

 if ("IntersectionObserver" in window) {
     const imgObserver = new IntersectionObserver((items, imgObserver) => {
         items.forEach((item) => {
             if (item.isIntersecting) {
                 loadImages(item.target);
                 imgObserver.unobserve(item.target);
             }
         });
     }, imgOptions);

     imagesLoad.forEach((img)=>{
         imgObserver.observe(img);
     });
 } else{
     imagesLoad.forEach((img)=>{
         loadImages(img);
     });
 }



