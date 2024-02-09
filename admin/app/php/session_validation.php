<?php
session_start();

$validacion = false;

if (isset($_SESSION['validacion'])) {

    if ($_SESSION['validacion'] == 'si') {
        $validacion = true;  
    }

}
echo json_encode(array('validacion' => $validacion, 'usuario' => $_SESSION['usuario'], 'nombre' => $_SESSION['nombre'], 'id_usuario' => $_SESSION['id_usuario'], 'rango' => $_SESSION['rango']));

?>