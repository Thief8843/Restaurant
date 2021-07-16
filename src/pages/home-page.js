 function homepage() {

    const main = document.createElement('main');

    main.classList.add('home-page');
    main.classList.add('is-active');

    main.dataset.main = "Home";

    const content = document.querySelector("body");

    content.appendChild(main);

  
    const divMain = document.createElement('div');

    divMain.classList.add("main-content");



    main.appendChild(divMain);
}
export default homepage;

