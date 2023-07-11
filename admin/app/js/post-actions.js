
export function sendPost() {
    let idPost = this.getAttribute('data-id')
    let estadoPost = this.getAttribute('data-estado')

    if (estadoPost == 2) {
        alert('El post ya fue enviado a revisión')
        return
    } else if (estadoPost == 3) {
        alert('El post ya fue publicado')
        return
    }
    console.log(idPost)
    console.log(estadoPost)

    var datos = new FormData()
    datos.append('id_post', idPost)
    datos.append('estado_post', 2)
    datos.append('posicion', null)

    fetch('app/php/post_action_change-state.php', {
        method: 'POST',
        body: datos
    })
        .then(res_j => res_j.json())
        .then(res => {
            console.log(res)
            this.setAttribute('data-estado', res.id_estado)
            if (res.estado === true) {
                this.style.color = 'grey'
                let mensaje_estado = document.getElementById('estado-' + idPost)
                mensaje_estado.innerHTML = 'En revisión'
                mensaje_estado.style.color = 'orange'
            }
        }).catch(err => {
            alert('Error al actualizar el estado del post')
            console.log('Error al actualizar el estado del post')
            console.log(err)
        })
}

import { Router } from "./Router.js";

export function rejectPost() {
    let idPost = this.getAttribute('data-id')
    let estadoPost = this.getAttribute('data-estado')
    let post = document.getElementById(`box-${idPost}`);
    let contenido = document.getElementById('container-card')
    console.log(idPost)
    console.log(estadoPost)
    if (confirm('Desea rechazar este articulo')) {
        var datos = new FormData()
        datos.append('id_post', idPost)
        datos.append('estado_post', 1)
        datos.append('posicion', null)

        fetch('app/php/post_action_change-state.php', {
            method: 'POST',
            body: datos
        })
            .then(res_j => res_j.json())
            .then(res => {
                (res)
                if (res.estado === true) {
                    contenido.removeChild(post) 
                    Router()//se ejecuta router para que se reorganizen los post
                }else{
                    console.log('error en la consulta')
                }
            })
    }
}


export function publishPost() {
    let idPost = this.getAttribute('data-id')
    // let estadoPost = this.getAttribute('data-estado')
    let posicion = document.getElementById('cargar-posicion').value
    console.log(posicion)

    var datos = new FormData()
    datos.append('id_post', idPost)
    datos.append('estado_post', 3)
    datos.append('posicion', posicion)

    fetch('app/php/post_action_publish.php', {
        method: 'POST',
        body: datos
    })
        .then(res_j => res_j.json())
        .then(res => {
            (res)
        })
    setTimeout(() => {
        window.location.hash = "#/publicadas"
    }, 500);
}


export function unpublishPost() {
    let idPost = this.getAttribute('data-id')
    // let estadoPost = this.getAttribute('data-estado')
    let posicionPost = this.getAttribute('data-posicion')
    let post = document.getElementById(`box-${idPost}`);
    let contenido = document.getElementById('container-card')

    if (confirm('Desea despublicar este articulo')) {
        var datos = new FormData()
        datos.append('id_post', idPost)
        // datos.append('estado_post', 2)//se cambia en despublicar.php
        datos.append('posicion', posicionPost)//ultima posicion

        fetch('app/php/post_action_unpublish.php', {
            method: 'POST',
            body: datos
        })
            .then(res_j => res_j.json())
            .then(res => {
                (res)
                if (res.estado === true) {
                    contenido.removeChild(post) 
                    Router()//se ejecuta router para que se reorganizen los post
                }else{
                    console.log('error en la consulta')
                }
            })
    }
}


export function editPost() {
    let idPost = this.getAttribute('data-id')
    console.log(idPost)
    localStorage.setItem('id_editar', idPost)//cargar-post.js
    window.location.hash = '#/editar'
    var datos = new FormData()
    datos.append('id', idPost)

    fetch('app/php/post_get_post.php', {
        method: 'POST',
        body: datos
    })
        .then(res_j => res_j.json())
        .then(res => {
            console.log(res)
            document.getElementById('cargar-titulo').value = res.titulo
            document.getElementById('cargar-bajada').value = res.bajada
            document.getElementById('cargar-cuerpo').innerHTML = res.cuerpo
            //falta imagen y seccion
        })
}


export function deletePost() {
    const idPost = this.getAttribute('data-id')
    console.log(idPost)
    let post = document.getElementById(`box-${idPost}`);
    let contenido = document.getElementById('container-card')
    if (confirm('Desea eliminar este articulo')) {
        var datos = new FormData()
        datos.append('id', idPost)

        fetch('app/php/post_action_delete.php', {
            method: 'POST',
            body: datos
        })
            .then(res_j => res_j.json())
            .then(res => {
                console.log(res)
                if (res.estado === true) {
                    contenido.removeChild(post) 
                    Router()//se ejecuta router para que se reorganizen los post
                }else{
                    console.log('error en la consulta')
                }
            })
        
    }
}










