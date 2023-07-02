import { SectionCategory } from "./SectionCategory.js";


export function Sidebar() {
    const $sidebar = document.createElement("aside");
    $sidebar.classList.add('sidebar')
    $sidebar.appendChild(SectionCategory('Top Stories', 1))
    $sidebar.appendChild(SectionCategory('Sports', 2))
    return $sidebar
}