import { LoginFooter } from "./PageLoginFooter.js"

export function PageLogin(form) {
    const $pageLogin = document.createElement('div')
    $pageLogin.classList.add('page-login')
    const $main = document.createElement('div')
    $main.classList.add('container')
    const $containerLeft = document.createElement('div')
    $containerLeft.classList.add('container-left')
    $containerLeft.id='login-formularios'

    $containerLeft.appendChild(form)

    const $containerRight = document.createElement('div')
    $containerRight.classList.add('container-right')
    $containerRight.innerHTML = `
           <div class="image-right">
                <img src="app/img/img-login.png" alt="">
            </div>

            <div class="button--close">
                 <a href="index.html">
                   <i class="fa-solid fa-xmark icon-close"></i>
                </a>
           </div>
    `
    
    $main.appendChild($containerLeft)
    $main.appendChild($containerRight)
    $pageLogin.appendChild($main)
    $pageLogin.appendChild(LoginFooter())


    return $pageLogin
}