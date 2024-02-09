<?php
include 'conexion.php';

$mensaje = "SELECT * from administrador";
$ejecutar = mysqli_query($con, $mensaje);
while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
    $redactor[] = array('id' => $res[0], 'nombre' => $res[1], 'rango' => $res[8]);
}

?>