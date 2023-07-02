import { postOpen } from "../js/post-open.js"

export function CardCategory(nota) {
    const $cardCategory = document.createElement('div')
    $cardCategory.classList.add('card__item')
    $cardCategory.innerHTML= `
                <div class="card__image">
                    <img src="../admin/app/php/${nota.imagen}" alt="">
                </div>

                  <div class="card__texts">
                    <div class="card__title">
                        <h2>${nota.titulo}</h2>
                    </div>
                    <div class="card__subtitle">
                        <p>${nota.bajada}</p>
                    </div>
                   </div>
    `
    $cardCategory.addEventListener('click', ()=>{
        postOpen(nota)
    })
    
    return $cardCategory
}
