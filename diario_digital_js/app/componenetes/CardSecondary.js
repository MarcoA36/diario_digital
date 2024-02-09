import { postOpen } from "../js/post-open.js"

export function CardSecondary(nota) {
    const $cardSecondary = document.createElement('div')
    $cardSecondary.classList.add('card__item')
    $cardSecondary.innerHTML = `
    <div class="card__image">
        <img src="../admin/app/php/${nota.imagen}" alt="">
    </div>

    <div class="card__overlay">
    <div class="card__texts">
        <div class="card__title">
            <h2>${nota.titulo}</h2>
        </div>
        <div class="card__section">
            <p>${nota.nombre_seccion}</p>
        </div>
    </div>
    </div>
    `
    $cardSecondary.addEventListener('click', () => {
        postOpen(nota)
    })
    return $cardSecondary
}