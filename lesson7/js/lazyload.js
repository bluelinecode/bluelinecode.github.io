//Get all images on the page with data-src
const imagesToLoad = document.querySelectorAll ("img[data-src]");


const loadImages = (image) => {
    Image.setAttribute("src", Image.getAttribute("data-src"));
    Image.onload = () => {
        Image.removeAttribute("data-src");
    };

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
    });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach(img => {
        loadImages(img);
    });

/*const imagesToLoad = document.querySelectorAll("img{data-src]");

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

     imagesToLoad.forEach((img)=>{
         imgObserver.observe(img);
     });
 } else{
     imagesToLoad.forEach((img)=>{
         loadImages(img);
     });
 } */
