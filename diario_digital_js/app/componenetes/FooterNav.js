export function FooterNav() {
    const $footerNav = document.createElement('div')
    $footerNav.classList.add('footer__nav')
    $footerNav.innerHTML = `
            <ul>
                <li class="link1"><a href="">Home</a></li>
                <li class="link2"><a href="">News</a></li>
                <li class="link3"><a href="">Sport</a></li>
                <li class="link4"><a href="">Worklife</a></li>
                <li class="link5"><a href="">Reel</a></li>
                <li class="link6"><a href="">Travel</a></li>
                <li class="link7"><a href="">Future</a></li>
                <li class="link8"><a href="">Culture</a></li>
                <li class="link6"><a href="">TV</a></li>
                <li class="link7"><a href="">Wheather</a></li>
                <li class="link8"><a href="">Sounds</a></li>
            </ul>
    `
    return $footerNav
}