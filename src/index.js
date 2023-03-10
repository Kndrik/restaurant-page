import { showHome } from "./home";
import { showMenu } from "./menu";
import { showContact } from "./contact";
import './style.css';

showHome();

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

contactButton.addEventListener('click', () => {
    removeContent();
    showContact();
})

function removeContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}