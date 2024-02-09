import { Logo } from "./Logo.js";
import { PanelMessages, PanelUser } from "./PanelUser.js";
import { Menu } from "./PanelMenu.js";


export function Panel() {
    const $contPanel = document.createElement('div')
    $contPanel.classList.add('panel__wrapper')


    const $logo_btn = document.createElement('div')
    $logo_btn.classList.add('panel__brand')
    $logo_btn.appendChild(Logo())

    const $iconHamb = document.createElement('div')
    $iconHamb.classList.add('button--hamb')
    $iconHamb.innerHTML = '<i class="fa-solid fa-bars icono-hamb" id="icono-menu"></i>'
    $logo_btn.appendChild($iconHamb)

    const $panel = document.createElement('div')
    $panel.classList.add('panel__menu')
    $panel.id = 'menu'

    $panel.appendChild(PanelUser())
    $panel.appendChild(PanelMessages())
    $panel.appendChild(Menu())


    $contPanel.appendChild($logo_btn)
    $contPanel.appendChild($panel)



    let menu_open = false

    setTimeout(() => {
        const icon_menu = document.getElementById('icono-menu');
        console.log(icon_menu);
        icon_menu.addEventListener('click', () => {
            if (menu_open == false) {
                // document.getElementById('menu').classList.add('panel__menu--responsive')
                document.getElementById("menu").style.display = "flex"
                menu_open = true
                console.log(menu_open)
            } else {
                // document.getElementById('menu').classList.remove('panel__menu--responsive')
                document.getElementById("menu").style.display = "none"
                menu_open = false
                console.log(menu_open)
            }

        })

        const mq800 = matchMedia('(max-width:800px)');
    
        function mediaQ() {
            if (mq800.matches) {
                console.log('-800')
                $contPanel.classList.add('panel__wrapper--responsive')
                $iconHamb.style.display="block"
                if (menu_open==false) {
                    document.getElementById("menu").style.display = "none"
                }
            } else {
                console.log('+800')
                if (menu_open==false) {
                    document.getElementById("menu").style.display = "flex"
                }
                $contPanel.classList.remove('panel__wrapper--responsive')
                $iconHamb.style.display="none"
            }
        }

        const menuItems = document.querySelectorAll('.menu-item');

        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                // Ocultar el menú al hacer clic en un elemento del menú
                if (mq800.matches) {
                    document.getElementById("menu").style.display = "none";
                    menu_open = false;
                }
            });
        });
    
        mq800.addEventListener('change', mediaQ)
        mediaQ()
    }, 200);

    return $contPanel
}