var container;

const images = [
    './image.webp',
    './image1.jpeg',
    './image10.jpeg',
    './image3.jpeg',
    './image3.webp',
    './image4.jpg',
    './image6.webp',
    './image7.jpg',
    './image8.jpg',
    './image9.jpg'
];
var imageList = [];

init();

function init() {
    container = document.getElementById('container__images');
    container.innerHTML = '';
    let random = 0;
    while (random < 10) {
        random = Math.floor(Math.random() * 50);
    }
    imageList = createImageList(random);
    assignImages();
}

function createImageList(random) {
    const arr = [];
    for (let i = 0; i < random; i++) {
        const imageIdx = Math.floor(Math.random() * 10);
        arr.push(images[imageIdx]);
    }
    return [...arr];
}

function deleteImage(data) {
    const parent = data.parentNode;
    let idx;
    if (parent) {
        idx = parent.getAttribute('data-idx');
    }
    if (idx) {
        const div = container.childNodes[idx];
        if (div) {
            container.removeChild(div);
            for (let i = 0; i < container.childNodes.length; i++) {
                const divEl = container.childNodes[i];
                divEl.setAttribute('data-idx', i);
            }
        }
    }
}

function assignImages() {
    container.innerHTML = '';
    for (let i = 0; i < imageList.length; i++) {
        const div = document.createElement('div');
        div.classList.add('container__images__imgDiv');
        div.setAttribute('data-idx', i);
        const img = document.createElement('img');
        img.setAttribute('src', imageList[i]);
        img.setAttribute('alt', imageList[i]);
        img.classList.add('container__images__imgDiv__img');
        const text = document.createElement('p');
        text.classList.add('container__images__imgDiv__text');
        text.innerHTML = 'Dummy Text';
        const btn = document.createElement('button');
        btn.classList.add('container__images__imgDiv__btn');
        btn.setAttribute('onclick', 'deleteImage(this)');
        btn.innerHTML = 'DELETE';
        div.appendChild(img);
        div.appendChild(text);
        div.appendChild(btn);
        container.appendChild(div);
    }
}

function shuffleImages() {
    for (let i = imageList.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const temp = imageList[i];
        imageList[i] = imageList[random];
        imageList[random] = temp;
    }
    assignImages();
}