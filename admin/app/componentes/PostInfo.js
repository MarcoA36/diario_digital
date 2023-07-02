import { openPost } from "../js/post-open.js"

export function PostInfo(post, ruta) {
    let mensaje
    let colorMensaje
    if (ruta == '/mis-entradas') {
        mensaje = post.nombre_estado
        if (post.estado == 1) {
            colorMensaje = 'inherit'
        } else if (post.estado == 2) {
            colorMensaje = 'orange'
        } else if (post.estado == 3) {
            colorMensaje = 'green'
        }
    } else if (ruta == '/en-revision' || ruta === "/publicadas") {
        mensaje = post.nombre_redactor
        colorMensaje = 'inherit'
    }

    const $infoPost = document.createElement('div')
    $infoPost.classList.add('card__item')

    $infoPost.innerHTML = `
    <div class="card__image">
        <img src="app/php/${post.imagen}"  alt="">
    </div>

    <div class="card__texts">
        <div class="card__title">
            <h2>${post.titulo}</h2>
        </div>
        <div class="card__subtitle">
            <p>${post.bajada}</p>
        </div>
        <div class="card__details">
            <p id="estado-${post.id}" style="color:${colorMensaje}">${mensaje}</p>
            <p id="fecha">${post.fecha}</p>
        </div>
    </div>
`
    $infoPost.addEventListener('click', () => {
        openPost(post)
    })
    
    return $infoPost
}

