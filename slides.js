const slideShowImages = [
    {
        src: "images/img1.png",
        alt: "A techniciant maintaining a server",
    },
    {
        src: "images/img2.png",
        alt: "A UI/UX design",
    },
    {
        src: "images/img3.png",
        alt: "A UI/UX design",
    },
    {
        src: "images/img4.png",
        alt: "A UI/UX design",
    }
];
let count = 0;
function next(){
    count++;
    if (count == slideShowImages.length){
        count = 0;
    }
    document.getElementById('sliderImage').src = slideShowImages[count].src;
    document.getElementById('sliderImage').alt = slideShowImages[count].alt;
}
function previous(){
    count--;
    if (count == -1){
        count = slideShowImages.length -1;
    }
    document.getElementById('sliderImage').src = slideShowImages[count].src;
    document.getElementById('sliderImage').alt = slideShowImages[count].alt;
}

window.addEventListener('load', StartSlides);
function StartSlides(){
    if (count == slideShowImages.length){
        count = 0;
    }
    document.getElementById('sliderImage').src = slideShowImages[count].src;
    document.getElementById('sliderImage').alt = slideShowImages[count].alt;
    setTimeout(StartSlides, 5000);
    count++;
}