
const canvasElement = document.getElementById('infiniteCanvas');
const context = canvasElement.getContext('2d');


canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight * 0.9;


let offsetX = 0;
let offsetY = 0;
let dragging = false;
let startX, startY;


const columns = 7;
const itemWidth = Math.round(window.innerWidth / columns);


const imageSources = [
    { src: `https://picsum.photos/${itemWidth}/200?${Math.random()}`, posX: 0, posY: 0 },
    { src: `https://picsum.photos/${itemWidth}/400?${Math.random()}`, posX: itemWidth + 5, posY: 0 },
    { src: `https://picsum.photos/${itemWidth}/300?${Math.random()}`, posX: (itemWidth + 5) * 2, posY: 0 },
    { src: `https://picsum.photos/${itemWidth}/400?${Math.random()}`, posX: (itemWidth + 5) * 3, posY: 0 },
    { src: `https://picsum.photos/${itemWidth}/400?${Math.random()}`, posX: (itemWidth + 5) * 4, posY: 0 },
    { src: `https://picsum.photos/${itemWidth}/200?${Math.random()}`, posX: (itemWidth + 5) * 5, posY: 0 },
    { src: `https://picsum.photos/${itemWidth}/200?${Math.random()}`, posX: (itemWidth + 5) * 6, posY: 0 },
    { src: `https://picsum.photos/${itemWidth}/200?${Math.random()}`, posX: 0, posY: 205 },
    { src: `https://picsum.photos/${itemWidth}/400?${Math.random()}`, posX: itemWidth + 5, posY: 405 },
    { src: `https://picsum.photos/${itemWidth}/300?${Math.random()}`, posX: (itemWidth + 5) * 2, posY: 305 },
    { src: `https://picsum.photos/${itemWidth}/500?${Math.random()}`, posX: (itemWidth + 5) * 3, posY: 405 },
    { src: `https://picsum.photos/${itemWidth}/400?${Math.random()}`, posX: (itemWidth + 5) * 4, posY: 405 },
    { src: `https://picsum.photos/${itemWidth}/00?${Math.random()}`, posX: (itemWidth + 5) * 5, posY: 405 },
    { src: `https://picsum.photos/${itemWidth}/400?${Math.random()}`, posX: (itemWidth + 5) * 6, posY: 405 },
];


let imagesLoaded = [];


imageSources.forEach((image, index) => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
        imagesLoaded[index] = img;
        renderCanvas();
    };
});


function renderCanvas() {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    context.save();
    context.translate(offsetX, offsetY);

    imagesLoaded.forEach((img, index) => {
        if (img) {
            const { posX, posY } = imageSources[index];
            context.drawImage(img, posX, posY);
        }
    });

    context.restore();
}


window.addEventListener('resize', () => {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight * 0.9;
    renderCanvas();
});
