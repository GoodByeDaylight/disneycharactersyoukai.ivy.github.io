// ヘッダー画像の切り替え
let currentIndex = 0;
const images = [
    'img/hai.jpg',
    'img/kei.jpg',
    'img/foto.jpg'
];
const headerImages = document.querySelectorAll('.header-image');

// 画像を交代する関数
function changeImage() {
    // 現在の画像を非表示に
    headerImages[currentIndex].classList.remove('active');
    
    // 次の画像を表示
    currentIndex = (currentIndex + 1) % images.length;
    headerImages[currentIndex].style.backgroundImage = `url(${images[currentIndex]})`;
    headerImages[currentIndex].classList.add('active');
}

// 3秒ごとに画像を切り替え
setInterval(changeImage, 3000);

// 最初に表示する画像を設定
headerImages[currentIndex].style.backgroundImage = `url(${images[currentIndex]})`;
headerImages[currentIndex].classList.add('active');
