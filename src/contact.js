const myContact = (() => {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    const title = document.createElement('h1');
    title.textContent = 'Contact';
    contactDiv.appendChild(title);
    const content = document.querySelector('#content');

    const addPanel = (title, content) => {
        const panel = document.createElement('div');
        panel.classList.add('panel');
        const titleDiv = document.createElement('div');
        const contentDiv = document.createElement('div');
        
        titleDiv.textContent = title;
        contentDiv.textContent = content;
        
        panel.appendChild(titleDiv);
        panel.appendChild(contentDiv);

        contactDiv.appendChild(panel);
    }

    const appendContact = () => {
        content.appendChild(contactDiv);
    }

    return {
        addPanel,
        appendContact
    }
 })();

 myContact.addPanel('E-mail', 'contact@us.com');
 myContact.addPanel('Phone', '+3356433211');

 export function showContact() {
    myContact.appendContact();
 }