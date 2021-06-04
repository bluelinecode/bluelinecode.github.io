/*const images = document.querySelectorAll ("[data-src]");


function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!srcc) {
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -580px 0px"
};

const imgObserver = new IntersectionObserver((entries,  
imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })

}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
}); */

const imagesToLoad = document.querySelectorAll("img{data-src]");

const loadImages = (Image) => {
    Image.setAttribute("src", Image.getAttribute("data-src"));
    Image.onload = () => {
        Image.removeAttribute("data-src");
    };
};
 const imgOptions = {
    threshold: 1, 
    rootMargin: "0px 0px 40px 0px"
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

     imagesToLoad.forEach((img)=>{
         imgObserver.observe(img);
     });
 } else{
     imagesToLoad.forEach((img)=>{
         loadImages(img);
     });
 }


