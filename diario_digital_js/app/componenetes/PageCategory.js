import { SectionAllCards } from "./SectionAllCard.js";
import { SectionFeaturedTwo } from "./SectionFeaturedTwo.js";
import { SectionTitle } from "./SectionTitle.js";

export function PageCategory(id_seccion, nombre_seccion) {
    const $pageCategory = document.createElement("div");
    $pageCategory.classList.add('page-category')
    $pageCategory.classList.add(`${nombre_seccion}`)

    const $principales = document.createElement("section");
    $principales.classList.add("section-featured");
    $principales.appendChild(SectionTitle(nombre_seccion))
    $principales.appendChild(SectionFeaturedTwo(id_seccion))

    const $portada = document.createElement("section");
    $portada.classList.add("section-allCards");
    $portada.appendChild(SectionAllCards(id_seccion))

    $pageCategory.appendChild($principales)
    $pageCategory.appendChild($portada)
    
    return $pageCategory
  }
  