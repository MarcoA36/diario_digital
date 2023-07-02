<?php
$id = $params['id'];
$imagen = $params['imagen'];
$titulo = $params['titulo'];
$bajada = $params['bajada'];
$nombre_seccion = $params['nombre_seccion'];
?>

<a href="page-single.php?id=<?php echo $id ?>" class="card__item--wrapper">
    <div class="card__item">
        <div class="card__image">
            <img src="../admin/app/php/<?php echo $imagen; ?>" alt="">
        </div>

        <div class="card__overlay">
            <div class="card__texts">
                <div class="card__title">
                    <h2><?php echo $titulo; ?></h2>
                </div>
                <div class="card__subtitle">
                    <p><?php echo $bajada; ?></p>
                </div>
                <div class="card__section">
                    <p><?php echo $nombre_seccion; ?></p>
                </div>
            </div>
        </div>
    </div>
</a>