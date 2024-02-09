import { Header } from "./componenetes/Header.js";
import { Footer } from "./componenetes/Footer.js"
import { Main } from "./componenetes/Main.js"
import { router } from "./js/router.js"

export function App() {
  const $root = document.getElementById('root')
  $root.innerHTML = null

  $root.appendChild(Header())
  $root.appendChild(Main())
  $root.appendChild(Footer())

  router()
}

