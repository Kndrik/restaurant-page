import Photo from '../imgs/image.jpg';

const homeDiv = document.createElement('div');
homeDiv.classList.add('home');
const leftDiv = document.createElement('div');
leftDiv.classList.add('left');
const rightDiv = document.createElement('div');
rightDiv.classList.add('right');
const title = document.createElement('h1');
title.textContent = 'Taco House';
const description = document.createElement('div');
description.textContent = "We make the best Tacos in town. Don't believe us? come try it.";
const img = new Image();
img.src = Photo;
img.alt = 'A hand pressing lemon on tacos';

const content = document.querySelector('#content');

export function showHome() {
    rightDiv.appendChild(img);
    leftDiv.appendChild(title);
    leftDiv.appendChild(description);
    homeDiv.appendChild(leftDiv);
    homeDiv.appendChild(rightDiv);

    content.appendChild(homeDiv);
}