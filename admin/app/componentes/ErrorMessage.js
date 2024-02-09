export function ErrorMessage(mensaje) {
    const $errorMessage = document.createElement('div')
    $errorMessage.classList.add('message-error')
    $errorMessage.textContent = mensaje

    return $errorMessage
}


export function limpiarMensajes(id_form) {
    const form = document.getElementById(id_form);
 
    const errorMessages = form.getElementsByClassName('message-error');
    while (errorMessages.length > 0) {
        errorMessages[0].remove();
    }
}
