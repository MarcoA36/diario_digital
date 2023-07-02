
export function PanelUser() {
    const $admin = document.createElement('div')
    $admin.classList.add('panel__user')
    $admin.innerHTML = `<i class="fa-solid fa-user"></i>
        <p>${sessionStorage.getItem('usuario')}</p>`
    return $admin
}

export function PanelMessages() {
    const $userPanel = document.createElement('div')
    $userPanel.classList.add('panel__messages')
    $userPanel.innerHTML = `<div id="abrir-modal" onclick="formMensaje()" title="Enviar mensaje"><a href="#/enviar-mensaje"><i class="fa-solid fa-share"></i></a></div>
    <div title="Mensajes recibidos"><a href="#/recibidos"><i class="fa-solid fa-envelope"></i></a></div>
    <div title="Mensajes enviados"><a href="#/enviados"><i class="fa-solid fa-envelopes-bulk"></i></a></div>
    <div title="Notificaciones"><a href="#/notificaciones"><i class="fa-solid fa-bell"></i></a></div>`

    return $userPanel
}

