'strict mode';

const imgArray = [
    {
        src: "img/1.jpg",
        title: "Guardians Of The Galaxy",
    },
    {
        src: "img/2.jpg",
        title: "Rocket Rackoon"
    },
    {
        src: "img/3.jpg",
        title: "Guardians Of The Galaxy",
    },
    {
        src: "img/4.jpg",
        title: "I Dont Know Who Is He"
    }
];
const sliderElement = document.getElementById('img-slider');
let bigImage;
let popup;

function addImageToElement(imgObj, element) {
    const img = document.createElement('img');
    img.src = imgObj.src;
    img.alt = imgObj.title;
    img.className = 'img-small';
    img.onclick = function() {
        const bigImage = document.getElementById('img-big');
        bigImage.src = imgObj.src;
        bigImage.title = imgObj.title;
        document.getElementById('img-title').innerText = imgObj.title;
    };
    element.appendChild(img);
}

function addBigImageToElement(element) {
    bigImage = document.createElement('img');
    bigImage.src = imgArray[0].src;
    bigImage.alt = imgArray[0].title;
    bigImage.className = 'img-big';
    bigImage.id = 'img-big';
    bigImage.onclick = showPopupImage;
    element.appendChild(bigImage);
}

function addTitleToElement(element) {
    const titleElement = document.createElement('h2');
    titleElement.innerText = imgArray[0].title;
    titleElement.className = 'img-title';
    titleElement.id = 'img-title';
    element.appendChild(titleElement);
}

function init() {
    addBigImageToElement(sliderElement);
    addTitleToElement(sliderElement);

    imgArray.forEach(function(imgObj) {
        addImageToElement(imgObj, sliderElement);
    });
}

function showPopupImage(){
    popup = document.createElement("div");
    popup.className = "img-popup-wrapper";
    popup.onclick = hidePopup;
    const popupImg = bigImage.cloneNode(true);
    popup.appendChild(popupImg);
    document.body.appendChild(popup);
}
function hidePopup(){
    document.body.removeChild(popup);
}

init();