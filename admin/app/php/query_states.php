<?php
include 'conexion.php';

$mensaje = "SELECT * from estado";
$ejecutar = mysqli_query($con, $mensaje);
while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
    $estadoPost[] = array('id' => $res[0], 'estado' => $res[1]);
}
?>