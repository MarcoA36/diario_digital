export function openMessage(mensaje) {
        console.log(mensaje.id)
        window.location.hash += '#verMensaje'
        localStorage.setItem('id_mensaje', mensaje.id)
        localStorage.setItem('emisor_mensaje', mensaje.de)
        localStorage.setItem('receptor_mensaje', mensaje.para)
        localStorage.setItem('asunto_mensaje', mensaje.asunto)
        localStorage.setItem('mensaje_mensaje', mensaje.mensaje)
        localStorage.setItem('fecha_mensaje', mensaje.fecha)
}