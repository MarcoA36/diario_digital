import { ErrorMessage, limpiarMensajes } from "../componentes/ErrorMessage.js";
import { validarLongitud } from "./validations.js";


function obtenerCampos() {
    console.log('obtener campos')
    let date = new Date();
    let fecha_mensaje = date.toISOString().split('T')[0];
    let destino = document.getElementById('cargar-redactor').value
    let asunto = document.getElementById('asunto').value  
    let mensaje = document.getElementById('mensaje').value

    return {
        fecha_mensaje,
        destino,
        asunto,
        mensaje
    }
}

export function submitMessage() {
    limpiarMensajes('form-message')
    const campos = obtenerCampos()
    let validacion_ok = true;

    if (!campos.fecha_mensaje) {
        validacion_ok = false
    }

    if (!campos.destino) {
        validacion_ok = false
    }

    if (!campos.asunto) {
        validacion_ok = false
        document.querySelector('.form__subject').appendChild(ErrorMessage('este campo es obligatorio'))
    }

   let mensajeValidateLenght = validarLongitud(campos.mensaje,1,200)
    if (!campos.mensaje) {
        validacion_ok = false
        document.querySelector('.form__body').appendChild(ErrorMessage('este campo es obligatorio'))      
    }else if (!mensajeValidateLenght.valido) {
        validacion_ok = false
        document.querySelector('.form__body').appendChild(ErrorMessage(mensajeValidateLenght.mensaje))  
    }

   
    if (validacion_ok) {
        var datos = new FormData()
        datos.append('destino', campos.destino)
        datos.append('asunto', campos.asunto)
        datos.append('mensaje', campos.mensaje)
        datos.append('fecha', campos.fecha_mensaje)

        fetch('app/php/message_action_submit.php', {
            method: 'POST',
            body: datos
        }).then(response => response.json())
            .then(data => {
                console.log(data.mensaje)
                if (data.estado) {
                    document.querySelector('.form__message').appendChild(ErrorMessage('Mensaje enviado'))      
                }else{
                    document.querySelector('.form__message').appendChild(ErrorMessage('No se pudo enviar el mensaje'))   
                }
            })

    } 
    

       
}
    

