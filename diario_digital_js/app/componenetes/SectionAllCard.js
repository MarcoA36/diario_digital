import { rutaApi } from "../config/ruta_api.js";
import { CardCategory } from "./CardCategory.js";

export function SectionAllCards(id_seccion) {
    const $cardContainer = document.createElement("div");
    $cardContainer.classList.add("card__container");

    var datos = new FormData()
    datos.append('seccion', id_seccion)

    fetch(`${rutaApi}post_get_category.php`, {
        method: 'POST',
        body: datos
    })
        .then(res_j => res_j.json())
        .then(res => {
            res.todas_noticias.forEach(nota => {
                $cardContainer.appendChild(CardCategory(nota));
            });
            console.log(res.todas_noticias)
        })

    return $cardContainer;
}