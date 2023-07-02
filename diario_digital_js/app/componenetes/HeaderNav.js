export function Menu(idMenu, classMenu) {
    const $menu = document.createElement('nav')
    $menu.classList.add(classMenu)
    const $menuUl = document.createElement('ul')
    $menuUl.id = idMenu
    $menuUl.innerHTML= `
                <li class="link1"><a href="#/inicio">Home</a></li>
                <li class="link2"><a href="#/principales">News</a></li>
                <li class="link3"><a href="#/deportes">Sport</a></li>
                <li class="link4"><a href="#/tecnologia">Tecno</a></li>
                <li class="link5"><a href="#/cultura">Culture</a></li>
                <li class="link6"><a href="#/espectaculo">Show</a></li>
                <li class="link7"><a href="">Future</a></li>
                <li class="link8"><a href="">Culture</a></li>
                <li class="link9"><a href="">Tv</a></li>
                <li class="link10"><a href="">Weather</a></li>
                <li class="link11"><a href="">Sounds</a></li>
    `
    $menu.appendChild($menuUl)
    return $menu
}

