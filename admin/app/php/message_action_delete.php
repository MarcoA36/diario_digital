<?php
session_start();
include 'conexion.php';
include 'validations.php';

validarConexionBD($con);
validarSesionIniciada();

$respuesta = array();

if (isset($_POST['id_mensaje'])) {
    $id_mensaje = $_POST['id_mensaje'];
    if (empty($id_mensaje)) {
        respuesta(false, "El parámetro 'id_mensaje' está vacío.");
        return;
    } else {
        if (!is_numeric($id_mensaje)) {
            respuesta(false, "El parámetro 'id_mensaje' no es un valor numérico válido.");
            return;
        } else {
            $mensaje = "DELETE FROM mensajes WHERE id_mensaje = '$id_mensaje'";
            $ejecutar = mysqli_query($con, $mensaje);
            if ($ejecutar) {
                $respuesta['estado'] = true;
                $respuesta['mensaje'] = "Mensaje eliminado correctamente.";
            } else {
                respuesta(false, "Error al eliminar el mensaje: " . mysqli_error($con));
                return;
            }
        }
    }
} else {
    respuesta(false, "El parámetro 'id_mensaje' no se ha proporcionado.");
    return;
}

mysqli_close($con);

echo json_encode($respuesta);
?>

