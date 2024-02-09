// import { Principales } from "./Principales.js"
// import { Seccion } from "./Secciones.js"

export function Main() {
    const $main = document.createElement('div')
    $main.classList.add('container')
    $main.id='contenido'
    // $main.appendChild(Principales())
    // $main.appendChild(Seccion('Principales'))
    // $main.appendChild(Seccion('Deportes'))
   
    return $main
}