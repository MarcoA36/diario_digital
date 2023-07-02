<?php
function validarSesionIniciada() {
    if (!isset($_SESSION['id_usuario'])) {
        echo "Error: La sesión no está iniciada correctamente";
        exit;
    }
}

function validarConexionBD($con) {
    if (!$con) {
        echo "Error de conexión a la base de datos";
        exit;
    }
}

function validarSeguridad($valor){
    global $con;
    $valor = mysqli_real_escape_string($con, $valor);
    return $valor;
}

function respuesta($estado, $mensaje){
    $respuesta = array('estado' => $estado, 'mensaje' => $mensaje);
    echo json_encode($respuesta);
    if ($estado === false) {
        return;
    }
}

function validarLongitud($valor, $longitudMinima, $longitudMaxima) {
    $longitud = strlen($valor);
    return ($longitud >= $longitudMinima && $longitud <= $longitudMaxima);
}

function validarCaracteres($valor, $patron) {
    return preg_match($patron, $valor);
}


function buscarEnTabla($id, $nombre_tabla, $con) {
    $consulta = "SELECT id FROM $nombre_tabla WHERE id = '$id'";
    $ejecutar = mysqli_query($con, $consulta);

    if (!$ejecutar) {
        respuesta(false, 'Error al ejecutar la consulta en la base de datos');
        return false;
    }

    return mysqli_num_rows($ejecutar) > 0;
}


function validarFormatoImg($imgName, $allowedFormats) {
    $imgExtension = strtolower(pathinfo($imgName, PATHINFO_EXTENSION));

    return in_array($imgExtension, $allowedFormats);
}


// function validarId($id, $tabla, $con) {
//     $id_post = validarSeguridad($id);

//     if (!is_numeric($id_post)) {
//         respuesta(false, 'El id recibido no es un número');
//         return false;
//     }

//     if (!buscarEnTabla($id_post, $tabla, $con)) {
//         respuesta(false, 'El id recibido no se encuentra en la tabla');
//         return false;
//     }

//     return $id_post;
// }

// function validarFormatoImg($imgName, $formatosvalidos){
//     $allowedFormats = array($formatosvalidos);
//     $imgExtension = strtolower(pathinfo($imgName, PATHINFO_EXTENSION));

//     if (in_array($imgExtension, $allowedFormats)) {
//         return true; 
//     } else {
//         return false;
//     }
// }
// function validarId($id, $nombre_tabla, $con) {
//     if (isset($_POST[$id])) {
//         $id = $_POST[$id];

//         if (empty($id)) {
//             respuestaError('El parámetro ID está vacío');
//             return false;
//         } else {
//             if (!is_numeric($id)) {
//                 respuestaError('El parámetro ID no es un valor numérico');
//                 return false;
//             } else {
//                 if (!buscarEnTabla($id, $nombre_tabla, $con)) {
//                     respuestaError('El ID no existe en la tabla');
//                     return false;
//                 }
//             }
//         }
//     } else {
//         respuestaError('No se recibió el parámetro ID');
//         return false;
//     }

//     // Todas las validaciones fueron exitosas
//     return true;
// }








// function validarCampo($campoNombre, $campoDatos) {
//     global $validaciones;
    
//     $valor = $campoDatos['valor'];

//     if (isset($campoDatos['longitudMinima'])) {
//         // Validar longitud mínima
//         $longitudMinima = $campoDatos['longitudMinima'];
//         if (strlen($valor) < $longitudMinima) {
//             respuestaError($campoDatos['mensajeError']);
//             return false;
//         }
//     }

//     if (isset($campoDatos['longitudMaxima'])) {
//         // Validar longitud máxima
//         $longitudMaxima = $campoDatos['longitudMaxima'];
//         if (strlen($valor) > $longitudMaxima) {
//             respuestaError($campoDatos['mensajeError']);
//             return false;
//         }
//     }

//     if (isset($campoDatos['patron'])) {
//         // Validar patrón de caracteres
//         $patron = $campoDatos['patron'];
//         if (!preg_match($patron, $valor)) {
//             respuestaError($campoDatos['mensajeError']);
//             return false;
//         }
//     }

//     // Resto de validaciones

//     // Si todas las validaciones pasan, retornar true o realizar acciones adicionales si es necesario
//     return true;
// }















