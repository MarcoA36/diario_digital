import { rutaApi } from "../config/ruta_api.js";
import { ajax } from "../js/ajax.js";
import { date } from "../js/date.js";
import { CardPrimary } from "./CardPrimary.js";
import { CardSecondary } from "./CardSecondary.js";

export function SectionFeatured() {
  const $sectionFeatured = document.createElement("section");
  $sectionFeatured.classList.add("section-featured");

  const $headerSection = document.createElement("div");
  $headerSection.classList.add("header-section");

  const $title = document.createElement("div");
  $title.classList.add("header-section__title");
  const $h1 = document.createElement("h1");
  $h1.textContent = "Welcome to DDG.com";
  $title.appendChild($h1);

  const $date = document.createElement("div");
  $date.classList.add("header-section__date");
  const $p = document.createElement("p");
  // $p.textContent = "Sábado, 21 Mayo";
  $p.textContent = date();
  $date.appendChild($p);

  $headerSection.appendChild($title);
  $headerSection.appendChild($date);

  const $cardContainer = document.createElement("div");
  $cardContainer.classList.add("card__container");

  const $cardContainerPrimary = document.createElement("div");
  $cardContainerPrimary.classList.add("card__container--primary");

  ajax({
    ruta: `${rutaApi}post_get_location-primary.php`,
    cbSuccess: (posts) => {
        let nota_principal = posts.noticias[0]
            $cardContainerPrimary.appendChild(CardPrimary(nota_principal));
    }
})

  const $cardContainerSecondary = document.createElement("div");
  $cardContainerSecondary.classList.add("card__container--secondary");
  ajax({
    ruta: `${rutaApi}post_get_location-secondary.php`,
    cbSuccess: (posts) => {
        posts.noticias.forEach(nota => {
            $cardContainerSecondary.insertBefore(CardSecondary(nota), $cardContainerSecondary.firstChild);
        });
    }
})
  
  $cardContainer.appendChild($cardContainerPrimary);
  $cardContainer.appendChild($cardContainerSecondary);

  $sectionFeatured.appendChild($headerSection);
  $sectionFeatured.appendChild($cardContainer);

  return $sectionFeatured;
}
