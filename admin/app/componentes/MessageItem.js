import { openMessage } from "../js/message-open.js"
import { deleteMessage} from "../js/message_delete.js"

export function MessageItem(tipo, mensaje) {
    const $itemMessage = document.createElement('div')
    $itemMessage.classList.add('message__item')
    $itemMessage.id = mensaje.id
    let nombre
    if (tipo == 'entrada') {
        nombre = mensaje.de
    } else if (tipo == 'salida') {
        nombre = mensaje.para
    }
    console.log(tipo)
    console.log(mensaje.de)
    console.log(mensaje.para)
    $itemMessage.innerHTML = `
    <div class="message__checkbox"><input type="checkbox"></div>

    <div class="message__info" id='info_mensaje'>
        <div class="message__name"><p>${nombre}</p></div>
        <div class="message__subject"><p>${mensaje.asunto}</p></div>
        <div class="message__body"><p>${mensaje.mensaje}</p></div>
        <div class="message__date"><p>${mensaje.fecha}</p></div>
     </div>
    
        <div class="message__icon--delete" id="icon-elim"><i class="fa-solid fa-trash"></i></div>
    `

    const $iconDelete = $itemMessage.querySelector('#icon-elim')
    $iconDelete.addEventListener('click', ()=>{
        deleteMessage(mensaje)
    })

    const $infoMensaje = $itemMessage.querySelector('#info_mensaje')
    $infoMensaje.addEventListener('click', ()=>{
        openMessage(mensaje)
    })
    return $itemMessage
}