import { postOpen } from "../js/post-open.js";

export function CardPrimary(nota) {
    const $cardPrimary = document.createElement('div')
    $cardPrimary.classList.add('card__item')
    $cardPrimary.innerHTML = `
    <div class="card__image">
        <img src="../admin/app/php/${nota.imagen}" alt="">
    </div>
 
    <div class="card__overlay">
      <div class="card__texts">
         <div class="card__title">
            <h2>${nota.titulo}</h2>
         </div>
         <div class="card__subtitle">
            <p>${nota.bajada}</p>
         </div>
         <div class="card__section">
            <p>${nota.nombre_seccion}</p>
         </div>
      </div>
    </div>
    `
    $cardPrimary.addEventListener('click', () => {
        postOpen(nota)
    })
    return $cardPrimary
}