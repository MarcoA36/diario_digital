
export function SectionTitle(seccion) {
    const $sectionTitle = document.createElement("div");
    $sectionTitle.classList.add("header-section");
    const $h1 = document.createElement("h1");
    $h1.textContent = seccion;
    $sectionTitle.appendChild($h1);

    return $sectionTitle
  }
  