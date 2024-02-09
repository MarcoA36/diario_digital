export function LoginFooter() {
    const $footerLogin = document.createElement('footer')
    $footerLogin.classList.add('footer--page-login')
    const $containerFooter = document.createElement('div')
    $containerFooter.classList.add('container-footer')
    $containerFooter.innerHTML =  `
    <div class="footer__title">
    <h4>Descubre mas sobre las cuentas en la DDG</h4>
</div>

<div class="footer__terms">
    <ul>
        <li class="link1"><a href="">terms of Use</a></li>
        <li class="link2"><a href="">About the DDG</a></li>
        <li class="link3"><a href="">Privacy Policy</a></li>
        <li class="link4"><a href="">Cookies</a></li>
        <li class="link5"><a href="">Accessibility Help</a></li>
        <li class="link6"><a href="">Parental Guidance</a></li>
        <li class="link7"><a href="">Contact the DDG</a></li>
    </ul>
</div>

<div class="footer__copyright">
    <p><span>Copyright © 2022 DDG.</span>The DDG is not responsible for the content of external sites.
        Read about our approach to external linking.</p>
</div>
    `

    $footerLogin.appendChild($containerFooter)
    return $footerLogin
}