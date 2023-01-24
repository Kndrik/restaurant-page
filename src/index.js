import { showHome } from "./home";
import { showMenu } from "./menu";
import './style.css';

showHome();
//showMenu();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', () => {
    removeContent();
    showHome();
})

menuButton.addEventListener('click', () => {
    removeContent();
    showMenu();
})

function removeContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}