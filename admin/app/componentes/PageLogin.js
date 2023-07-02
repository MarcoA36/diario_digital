import { loguear } from "../js/session_start.js"
import { Logo } from "./Logo.js"

export function PageLogin() {
    const $pageLogin = document.createElement('div')
    $pageLogin.classList.add('page__login')

    $pageLogin.appendChild(Logo())
    $pageLogin.appendChild(BoxLogin())

    return $pageLogin
}


function BoxLogin() {
    const $boxLogin = document.createElement('div')
    $boxLogin.classList.add('login__wrapper')
    $boxLogin.id='form-login'
    $boxLogin.innerHTML = `
        <form action="" class="form-login" id="form-login">
            <input type="text" id="login-usuario" placeholder="Usuario">
            <input type="password" id="login-contra" placeholder="Contraseña">
            <input type="button" id="btn-enviar-login" value="Iniciar Sesión">
        </form>`
        $boxLogin.querySelector('#btn-enviar-login').addEventListener('click', () => {
            loguear()
    })


    return $boxLogin
}