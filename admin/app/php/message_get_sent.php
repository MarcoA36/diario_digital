<?php
session_start();
include 'conexion.php';
include 'validations.php';
include 'query_editors.php';

validarConexionBD($con);
validarSesionIniciada();

if (isset($_SESSION['id_usuario'])) {
    $id_admin = $_SESSION['id_usuario'];
}else{
    exit;
}

$mensaje = "SELECT * from mensajes where de = $id_admin";
$ejecutar = mysqli_query($con, $mensaje);

if ($ejecutar) {
    while ($res = mysqli_fetch_array($ejecutar, MYSQLI_NUM)) {
        $mensajes[] = array('id' => $res[0], 'de' => $redactor[$res[1]-1]['nombre'], 'para' => $redactor[$res[2] - 1]['nombre'], 'asunto' => $res[3], 'mensaje' => $res[4],'fecha' => $res[5]);
    }
}else{
    echo "Error en la consulta: " . mysqli_error($con);
    exit;
}

mysqli_close($con);
echo json_encode(array('mensajes' => $mensajes));

?>