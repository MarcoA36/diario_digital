import { rutaApi } from "../config/ruta_api.js";
import { CardCategory } from "./CardCategory.js";

export function SectionCategory(titulo_seccion, id_seccion) {
  const $sectionCategory = document.createElement("section");
  $sectionCategory.classList.add("section-category");

  // const $nombreSeccion = titulo_seccion.toLowerCase()
  // $sectionCategory.classList.add(`seccion-${$nombreSeccion}`);

  const $headerSection = document.createElement("div");
  $headerSection.classList.add("header-section");

  const $h2 = document.createElement("h2");
  $h2.textContent = `${titulo_seccion}`;
  $headerSection.appendChild($h2);

  const $cardContainer = document.createElement("div");
  $cardContainer.classList.add("card__container");

  $sectionCategory.appendChild($headerSection)
  $sectionCategory.appendChild($cardContainer)

  var datos = new FormData()
  datos.append('seccion', id_seccion)

  fetch(`${rutaApi}post_get_location-category.php`, {
    method: 'POST',
    body: datos
  })
    .then(res_j => res_j.json())
    .then(res => {
      res.noticias.forEach(nota => {
        $cardContainer.insertBefore(CardCategory(nota), $cardContainer.firstChild);
      });
    })

  return $sectionCategory;
}
