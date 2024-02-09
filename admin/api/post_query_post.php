<?php
include 'conexion.php';
include 'query_categories.php';
include 'query_editors.php';

$id_post = $_GET['id'];

$mensaje = "SELECT * from noticias where id = $id_post";
$ejecutar = mysqli_query($con, $mensaje);

while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
    $post = array('id' => $res[0], 'titulo' => $res[1], 'bajada' => $res[2], 'cuerpo' => $res[3], 'imagen' => $res[4], 'fecha' => $res[5], 'seccion' => $res[6], 'nombre_seccion' => $seccion[$res[6] - 1]['seccion'], 'redactor' => $res[7], 'nombre_redactor' => $redactor[$res[7] - 1]['nombre'], 'estado' => $res[8]);
}

mysqli_close($con);
?>
