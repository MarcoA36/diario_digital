<?php
session_start();
include 'conexion.php';
include 'validations.php';

validarSesionIniciada();
// ID POST
if (isset($_POST['id_post'])) {
    $id_post = validarSeguridad($_POST['id_post']);

    if (!is_numeric($id_post)) {
        respuesta(false, 'El id recibido no es un numero');
    }
    if (!buscarEnTabla($id_post, 'noticias', $con)) {
        respuesta(false, 'El id recibido no se encuentra en la tabla');
    }
}else{
    respuesta(false, 'no se encontro el campo');
}

// ID POSICION
if (isset($_POST['posicion'])) {
    $posicion = validarSeguridad($_POST['posicion']);
}else{
    respuesta(false, 'no se encontro el campo');
}

$mensaje = "UPDATE noticias SET id_estado = 2, id_posicion = NULL WHERE id ='$id_post'";  // 25
$ejecutar = mysqli_query($con, $mensaje);

function ejecutarConsulta($con, $consulta) {
    $ejecutar = mysqli_query($con, $consulta);
    if(!$ejecutar){
        respuesta(false, 'error en la consulta');
    }
}

if ($posicion == 3) {
    ejecutarConsulta($con, "UPDATE noticias SET id_posicion = 3 where id_posicion = 2 ORDER BY id DESC limit 1");
    ejecutarConsulta($con, "UPDATE noticias SET id_posicion = 2 where id_posicion = 1 ORDER BY id DESC limit 1");
} else if ($posicion == 2) {
    ejecutarConsulta($con, "UPDATE noticias SET id_posicion = 2 where id_posicion = 1 ORDER BY id DESC limit 1");
}


    respuesta(true,'post despublicado');
?>
