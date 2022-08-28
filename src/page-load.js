export const load_page = ()=>{

    const CONTENT = document.getElementById(`content`);
    const header = document.createElement(`div`);
    const information = document.createElement(`div`);
    const footer = document.createElement(`div`);
    header.classList.add(`header`);
    information.classList.add(`information`);
    footer.classList.add(`footer`);

    CONTENT.appendChild(header);
    CONTENT.appendChild(information);
    CONTENT.appendChild(footer);

    const menu = document.createElement(`div`);
    header.appendChild(menu);
    menu.classList.add(`menu`);

    const element1 = document.createElement(`div`);
    const element2 = document.createElement(`div`);
    const element3 = document.createElement(`div`);
    
    element1.classList.add(`element`);
    element2.classList.add(`element`);
    element3.classList.add(`element`);

    menu.appendChild(element1);
    menu.appendChild(element2);
    menu.appendChild(element3);

    element1.textContent = `Home`;
    element2.textContent = `Menu`;
    element3.textContent = `Contact`;

    footer.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, repudiandae!`
};