import { navbarPage} from "./navigation-page.js";
import homePage from "./pages/home-page.js";
import {aboutPage} from "./pages/about-page.js";

navbarPage();
homePage();
aboutPage();

const tab_switchers = document.querySelectorAll('[data-navbar]');

for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.navbar;

    tab_switcher.addEventListener('click', () => {
        

        SwitchPage(page_id);
    });
}


function SwitchPage (page_id) {
console.log(page_id);

const current_page = document.querySelector('.home-page.is-active');
current_page.classList.remove('is-active');

/*const next_page = document.querySelector(`.home-page[data-main="${page_id}"]`);
next_page.classList.add('is-active');*/
}