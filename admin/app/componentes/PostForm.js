import { ButtonGroup } from "./ButtonGroup.js"
import { PostEditor } from "./Editor.js"
import { Select } from "./Select.js"

export function PostForm(ruta) {
    const $formPost = document.createElement('div')
    $formPost.classList.add('form__wrapper')
    $formPost.id = 'form-post-wrapper'

    const $form = document.createElement('form')
    $form.classList.add('form__post')
    $form.id = 'form-post'

    $form.innerHTML = `
    <div class="form__container--inputs">
        <div class="form__title" id="form-title">
            <textarea cols="30" rows="2" id="cargar-titulo" placeholder="Titulo" class="required" contenteditable="true"></textarea>
        </div>
        <div class="form__subtitle" id="form-subtitle">
            <textarea cols="30" rows="3" id="cargar-bajada" placeholder="Encabezado" class="required"></textarea>
        </div>
        <div class="form__body" id="form-body">
           
            </div>
    </div>
    <div class="form__container--options" id="form-options" >
        <div class="form__image" id="form-image">
            <input type="file" id="cargar-imagen" multiple>
        </div>
        <div class="form__section" id='div-seccion'>
        </div>
    </div>
`

    const formBody = $form.querySelector('#form-body');
    formBody.appendChild(PostEditor());

    const seccion = $form.querySelector('#div-seccion')
    seccion.appendChild(Select('app/php/get_categories.php', 'seccion'))

    $formPost.appendChild($form)
    $formPost.appendChild(ButtonGroup(ruta))


    return $formPost
}


