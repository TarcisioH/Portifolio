let menu_hamburger = document.querySelector('#burguer');

//funcao para habilitar o menu hamburguer
menu_hamburger.addEventListener("click", () => {
    let menu = document.querySelector('#menu-hamburguer')
    
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
})
