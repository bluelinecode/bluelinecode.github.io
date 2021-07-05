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