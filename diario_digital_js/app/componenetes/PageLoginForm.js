
export function FormLogin() {
    const $formLogin = document.createElement('div')
    $formLogin.classList.add('form__wrapper')
    $formLogin.innerHTML = `
    <div class="form__login" >
        <div class="form__header" id='logo-y-texto'>
          <div class="logo--black">
            <a href="index.html"><span>D</span><span>D</span><span>G</span></a>
         </div>
            <h1>Hola de nuevo</h1>
         </div>
     <div class="form">
        <div class="form__input-group">
            <input type="text" id="usuario" placeholder="Nombre de usuario o correo electronico">
            <input type="password" id="contraseña" placeholder="Contraseña">
        </div>
        <div class="form__footer">
            <input type="button" value="Ingresar">
            <a href="">
                <p class="text-sm">¿Tienes problemas para ingresar?</p>
            </a>
        </div>
    </div>
</div>

<div class="form__card">
    <p class="text">Don´t have a DDG account?</p>
       <a href="#/registro">
           <p class="text-sm">Register now</p>
         </a>
    <!-- <p class="text-sm" id="btn-register">Register now</p> -->
</div>
    `
    return $formLogin
}


export function FormRegister() {
    const $formRegister = document.createElement('div')
    $formRegister.classList.add('form__wrapper')
    $formRegister.classList.add('form__wrapper--register')
    $formRegister.innerHTML = `
    <div class="form__login">
                    <div class="form__header">
                         <div class="logo--black">
                            <a href="index.html"><span>D</span><span>D</span><span>G</span></a>
                       </div>
                        <h1>Registrarse</h1>
                    </div>
                    <div class="form">
                        <div class="form__input-group">
                            <input type="text" id="registro-usuario" placeholder="Nombre de usuario">
                            <input type="text" id="registro-email" placeholder="Correo electrónico">
                            <input type="number" id="registro-edad" placeholder="Edad">
                            <input type="text" id="registro-contraseña" placeholder="Contraseña">
                            <input type="text" id="contraseña-r" placeholder="Repetir contraseña">
                            
                        </div>
                        <div class="form__footer">
                            <input type="button" value="Registrarme">
                        </div>
                    </div>
                </div>
    `
    return $formRegister
}