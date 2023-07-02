import { CardPrimary } from "./CardPrimary.js";
import { CardCategory } from "./CardCategory.js";
import { rutaApi } from "../config/ruta_api.js";


export function SectionFeaturedTwo(id_seccion) {
    const $sectionFeaturedTwo = document.createElement("div");
    $sectionFeaturedTwo.classList.add("card__container");

    const $sectionPrimary = document.createElement("div");
    $sectionPrimary.classList.add("card__primary");
    $sectionPrimary.id = 'principal'

    const $sectionSecondary = document.createElement("div");
    $sectionSecondary.classList.add("card__secondary");
    $sectionSecondary.id = 'secundarias'

    var datos = new FormData()
    datos.append('seccion', id_seccion)

    fetch(`${rutaApi}post_get_category.php`, {
        method: 'POST',
        body: datos
    })
        .then(res_j => res_j.json())
        .then(res => {

            let nota_principal = res.ultimas_noticias[0]
            let nota_secundaria = res.ultimas_noticias[1]

            $sectionPrimary.appendChild(CardPrimary(nota_principal));
            $sectionSecondary.appendChild(CardCategory(nota_secundaria));
        })

    $sectionFeaturedTwo.appendChild($sectionPrimary);
    $sectionFeaturedTwo.appendChild($sectionSecondary)

    return $sectionFeaturedTwo;
}
