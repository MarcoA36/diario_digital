const $inputSearch = document.getElementById('buscar-input');
const $btnSearch = document.getElementById('buscar-icono');

$btnSearch.addEventListener('click', function (event) {
    const $card_container = document.getElementById('card-container-search')
    $card_container.innerHTML = ''
    event.preventDefault();

    const searchValue = $inputSearch.value.trim();//.trim elimina los espacios en blanco
    console.log(searchValue); // mostrar el valor en la consola

    var datos = new FormData()
    datos.append('search-value', searchValue)

    fetch(`../admin/api/post_get_search.php`, {
        method: 'POST',
        body: datos
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.noticias)
            let noticias = data.noticias
            if (data.noticias) {
                setTimeout(() => {
                    for (let i = 0; i < noticias.length; i++) {
                        let $card_item =
                            `<a href="page-single.php?id=${noticias[i].id}" class="card__item--wrapper">
                    <div class="card__item">
                        <div class="card__image">
                            <img src="../admin/app/php/${noticias[i].imagen}" alt="">
                        </div>
                        <div class="card__texts">
                            <div class="card__title">
                                <h2>${noticias[i].titulo}</h2>
                            </div>
                            <div class="card__subtitle">
                                <p>${noticias[i].bajada}</p>
                            </div>
                        </div>
                    </div>
                </a>`
                        $card_container.insertAdjacentHTML('afterbegin', $card_item);
                    }
                }, 50);
            } else if (data.mensaje) {
                $card_container.innerHTML = data.mensaje
            }

        });
});
