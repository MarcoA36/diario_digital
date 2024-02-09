<?php
session_start();
include 'conexion.php';
include 'validations.php';

validarConexionBD($con);
validarSesionIniciada();

$mensaje = "select * from posicion";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
        $posicion[] = array('id' => $res[0], 'posicion' => $res[1]);
    }
}else{
    echo "Error en la consulta: " . mysqli_error($con);
    exit;
}


mysqli_close($con);
echo json_encode(array('posicion' => $posicion));
?>