const images = [
    'img/hai.png',
    'img/kei.png',
    'img/foto.png'
];
let currentIndex = 0;
function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
}
document.body.style.backgroundImage = `url(${images[currentIndex]})`;
setInterval(changeBackground, 5000);
