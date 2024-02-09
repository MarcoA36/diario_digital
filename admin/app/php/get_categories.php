<?php
session_start();
include 'conexion.php';
include 'validations.php';
validarConexionBD($con);
validarSesionIniciada();

$mensaje = "select * from seccion";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
        $seccion[] = array('id' => $res[0], 'seccion' => $res[1]);
    }
}else{
    echo "Error en la consulta: " . mysqli_error($con);
    return;
}

mysqli_close($con);

echo json_encode(array('seccion' => $seccion));

?>