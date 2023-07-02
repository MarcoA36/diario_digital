<?php
$id = $params['id'];
$imagen = $params['imagen'];
$titulo = $params['titulo'];
$bajada = $params['bajada'];
?>
<a href="page-single.php?id=<?php echo $id ?>" class="card__item--wrapper">
    <div class="card__item">
        <div class="card__image">
            <img src="../admin/app/php/<?php echo $imagen; ?>" alt="">
        </div>
        <div class="card__texts">
            <div class="card__title">
                <h2><?php echo $titulo; ?></h2>
            </div>
            <div class="card__subtitle">
                <p><?php echo $bajada; ?></p>
            </div>
        </div>
    </div>
</a>