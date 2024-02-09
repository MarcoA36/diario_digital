<?php
session_start();
include 'conexion.php';
include 'validations.php';
header("Access-Control-Allow-Origin: *");

validarSesionIniciada();

$validaciones_ok = true;

//USUARIO
if (isset($_SESSION['id_usuario'])) {
    $usuario = $_SESSION['id_usuario'];
} else {
    $validaciones_ok = false;
    respuesta(false, 'no se encontro el usuario');
    return;
}

//DESTINO MENSAJE
if (isset($_POST['destino'])) {
    $destino = $_POST['destino'];
} else {
    $validaciones_ok = false;
    respuesta(false, 'no se encontro el destino');
    return;
}

//ASUNTO MENSAJE
if (isset($_POST['asunto'])) {
    $asunto = $_POST['asunto'];
    // $asunto = mysqli_real_escape_string($con, $asunto);
    if (empty($asunto)) {
        $asunto = 'Sin asunto';
    }
} else {
    $validaciones_ok = false;
    respuesta(false, 'no se encontro el campo asunto');
    return;
}

//CUERPO MENSAJE
if (isset($_POST['mensaje'])) {
    $mensaje = $_POST['mensaje'];
    // $mensaje = mysqli_real_escape_string($con, $mensaje);
    $validacionLongitud = validarLongitud($mensaje, 0, 600);

    if (empty($mensaje) || !$validacionLongitud) {
        $validaciones_ok = false;
        respuesta(false, 'el mensaje no cumple con los requisitos de validacion');
        return;
    }
} else {
    $validaciones_ok = false;
    respuesta(false, 'no se encontro el campo cuerpo');
    return;
}

//FECHA
if (isset($_POST['fecha'])) {
    $fecha = $_POST['fecha'];
} else {
    $validaciones_ok = false;
    respuesta(false, 'no se encontro el campo fecha');
    return;
}



//CONSULTA

if ($validaciones_ok) {
    $consulta = "INSERT INTO mensajes (de, para, asunto, mensaje, fecha) VALUES (?, ?, ?, ?, ?)";
    $statement = mysqli_prepare($con, $consulta);
    mysqli_stmt_bind_param($statement, "sssss", $usuario, $destino, $asunto, $mensaje, $fecha);

    // mysqli_stmt_execute($statement);

    if (mysqli_stmt_execute($statement)) {
        $respuesta['estado'] = true;
        $respuesta['mensaje'] = "Mensaje enviado correctamente.";
    } else {
        respuesta(false, 'Error al enviar el mensaje');
    }

    mysqli_stmt_close($statement);
    mysqli_close($con);

    echo json_encode($respuesta);
}
