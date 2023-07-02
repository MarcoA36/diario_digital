
export function MessageContent() {
    let emisor_mensaje = localStorage.getItem('emisor_mensaje')
    let receptor_mensaje = localStorage.getItem('receptor_mensaje')
    let asunto_mensaje = localStorage.getItem('asunto_mensaje')
    let mensaje_mensaje = localStorage.getItem('mensaje_mensaje')
    let fecha_mensaje = localStorage.getItem('fecha_mensaje')

    const $contentMessage = document.createElement('div')
    $contentMessage.classList.add('message__wrapper')
    
    $contentMessage.innerHTML = `
    <div class="message__details"><p><span>De: </span>${emisor_mensaje}</p>
    <p><span>Para: </span>${receptor_mensaje}</p> 
    <p><span>Fecha: </span>${fecha_mensaje}</p>
    </div>
    <div class="message__subject"><p><span>Asunto: </span>${asunto_mensaje}</div>
    <div class="message__body">${mensaje_mensaje}</div>
    `
    return $contentMessage
}























var setRemitente
var setAsunto
var setMensaje
var setFecha

function verMensaje(e,callback) {
    
    setRemitente = e.dataset.remitente
    setDestino = e.dataset.destino
    setAsunto = e.dataset.asunto
    setMensaje = e.dataset.mensaje
    setFecha = e.dataset.fecha
    contenido.innerHTML = ''
    
    callback()
}


function mensajeCompleto() {
    console.log(setRemitente)
    console.log(setMensaje)
    var mensaje_completo = `<div class="box_mensaje-completo">
    <div><p><span>De: </span>${setRemitente}</p>
    <p><span>Para: </span>${setDestino}</p> 
    <p><span>Fecha: </span>${setFecha}</p>
    </div>
    <div><p><span>Asunto: </span>${setAsunto}</div>
    <div>${setMensaje}</div>
        </div>`
    
   contenido.innerHTML = mensaje_completo
}
