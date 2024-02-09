import { Select } from "./Select.js"

function colorMensaje(estado) {
    let color_mensaje
    switch (estado) {
        case 'cargada':
            color_mensaje = 'inherit'
            break;
        case 'en revisión':
            color_mensaje = 'orange'
            break;
        case 'publicada':
            color_mensaje = 'green'
            break;
        default:
            color_mensaje = 'inherit'
            break;
    }
    return color_mensaje;
  }


export function PostPanel(redactor, seccion, estado, fecha) {
    const $panelPost = document.createElement('div')
    $panelPost.classList.add('post__details')
    const color_mensaje = colorMensaje(estado);
    $panelPost.innerHTML=`
    <p> redactor: ${redactor}</p>
    <p> seccion: ${seccion}</p> 
    <p id="fecha">${fecha}</p>
    <div id="div-posicion"></div>
    <p id="estado" style="color:${color_mensaje};">${estado}</p>
    `
    const posicion = $panelPost.querySelector('#div-posicion')
    posicion.appendChild(Select('app/php/get_locations.php','posicion'))
    return $panelPost
}


export function PostDetails(redactor, seccion, estado, fecha){
    const $detailsPost = document.createElement('div')
    $detailsPost.classList.add('post__details')
    const color_mensaje = colorMensaje(estado);
    $detailsPost.innerHTML=`
    <p> redactor: ${redactor}</p>
    <p> seccion: ${seccion}</p> 
    <p id="fecha">${fecha}</p>
    <p id="estado" style="color:${color_mensaje};">${estado}</p>
    `
    return $detailsPost
}