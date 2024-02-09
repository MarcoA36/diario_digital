import { ErrorMessage, limpiarMensajes } from "../componentes/ErrorMessage.js";
import { validarFormatoImg, validarLongitud } from "./validations.js";

let date = new Date();
let fecha = date.toISOString().split('T')[0];


function obtenerCampos() {
    console.log('obtener campos')
    let titulo = document.getElementById('cargar-titulo').value
    let bajada = document.getElementById('cargar-bajada').value
    // let cuerpo = document.getElementById('cargar-cuerpo').innerHTML
    let cuerpo = getEditorContent()
    let imagen = document.getElementById('cargar-imagen').files[0]
    let seccion = document.getElementById('cargar-seccion').value

    return {
        titulo,
        bajada,
        cuerpo,
        imagen,
        seccion
    }
}

function getEditorContent() {
    const $editor_content = document.getElementById('cargar-cuerpo');
    const childNodes = $editor_content.childNodes;

    childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
            const paragraph = document.createElement('p');
            paragraph.textContent = node.textContent;
            $editor_content.insertBefore(paragraph, node);
            $editor_content.removeChild(node);
        }
    });

    const paragraphs = $editor_content.querySelectorAll('p');
    const content = [];

    paragraphs.forEach(($paragraph) => {
        if ($paragraph.textContent.trim() !== '') {
            content.push($paragraph.innerHTML);
        }
    });

    return content.join('\n');
}



export function submitPost(accion, event) {

    limpiarMensajes('form-post')
    const campos = obtenerCampos()
    let validacion_ok = true;

    //TITULO
    let titleValidateLength = validarLongitud(campos.titulo, 5, 500)
    // let titleValidateCharter = validarCaracteres(campos.titulo)

    if (!titleValidateLength.valido) {
        document.getElementById('form-title').appendChild(ErrorMessage(titleValidateLength.mensaje))
        validacion_ok = false
        return
    }

    // if (!titleValidateCharter.valido) {
    //     document.getElementById('form-title').appendChild(ErrorMessage(titleValidateCharter.mensaje))
    //     validacion_ok = false
    //     return
    // }


    //ENCABEZADO
    let subtitleValidateLength = validarLongitud(campos.bajada, 5, 500)
    // let subtitleValidateCharter = validarCaracteres(campos.bajada)
    // let subtitleValidateLongWord = validarLongitudPalabra(campos.bajada)

    if (!subtitleValidateLength.valido) {
        document.getElementById('form-subtitle').appendChild(ErrorMessage(subtitleValidateLength.mensaje))
        validacion_ok = false
        return
    }

    // if (!subtitleValidateCharter.valido) {
    //     document.getElementById('form-subtitle').appendChild(ErrorMessage(subtitleValidateCharter.mensaje))
    //     validacion_ok = false
    //     return
    // }

    // if (!subtitleValidateLongWord.valido) {
    //     document.getElementById('form-subtitle').appendChild(ErrorMessage(subtitleValidateLongWord.mensaje))
    //     validacion_ok = false
    //     return
    // }


    //CUERPO
    let cuerpoValidateLength = validarLongitud(campos.cuerpo, 3, 30000)

    if (!cuerpoValidateLength.valido) {
        document.getElementById('form-body').appendChild(ErrorMessage(cuerpoValidateLength.mensaje))
        validacion_ok = false
        return
    }



    //IMAGEN
    if (campos.imagen) {
        let imagenValidateFormat = validarFormatoImg(campos.imagen)
        if (!imagenValidateFormat.valido) {
            document.getElementById('form-options').appendChild(ErrorMessage(imagenValidateFormat.mensaje))
            validacion_ok = false
            return
        }
    } else {
        document.getElementById('form-options').appendChild(ErrorMessage('cargue al menos una imagen'))
        validacion_ok = false
        return
    }

   //REDACTOR
    let redactor
    if (sessionStorage.getItem('id_usuario')) {
        redactor = sessionStorage.getItem('id_usuario')
    }else{
        console.log('error al obtener id_usuario')
        return
    }

    //ENVIO DE DATOS
    if (validacion_ok) {
        console.log('validacion ok')
        var datos = new FormData()
        datos.append('titulo', campos.titulo)
        datos.append('bajada', campos.bajada)
        datos.append('cuerpo', campos.cuerpo)
        datos.append('imagen', campos.imagen)
        datos.append('seccion', campos.seccion)
        datos.append('fecha', fecha)
        datos.append('redactor', redactor)

        if (accion == 'cargar') {
            console.log('cargarrrr')
            datos.append('accion', 'cargar')
        } else if (accion == 'editar') {
            datos.append('id', localStorage.getItem('id_editar'))
            datos.append('accion', 'editar')
        }


        fetch('app/php/post_action_submit.php', {
            method: 'POST',
            body: datos
        })
            .then(res_j => res_j.json())
            .then(res => {
                console.log(res)
                if (res.estado == true) {
                    console.log("Registro ok")
                    const cargarButton = event.target
                    cargarButton.style.display = "none"
                    document.getElementById('form-post-wrapper').appendChild(ErrorMessage('Post cargado con exito!'))
                    console.log(res.mensaje)
                    setTimeout(() => {
                        window.location.hash = "#/mis-entradas"
                    }, 500);

                } else {
                    console.log("Registro errodsar")
                    console.log(res.mensaje)
                }
            })
    } else {
        document.getElementById('form-post-wrapper').appendChild(ErrorMessage('Alguno de los campos no cumple con los requisitos'))
    }
}






