<?php
session_start();
include 'conexion.php';
include 'validations.php';

validarConexionBD($con);
validarSesionIniciada();

$mensaje = "SELECT * from administrador";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
        $redactor[] = array('id' => $res[0], 'redactor' => $res[1], 'rango' => $res[8]);
    }
}else{
    echo "Error en la consulta: " . mysqli_error($con);
    exit;
}


mysqli_close($con);

echo json_encode(array('redactor' =>$redactor));

?>