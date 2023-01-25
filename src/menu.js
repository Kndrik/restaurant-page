const myMenu = (() => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    const content = document.querySelector('#content');

    const addMenuElement = (name, price, ingredients) => {
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
    
        menuDiv.appendChild(dish);
    }

    const appendMenu = () => {
        content.appendChild(menuDiv);
    }

    return {
        addMenuElement,
        appendMenu
    };
})();

myMenu.addMenuElement('Tacos', '3.56', 'Meat, Tomatoes, Onions');
myMenu.addMenuElement('Burrito', '6.99', 'Meat, Chicken, Ketchup');
myMenu.addMenuElement('Fries', '1.99', 'Fresh potatoes');
myMenu.addMenuElement('Vegan Taco', '4.56', 'Carots, Fake meat, White Sauce, Onions');
myMenu.addMenuElement('Donut', '3.99', 'Sugar glazed donut');

export function showMenu() {
    myMenu.appendMenu();
}