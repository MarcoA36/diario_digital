<?php
session_start();
include 'conexion.php';
include 'query_categories.php';
include 'query_editors.php';
include 'query_states.php';
include 'validations.php';

validarSesionIniciada();

if (isset($_SESSION['id_usuario'])) {
    $id_redactor = validarSeguridad($_SESSION['id_usuario']);
} else {
    respuesta(false, 'no se recibio el id_usuario');
}

$mensaje = "select * from noticias where id_redactor = $id_redactor";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    if (mysqli_num_rows($ejecutar) > 0) {
        while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
            $noticias[] = array('id' => $res[0], 'titulo' => $res[1], 'bajada' => $res[2], 'cuerpo' => $res[3], 'imagen' => $res[4], 'fecha' => $res[5], 'seccion' => $res[6], 'nombre_seccion' => $seccion[$res[6] - 1]['seccion'], 'redactor' => $res[7], 'nombre_redactor' => $redactor[$res[7] - 1]['nombre'], 'rango_redactor' => $redactor[$res[7] - 1]['rango'], 'estado' => $res[8], 'nombre_estado' => $estadoPost[$res[8] - 1]['estado']);
        }

        mysqli_close($con);
        echo json_encode(array('noticias' => $noticias));
    } else {
        respuesta(false, 'no se encontaron post');
    }
}else{
    respuesta(false, 'error en la consulta');
}
