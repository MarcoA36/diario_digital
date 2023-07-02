<?php
include 'conexion.php';
include 'query_categories.php';

$id_seccion = $_GET['id'];

$mensaje = "SELECT * from noticias where id_estado = 3 and id_seccion = $id_seccion ORDER BY id DESC";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    if (mysqli_num_rows($ejecutar) > 0) {
        $todas_noticias = [];
        while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
            $todas_noticias[] = array('id' => $res[0], 'titulo' => $res[1], 'bajada' => $res[2], 'cuerpo' => $res[3], 'imagen' => $res[4], 'fecha' => $res[5], 'seccion' => $res[6], 'nombre_seccion' => $seccion[$res[6] - 1]['seccion'], 'redactor' => $res[7], 'estado' => $res[8]);
        }
        // $cant_registros = mysqli_num_rows($ejecutar);

        $ultimas_noticias = array_slice($todas_noticias, 0, 2);
        $todas = array_slice($todas_noticias, 2);

        mysqli_close($con);
    }
}
