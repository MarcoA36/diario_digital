export function FooterTerms() {
    const $footerTerms = document.createElement('div')
    $footerTerms.classList.add('footer__terms')
    $footerTerms.innerHTML = `
           <ul>
                <li class="link1"><a href="">terms of Use</a></li>
                <li class="link2"><a href="">About the DDG</a></li>
                <li class="link3"><a href="">Privacy Policy</a></li>
                <li class="link4"><a href="">Cookies</a></li>
                <li class="link5"><a href="">Accessibility Help</a></li>
                <li class="link6"><a href="">Parental Guidance</a></li>
                <li class="link7"><a href="">Contact the DDG</a></li>
            </ul>
    `
    return $footerTerms
}