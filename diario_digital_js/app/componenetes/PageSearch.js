import { rutaApi } from "../config/ruta_api.js";
import { CardCategory } from "./CardCategory.js";

export function PageSearch() {
    const $pageSearch = document.createElement("div");
    $pageSearch.classList.add('page-search')

    const $foundSearch = document.createElement("div");
    $foundSearch.classList.add("card__container");//SeccionPortada.js Grid 3columnas

    const $message = document.createElement("p")
    $message.textContent = 'No se encontraron articulos'
    $message.style.fontSize = '30px'

    const $search = document.createElement('div')
    $search.classList.add('buscador')
    $search.innerHTML = `
                <div>
                   <input type="search" class="input-buscar" id="buscar-input" placeholder=" Buscar en DDG...">
                   <i class="fa-solid fa-search icono-buscar" id="buscar-icono"></i>
                </div>
             `

    setTimeout(() => {
        const $inputSearch = document.getElementById('buscar-input')
        console.log($inputSearch)
        const $iconSearch = document.getElementById('buscar-icono')
        console.log($iconSearch)

        const buscar = () => {
            $pageSearch.appendChild($foundSearch)
            const search_value = $inputSearch.value.trim().toLowerCase()
            console.log(search_value)

        
            var datos = new FormData()
            datos.append('search-value', search_value)

            fetch(`${rutaApi}post_get_search.php`, {
                method: 'POST',
                body: datos
            })
                .then(response => response.json())
                .then(data => {
                    let posts = data.noticias
                    let message = data.mensaje

                    if (data.noticias) {
                        posts.forEach(post => {
                            $foundSearch.appendChild(CardCategory(post))             
                        })
                    } else if(data.mensaje) {
                        $foundSearch.innerHTML= message 
                    }
                });
        }
        $iconSearch.addEventListener('click', () => {
            $foundSearch.innerHTML = null
            buscar()
        })
    }, 100);

    $pageSearch.appendChild($search)

    return $pageSearch
}

// const $estilos = document.getElementById('estilo-componentes')
//     $estilos.innerHTML = `
//     .mensaje_no-post{
//         font-size: 30px;
//         margin: auto;
//     }
//     `