import "./style.css";
import { load_page } from "./page-load.js";
import {switch_to_menu} from "./menu";
import {switch_to_home} from "./home";
import {switch_to_contact} from "./contact";

//load_page();
//switch_to_home();
//switch_to_menu();
//load
(()=> {
    const INFORMATION = document.getElementsByClassName(`information`);

    load_page();
    switch_to_home();
    const elements = document.getElementsByClassName(`element`);
    console.log(elements)
    for(const x of elements){
        console.log(x);
        x.addEventListener(`click`, (e)=>{
            INFORMATION[0].removeChild(INFORMATION[0].firstChild);
            console.log(e.path[0].textContent);
            if(e.path[0].textContent ===`Menu`)
                switch_to_menu();
            else if(e.path[0].textContent === `Home`)
                switch_to_home();
            else if (e.path[0].textContent === `Contact`)
                switch_to_contact();

        })
    }

})();

console.log(`hello my man`);