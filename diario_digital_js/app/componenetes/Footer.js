import { FooterNav } from "./FooterNav.js"
import { FooterTerms } from "./FooterTerms.js"

export function Footer() {
    const $footer = document.createElement('footer')
    $footer.innerHTML = `
    <div class="container">     
    </div>
    `
    const $footerContainer = $footer.querySelector('.container')

    const $footerTitle = document.createElement('div')
    $footerTitle.classList.add('footer__title')
    $footerTitle.innerHTML='<h2>Explore the DDG</h2>'


    const $footerCopyright = document.createElement('div')
    $footerCopyright.classList.add('footer__copyright')
    $footerCopyright.innerHTML = '<p><span>Copyright © 2022 DDG.</span>The DDG is not responsible for the content of external sites. Read about our approach to external linking.</p>'

    const $footerMain = document.createElement('div')
    $footerMain.classList.add('footer__main')
    $footerMain.appendChild(FooterNav())
    $footerMain.appendChild(FooterTerms())

    $footerContainer.appendChild($footerTitle)
    $footerContainer.appendChild($footerMain)
    $footerContainer.appendChild($footerCopyright)
    
    return $footer
}
