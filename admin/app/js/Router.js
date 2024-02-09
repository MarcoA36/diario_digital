import { ajax } from "./ajax.js";
import { PostContent } from "../componentes/PostContent.js";
import { PostForm } from "../componentes/PostForm.js";
import { MessageForm } from "../componentes/MessageForm.js";
import { MessageItem } from "../componentes/MessageItem.js";
import { MessageContent } from "../componentes/MessageContent.js";
import { ContainerCard } from "../componentes/ContainerCard.js";

export function Router() {
    let hash = location.hash
    console.log(hash)


    var ruta = hash.split('#')[1];
    var estado = hash.split('#')[2];
    console.log(ruta)
    console.log(estado)

    let $contenido = document.getElementById('contenido')
    if ($contenido) {
        $contenido.innerHTML = null
    }


    switch (true) {
        case (ruta === '/mis-entradas' && !estado):
            $contenido.appendChild(ContainerCard(ruta, estado, 'app/php/post_get_my-posts.php'))
            break;
        case (ruta === '/en-revision' && !estado):
            $contenido.appendChild(ContainerCard(ruta, estado, 'app/php/post_get_pending.php'))
            break;
        case (ruta === '/publicadas' && !estado):
            $contenido.appendChild(ContainerCard(ruta, estado, 'app/php/post_get_published.php'))
            break;
        case (ruta === '/cargar' && !estado):
            $contenido.appendChild(PostForm(ruta))
            break;
        case (ruta === '/editar' && !estado):
            $contenido.appendChild(PostForm(ruta))
            break;
        case estado === 'ver':
            $contenido.appendChild(PostContent(ruta, estado))
            break;

        case (ruta === '/enviar-mensaje' && !estado):
            $contenido.appendChild(MessageForm())
            break;
        case (ruta === '/recibidos' && !estado):
            ajax({
                ruta: 'app/php/message_get_recived.php',
                cbSuccess: (mensajes) => {
                    mensajes.mensajes.forEach(mensaje => {
                        $contenido.insertBefore(MessageItem('entrada', mensaje), $contenido.firstChild);
                        // $contenido.appendChild(Buzon('entrada', mensaje))
                    });
                    console.log(mensajes)
                }
            })

            break;
        case (ruta === '/enviados' && !estado):
            ajax({
                ruta: 'app/php/message_get_sent.php',
                cbSuccess: (mensajes) => {
                    mensajes.mensajes.forEach(mensaje => {
                        $contenido.insertBefore(MessageItem('salida', mensaje), $contenido.firstChild);
                        // $contenido.appendChild(Buzon('salida', mensaje))
                    });
                }
            })
            break;
        case (ruta === '/notificaciones' && !estado):
            $contenido.innerHTML = '<h1>notificaciones</h1>'
            break;
        case estado === 'verMensaje':
            $contenido.appendChild(MessageContent())
            break;

        case (ruta === '/cerrar-sesion' && !estado):
            sessionStorage.removeItem('sesion-iniciada');
            sessionStorage.removeItem('id_usuario');
            sessionStorage.removeItem('usuario');
            sessionStorage.removeItem('rango');
            window.location = 'app/php/session_close.php';
            break;
        default:

            break;
    }
}