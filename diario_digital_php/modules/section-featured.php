<?php
include('config/ruta_api.php');
require($base_path.'post_query_location-featured.php');
?>

<section class="section-featured">
    <div class="header-section">
        <div class="header-section__title">
            <h1>Welcome to DDG.com</h1>
        </div>
        <div class="header-section__date">
            <p id="date">Sábado, 21 Mayo</p>
        </div>
    </div>
    <div class="card__container">

        <div class="card__container--primary">
            <?php
            if (!empty($ultima)) :
                $params = array(
                    'id' => $ultima['id'],
                    'titulo' => $ultima['titulo'],
                    'bajada' => $ultima['bajada'],
                    'imagen' => $ultima['imagen'],
                    'nombre_seccion' => $ultima['nombre_seccion']
                );
                require('card-primary.php');
            endif;
            ?>
        </div>

        <div class="card__container--secondary">
            <?php
            if (!empty($noticias2)) :
                foreach ($noticias2 as $noticia) :
                    $params = array(
                        'id' => $noticia['id'],
                        'titulo' => $noticia['titulo'],
                        'imagen' => $noticia['imagen'],
                        'nombre_seccion' => $noticia['nombre_seccion'],
                    );
                    require('card-secondary.php');
                endforeach;
            endif;
            ?>
        </div>
    </div>
</section>