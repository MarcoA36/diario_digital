import { PageHome } from "../componenetes/PageHome.js";
import { PageCategory } from "../componenetes/PageCategory.js";
import { PagePost } from "../componenetes/PagePost.js";
import { PageSearch } from "../componenetes/PageSearch.js";
import { PageLogin } from "../componenetes/PageLogin.js";
import { FormLogin, FormRegister } from "../componenetes/PageLoginForm.js";
// import { ajax } from "./ajax.js";


export function router() {
    let hash = location.hash

    var ruta = hash.split('#')[1];
    var estado = hash.split('#')[2];

    let $root = document.getElementById('root')
    let $contenido = document.getElementById('contenido')
    if ($contenido) {
        $contenido.innerHTML = null
    }

    switch (true) {
        case ((!ruta || ruta === '/inicio') && !estado):
            $contenido.appendChild(PageHome())
            break;
        case (ruta === '/principales' && !estado):
            $contenido.appendChild(PageCategory(1, 'principales'))
            break;
        case (ruta === '/deportes' && !estado):
            $contenido.appendChild(PageCategory(2, 'deportes'))
            break;
        case (ruta === '/tecnologia' && !estado):
            $contenido.appendChild(PageCategory(3, 'tecnologia'))
            break;
        case (ruta === '/cultura' && !estado):
            $contenido.appendChild(PageCategory(4, 'cultura'))
            break;
        case (ruta === '/espectaculo' && !estado):
            $contenido.appendChild(PageCategory(5, 'espectaculo'))
            break;
        case (ruta === '/buscar' && !estado):
            $contenido.appendChild(PageSearch())
            break;
        case (estado === 'ver'):
            $contenido.appendChild(PagePost())
            break;
        case (ruta === '/login' && !estado):
            $root.innerHTML = null
            $root.appendChild(PageLogin(FormLogin()))
            break;
        case (ruta === '/registro' && !estado):
            $root.innerHTML = null
            $root.appendChild(PageLogin(FormRegister()))
            break;

        default:

            break;
    }
}
