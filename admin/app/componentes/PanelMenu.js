import { LinkMenu } from "./Button.js"

export function Menu() {
  const $nav = document.createElement('nav')
  $nav.classList.add('panel__nav')
  const $ul = document.createElement('ul')

   let rango = sessionStorage.getItem('rango')
   
   if (rango == 2) {
    $ul.appendChild(LinkMenu('Mis entradas', '#/mis-entradas','menu-item'))
        $ul.appendChild(LinkMenu('En revision', '#/en-revision','menu-item'))
        $ul.appendChild(LinkMenu('Publicadas', '#/publicadas','menu-item'))
   }else if (rango == 1) {
    $ul.appendChild(LinkMenu('Mis entradas', '#/mis-entradas','menu-item'))
   }
   $ul.appendChild(LinkMenu('Cargar entrada', '#/cargar','menu-item'))
   $ul.appendChild(LinkMenu('Cerrar sesion', '#/cerrar-sesion', 'link_cerrar-sesion'))

  $nav.appendChild($ul)
  return $nav
}
