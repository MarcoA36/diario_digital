import { Panel } from "./componentes/Panel.js"
import { Content } from "./componentes/Content.js"
import { Router } from "./js/Router.js"
import { PageLogin } from "./componentes/PageLogin.js"

export function App() {
    const $root = document.getElementById('root')
    $root.innerHTML = null

    const sesionIniciada = sessionStorage.getItem('sesion-iniciada');
    if (sesionIniciada === null) {
        sessionStorage.setItem('sesion-iniciada', false);
    }

    function mostrar() {
        if (JSON.parse(sessionStorage.getItem('sesion-iniciada')) === false) {
            $root.appendChild(PageLogin())
        } else {
            $root.appendChild(Panel())
            $root.appendChild(Content())
        }
    }
    mostrar()

    Router()
}

