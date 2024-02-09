export function deleteMessage(mensaje) {
    console.log(mensaje.id)
    let id_mensaje = mensaje.id
    var datos = new FormData()

    datos.append('id_mensaje', id_mensaje)

    fetch('app/php/message_action_delete.php', {
        method: 'POST',
        body: datos
    }).then(response => response.json())
        .then(data => {
            if (data.estado) {
                console.log(data.mensaje)
                let contenido = document.getElementById('contenido')
                let box_mensaje = document.getElementById(mensaje.id)
                contenido.removeChild(box_mensaje);
            } else {
                console.error(data.error)
                alert(data.error)
            }
        })
        .catch(error => {
            console.error("Ocurrió un error en la solicitud:", error);
            alert("Error en la solicitud")
        });

    // let contenido = document.getElementById('contenido')
    // let box_mensaje = document.getElementById(mensaje.id)
    // contenido.removeChild(box_mensaje);
}