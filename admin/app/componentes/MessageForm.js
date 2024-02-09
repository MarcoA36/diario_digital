import { submitMessage } from "../js/message_submit.js"
import { Select } from "./Select.js"

export function MessageForm() {

    const $formMessage = document.createElement('form')
    $formMessage.classList.add('form__message')
    $formMessage.id = 'form-message'

    $formMessage.innerHTML = `
    <div class="form__select--user" id="div-redactores"></div>
    <div class="form__subject"><input id="asunto" placeholder="Asunto"></div>
    <div class="form__body"><textarea cols="30" rows="15" id="mensaje"></textarea></div>
    <div class="form__button--send"><button id='btn_enviar-mensaje'>Enviar</button> </div>
`

    const redactores = $formMessage.querySelector('#div-redactores')
    redactores.appendChild(Select('app/php/get_editors.php', 'redactor'))

    const btn_enviar = $formMessage.querySelector('#btn_enviar-mensaje')
    btn_enviar.addEventListener('click', submitMessage) 
    return $formMessage
}