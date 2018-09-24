'use strict'

const imgArr = [
    { src: 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/', title: 'котёнок-1' },
    { src: 'https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg', title: 'котёнок-2' },
    { src: 'https://www.thehappycatsite.com/wp-content/uploads/2017/10/best-treats-for-kittens.jpg', title: 'котёнок-3' },
    { src: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/05/12/kittens.jpg?w968', title: 'котёнок-4' },
    { src: 'https://d3pz1jifuab5zg.cloudfront.net/2015/09/04194922/kitten-walking-150904.jpg', title: 'котёнок-5' }
               ];
const imgdiv = document.getElementById('imgdiv');
function addImageToElement(imgObj, element) // element - э-т, внутрь которого вставится картинка
{
    const img = document.createElement('img');
    img.src = imgObj.src;
    img.alt = imgObj.title;
    img.className = 'image-small';
    img.onclick = function () {
        const bigImg = document.getElementById('img-big');
        bigImg.src = imgObj.src;
        bigImg.title = imgObj.title;
        document.getElementById('img-title').innerText = imgObj.title;
    };
    element.appendChild(img);
}

function addBigImageToElement(element) {
    const bigImg = document.createElement('img');
    bigImg.src = imgArr[0].src;
    bigImg.alt = imgArr[0].title;
    bigImg.className = 'image-big';
    bigImg.id = 'img-big'
    element.appendChild(bigImg);
}

function addTitleToElement(element) {
    const titleElement = document.createElement('h2');
    titleElement.innerText = imgArr[0].title;
    titleElement.className = 'image-title';
    titleElement.id = 'img-title';
    element.appendChild(titleElement);
}

function init() {
    addBigImageToElement(imgdiv);
    addTitleToElement(imgdiv);

    imgArr.forEach(function (imgObj) {
        addImageToElement(imgObj, imgdiv);
    });
}

function buttons() {
    let i = 0;
    upButton.onclick = function () {
        const bigImg = document.getElementById('img-big');
        const titleElement = document.getElementById('img-title');
        if (i === imgArr.length - 1) {
            i = -1;
        }
        i++;
        bigImg.src = imgArr[i].src;
        titleElement.innerText = imgArr[i].title;
    }
    downButton.onclick = function () {
        const bigImg = document.getElementById('img-big');
        const titleElement = document.getElementById('img-title');
        if (i === 0) {
            i = imgArr.length;
        }
        i--;
        bigImg.src = imgArr[i].src;
        titleElement.innerText = imgArr[i].title;
    }
}

buttons();
init();