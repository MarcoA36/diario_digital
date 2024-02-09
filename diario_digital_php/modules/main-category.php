<?php
include('config/ruta_api.php');
require($base_path.'post_query_category.php');
?>

<div class="page-category">
    <div class="container" id="contenido">
        <section class="section-featured">
            <div class="header-section">
                <h1><?php echo $_GET['seccion']; ?></h1>
            </div>
            <div class="card__container">
                <div class="card__primary">
                    <?php 
                    if (!empty($ultimas_noticias)) :
                        $params = array(
                            'id' => $ultimas_noticias[0]['id'],
                            'titulo' => $ultimas_noticias[0]['titulo'],
                            'bajada' => $ultimas_noticias[0]['bajada'],
                            'imagen' => $ultimas_noticias[0]['imagen'],
                            'nombre_seccion' => $ultimas_noticias[0]['nombre_seccion'],
                        );
                        require('card-primary.php');
                    endif; 
                    ?>
                </div>
                <div class="card__secondary">
                    <?php 
                    if (!empty($ultimas_noticias[1])) :
                        $params = array(
                            'id' => $ultimas_noticias[1]['id'],
                            'titulo' => $ultimas_noticias[1]['titulo'],
                            'bajada' => $ultimas_noticias[1]['bajada'],
                            'imagen' => $ultimas_noticias[1]['imagen'],
                            'nombre_seccion' => $ultimas_noticias[1]['nombre_seccion'],
                        );
                        require('card-category.php');
                    endif; 
                    ?>
                </div>
            </div>
        </section>
        <section class="section-allCards">
            <div class="card__container">
                <?php 
                if (!empty($todas)) :
                    foreach ($todas as $noticia) :
                        $params = array(
                            'id' => $noticia['id'],
                            'titulo' => $noticia['titulo'],
                            'imagen' => $noticia['imagen'],
                            'bajada' => $noticia['bajada'],
                        );
                        require('card-category.php');
                    endforeach;
                endif; 
                ?>
            </div>
        </section>
    </div>
</div>