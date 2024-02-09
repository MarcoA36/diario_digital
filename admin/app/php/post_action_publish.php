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

// ID ESTADO
if (isset($_POST['estado_post'])) {
    $estado_post = validarSeguridad($_POST['estado_post']);

    if (!is_numeric($estado_post)) {
        respuesta(false, 'El estado recibido no es un numero');
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


    if ($posicion != 1) {
        ubicacion();
    }
    
    if ($posicion == 3) {
        $mensaje2 = "UPDATE noticias SET id_posicion = 2 WHERE id_posicion = 3";
        $ejecutar2 = mysqli_query($con, $mensaje2);
    }
        


$mensaje = "UPDATE noticias SET id_estado = $estado_post , id_posicion = $posicion  WHERE id = $id_post";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    $respuesta = [
        'estado' => true,
        'mensaje' => 'Estado del post actualizado',
        'id_estado' => $estado_post
    ];
    echo json_encode($respuesta);
}else{
    respuesta(false, 'error en la consulta');
}

mysqli_close($con);







function ubicacion(){
    global $con;
            $mensaje = "SELECT * from noticias where id_posicion = 2 ORDER BY id DESC";
            $ejecutar = mysqli_query($con, $mensaje);
            $cant_registros = mysqli_num_rows($ejecutar);

            if ($cant_registros > 3) {
                while($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)){
                    $ids[] = $res[0];
                }

                $mensaje = "UPDATE noticias SET id_posicion = 1 where id_posicion = 2 and id != $ids[0] and id != $ids[1] and id != $ids[2]";
                $ejecutar = mysqli_query($con, $mensaje);
            }

}
