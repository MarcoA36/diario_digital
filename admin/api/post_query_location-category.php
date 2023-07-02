<?php
include 'conexion.php';
include 'query_categories.php';

$id_seccion = $params['id_seccion'];

$mensaje = "SELECT * FROM noticias WHERE id_estado = 3 AND id_seccion = $id_seccion AND id_posicion = 1 ORDER BY id DESC LIMIT 3";
$ejecutar = mysqli_query($con, $mensaje);
$cant_registros = mysqli_num_rows($ejecutar);

if ($ejecutar) {
    $noticias = array();

    while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
        $noticias[] = array(
            'id' => $res[0],
            'titulo' => $res[1],
            'bajada' => $res[2],
            'cuerpo' => $res[3],
            'imagen' => $res[4],
            'fecha' => $res[5],
            'seccion' => $res[6],
            'nombre_seccion' => $seccion[$res[6] - 1]['seccion'],
            'redactor' => $res[7],
            'estado' => $res[8]
        );
    }

    mysqli_close($con);
}
