<?php
include 'conexion.php';

$mensaje = "select * from seccion";
$ejecutar = mysqli_query($con, $mensaje);
while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
    $seccion[] = array('id' => $res[0], 'seccion' => $res[1]);
}
?>