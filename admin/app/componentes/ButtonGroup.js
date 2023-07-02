import { sendPost, editPost, deletePost, rejectPost, publishPost, unpublishPost } from "../js/post-actions.js";
import { submitPost } from "../js/post-submit.js";
import { Button } from "./Button.js";

export function ButtonGroup(ruta, estado, id, postEstado, postPosicion) {
    const $buttonGroup = document.createElement('div')
    $buttonGroup.classList.add('buttons__group')
    console.log(ruta)
    console.log(estado)
    console.log(postEstado)
    console.log(postPosicion)

    switch (true) {
        case (ruta === '/mis-entradas'):
            $buttonGroup.appendChild(Button('enviar', sendPost, id, postEstado))
            $buttonGroup.appendChild(Button('editar', editPost, id))
            $buttonGroup.appendChild(Button('eliminar', deletePost, id))
            break;

        case (ruta === '/en-revision' && !estado):
            $buttonGroup.appendChild(Button('editar', editPost, id))
            $buttonGroup.appendChild(Button('rechazar', rejectPost, id, postEstado))
            break;
        case (ruta === '/en-revision' && estado === 'ver'):
            $buttonGroup.appendChild(Button('publicar', publishPost, id))
            $buttonGroup.appendChild(Button('editar', editPost, id))
            $buttonGroup.appendChild(Button('rechazar', rejectPost, id, postEstado))
            break;

        case (ruta === '/publicadas'):
            $buttonGroup.appendChild(Button('despublicar', unpublishPost, id, postEstado, postPosicion))
            $buttonGroup.appendChild(Button('editar', editPost, id))
            break;

        case (ruta === '/cargar'):
            $buttonGroup.appendChild(Button(
                'cargar',
                (event) => { 
                    submitPost('cargar', event) 
                }
            ))
            $buttonGroup.appendChild(Button('cancelar', () => {
                window.history.back();
            }))
            break;

        case (ruta === '/editar'):
            console.log(id)
            $buttonGroup.appendChild(Button(
                'guardar cambios',
                (event) => {
                    submitPost('editar', event)
                }))
            $buttonGroup.appendChild(Button('cancelar', () => {
                window.history.back();
            }))
            break;
        default:
            break;
    }


    return $buttonGroup
}

