const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')}; 

document.querySelector('#theyear').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified;
var d = new Date();
document.getElementById("date").innerHTML = d;

if (d.getDay() == 5) {
    document.querySelector(".pancake").style.display = "block";
}
