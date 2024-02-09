export function HeaderRight() {
    const $headerRight = document.createElement('div')
    $headerRight.classList.add('header__right')
    $headerRight.innerHTML= `
                <div class="header__icon-menu" id="icono-menu"><i class="fa-solid fa-ellipsis icono-puntos"></i></div>
                 <i class="fa-solid fa-search header__icon-search" id="icono-buscar"></i>
                 <div class="header__search" id="div-buscar"><i class="fa-solid fa-search icono-lupa"></i><p>Buscar en DDG</p></div>       
    `
    setTimeout(() => {
        const $divBuscar = document.getElementById('div-buscar')
        console.log($divBuscar)
        $divBuscar.addEventListener('click', ()=>{
            window.location.hash = "#/buscar"
        })
        const $iconSearch = document.getElementById('icono-buscar')
        console.log($iconSearch)
        $iconSearch.addEventListener('click', ()=>{
            window.location.hash = "#/buscar"
        })
    }, 100);

    return $headerRight
}
