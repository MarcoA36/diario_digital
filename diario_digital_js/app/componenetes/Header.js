import { HeaderLeft } from "./HeaderLeft.js"
import { HeaderRight } from "./HeaderRight.js"
import { Menu } from "./HeaderNav.js"

let nav_desplegado = false;

export function Header() {
    const $headerWrapper = document.createElement('div')
    $headerWrapper.classList.add('header-wrapper')

    $headerWrapper.appendChild(HeaderDesktop())
    $headerWrapper.appendChild(HeaderMobile())

    return $headerWrapper
}

function HeaderDesktop() {
    const $header = document.createElement('header')
    $header.classList.add('header')
    $header.classList.add('header-desktop')

    const $headerContainer = document.createElement('div')
    $headerContainer.classList.add('container')
    $headerContainer.appendChild(HeaderLeft())
    $headerContainer.appendChild(Menu('nav-menu-ul', 'header__nav'))
    $headerContainer.appendChild(HeaderRight())
   
    $header.appendChild($headerContainer)
    $header.appendChild(NavDesplegable('nav-desplegable', 'icono-cerrar-nav','menu-desplegable-ul', 'header__nav--dropdown'))

    setTimeout(() => {
        const icon_menu = document.getElementById('icono-menu');
        const icon_close = document.getElementById('icono-cerrar-nav');
        console.log(icon_menu);
        icon_menu.addEventListener('click', () => {
            if (nav_desplegado == false) {
                document.getElementById("nav-desplegable").style.display = "flex"
                nav_desplegado = true;
            } else {
                document.getElementById("nav-desplegable").style.display = "none"
                nav_desplegado = false;
            }
        })
        

        icon_close.addEventListener('click', () => {
            document.getElementById("nav-desplegable").style.display = "none"
            nav_desplegado = false;
        })
    }, 100);

    return $header
}


function HeaderMobile() {
    const $header = document.createElement('header')
    $header.classList.add('header')
    $header.classList.add('header-mobile')
    const $headerMobile = document.createElement('div')
    $headerMobile.classList.add('container')
    $headerMobile.innerHTML = `
    <div class="header__login">
         <a href="#/login"><i class="fa-solid fa-user login-icono"></i> <span class="login__texto">Sing in</span> </a>
    </div>
    
    <div class="header__logo">
        <a href="index.html"><span>D</span><span>D</span><span>G</span></a>
    </div>
        
    <div class="header__right">
         <i class="fa-solid fa-bars icono-hamb" id='icono-menu-mobile'></i>
         <i class="fa-solid fa-search icono-buscar"></i>
    </div>
    `
    $header.appendChild($headerMobile)
    $header.appendChild(NavDesplegable('nav-desplegable-mobile','icono-cerrar-nav-mobile','nav-desplegable-cel', 'header__nav--dropdown'))//Menu(idMenu)
    setTimeout(() => {
        const icon_menu = document.getElementById('icono-menu-mobile');
        const icon_close = document.getElementById('icono-cerrar-nav-mobile');
        console.log(icon_menu);
        icon_menu.addEventListener('click', () => {
            if (nav_desplegado == false) {
                document.getElementById("nav-desplegable-mobile").style.display = "flex"
                nav_desplegado = true;
            } else {
                document.getElementById("nav-desplegable-mobile").style.display = "none"
                nav_desplegado = false;
            }
        })

        icon_close.addEventListener('click', () => {
            document.getElementById("nav-desplegable-mobile").style.display = "none"
            nav_desplegado = false;
        })
    }, 200);

    return $header
}


function NavDesplegable(id, idButtonClose, idUl, classNav) {
    const $headerDesplegable = document.createElement('div')
    $headerDesplegable.classList.add('container')
    $headerDesplegable.classList.add('desplegable')
    $headerDesplegable.id = id
    $headerDesplegable.appendChild(Menu(idUl, classNav))

    const $icon_close = document.createElement('div')
    $icon_close.classList.add('icono-cerrar_nav')
    $icon_close.id = idButtonClose
    $icon_close.innerHTML = `<i class="fa-solid fa-xmark" onclick="cerrarDesplegable()"></i>`

    $headerDesplegable.appendChild($icon_close)

    return $headerDesplegable
}

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

window.addEventListener('hashchange', ()=>{
    nav_desplegado = false
    console.log(nav_desplegado)
})