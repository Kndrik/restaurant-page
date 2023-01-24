const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');
const content = document.querySelector('#content');

function getMenuElement(name, price, ingredients) {
    const dish = document.createElement('div');
    dish.classList.add('dish');
    const top = document.createElement('div');
    top.classList.add('top');
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price');
    const ingredientsDiv = document.createElement('div');

    nameDiv.textContent = name;
    priceDiv.textContent = price + '$';
    ingredientsDiv.textContent = ingredients;

    top.appendChild(nameDiv);
    top.appendChild(priceDiv);
    dish.appendChild(top);
    dish.appendChild(ingredientsDiv);

    return dish;
}

const dishOne = getMenuElement('Tacos', '3.56', 'Meat, Tomatoes, Onions');
const dishTwo = getMenuElement('Burrito', '6.99', 'Meat, Chicken, Ketchup');
const dishThree = getMenuElement('Fries', '1.99', 'Fresh potatoes');
const dishFour = getMenuElement('Vegan Taco', '4.56', 'Carots, Fake meat, White Sauce, Onions');

export function showMenu() {
    menuDiv.appendChild(dishOne);
    menuDiv.appendChild(dishTwo);
    menuDiv.appendChild(dishThree);
    menuDiv.appendChild(dishFour);

    content.appendChild(menuDiv);
}