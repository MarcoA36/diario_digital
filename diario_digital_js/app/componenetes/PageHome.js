import { SectionFeatured } from "./SectionFeatured.js";
import { SectionCategory } from "./SectionCategory.js";

export function PageHome() {
    const $pageHome = document.createElement("div");
    $pageHome.classList.add('page-home')

    $pageHome.appendChild(SectionFeatured())//PortadaPrincipales.js
    $pageHome.appendChild(SectionCategory('Principales', 1))//PortadaSeccion.js
    $pageHome.appendChild(SectionCategory('Deportes', 2))
    $pageHome.appendChild(SectionCategory('Tecnología', 3))
    $pageHome.appendChild(SectionCategory('Cultura', 4))
    $pageHome.appendChild(SectionCategory('Espectaculo', 5))

    return $pageHome
}