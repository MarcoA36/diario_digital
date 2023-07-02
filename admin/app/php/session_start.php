<?php
session_start();
include 'conexion.php';
include 'validations.php';
header("Access-Control-Allow-Origin: *");


if (isset($_POST['usuario'])) {
    $usuario = validarSeguridad($_POST['usuario']);
} else {
    respuesta(false, 'no se encontro el campo');
}

if (isset($_POST['contra'])) {
    $contra = validarSeguridad($_POST['contra']);
} else {
    respuesta(false, 'no se encontro el campo');
}



$mensaje = "select * from administrador where usuario = '$usuario' and contra = '$contra'";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    $cant_registros = mysqli_num_rows($ejecutar);
    if ($cant_registros == 1) {
        while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
            $datos = array('id' => $res[0], 'nombre' => $res[1], 'usuario' => $res[2], 'rango' => $res[8]);
        }

        $validacion = true;
        $_SESSION['id_usuario'] = $datos['id'];
        $_SESSION['usuario'] = $datos['usuario'];
        $_SESSION['nombre'] = $datos['nombre'];
        $_SESSION['rango'] = $datos['rango'];

        mysqli_close($con);
        echo json_encode(array('validacion' => $validacion, 'id_usuario'=> $_SESSION['id_usuario'], 'usuario'=> $_SESSION['usuario'], 'rango'=> $_SESSION['rango']));
    } else {
        respuesta(false, 'no hay registros encontrados');
    }
} else {
    respuesta(false, 'fallo la operacion');
}
