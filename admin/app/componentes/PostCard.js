import { ButtonGroup } from "./ButtonGroup.js"
import { PostInfo } from "./PostInfo.js";

export function PostCard(post,ruta,estado) {
    const $cardPost = document.createElement('div')
    $cardPost.classList.add('card__wrapper')
    $cardPost.id = 'box-'+post.id

    $cardPost.appendChild(PostInfo(post,ruta))
    $cardPost.appendChild(ButtonGroup(ruta,estado,post.id,post.estado,post.posicion))
  
    return $cardPost
}

