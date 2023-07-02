import { ErrorMessage, limpiarMensajes } from "../componentes/ErrorMessage.js";
import { validarLongitud} from "./validations.js";

export function loguear() {
    limpiarMensajes('form-login')

    let validacion_login_ok = true

    let usuario = document.getElementById('login-usuario').value
    let usuarioValidateLength = validarLongitud(usuario, 5, 15)
    if (!usuarioValidateLength.valido) {
        validacion_login_ok = false
        document.getElementById('form-login').appendChild(ErrorMessage('El usuario debe tener entre 5 y 15 caracteres'))
    }

    let contra = document.getElementById('login-contra').value
    let contraValidateLength = validarLongitud(contra, 5, 15)
    if (!contraValidateLength.valido) {
        validacion_login_ok = false
        document.getElementById('form-login').appendChild(ErrorMessage('La contraseña debe tener entre 5 y 15 caracteres'))
    }

    if (validacion_login_ok) {
        var datos = new FormData()
        datos.append('usuario', usuario)
        datos.append('contra', contra)
    
        fetch('app/php/session_start.php', {
            method: 'POST',
            body: datos
        })
            .then(res => res.json())
            .then(respuesta => {
                console.log(respuesta) // respuesta[0] true || false
    
                if (respuesta.validacion == true) {
                    sessionStorage.setItem('sesion-iniciada', true)
                    sessionStorage.setItem('id_usuario', respuesta.id_usuario)
                    sessionStorage.setItem('usuario', respuesta.usuario)
                    sessionStorage.setItem('rango', respuesta.rango)
                    window.location.reload()
                } else {
                    // alert("usuario no encontrado")
                    document.getElementById('form-login').appendChild(ErrorMessage('no coincide usuario o contraseña'))
                }
    
            })
    }
}