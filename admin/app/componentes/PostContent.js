import { ButtonGroup } from "./ButtonGroup.js"
import { PostDetails, PostPanel } from "./PostDetails.js"

export function PostContent(ruta, estado) {
    let id = localStorage.getItem('id')
    let titulo = localStorage.getItem('titulo')
    let bajada = localStorage.getItem('bajada')
    let cuerpo = localStorage.getItem('cuerpo')
    let imagen = localStorage.getItem('imagen')
    let redactor = localStorage.getItem('nombre_redactor')
    let seccion = localStorage.getItem('nombre_seccion')
    let idestado = localStorage.getItem('estado')
    let estadoPost = localStorage.getItem('nombre_estado')
    let fecha = localStorage.getItem('fecha')

    const $postContent = document.createElement('div')
    $postContent.classList.add('post__wrapper')

    $postContent.innerHTML = `
       <div class="post__texts">
           <div class="post__title">
               <h2>${titulo}</h2>
           </div>
           <div class="post__image">
               <img src="app/php/${imagen}" alt="">
           </div>
           <div class="post__subtitle">
               <h3>${bajada}</h3>
           </div>
           <div class="post__body">
              ${cuerpo}
           </div>           
       </div>
`
    if (ruta == '/en-revision' && estado == 'ver') {
        $postContent.appendChild(PostPanel(redactor, seccion, estadoPost, fecha))
    } else {
        $postContent.appendChild(PostDetails(redactor, seccion, estadoPost, fecha))
    }
    $postContent.appendChild(ButtonGroup(ruta, estado, id, idestado))
    return $postContent
}
