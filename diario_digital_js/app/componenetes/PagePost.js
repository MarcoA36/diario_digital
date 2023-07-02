import { date } from "../js/date.js"
import { Sidebar } from "./Sidebar.js"

export function PagePost() {
    let titulo = localStorage.getItem('titulo')
    let bajada = localStorage.getItem('bajada')
    let cuerpo = localStorage.getItem('cuerpo')
    let imagen = localStorage.getItem('imagen')
    let fecha = localStorage.getItem('fecha')
    let redactor = localStorage.getItem('redactor')
    const $pagePost = document.createElement('div')
    $pagePost.classList.add('container-post')
    const $post = document.createElement('div')
    $post.classList.add('post__wrapper')

    $post.innerHTML = `
        <div class="post__title">
           <h1>${titulo}</h1>
         </div>
         <div class="post__date">
         <p>${date(fecha)}</p>
       </div>
       
       <div class="post__subtitle">
           <h2>${bajada}</h2>
        </div>
       <div class="post__image">
           <img src="../admin/app/php/${imagen}" alt="">
       </div>
       <div class="post__body">
           ${cuerpo}
       </div>

       <div class="post__editor">
       <p>${redactor}</p>
     </div>
`
    $pagePost.appendChild($post)
    $pagePost.appendChild(Sidebar())

    return $pagePost
}
