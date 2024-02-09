<?php
include('config/ruta_api.php');
require($base_path.'post_query_post.php');
?>

<div class="post__wrapper">
    <div class="post__title">
        <h1><?php echo $post['titulo']; ?></h1>
    </div>
    <div class="post__date">
        <?php
        $fecha = $post['fecha'];
        $timestamp = strtotime($fecha); // Convertir la fecha a un timestamp

        // Formatear la fecha en el formato deseado
        $fecha_formateada = date('l, j \d\e F', $timestamp);

        // Mostrar la fecha formateada
        echo '<p>' . $fecha_formateada . '</p>';
        ?>
    </div>
    <div class="post__subtitle">
        <h2><?php echo $post['bajada']; ?></h2>
    </div>
    <div class="post__image">
        <img src="../admin/app/php/<?php echo $post['imagen']; ?>" alt="">
    </div>
    <div class="post__body">
        <?php echo $post['cuerpo']; ?>
    </div>
    <div class="post__editor">
        <p class="editor"><?php echo $post['nombre_redactor']; ?></p>
    </div>
</div>