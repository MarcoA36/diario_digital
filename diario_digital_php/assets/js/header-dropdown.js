let nav_desplegado = false

let icon_menu = document.getElementById('icono-menu')
icon_menu.addEventListener('click', () => {
    if (nav_desplegado == false) {
        document.getElementById("nav-desplegable").style.display = "flex"
        nav_desplegado = true;
    } else {
        document.getElementById("nav-desplegable").style.display = "none"
        nav_desplegado = false;
    }
})

let icon_cerrar = document.getElementById('icono-cerrar-nav')
icon_cerrar.addEventListener('click', () => {
    document.getElementById("nav-desplegable").style.display = "none"
    nav_desplegado = false;
})

let icon_menu_mobile = document.getElementById('icon-hamb')
icon_menu_mobile.addEventListener('click', () => {
    if (nav_desplegado == false) {
        document.getElementById("nav-desplegable-mobile").style.display = "flex"
        nav_desplegado = true;
    } else {
        document.getElementById("nav-desplegable-mobile").style.display = "none"
        nav_desplegado = false;
    }
})

let icon_cerrar_mobile = document.getElementById('icon-cerrar-nav-mobile')
icon_cerrar_mobile.addEventListener('click', () => {
    document.getElementById("nav-desplegable-mobile").style.display = "none"
    nav_desplegado = false;
})


function mediaQ() {
    console.log('media')
    if (mq600.matches) {
        if (nav_desplegado == true) {
            document.getElementById("nav-desplegable-mobile").style.display = "flex"
        }else{
            document.getElementById("nav-desplegable-mobile").style.display = "none"
        }
    } else {
        if (nav_desplegado == true) {
            document.getElementById("nav-desplegable").style.display = "flex"
        }else{
            document.getElementById("nav-desplegable").style.display = "none"
        }
    }
}

const mq600 = matchMedia('(max-width:600px)');
mq600.addEventListener('change', mediaQ)
window.addEventListener('hashchange', () => {
    nav_desplegado = false
})

