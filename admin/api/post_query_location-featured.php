<?php
include 'conexion.php';
include 'query_categories.php';
//post principal

$mensaje = "SELECT * FROM noticias WHERE id_estado = 3 AND id_posicion = 3 ORDER BY id DESC LIMIT 1";
$ejecutar = mysqli_query($con, $mensaje);

$res = mysqli_fetch_array($ejecutar, MYSQLI_NUM);

if ($res) {
    $ultima = array(
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
} else {
    // No se encontraron noticias
}


//post secundarios
$mensaje2 = "SELECT * FROM noticias WHERE id_estado = 3 AND id_posicion = 2 ORDER BY id DESC";
$ejecutar2 = mysqli_query($con, $mensaje2);

while ($res = mysqli_fetch_array($ejecutar2, MYSQLI_NUM)) {
    $noticias2[] = array('id' => $res[0], 'titulo' => $res[1], 'bajada' => $res[2], 'cuerpo' => $res[3], 'imagen' => $res[4], 'fecha' => $res[5], 'seccion' => $res[6], 'nombre_seccion' => $seccion[$res[6] - 1]['seccion'], 'redactor' => $res[7], 'estado' => $res[8]);
}

mysqli_close($con);
?>