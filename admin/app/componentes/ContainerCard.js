import { PostCard } from "./PostCard.js"

export function ContainerCard(ruta, estado, ruta_consulta) {
    const $container = document.createElement('div');
    $container.id = 'container-card';
    $container.classList.add('card__container');

    let paginaActual = localStorage.getItem('paginaActual') || 1;
    const resultadosPorPagina = 5;
    let noticias = [];

    const cargarNoticias = () => {
        fetch(`${ruta_consulta}`)
            .then(res_j => res_j.json())
            .then(res => {
                noticias = res.noticias;
                console.log(noticias)
                noticias.reverse()

                mostrarNoticias(paginaActual);
            });
    };

    const mostrarNoticias = (paginaActual) => {
        $container.innerHTML = '';

        const inicio = (paginaActual - 1) * resultadosPorPagina;
        const fin = inicio + resultadosPorPagina;
        const noticiasMostradas = noticias.slice(inicio, fin);

        noticiasMostradas.forEach(post => {
            $container.appendChild(PostCard(post, ruta, estado));
        });

        if (noticias.length > 1 * resultadosPorPagina) {
            BotonesNavegacion();
        }     

        localStorage.setItem('paginaActual', paginaActual);
    };

      const BotonesNavegacion = () => {
        const $navegacion = document.createElement('div');
        $navegacion.classList.add('button__page');

        //numero de paginacion
        let paginasTotales = Math.ceil(noticias.length / resultadosPorPagina)
        const $numeroPaginas = document.createElement('p')
        $numeroPaginas.textContent = `${paginaActual} / ${paginasTotales}`
        $navegacion.appendChild($numeroPaginas)

         //botones
        const $btnAnterior = document.createElement('button');
        $btnAnterior.textContent = '< Anterior';
        $btnAnterior.classList.add('button__page--previous')
        // if (paginaActual === 1) {
        //     $btnAnterior.style.display="none"
        // }
        if (paginaActual == 1) {
            $btnAnterior.style.display="none"
        }

        $btnAnterior.addEventListener('click', () => {
            paginaActual--;
            mostrarNoticias(paginaActual)
          });
        $navegacion.appendChild($btnAnterior);

        const $btnSiguiente = document.createElement('button');
        $btnSiguiente.textContent = 'Siguiente >';
        $btnSiguiente.classList.add('button__page--next')
        if (noticias.length <= paginaActual * resultadosPorPagina) {
            $btnSiguiente.style.display="none"
        }
        $btnSiguiente.addEventListener('click', () => {
            paginaActual++;
            mostrarNoticias(paginaActual)
          });
        $navegacion.appendChild($btnSiguiente);

        $container.appendChild($navegacion);
      };


      //verificar si cambio el hash para resetear la paginaActual
      const checkHashChange = () => {
        const currentHash = window.location.hash;
        const storedHash = localStorage.getItem('lastHash');   
        if (currentHash !== storedHash) {
          paginaActual = 1;
          localStorage.setItem('lastHash', currentHash);
        }
      };
      checkHashChange();


    cargarNoticias(paginaActual);

    return $container;
}


