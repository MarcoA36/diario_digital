<?php
session_start();
include 'conexion.php';
include 'validations.php';

validarSesionIniciada();

// ID POST
if (isset($_POST['id'])) {
    $id_post = validarSeguridad($_POST['id']);

    if (!is_numeric($id_post)) {
        respuesta(false, 'El id recibido no es un numero');
    }
    if (!buscarEnTabla($id_post, 'noticias', $con)) {
        respuesta(false, 'El id recibido no se encuentra en la tabla');
    }
}else{
    respuesta(false, 'no se encontro el campo');
}

$mensaje = "DELETE FROM noticias WHERE id = $id_post";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    respuesta(true, 'Post eliminado con exito');
} else {
    respuesta(false, 'error al eliminar post');
}

mysqli_close($con);
