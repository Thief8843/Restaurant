
 function navbarPage(){

    const content = document.querySelector("body");

    const headerBar = document.createElement('header');

    headerBar.classList.add('head-bar');
    
    content.appendChild(headerBar);



    const navBar = document.createElement('nav');

    navBar.classList.add('nav-bar');

    headerBar.appendChild(navBar);


   const navbar = ["Home", "About", "Menu","Contact"];
    

    navbar.forEach(renderList);

    function renderList(element,index){
        const linkBar = document.createElement('a');

        linkBar.classList.add('link-bar');

        linkBar.dataset.navbar= element;

        navBar.appendChild(linkBar);

        linkBar.innerHTML += element;
    }

}
export {navbarPage};



