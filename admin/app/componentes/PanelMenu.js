import { LinkMenu } from "./Button.js"

export function Menu() {
  const $nav = document.createElement('nav')
  $nav.classList.add('panel__nav')
  const $ul = document.createElement('ul')

   let rango = sessionStorage.getItem('rango')
   
   if (rango == 2) {
    $ul.appendChild(LinkMenu('Mis entradas', '#/mis-entradas'))
        $ul.appendChild(LinkMenu('En revision', '#/en-revision'))
        $ul.appendChild(LinkMenu('Publicadas', '#/publicadas'))
   }else if (rango == 1) {
    $ul.appendChild(LinkMenu('Mis entradas', '#/mis-entradas'))
   }
   $ul.appendChild(LinkMenu('Cargar entrada', '#/cargar'))
   $ul.appendChild(LinkMenu('Cerrar sesion', '#/cerrar-sesion', 'link_cerrar-sesion'))

  $nav.appendChild($ul)
  return $nav
}
