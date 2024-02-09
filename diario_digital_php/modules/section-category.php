<?php
include('config/ruta_api.php');
require($base_path.'post_query_location-category.php');
?>
<section class="section-category">
    <div class="header-section">
        <h2><?php echo $params['titulo']; ?></h2>
    </div>
    <div class="card__container">
        <?php
        foreach ($noticias as $noticia) :
            $params = array(
                'id' => $noticia['id'],
                'titulo' => $noticia['titulo'],
                'imagen' => $noticia['imagen'],
                'bajada' => $noticia['bajada'],
            );
            require('card-category.php');
        endforeach;
     ?>
    </div>
</section>