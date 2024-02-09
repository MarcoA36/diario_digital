export function openPost(post) {
        console.log(post.id)
        window.location.hash += '#ver#'+post.titulo
        localStorage.setItem('id', post.id)
        localStorage.setItem('titulo', post.titulo)
        localStorage.setItem('bajada', post.bajada)
        localStorage.setItem('cuerpo', post.cuerpo)
        localStorage.setItem('imagen', post.imagen)
        localStorage.setItem('fecha', post.fecha)
        localStorage.setItem('seccion', post.seccion)
        localStorage.setItem('nombre_seccion', post.nombre_seccion)
        localStorage.setItem('nombre_redactor', post.nombre_redactor)
        localStorage.setItem('estado', post.estado)
        localStorage.setItem('nombre_estado', post.nombre_estado)

}