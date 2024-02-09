export function postOpen(nota) {

    if (window.location.hash == '') {
        window.location.hash += '/inicio#ver#'+nota.titulo
    }else{
        window.location.hash += '#ver#'+nota.titulo
    }
    
    console.log(window.location.hash)

    localStorage.setItem('id_nota', nota.id)
    localStorage.setItem('imagen', nota.imagen)
    localStorage.setItem('bajada', nota.bajada)
    localStorage.setItem('titulo', nota.titulo)
    localStorage.setItem('cuerpo', nota.cuerpo)
    localStorage.setItem('imagen', nota.imagen)
    localStorage.setItem('fecha', nota.fecha)
    localStorage.setItem('redactor', nota.nombre_redactor)
    
}