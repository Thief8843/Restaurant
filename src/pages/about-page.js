 function aboutPage(){

    const main = document.createElement('main');

    main.classList.add('about-page');

    main.dataset.main = "About";

    const content = document.querySelector("body");

    content.appendChild(main);

  
    const divMain = document.createElement('div');

    divMain.classList.add("main-content");



    main.appendChild(divMain);
    
}
export{aboutPage};