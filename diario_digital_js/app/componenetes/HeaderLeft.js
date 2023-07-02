export function HeaderLeft() {
    const $headerLeft = document.createElement('div')
    $headerLeft.classList.add('header__left')
    $headerLeft.innerHTML = `
        <div class="header__logo">
           <a href="index.html"><span>D</span><span>D</span><span>G</span></a>
         </div>
       <div class="header__login">
           <a href="#/login"><i class="fa-solid fa-user login-icono"></i> <span class="login__texto">Sing in</span> </a>
       </div>
    `
    return $headerLeft
}


